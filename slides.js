(() => {
  const course = window.COURSE;
  const STORAGE = { lang: 'his-ai-course.lang', theme: 'his-ai-course.theme', speakRate: 'his-ai-course.speakRate' };
  const savedLang = localStorage.getItem(STORAGE.lang);
  const savedTheme = localStorage.getItem(STORAGE.theme);
  const state = {
    lang: savedLang === 'th' || savedLang === 'en' ? savedLang : ((navigator.language || 'en').toLowerCase().startsWith('th') ? 'th' : 'en'),
    theme: savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    i: 0,
    speakRate: window.CourseSpeech.rates.includes(parseFloat(localStorage.getItem(STORAGE.speakRate))) ? parseFloat(localStorage.getItem(STORAGE.speakRate)) : 1
  };
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.lang = state.lang;

  // ---- icon library for non-lesson slides (cover, roadmap, closing) ----
  const ICONS = {
    cover: `<circle cx="120" cy="100" r="54" class="ic-soft"/><path class="ic-line" d="M70 118c14-34 96-34 110 0"/><circle class="ic-dot" cx="120" cy="78" r="14"/><path class="ic-line" d="M40 150h160M60 168h140M84 186h96"/>`,
    roadmap: `<path class="ic-line" d="M30 150h180" /><circle class="ic-dot" cx="50" cy="150" r="12"/><circle class="ic-dot ic-accent" cx="120" cy="150" r="12"/><circle class="ic-dot" cx="190" cy="150" r="12"/><path class="ic-line" d="M50 150V70M120 150V50M190 150V90"/><rect class="ic-soft" x="26" y="46" width="48" height="24" rx="8"/><rect class="ic-soft" x="96" y="26" width="48" height="24" rx="8"/><rect class="ic-soft" x="166" y="66" width="48" height="24" rx="8"/>`,
    finish: `<path class="ic-line" d="M50 170V44h30l0 18h30l0-18h30l0 18h30v66l-30 0v-18h-30l0 18h-30v-18H80v42Z"/>`
  };

  function iconSvg(key) {
    return `<svg class="slide-icon" viewBox="0 0 240 200" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[key] || ICONS.cover}</svg>`;
  }

  function lessonById(id) { return course.lessons.find(l => l.id === id); }
  function groupLabel(groupId) {
    const map = {
      start: { th: 'เตรียมตัว', en: 'Start' },
      day1: { th: 'วันที่ 1', en: 'Day 1' },
      day2: { th: 'วันที่ 2', en: 'Day 2' },
      day3: { th: 'วันที่ 3', en: 'Day 3' },
      capstone: { th: 'Capstone', en: 'Capstone' }
    };
    return map[groupId] || { th: groupId, en: groupId };
  }
  const learnedHeading = { th: 'สิ่งที่จะได้เรียนรู้', en: 'What you will learn' };

  // ---- slide data: intro/roadmap/closing are hand-authored, lessons pull live from content.js ----
  const S = (th, en) => ({ th, en });
  const LESSON_IDS = [
    'prerequisites', 'mental-model', 'requirement-issue', 'git-basics', 'worktree', 'agent-plan',
    'next-literacy', 'design-system', 'component-state', 'storybook', 'acceptance-interaction',
    'mock-data', 'integration', 'debugging', 'diff-quality', 'delivery', 'agent-skills', 'capstone'
  ];
  const LESSON_TITLES = {
    'prerequisites': S('เตรียมพร้อม', 'Prerequisites'),
    'mental-model': S('โมเดลความคิด', 'Mental Model'),
    'requirement-issue': S('Requirement → Issue', 'Requirement → Issue'),
    'git-basics': S('Git พื้นฐาน', 'Git Basics'),
    'worktree': S('Git Worktree', 'Git Worktree'),
    'agent-plan': S('Explore → Plan → Review', 'Explore → Plan → Review'),
    'next-literacy': S('Next.js Literacy', 'Next.js Literacy'),
    'design-system': S('Design System', 'Design System'),
    'component-state': S('Component & State', 'Component & State'),
    'storybook': S('Storybook Review', 'Storybook Review'),
    'acceptance-interaction': S('Acceptance & Interaction', 'Acceptance & Interaction'),
    'mock-data': S('Mock Data', 'Mock Data'),
    'integration': S('Integration', 'Integration'),
    'debugging': S('Debug ด้วยหลักฐาน', 'Debug with Evidence'),
    'diff-quality': S('Git Diff & คุณภาพ', 'Diff & Quality'),
    'delivery': S('ส่งมอบ: Draft MR', 'Delivery: Draft MR'),
    'agent-skills': S('ส่งต่อ Developer', 'Developer Handoff'),
    'capstone': S('ต่อยอด US-001', 'Extend US-001')
  };

  function lessonSlide(id) {
    const lesson = lessonById(id);
    const diagramBlock = lesson.blocks.find(b => b.type === 'diagram');
    return {
      id,
      no: lesson.no,
      group: groupLabel(lesson.group),
      title: LESSON_TITLES[id] || lesson.title,
      outcomes: lesson.outcomes,
      output: course.journey[id],
      diagram: diagramBlock && diagramBlock.diagram
    };
  }

  const openLabel = () => state.lang === 'th' ? 'เปิดเนื้อหาบทนี้ →' : 'Open lesson content →';
  const closeLabel = () => state.lang === 'th' ? 'ปิดเนื้อหา ✕' : 'Close content ✕';

  const SLIDES = [
    { kicker: S('เปิดคอร์ส', 'Workshop'), title: S('AI Product Workshop', 'AI Product Workshop'), sub: S('PM · BA · Product Design ใช้ AI Agent สร้าง prototype ที่กดได้ ตรวจได้ และส่งต่อให้ Developer ทำต่อ', 'PM · BA · Product Design use AI agents to build a working, verifiable prototype for developer handoff'), shot: 'landing-hero' },
    { kicker: S('แผนที่การเรียน', 'Course map'), title: S('3 วัน + Capstone', '3 days + Capstone'), sub: S('US-001 → Merge → Issue ใหม่ + Regression', 'US-001 → Merge → new issue + regression'), map: {
      days: [
        { label: S('วันที่ 1', 'Day 1'), chain: S('Requirement → Issue → Git → Worktree → Agent Plan', 'Requirement → Issue → Git → Worktree → Agent Plan'), meta: S('5 ชม.', '5 h') },
        { label: S('วันที่ 2', 'Day 2'), chain: S('Next.js → Design → Component/State → Storybook', 'Next.js → Design → Component/State → Storybook'), meta: S('5.5 ชม.', '5.5 h') },
        { label: S('วันที่ 3', 'Day 3'), chain: S('Mock → Flow → Debug → MR → Handoff', 'Mocks → Flow → Debug → MR → Handoff'), meta: S('5.5 ชม.', '5.5 h') }
      ],
      capstone: { label: S('Capstone', 'Capstone'), chain: S('งานต่อยอด: คลินิกไม่พร้อมรับ Check-in', 'Follow-up: unavailable clinic'), meta: S('3 ชม.', '3 h') }
    } },
    ...LESSON_IDS.map(lessonSlide),
    { title: S('พร้อมลงมือแล้ว', 'Ready to build'), sub: S('เริ่มจากบทที่ 00 · Prerequisites', 'Start at lesson 00 · Prerequisites'), shot: 'lesson-prerequisites', scroll: '4/3', cta: 'prerequisites' }
  ];

  const t = pair => pair[state.lang] ?? pair.en;
  const stage = document.getElementById('stage');
  const dotsEl = document.getElementById('dots');
  const counterEl = document.getElementById('counter');
  const langBtn = document.getElementById('langBtn');
  const themeBtn = document.getElementById('themeBtn');
  const speechEl = document.getElementById('slideSpeech');
  const speechToast = document.getElementById('slideToast');
  const notes = { th: null, en: null };
  let speakingSlide = null;
  const notesError = { th: false, en: false };
  const speech = window.CourseSpeech.createPlayer({
    onState: renderSlideSpeech,
    onProgress: updateSlideSpeechProgress,
    onError: code => showSlideToast(code === 'noVoice'
      ? (state.lang === 'th' ? 'ไม่พบเสียงภาษาไทยบนอุปกรณ์นี้' : 'No English voice is installed on this device')
      : (state.lang === 'th' ? 'เล่นเสียงไม่สำเร็จ ลองอีกครั้ง' : 'Playback failed. Please try again.'))
  });

  function showSlideToast(message) {
    speechToast.textContent = message;
    speechToast.classList.add('show');
    clearTimeout(showSlideToast.timer);
    showSlideToast.timer = setTimeout(() => speechToast.classList.remove('show'), 4000);
  }

  function parseSpeakerNotes(markdown) {
    const result = [];
    const sections = markdown.split(/^## (?:สไลด์|Slide) (\d{2})[^\n]*$/gm);
    for (let i = 1; i < sections.length; i += 2) {
      const number = Number(sections[i]);
      const paragraphs = sections[i + 1].trim().split(/\n\s*\n/)
        .map(p => p.trim().replace(/^“|”$/g, '').replace(/\*\*|`/g, '').replace(/\s+/g, ' ').trim())
        .filter(Boolean);
      result[number - 1] = paragraphs;
    }
    if (result.length !== SLIDES.length || Array.from({ length: SLIDES.length }, (_, i) => result[i]).some(p => !p?.length)) throw new Error('Speaker notes do not match the slide deck');
    return result;
  }

  async function loadSpeakerNotes(lang) {
    try {
      const response = await fetch(`./SPEAKER_NOTES.${lang}.md`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      notes[lang] = parseSpeakerNotes(await response.text());
    } catch (error) {
      console.warn('Unable to load speaker notes', lang, error);
      notesError[lang] = true;
    }
    renderSlideSpeech();
  }

  function renderSlideSpeech() {
    if (!speechEl) return;
    const focused = speechEl.contains(document.activeElement) ? document.activeElement : null;
    const focusSelector = focused?.matches('[data-speech-rate]') ? '[data-speech-rate]'
      : focused?.matches('[data-speech-stop]') ? (speech.active ? '[data-speech-stop]' : '[data-speech-start]')
      : focused?.matches('[data-speech-pause], [data-speech-start]') ? (speech.active ? '[data-speech-pause]' : '[data-speech-start]')
      : null;
    const th = state.lang === 'th';
    if (!speech.supported) { speechEl.hidden = true; return; }
    speechEl.hidden = false;
    const pct = speech.active && speech.chunks.length ? Math.min(100, Math.round(speech.done / speech.chunks.length * 100)) : 0;
    const rate = speech.active ? speech.rate : state.speakRate;
    const rateControl = `<label class="deck-speech-rate-label">${th ? 'ความเร็ว' : 'Speed'} <select class="deck-speech-rate" data-speech-rate aria-label="${th ? 'ความเร็วเสียง' : 'Narration speed'}">${window.CourseSpeech.rates.map(r => `<option value="${r}" ${rate === r ? 'selected' : ''}>${r}×</option>`).join('')}</select></label>`;
    const progress = `<span class="deck-speech-progress"><span class="speak-progress" role="progressbar" aria-label="${th ? 'ความคืบหน้าบทพูด' : 'Narration progress'}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><i style="width:${pct}%"></i></span><span class="deck-speech-percent" data-speech-percent>${pct}%</span></span>`;
    if (speech.active && speakingSlide === state.i) {
      speechEl.innerHTML = `<div class="speak-panel" role="group" aria-label="${th ? 'ควบคุมเสียงบทพูด' : 'Slide narration controls'}">
        <button class="deck-speech-btn" type="button" data-speech-pause ${speech.loading ? 'disabled' : ''} aria-label="${speech.paused ? (th ? 'เล่นต่อ' : 'Resume') : (th ? 'พัก' : 'Pause')}">${speech.loading ? '…' : speech.paused ? '▶' : 'Ⅱ'} <span>${speech.loading ? (th ? 'เตรียมเสียง' : 'Preparing') : speech.paused ? (th ? 'เล่นต่อ' : 'Resume') : (th ? 'พัก' : 'Pause')}</span></button>
        <button class="deck-speech-btn" type="button" data-speech-stop aria-label="${th ? 'หยุดเสียง' : 'Stop narration'}">■ <span>${th ? 'หยุด' : 'Stop'}</span></button>
        ${rateControl}
        ${progress}
      </div>`;
      if (focusSelector) {
        const target = speechEl.querySelector(focusSelector);
        (target?.disabled ? speechEl.querySelector('[data-speech-stop]') : target)?.focus({ preventScroll: true });
      }
      return;
    }
    const unavailable = notesError[state.lang];
    const loading = !notes[state.lang] && !unavailable;
    speechEl.innerHTML = `<div class="speak-panel" role="group" aria-label="${th ? 'ควบคุมเสียงบทพูด' : 'Slide narration controls'}"><button class="deck-speech-btn deck-speech-start" type="button" data-speech-start ${loading || unavailable ? 'disabled' : ''} aria-label="${th ? 'เล่นบทพูดสไลด์นี้' : 'Play this slide narration'}">▶ <span>${unavailable ? (th ? 'ไม่มีบทพูด' : 'Notes unavailable') : loading ? (th ? 'โหลดบทพูด…' : 'Loading notes…') : (th ? 'ฟังบทพูด' : 'Play narration')}</span></button>${rateControl}${progress}</div>`;
    if (focusSelector) speechEl.querySelector(focusSelector)?.focus({ preventScroll: true });
  }

  function updateSlideSpeechProgress() {
    const pct = speech.chunks.length ? Math.min(100, Math.round(speech.done / speech.chunks.length * 100)) : 0;
    const bar = speechEl.querySelector('.speak-progress');
    if (!bar) return;
    bar.setAttribute('aria-valuenow', String(pct));
    bar.querySelector('i').style.width = `${pct}%`;
    const percent = speechEl.querySelector('[data-speech-percent]');
    if (percent) percent.textContent = `${pct}%`;
  }

  speechEl.addEventListener('click', event => {
    if (event.target.closest('[data-speech-start]')) {
      if (!notes[state.lang]?.[state.i]) return;
      speakingSlide = state.i;
      speech.play(notes[state.lang][state.i], state.lang, state.speakRate);
    } else if (event.target.closest('[data-speech-pause]')) {
      if (speech.paused) speech.resume(); else speech.pause();
    } else if (event.target.closest('[data-speech-stop]')) {
      speech.stop();
      speakingSlide = null;
    }
  });
  speechEl.addEventListener('change', event => {
    if (!event.target.matches('[data-speech-rate]')) return;
    const rate = Number(event.target.value);
    if (!window.CourseSpeech.rates.includes(rate)) return;
    state.speakRate = rate;
    localStorage.setItem(STORAGE.speakRate, String(rate));
    speech.setRate(rate);
  });

  function esc(str) { return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  // ---- lesson content panel: trimmed lesson body (no outcomes/practice/checkpoint/wrap-up/nav) ----
  const RAW_URL_RE = /https?:\/\/[^\s<`]+/g;
  const linkifyRaw = html => html.replace(RAW_URL_RE, url => `<a href="${url}" target="_blank" rel="noreferrer noopener">${url}</a>`);
  const linkify = (s = '') => {
    const escaped = esc(s);
    const mdLinkRe = /\[([^[\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    let out = '', last = 0, m;
    while ((m = mdLinkRe.exec(escaped))) {
      out += linkifyRaw(escaped.slice(last, m.index));
      out += `<a href="${m[2]}" target="_blank" rel="noreferrer noopener">${m[1]}</a>`;
      last = m.index + m[0].length;
    }
    out += linkifyRaw(escaped.slice(last));
    return out;
  };
  const rich = (s = '') => linkify(s)
    .replace(/`([^`]+)`/g, (_, c) => `<code class="inline-code">${c}</code>`)
    .replace(/\*\*([^*]+)\*\*/g, (_, c) => `<strong>${c}</strong>`)
    .replace(/(?<!\/)\blocalhost:(\d{2,5})\b/g, (m, port) => `<a href="http://localhost:${port}" target="_blank" rel="noreferrer noopener">localhost:${port}</a>`);

  function contentCodeBlock(code, label = 'code') {
    return `<section class="code-wrap"><div class="code-head"><span>${esc(label)}</span><button class="copy-btn" type="button" data-copy="${encodeURIComponent(code)}">Copy</button></div><pre><code>${linkifyRaw(esc(code))}</code></pre></section>`;
  }
  const contentLead = block => block.lead ? `<p class="block-lead">${rich(t(block.lead))}</p>` : '';
  const compareCol = col => `<div class="compare"><strong>${rich(t(col.title))}</strong><ul class="clean">${t(col.items).map(x => `<li>${rich(x)}</li>`).join('')}</ul>${col.example ? `<p class="compare-example">${rich(t(col.example))}</p>` : ''}</div>`;
  const expectLabel = () => state.lang === 'th' ? 'ควรเห็นอะไร' : 'What you should see';

  function commandSteps(steps) {
    return steps.map((s, i) => `<li class="cmd-step">
      <div class="cmd-index">${String(i + 1).padStart(2, '0')}</div>
      <div class="cmd-body">
        <h3>${esc(t(s.title))}</h3>
        <p>${rich(t(s.what))}</p>
        ${s.cmd ? contentCodeBlock(s.cmd, s.label || 'command') : ''}
        ${s.expect ? `<div class="cmd-expect"><strong>${expectLabel()}</strong> ${rich(t(s.expect))}</div>` : ''}
      </div>
    </li>`).join('');
  }

  function renderContentBlock(block) {
    switch (block.type) {
      case 'callout':
        return `<section class="block callout ${block.tone || ''}"><div class="callout-title">${esc(t(block.title))}</div><p>${rich(t(block.text))}</p></section>`;
      case 'list':
        return `<section class="block"><h2>${esc(t(block.title))}</h2><ul class="clean">${t(block.items).map(x => `<li>${rich(x)}</li>`).join('')}</ul></section>`;
      case 'two':
        return `<section class="block"><h2>${esc(t(block.title))}</h2><div class="two-col">${compareCol(block.left)}${compareCol(block.right)}</div></section>`;
      case 'code': {
        const codeHtml = block.code && typeof block.code === 'object'
          ? contentCodeBlock(block.code[state.lang] ?? block.code.en, `${block.label || 'code'} · ${state.lang === 'th' ? 'ไทย' : 'EN'}`)
          : contentCodeBlock(block.code, block.label || 'code');
        return block.title || block.lead || block.note
          ? `<section class="block">${block.title ? `<h2>${esc(t(block.title))}</h2>` : ''}${contentLead(block)}${codeHtml}${block.note ? `<p class="block-outro">${rich(t(block.note))}</p>` : ''}</section>`
          : `<section class="block">${codeHtml}</section>`;
      }
      case 'diagram':
        return `<section class="block"><h2>${esc(t(block.title))}</h2>${contentLead(block)}<div class="diagram"><div class="mermaid">${esc(block.diagram)}</div></div>${block.notes ? `<div class="diagram-notes"><strong>${state.lang === 'th' ? 'อ่านภาพนี้อย่างไร' : 'How to read this diagram'}</strong><ul class="clean">${t(block.notes).map(n => `<li>${rich(n)}</li>`).join('')}</ul></div>` : ''}${block.outro ? `<p class="block-outro">${rich(t(block.outro))}</p>` : ''}</section>`;
      case 'prose':
        return `<section class="block prose">${block.title ? `<h2>${esc(t(block.title))}</h2>` : ''}${t(block.body).map(pg => `<p>${rich(pg)}</p>`).join('')}${block.points ? `<ul class="clean">${t(block.points).map(x => `<li>${rich(x)}</li>`).join('')}</ul>` : ''}</section>`;
      case 'commands':
        return `<section class="block commands"><h2>${esc(t(block.title))}</h2>${contentLead(block)}<ol class="cmd-list">${commandSteps(block.steps)}</ol>${block.outro ? `<p class="block-outro">${rich(t(block.outro))}</p>` : ''}</section>`;
      case 'agent-setup':
        return `<section class="block commands"><h2>${esc(t(block.title))}</h2>${contentLead(block)}${block.tools.map(tool => `<h3>${esc(t(tool.name))}</h3><ol class="cmd-list">${commandSteps(tool.steps)}</ol>`).join('')}${block.outro ? `<p class="block-outro">${rich(t(block.outro))}</p>` : ''}</section>`;
      case 'prompt': {
        const promptText = block.prompt[state.lang] ?? block.prompt.en;
        const exampleText = block.example ? (block.example[state.lang] ?? block.example.en) : null;
        return `<section class="block prompt-block"><h2>${esc(t(block.title))}</h2>${block.when ? `<p class="block-lead"><strong>${state.lang === 'th' ? 'ใช้เมื่อไร' : 'When to use it'}:</strong> ${rich(t(block.when))}</p>` : ''}${contentCodeBlock(promptText, 'prompt')}${exampleText ? contentCodeBlock(exampleText, state.lang === 'th' ? 'prompt · ตัวอย่างที่กรอกแล้ว' : 'prompt · Worked example') : ''}${block.after ? `<div class="prompt-after"><strong>${state.lang === 'th' ? 'หลังส่ง prompt ให้ตรวจสิ่งนี้' : 'After sending, check this'}</strong><ul class="clean">${t(block.after).map(x => `<li>${rich(x)}</li>`).join('')}</ul></div>` : ''}</section>`;
      }
      case 'capstone':
        return `<section class="block">${block.steps.map((s, i) => `<details class="capstone-step"><summary>${String(i + 1).padStart(2, '0')} · ${esc(t(s.title))}</summary><p><strong>${state.lang === 'th' ? 'คำใบ้' : 'Hint'}:</strong> ${rich(t(s.hint))}</p><ol class="cmd-list">${t(s.guide).map((g, j) => `<li class="cmd-step"><div class="cmd-index">${String(j + 1).padStart(2, '0')}</div><div class="cmd-body"><p>${rich(g)}</p></div></li>`).join('')}</ol></details>`).join('')}</section>`;
      default: return '';
    }
  }

  function lessonContentHtml(lesson) {
    return lesson.blocks.filter(b => b.type !== 'practice').map(renderContentBlock).join('');
  }

  function visualHtml(s, idx) {
    if (s.shot) {
      const landing = s.shot === 'landing-hero';
      const alt = landing
        ? (state.lang === 'th' ? 'ภาพหน้าแรกของเว็บไซต์คอร์ส AI Product Workshop' : 'AI Product Workshop landing page')
        : (state.lang === 'th' ? 'หน้าบทเรียน 00 · Prerequisites ในเว็บคอร์ส' : 'Lesson 00 · Prerequisites page in the course site');
      const url = landing
        ? 'somprasongd.github.io/his-ai-product-workshop'
        : 'somprasongd.github.io/his-ai-product-workshop/#/lesson/prerequisites';
      const tall = s.scroll === '4/3';
      const dims = tall ? 'width="1440" height="2160"' : 'width="1440" height="810"';
      return `<div class="slide-icon-wrap no-float soft-float">
        <figure class="slide-shot${tall ? ' scroller sc-43' : ''}">
          <figcaption class="shot-bar"><span class="shot-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="shot-url">${esc(url)}</span></figcaption>
          <div class="shot-view"><img src="./assets/${s.shot}.${state.lang}.png" alt="${esc(alt)}" ${dims} draggable="false"></div>
        </figure>
      </div>`;
    }
    if (s.map) {
        const row = (badge, label, chain, meta, extra = '', i = 0) => `<div class="map-row ${extra}" style="--i:${i}">
            <span class="map-day">${esc(badge)}</span>
            <div class="map-chain"><small>${esc(label)}</small><strong>${esc(chain)}</strong></div>
            <span class="map-meta">${esc(meta)}</span>
          </div>`;
        return `<div class="slide-icon-wrap no-float soft-float">
          <div class="slide-map">
            ${s.map.days.map((d, i) => row(String(i + 1).padStart(2, '0'), t(d.label), t(d.chain), t(d.meta), '', i)).join('')}
            ${row('C', t(s.map.capstone.label), t(s.map.capstone.chain), t(s.map.capstone.meta), 'map-capstone', s.map.days.length)}
          </div>
        </div>`;
    }
    if (s.diagram) {
      return `<div class="slide-icon-wrap has-diagram">
        <div class="diagram-stage" data-diagram-idx="${idx}">
          <div class="diagram-viewport">
            <div class="diagram-pan"><div class="mermaid">${esc(s.diagram)}</div></div>
          </div>
          <div class="diagram-controls">
            <button type="button" class="diagram-btn" data-zoom-out aria-label="Zoom out">−</button>
            <span class="diagram-zoom-label">100%</span>
            <button type="button" class="diagram-btn" data-zoom-in aria-label="Zoom in">+</button>
            <button type="button" class="diagram-btn" data-zoom-reset aria-label="Reset zoom">⟲</button>
          </div>
        </div>
      </div>`;
    }
    return `<div class="slide-icon-wrap">${iconSvg(s.icon)}</div>`;
  }

  function outcomesHtml(s) {
    if (!s.outcomes) return `<p class="slide-sub">${esc(t(s.sub))}</p>`;
    const items = t(s.outcomes).map(x => `<li>${esc(x)}</li>`).join('');
    return `<div class="slide-outcomes">
      <span class="slide-outcomes-title">${esc(t(learnedHeading))}</span>
      <ul>${items}</ul>
    </div>`;
  }

  function slideHtml(s, idx) {
    const kicker = s.kicker || (s.no ? { th: `${s.no} · ${t(s.group)}`, en: `${s.no} · ${t(s.group)}` } : null);
    const link = s.id
      ? `<button type="button" class="slide-link" data-content-toggle="${idx}">${openLabel()}</button>`
      : (s.cta ? `<a class="slide-link" href="index.html#/lesson/${s.cta}" target="_blank" rel="noreferrer">${state.lang === 'th' ? 'ไปที่คอร์ส' : 'Go to the course'} →</a>` : '');
    const contentPanel = s.id ? `<div class="content-panel">
        <div class="content-panel-head">
          <span>${esc(t(s.title))}</span>
          <button type="button" class="content-close" data-content-close aria-label="Close">×</button>
        </div>
        <div class="content-scroll">${lessonContentHtml(lessonById(s.id))}</div>
      </div>` : '';
    return `<article class="slide" data-idx="${idx}">
      ${visualHtml(s, idx)}
      <div class="slide-copy">
        ${kicker ? `<span class="slide-kicker">${esc(t(kicker))}</span>` : ''}
        <h1 class="slide-title">${esc(t(s.title))}</h1>
        ${outcomesHtml(s)}
        ${s.output ? `<p class="slide-output"><strong>${state.lang==='th'?'ส่งต่อจากบทนี้':'Carry forward'}:</strong> ${esc(t(s.output))}</p>` : ''}
        ${link}
      </div>
      ${contentPanel}
    </article>`;
  }

  async function renderMermaid() {
    // Content-panel diagrams start hidden (display:none) until toggled open, so mermaid
    // can't measure them yet — skip already-rendered nodes and render the rest lazily.
    const nodes = [...document.querySelectorAll('.mermaid')].filter(el => el.dataset.rendered !== '1');
    if (!nodes.length || !window.mermaid) return;
    try {
      window.mermaid.initialize({ startOnLoad: false, theme: state.theme === 'dark' ? 'dark' : 'neutral', securityLevel: 'strict', fontFamily: 'Inter, system-ui, sans-serif' });
      for (const el of nodes) {
        if (el.offsetParent === null && el.getClientRects().length === 0) continue;
        const source = el.textContent;
        const id = 'sm' + Math.random().toString(36).slice(2);
        const { svg } = await window.mermaid.render(id, source);
        el.innerHTML = svg;
        el.dataset.rendered = '1';
      }
    } catch (err) { console.warn('Mermaid render failed', err); }
  }

  // ---- inline diagram zoom & pan (per-slide state, no modal) ----
  const diagramState = new Map();
  function getDiagramState(idx) {
    if (!diagramState.has(idx)) diagramState.set(idx, { scale: 1, panX: 0, panY: 0 });
    return diagramState.get(idx);
  }
  function applyDiagramTransform(idx) {
    const stageEl = stage.querySelector(`.diagram-stage[data-diagram-idx="${idx}"]`);
    if (!stageEl) return;
    const st = getDiagramState(idx);
    stageEl.querySelector('.diagram-pan').style.transform = `translate(${st.panX}px, ${st.panY}px) scale(${st.scale})`;
    const label = stageEl.querySelector('.diagram-zoom-label');
    if (label) label.textContent = Math.round(st.scale * 100) + '%';
  }
  function setDiagramZoom(idx, scale, resetPan = false) {
    const st = getDiagramState(idx);
    st.scale = Math.min(4, Math.max(0.5, Math.round(scale * 20) / 20));
    if (resetPan) { st.panX = 0; st.panY = 0; }
    applyDiagramTransform(idx);
  }

  stage.addEventListener('click', e => {
    const stageEl = e.target.closest('.diagram-stage');
    if (!stageEl) return;
    const idx = Number(stageEl.dataset.diagramIdx);
    const st = getDiagramState(idx);
    if (e.target.closest('[data-zoom-in]')) setDiagramZoom(idx, st.scale + 0.2);
    else if (e.target.closest('[data-zoom-out]')) setDiagramZoom(idx, st.scale - 0.2);
    else if (e.target.closest('[data-zoom-reset]')) setDiagramZoom(idx, 1, true);
  });

  stage.addEventListener('wheel', e => {
    const viewport = e.target.closest('.diagram-viewport');
    if (!viewport) return;
    e.preventDefault();
    const idx = Number(viewport.closest('.diagram-stage').dataset.diagramIdx);
    const st = getDiagramState(idx);
    setDiagramZoom(idx, st.scale + (e.deltaY > 0 ? -0.1 : 0.1));
  }, { passive: false });

  let dragCtx = null;
  stage.addEventListener('pointerdown', e => {
    const viewport = e.target.closest('.diagram-viewport');
    if (!viewport) return;
    const idx = Number(viewport.closest('.diagram-stage').dataset.diagramIdx);
    const st = getDiagramState(idx);
    dragCtx = { idx, startX: e.clientX, startY: e.clientY, startPanX: st.panX, startPanY: st.panY, viewport };
    viewport.setPointerCapture(e.pointerId);
    viewport.classList.add('dragging');
  });
  stage.addEventListener('pointermove', e => {
    if (!dragCtx) return;
    const st = getDiagramState(dragCtx.idx);
    st.panX = dragCtx.startPanX + (e.clientX - dragCtx.startX);
    st.panY = dragCtx.startPanY + (e.clientY - dragCtx.startY);
    applyDiagramTransform(dragCtx.idx);
  });
  const stopDiagramDrag = () => { if (dragCtx) { dragCtx.viewport.classList.remove('dragging'); dragCtx = null; } };
  stage.addEventListener('pointerup', stopDiagramDrag);
  stage.addEventListener('pointercancel', stopDiagramDrag);

  // ---- inline lesson content panel (toggle open/close, no page navigation) ----
  stage.addEventListener('click', e => {
    const toggleBtn = e.target.closest('[data-content-toggle]');
    if (toggleBtn) {
      const slideEl = toggleBtn.closest('.slide');
      const open = slideEl.classList.toggle('content-open');
      toggleBtn.textContent = open ? closeLabel() : openLabel();
      if (open) renderMermaid();
      return;
    }
    const closeBtn = e.target.closest('[data-content-close]');
    if (closeBtn) {
      const slideEl = closeBtn.closest('.slide');
      slideEl.classList.remove('content-open');
      const toggleBtnEl = slideEl.querySelector('[data-content-toggle]');
      if (toggleBtnEl) toggleBtnEl.textContent = openLabel();
      return;
    }
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
      const text = decodeURIComponent(copyBtn.dataset.copy || '');
      Promise.resolve(navigator.clipboard?.writeText(text)).then(() => {
        const original = copyBtn.textContent;
        copyBtn.textContent = state.lang === 'th' ? 'คัดลอกแล้ว' : 'Copied';
        setTimeout(() => { copyBtn.textContent = original; }, 1200);
      }).catch(() => {});
    }
  });

  function render() {
    diagramState.clear();
    stage.innerHTML = SLIDES.map(slideHtml).join('');
    dotsEl.innerHTML = SLIDES.map((_, i) => `<button class="dot" data-go="${i}" aria-label="Slide ${i + 1}"></button>`).join('');
    langBtn.textContent = state.lang === 'th' ? 'TH' : 'EN';
    themeBtn.textContent = state.theme === 'dark' ? '☀' : '☾';
    goTo(state.i, true);
    renderSlideSpeech();
    renderMermaid();
  }

  function goTo(i) {
    const n = SLIDES.length;
    const next = (i + n) % n;
    if (next !== state.i) { speech.stop(); speakingSlide = null; }
    state.i = next;
    [...stage.children].forEach((el, idx) => {
      el.classList.remove('active', 'is-prev', 'is-next');
      if (idx === state.i) el.scrollTop = 0;
      if (el.classList.contains('content-open')) {
        el.classList.remove('content-open');
        const toggleBtnEl = el.querySelector('[data-content-toggle]');
        if (toggleBtnEl) toggleBtnEl.textContent = openLabel();
      }
      if (idx === state.i) el.classList.add('active');
      else if (idx === (state.i - 1 + n) % n) el.classList.add('is-prev');
      else if (idx === (state.i + 1) % n) el.classList.add('is-next');
    });
    [...dotsEl.children].forEach((d, idx) => d.classList.toggle('active', idx === state.i));
    counterEl.textContent = `${String(state.i + 1).padStart(2, '0')} / ${String(SLIDES.length).padStart(2, '0')}`;
    renderSlideSpeech();
  }

  document.getElementById('prevBtn').addEventListener('click', () => goTo(state.i - 1));
  document.getElementById('nextBtn').addEventListener('click', () => goTo(state.i + 1));
  dotsEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-go]');
    if (btn) goTo(Number(btn.dataset.go));
  });

  window.addEventListener('keydown', e => {
    if (e.target.closest('button, a, input, select, textarea, [contenteditable="true"]')) return;
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); goTo(state.i + 1); }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); goTo(state.i - 1); }
    else if (e.key === 'Home') goTo(0);
    else if (e.key === 'End') goTo(SLIDES.length - 1);
    else if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    else if (e.key === 'Escape' && document.fullscreenElement) document.exitFullscreen();
  });

  let touchX = null;
  stage.addEventListener('touchstart', e => {
    touchX = e.target.closest('.diagram-viewport, .content-panel') ? null : e.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) goTo(state.i + (dx < 0 ? 1 : -1));
    touchX = null;
  }, { passive: true });

  langBtn.addEventListener('click', () => {
    speech.stop();
    speakingSlide = null;
    state.lang = state.lang === 'th' ? 'en' : 'th';
    localStorage.setItem(STORAGE.lang, state.lang);
    document.documentElement.lang = state.lang;
    render();
  });
  themeBtn.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = state.theme;
    localStorage.setItem(STORAGE.theme, state.theme);
    render();
  });

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(() => {});
  }
  document.getElementById('fsBtn').addEventListener('click', toggleFullscreen);

  window.addEventListener('mermaid-ready', renderMermaid);
  window.addEventListener('pagehide', () => speech.stop());
  render();
  loadSpeakerNotes('th');
  loadSpeakerNotes('en');
})();
