// Shared browser text-to-speech player for lessons and instructor slides.
window.CourseSpeech = (() => {
  const rates = [0.75, 1, 1.25, 1.5];
  const maxChunk = 200;

  function buildChunks(texts) {
    const chunks = [];
    let current = '';
    for (const text of texts) {
      for (const sentence of text.split(/(?<=[.!?])\s+/)) {
        let part = sentence.trim();
        while (part.length > maxChunk) {
          let cut = part.lastIndexOf(' ', maxChunk);
          if (cut < maxChunk / 2) cut = maxChunk;
          const piece = part.slice(0, cut).trim();
          if (current) { chunks.push(current); current = ''; }
          if (piece) chunks.push(piece);
          part = part.slice(cut).trim();
        }
        if (!part) continue;
        if (current && current.length + part.length + 1 > maxChunk) {
          chunks.push(current);
          current = '';
        }
        current = current ? `${current} ${part}` : part;
      }
    }
    if (current) chunks.push(current);
    return chunks;
  }

  function pickVoice(voices, lang) {
    const norm = voice => (voice.lang || '').toLowerCase().replace('_', '-');
    const target = lang === 'th' ? 'th-th' : 'en-us';
    const prefix = lang === 'th' ? 'th' : 'en';
    const pool = voices.filter(v => norm(v) === target);
    if (!pool.length) pool.push(...voices.filter(v => norm(v).startsWith(prefix)));
    if (lang === 'th') {
      return pool.find(v => (v.name || '').includes('Kanya (Enhanced)'))
        ?? pool.find(v => (v.name || '').includes('Narisa (Enhanced)'))
        ?? pool.find(v => /enhanced|premium/i.test(v.name || ''))
        ?? pool[0] ?? null;
    }
    return pool.find(v => /enhanced|premium/i.test(v.name || '')) ?? pool[0] ?? null;
  }

  function waitForVoices(synth, lang) {
    return new Promise(resolve => {
      if (pickVoice(synth.getVoices(), lang)) { resolve(synth.getVoices()); return; }
      let settled = false;
      const finish = () => {
        if (settled || !pickVoice(synth.getVoices(), lang)) return;
        settled = true;
        synth.removeEventListener('voiceschanged', finish);
        resolve(synth.getVoices());
      };
      const timeout = () => {
        if (settled) return;
        settled = true;
        synth.removeEventListener('voiceschanged', finish);
        resolve(synth.getVoices());
      };
      synth.addEventListener('voiceschanged', finish);
      // Some iOS browsers populate voices only after the first speak call.
      try {
        const kick = new SpeechSynthesisUtterance(' ');
        kick.volume = 0;
        synth.speak(kick);
      } catch {}
      setTimeout(timeout, 800);
    });
  }

  function createPlayer({ onState = () => {}, onProgress = () => {}, onError = () => {} } = {}) {
    const supported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    const synth = supported ? window.speechSynthesis : null;
    const state = { status: 'idle', chunks: [], done: 0, lang: 'en', rate: 1, voice: null, gen: 0, watch: null };

    function clearWatch() {
      if (state.watch) { clearInterval(state.watch); state.watch = null; }
    }

    function cancelEngine() {
      if (!supported) return;
      synth.cancel();
      if (synth.paused) synth.resume();
    }

    function stop() {
      state.gen++;
      clearWatch();
      state.status = 'idle';
      cancelEngine();
      onState();
    }

    function fail(code) {
      stop();
      onError(code);
    }

    function finish() {
      if (state.status === 'idle') return;
      state.gen++;
      clearWatch();
      state.status = 'idle';
      onState();
    }

    function speakNext(gen) {
      if (gen !== state.gen || state.status !== 'playing') return;
      if (state.done >= state.chunks.length) { finish(); return; }
      const utterance = new SpeechSynthesisUtterance(state.chunks[state.done]);
      utterance.lang = state.lang === 'th' ? 'th-TH' : 'en-US';
      utterance.voice = state.voice;
      utterance.rate = state.rate;
      utterance.onend = () => {
        if (gen !== state.gen || state.status === 'idle') return;
        clearWatch();
        state.done++;
        onProgress();
        speakNext(gen);
      };
      utterance.onerror = event => {
        if (gen !== state.gen || state.status === 'idle') return;
        if (event.error === 'canceled' || event.error === 'interrupted') return;
        fail('playbackFailed');
      };
      try { synth.speak(utterance); }
      catch { fail('playbackFailed'); return; }
      // A browser may silently drop an utterance. Release the controls instead of leaving them stuck.
      let idle = 0;
      clearWatch();
      state.watch = setInterval(() => {
        if (gen !== state.gen || state.status !== 'playing') { clearWatch(); return; }
        if (synth.speaking || synth.pending) { idle = 0; return; }
        if (++idle >= 8) fail('playbackFailed');
      }, 400);
    }

    async function play(texts, lang, rate = 1) {
      stop();
      if (!supported) { onError('unsupported'); return; }
      state.chunks = buildChunks(texts);
      if (!state.chunks.length) return;
      state.lang = lang === 'th' ? 'th' : 'en';
      state.rate = rates.includes(rate) ? rate : 1;
      state.done = 0;
      state.status = 'loading';
      const gen = state.gen;
      onState();
      const voices = await waitForVoices(synth, state.lang);
      if (gen !== state.gen) return;
      state.voice = pickVoice(voices, state.lang);
      if (!state.voice) { fail('noVoice'); return; }
      state.status = 'playing';
      onState();
      speakNext(gen);
    }

    function pause() {
      if (state.status !== 'playing') return;
      synth.pause();
      state.status = 'paused';
      clearWatch();
      onState();
    }

    function resume() {
      if (state.status !== 'paused') return;
      state.status = 'playing';
      const hasPausedUtterance = synth.paused && (synth.speaking || synth.pending);
      if (synth.paused) synth.resume();
      if (!hasPausedUtterance) speakNext(state.gen); // rate may have replaced the paused utterance
      onState();
    }

    function setRate(rate) {
      if (!rates.includes(rate) || rate === state.rate) return;
      state.rate = rate;
      if (state.status === 'playing' || state.status === 'paused') {
        const wasPaused = state.status === 'paused';
        const gen = ++state.gen;
        clearWatch();
        cancelEngine();
        if (!wasPaused) setTimeout(() => speakNext(gen), 80);
      }
      onState();
    }

    return {
      supported,
      get active() { return state.status !== 'idle'; },
      get loading() { return state.status === 'loading'; },
      get paused() { return state.status === 'paused'; },
      get done() { return state.done; },
      get chunks() { return state.chunks; },
      get rate() { return state.rate; },
      play, pause, resume, stop, setRate
    };
  }

  return { rates, buildChunks, createPlayer };
})();
