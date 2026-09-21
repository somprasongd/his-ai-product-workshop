(() => {
  const course = window.COURSE;
  const app = document.getElementById('app');
  const toast = document.getElementById('toast');
  const STORAGE = {
    lang: 'his-ai-course.lang',
    theme: 'his-ai-course.theme',
    completed: 'his-ai-course.completed',
    last: 'his-ai-course.last',
    quiz: 'his-ai-course.quiz',
    promptLang: 'his-ai-course.promptLang'
  };

  const ui = {
    th: {
      start: 'เริ่มเรียน', continue: 'เรียนต่อจากที่ค้าง', curriculum: 'ดูหลักสูตร',
      duration: 'ระยะเวลา', audience: 'กลุ่มผู้เรียน', format: 'รูปแบบ',
      audienceValue: 'PM · BA · Product Design', formatValue: '3 วัน · Hands-on · AI-assisted', durationValue: '≈ 15 ชั่วโมง',
      progress: 'ความคืบหน้า', complete: 'เรียนจบบทนี้', completed: 'เรียนจบแล้ว',
      next: 'บทถัดไป', previous: 'บทก่อนหน้า', copy: 'คัดลอก', copied: 'คัดลอกแล้ว',
      expected: 'ดูผลลัพธ์ที่คาดหวัง', hideExpected: 'ซ่อนผลลัพธ์',
      check: 'ตรวจคำตอบ', correct: 'ถูกต้อง — ไปต่อได้', incorrect: 'ยังไม่ใช่ ลองคิดจากหลักการในบทนี้อีกครั้ง',
      learned: 'เมื่อจบบทนี้ คุณจะ...', wrap: 'Wrap-up · สิ่งที่ควรจำ',
      practice: 'Practice', home: 'หน้าหลัก', allLessons: 'Learning Journey',
      heroTag: 'AI-assisted product development for non-developers',
      heroLead: 'ฝึกใช้ Git, Worktree, AI Agent, Next.js literacy, Storybook, Mock Data, Debugging และ Merge Request ผ่านโจทย์ HIS เรื่องเดียวต่อเนื่อง',
      whyTitle: 'ออกแบบมาเพื่อ “กำกับ AI ให้ทำงานได้” ไม่ใช่เปลี่ยนทุกคนให้เป็น Developer',
      whyText: 'เนื้อหาค่อย ๆ เพิ่มความซับซ้อน ใช้โจทย์ OPD Patient Check-in Lite เรื่องเดียว และทุก workshop บอกผลลัพธ์ที่คาดหวังอย่างชัดเจน',
      cards: [
        ['หนึ่งโจทย์ต่อเนื่อง','ไม่เสียพลังกับการสลับบริบท ทุกบทต่อยอด US-001 เดิม'],
        ['Review ได้โดยไม่ต้องเขียนโค้ด','ใช้ Storybook, Browser, Error evidence และ git diff เป็นจุดตรวจ'],
        ['กลับมาเรียนต่อได้','บันทึก progress, ภาษา, theme และบทล่าสุดใน browser ของคุณ']
      ],
      roadmapTitle: '3 วัน จาก Requirement ไปถึง Draft MR', roadmapText: 'แต่ละช่วงมี Concept → Demo → Guided Practice → Challenge → Review',
      prerequisites: 'Prerequisites', finalSummary: 'สรุปหลังเรียนครบ',
      guided: 'Guided Mode', hint: 'ดู Hint', guide: 'เปิด Step-by-step', closeMenu: 'ปิดเมนู',
      reset: 'รีเซ็ต Progress', resetConfirm: 'ต้องการลบสถานะการเรียนใน browser นี้หรือไม่?',
      source: 'Source', starter: 'Starter Repo',
      promptLabel: 'Prompt สำหรับ AI Agent', promptLangLabel: 'ภาษาของ prompt',
      promptLangNote: 'เลือกภาษาของ prompt ได้ ระบบจะจำและใช้กับทุก prompt ในเว็บนี้',
      whenToUse: 'ใช้เมื่อไร', afterPrompt: 'หลังส่ง prompt ให้ตรวจสิ่งนี้',
      commandsLabel: 'ทีละคำสั่ง', expectLabel: 'ควรเห็นอะไร',
      readDiagram: 'อ่านภาพนี้อย่างไร', noCommand: 'ขั้นนี้ไม่ต้องพิมพ์คำสั่ง'
    },
    en: {
      start: 'Start learning', continue: 'Continue where you left off', curriculum: 'View curriculum',
      duration: 'Duration', audience: 'Audience', format: 'Format',
      audienceValue: 'PM · BA · Product Design', formatValue: '3 days · Hands-on · AI-assisted', durationValue: '≈ 15 hours',
      progress: 'Progress', complete: 'Mark lesson complete', completed: 'Completed',
      next: 'Next lesson', previous: 'Previous lesson', copy: 'Copy', copied: 'Copied',
      expected: 'Reveal expected result', hideExpected: 'Hide expected result',
      check: 'Check answer', correct: 'Correct — keep going', incorrect: 'Not quite. Revisit the principle in this lesson and try again.',
      learned: 'By the end of this lesson, you will...', wrap: 'Wrap-up · What to remember',
      practice: 'Practice', home: 'Home', allLessons: 'Learning Journey',
      heroTag: 'AI-assisted product development for non-developers',
      heroLead: 'Learn Git, worktrees, AI agents, Next.js literacy, Storybook, mock data, debugging, and Merge Requests through one continuous HIS scenario.',
      whyTitle: 'Designed to help you supervise AI work — not turn everyone into a developer',
      whyText: 'Complexity grows gradually, every lesson continues the same OPD Patient Check-in Lite story, and every exercise shows the expected outcome.',
      cards: [
        ['One continuous scenario','No context switching. Every lesson extends the same US-001.'],
        ['Review without deep coding','Use Storybook, browser evidence, errors, and git diff as review surfaces.'],
        ['Resume anytime','Progress, language, theme, and last lesson are stored in your browser.']
      ],
      roadmapTitle: '3 days from Requirement to Draft MR', roadmapText: 'Each section follows Concept → Demo → Guided Practice → Challenge → Review',
      prerequisites: 'Prerequisites', finalSummary: 'Final learning summary',
      guided: 'Guided Mode', hint: 'Reveal hint', guide: 'Show step-by-step', closeMenu: 'Close menu',
      reset: 'Reset progress', resetConfirm: 'Clear learning progress stored in this browser?',
      source: 'Source', starter: 'Starter Repo',
      promptLabel: 'Prompt for the AI agent', promptLangLabel: 'Prompt language',
      promptLangNote: 'Choose the prompt language. Your choice is remembered and applied to every prompt on this site.',
      whenToUse: 'When to use it', afterPrompt: 'After sending, check this',
      commandsLabel: 'Step by step', expectLabel: 'What you should see',
      readDiagram: 'How to read this diagram', noCommand: 'No command to type in this step'
    }
  };

  const state = {
    lang: localStorage.getItem(STORAGE.lang) || ((navigator.language || 'en').toLowerCase().startsWith('th') ? 'th' : 'en'),
    theme: localStorage.getItem(STORAGE.theme) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    completed: new Set(JSON.parse(localStorage.getItem(STORAGE.completed) || '[]')),
    quiz: JSON.parse(localStorage.getItem(STORAGE.quiz) || '{}'),
    last: localStorage.getItem(STORAGE.last) || 'prerequisites',
    promptLang: localStorage.getItem(STORAGE.promptLang) || ''
  };

  const esc = (s='') => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const RAW_URL_RE = /https?:\/\/[^\s<`]+/g;
  const linkifyRaw = html => html.replace(RAW_URL_RE, url => `<a href="${url}" target="_blank" rel="noreferrer noopener">${url}</a>`);
  const linkify = (s='') => {
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
  const rich = (s='') => linkify(s)
    .replace(/`([^`]+)`/g, (_, c) => `<code class="inline-code">${c}</code>`)
    .replace(/\*\*([^*]+)\*\*/g, (_, c) => `<strong>${c}</strong>`)
    .replace(/(?<!\/)\blocalhost:(\d{2,5})\b/g, (m, port) => `<a href="http://localhost:${port}" target="_blank" rel="noreferrer noopener">localhost:${port}</a>`);
  const CMD_RE = /^(git|npm|npx|node|cd|ls|mkdir|curl|code|codex|claude|pnpm|yarn|touch|cat)\b/;
  const extractCommands = raw => {
    const cmds = [];
    const codeRe = /`([^`]+)`/g;
    let m;
    while ((m = codeRe.exec(raw))) {
      const c = m[1];
      if (CMD_RE.test(c) || /\s--?\w/.test(c)) cmds.push(c);
    }
    return cmds;
  };
  const t = obj => typeof obj === 'string' ? obj : (obj?.[state.lang] ?? obj?.en ?? '');
  const U = key => ui[state.lang][key];

  function persist() {
    localStorage.setItem(STORAGE.lang, state.lang);
    localStorage.setItem(STORAGE.theme, state.theme);
    localStorage.setItem(STORAGE.completed, JSON.stringify([...state.completed]));
    localStorage.setItem(STORAGE.quiz, JSON.stringify(state.quiz));
    localStorage.setItem(STORAGE.last, state.last);
    if (state.promptLang) localStorage.setItem(STORAGE.promptLang, state.promptLang);
    else localStorage.removeItem(STORAGE.promptLang);
  }

  const promptLang = () => state.promptLang || state.lang;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 1500);
  }

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    persist();
    renderMermaid();
  }
  document.documentElement.lang = state.lang;
  document.documentElement.dataset.theme = state.theme;

  function icon(name, size=18) {
    const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`;
    const p = {
      sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
      moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
      menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
      check:'<path d="m5 12 4 4L19 6"/>',
      arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
      back:'<path d="M19 12H5M11 18l-6-6 6-6"/>',
      copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
      github:'<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 2a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/>',
      spark:'<path d="m12 3-1.9 4.9L5 10l5.1 2.1L12 17l1.9-4.9L19 10l-5.1-2.1L12 3Z"/><path d="m5 3-.7 1.8L2.5 5.5l1.8.7L5 8l.7-1.8 1.8-.7-1.8-.7L5 3Z"/>',
      book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z"/><path d="M8 7h8M8 11h6"/>',
      code:'<path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/>',
      expand:'<path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/>',
      zoomIn:'<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/>',
      zoomOut:'<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3M8 11h6"/>',
      close:'<path d="M18 6 6 18M6 6l12 12"/>',
      reset:'<path d="M3 12a9 9 0 1 0 2.64-6.36M3 12V5m0 7h7"/>'
    };
    return `<svg ${common}>${p[name] || p.spark}</svg>`;
  }

  function shell(content, activeId='') {
    const completedCount = state.completed.size;
    const total = course.lessons.length;
    const pct = Math.round((completedCount / total) * 100);
    const nav = course.groups.map(g => {
      const lessons = course.lessons.filter(l => l.group === g.id);
      return `<div class="group-label">${esc(t(g))}</div><nav class="lesson-nav">${lessons.map(l => {
        const done = state.completed.has(l.id);
        return `<a class="lesson-link ${activeId===l.id?'active':''} ${done?'done':''}" href="#/lesson/${l.id}">
          <span class="lesson-num">${done ? icon('check',13) : esc(l.no)}</span>
          <span>${esc(t(l.title))}</span><span class="lesson-duration">${esc(l.duration)}</span>
        </a>`;
      }).join('')}</nav>`;
    }).join('');
    return `<div class="shell">
      <header class="topbar">
        <a class="brand" href="#/">
          <span class="brand-mark">${icon('spark',20)}</span>
          <span class="brand-copy"><small>HIS learning path</small><span>AI Product Workshop</span></span>
        </a>
        <div class="top-actions">
          <button class="icon-btn mobile-menu" id="menuBtn" aria-label="Menu">${icon('menu')}</button>
          <button class="icon-btn lang-btn" id="langBtn" aria-label="Language" title="${state.lang==='th'?'Switch to English':'เปลี่ยนเป็นภาษาไทย'}">${state.lang==='th'?'TH':'EN'}</button>
          <button class="icon-btn" id="themeBtn" aria-label="Theme">${state.theme==='dark'?icon('sun'):icon('moon')}</button>
        </div>
      </header>
      <div class="layout">
        <aside class="sidebar" id="sidebar">
          <div class="sidebar-progress">
            <div class="progress-top"><span>${U('progress')}</span><strong>${pct}%</strong></div>
            <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
            <a class="btn btn-primary btn-small continue-btn" href="#/lesson/${esc(state.last)}">${U('continue')} ${icon('arrow',15)}</a>
          </div>
          ${nav}
          <div class="group-label">Links</div>
          <nav class="lesson-nav">
            <a class="lesson-link" href="${course.meta.starterUrl}" target="_blank" rel="noreferrer"><span class="lesson-num">${icon('code',14)}</span><span>${U('starter')}</span></a>
            <a class="lesson-link" href="${course.meta.sourceUrl}" target="_blank" rel="noreferrer"><span class="lesson-num">${icon('github',14)}</span><span>${U('source')}</span></a>
            <button class="lesson-link" id="resetBtn" style="width:100%;border:0;cursor:pointer;text-align:left;background:transparent"><span class="lesson-num">↺</span><span>${U('reset')}</span></button>
          </nav>
        </aside>
        <main class="main" id="main">${content}</main>
      </div>
      <footer class="footer">HIS AI Product Workshop · Mock/synthetic data only · Built for progressive, human-supervised AI learning</footer>
    </div>`;
  }

  function home() {
    const hasProgress = state.completed.size > 0;
    const cards = U('cards').map((c,i) => `<article class="card"><div class="card-icon">${['01','02','03'][i]}</div><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p></article>`).join('');
    const dayCards = [
      ['Day 1','Requirement → Git → Worktree → Agent Plan','4 h'],
      ['Day 2','Next.js Literacy → Components → Storybook','4.5 h'],
      ['Day 3','Mocks → Integration → Debug → MR','4.5 h']
    ].map(d => `<article class="card track-card"><span class="day">${d[0]}</span><h3>${d[1]}</h3><p>${d[2]}</p></article>`).join('');
    const html = `<section class="hero">
      <div class="hero-orb orb-a"></div><div class="hero-orb orb-b"></div>
      <div class="hero-inner">
        <div>
          <span class="eyebrow">${icon('spark',15)} ${U('heroTag')}</span>
          <h1>Build products with <span class="accent">AI Agents</span> — with control.</h1>
          <p class="lead">${U('heroLead')}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#/lesson/${hasProgress?state.last:'prerequisites'}">${hasProgress?U('continue'):U('start')} ${icon('arrow',17)}</a>
            <a class="btn btn-secondary" href="#curriculum">${U('curriculum')}</a>
          </div>
          <div class="hero-meta"><span>◷ ${U('durationValue')}</span><span>◎ ${U('audienceValue')}</span><span>◈ ${U('formatValue')}</span></div>
        </div>
        <div class="hero-panel" aria-label="Learning journey preview">
          <div class="journey-mini">
            <div class="journey-step"><span class="dot">1</span><div><strong>Requirement & Git</strong><small>Think before code</small></div><span>→</span></div>
            <div class="journey-step"><span class="dot">2</span><div><strong>Component & Story</strong><small>Review meaningful states</small></div><span>→</span></div>
            <div class="journey-step"><span class="dot">3</span><div><strong>Debug & Diff</strong><small>Evidence before trust</small></div><span>→</span></div>
            <div class="journey-step"><span class="dot">4</span><div><strong>Draft MR</strong><small>Developer-ready handoff</small></div><span>✓</span></div>
          </div>
        </div>
      </div>
    </section>
    <div class="content">
      <section class="section"><div class="section-head"><span class="eyebrow">Learning design</span><h2>${U('whyTitle')}</h2><p>${U('whyText')}</p></div><div class="grid-3">${cards}</div></section>
      <section class="section" id="curriculum"><div class="section-head"><span class="eyebrow">Course map</span><h2>${U('roadmapTitle')}</h2><p>${U('roadmapText')}</p></div><div class="grid-3">${dayCards}</div></section>
      <section class="section"><div class="final-summary"><span class="eyebrow">Capstone</span><h2>OPD Patient Check-in Lite</h2><p>${state.lang==='th'?'โจทย์ HIS ง่ายพอสำหรับผู้เริ่มต้น แต่ครอบคลุม Search, UI states, validation, confirmation, mock, Storybook, debugging, diff และ MR ครบวงจร':'A beginner-friendly HIS scenario that still covers search, UI states, validation, confirmation, mocks, Storybook, debugging, diff, and MR end to end.'}</p><div class="hero-actions"><a class="btn btn-primary" href="#/lesson/capstone">${state.lang==='th'?'ดู Capstone':'View Capstone'} ${icon('arrow',17)}</a></div></div></section>
    </div>`;
    return shell(html, '');
  }

  function renderBlock(block, index) {
    switch(block.type) {
      case 'callout': return `<section class="block callout ${block.tone||''}"><div class="callout-title">${esc(t(block.title))}</div><p>${linkify(t(block.text))}</p></section>`;
      case 'list': return `<section class="block"><h2>${esc(t(block.title))}</h2><ul class="clean">${t(block.items).map(x=>`<li>${linkify(x)}</li>`).join('')}</ul></section>`;
      case 'two': return `<section class="block"><h2>${esc(t(block.title))}</h2><div class="two-col"><div class="compare"><strong>${esc(t(block.left.title))}</strong><ul class="clean">${t(block.left.items).map(x=>`<li>${linkify(x)}</li>`).join('')}</ul></div><div class="compare"><strong>${esc(t(block.right.title))}</strong><ul class="clean">${t(block.right.items).map(x=>`<li>${linkify(x)}</li>`).join('')}</ul></div></div></section>`;
      case 'code': return block.title || block.lead || block.note
        ? `<section class="block">${block.title?`<h2>${esc(t(block.title))}</h2>`:''}${lead(block)}${codeBlock(block.code, block.label || 'code')}${block.note?`<p class="block-outro">${rich(t(block.note))}</p>`:''}</section>`
        : codeBlock(block.code, block.label || 'code');
      case 'diagram': return `<section class="block"><h2>${esc(t(block.title))}</h2>${lead(block)}<div class="diagram"><button class="diagram-expand" type="button" data-diagram-title="${esc(t(block.title))}" aria-label="${state.lang==='th'?'ดูภาพขยาย':'View full size'}">${icon('expand',15)}<span>${state.lang==='th'?'ขยาย':'Expand'}</span></button><div class="mermaid">${esc(block.diagram)}</div></div>${block.notes?`<div class="diagram-notes"><strong>${U('readDiagram')}</strong><ul class="clean">${t(block.notes).map(n=>`<li>${rich(n)}</li>`).join('')}</ul></div>`:''}${block.outro?`<p class="block-outro">${rich(t(block.outro))}</p>`:''}</section>`;
      case 'prose': return `<section class="block prose">${block.title?`<h2>${esc(t(block.title))}</h2>`:''}${t(block.body).map(pg=>`<p>${rich(pg)}</p>`).join('')}${block.points?`<ul class="clean">${t(block.points).map(x=>`<li>${rich(x)}</li>`).join('')}</ul>`:''}</section>`;
      case 'commands': return commandsBlock(block);
      case 'prompt': return promptBlock(block);
      case 'practice': return practiceBlock(block);
      case 'capstone': return `<section class="block"><div class="practice-label">${U('guided')}</div><div class="capstone-steps">${block.steps.map((s,i)=>`<details class="capstone-step"><summary>${esc(t(s.title))}<span>${String(i+1).padStart(2,'0')}</span></summary><div class="inside"><p><strong>${U('hint')}:</strong> ${linkify(t(s.hint))}</p><div class="reveal"><button class="btn btn-secondary btn-small reveal-btn" type="button">${U('guide')}</button><div class="reveal-panel"><p>${linkify(t(s.guide))}</p></div></div></div></details>`).join('')}</div></section>`;
      default: return '';
    }
  }

  const lead = block => block.lead ? `<p class="block-lead">${rich(t(block.lead))}</p>` : '';

  function practiceBlock(block) {
    const steps = t(block.steps).map(raw => {
      const cmdHtml = extractCommands(raw).map(c => codeBlock(c, state.lang==='th'?'คำสั่ง':'command')).join('');
      return `<li><div class="step-body"><span>${rich(raw)}</span>${cmdHtml}</div></li>`;
    }).join('');
    return `<section class="block practice">
      <div class="practice-label">${U('practice')}</div>
      <h2>${esc(t(block.title))}</h2>
      ${block.code ? codeBlock(block.code, 'commands') : ''}
      <ol class="steps">${steps}</ol>
      <div class="cmd-expect"><strong>${state.lang==='th'?'ผลลัพธ์ที่คาดหวัง':'Expected result'}</strong> ${rich(t(block.expected))}</div>
    </section>`;
  }

  function commandsBlock(block) {
    const steps = block.steps.map((s, i) => `<li class="cmd-step">
      <div class="cmd-index">${String(i+1).padStart(2,'0')}</div>
      <div class="cmd-body">
        <h3>${esc(t(s.title))}</h3>
        <p>${rich(t(s.what))}</p>
        ${s.cmd ? codeBlock(s.cmd, s.label || 'command') : `<p class="cmd-nocmd">${U('noCommand')}</p>`}
        ${s.expect ? `<div class="cmd-expect"><strong>${U('expectLabel')}</strong> ${rich(t(s.expect))}</div>` : ''}
      </div>
    </li>`).join('');
    return `<section class="block commands">
      <div class="practice-label">${U('commandsLabel')}</div>
      <h2>${esc(t(block.title))}</h2>
      ${lead(block)}
      <ol class="cmd-list">${steps}</ol>
      ${block.outro ? `<p class="block-outro">${rich(t(block.outro))}</p>` : ''}
    </section>`;
  }

  function promptBody(block) {
    const pl = promptLang();
    const text = block.prompt[pl] ?? block.prompt.en;
    return codeBlock(text, `prompt · ${pl === 'th' ? 'ไทย' : 'EN'}`);
  }

  function promptBlock(block) {
    const pl = promptLang();
    return `<section class="block prompt-block" data-prompt-th="${encodeURIComponent(block.prompt.th)}" data-prompt-en="${encodeURIComponent(block.prompt.en)}">
      <div class="prompt-head">
        <div class="prompt-heading">
          <div class="practice-label">${U('promptLabel')}</div>
          <h2>${esc(t(block.title))}</h2>
        </div>
        <div class="lang-switch" role="group" aria-label="${U('promptLangLabel')}">
          <span class="lang-switch-label">${U('promptLangLabel')}</span>
          <button type="button" class="lang-opt ${pl==='th'?'active':''}" data-prompt-lang="th" aria-pressed="${pl==='th'}">ไทย</button>
          <button type="button" class="lang-opt ${pl==='en'?'active':''}" data-prompt-lang="en" aria-pressed="${pl==='en'}">EN</button>
        </div>
      </div>
      ${block.when ? `<p class="block-lead"><strong>${U('whenToUse')}:</strong> ${rich(t(block.when))}</p>` : ''}
      <div class="prompt-code">${promptBody(block)}</div>
      ${block.after ? `<div class="prompt-after"><strong>${U('afterPrompt')}</strong><ul class="clean">${t(block.after).map(x=>`<li>${rich(x)}</li>`).join('')}</ul></div>` : ''}
      <p class="prompt-hint">${U('promptLangNote')}</p>
    </section>`;
  }

  function applyPromptLang() {
    const pl = promptLang();
    document.querySelectorAll('.prompt-block').forEach(bl => {
      const raw = pl === 'th' ? bl.dataset.promptTh : bl.dataset.promptEn;
      const holder = bl.querySelector('.prompt-code');
      if (holder) holder.innerHTML = codeBlock(decodeURIComponent(raw || ''), `prompt · ${pl === 'th' ? 'ไทย' : 'EN'}`);
      bl.querySelectorAll('[data-prompt-lang]').forEach(btn => {
        const on = btn.dataset.promptLang === pl;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', String(on));
      });
    });
  }

  function codeBlock(code, label='code') {
    return `<section class="code-wrap"><div class="code-head"><span>${esc(label)}</span><button class="copy-btn" type="button" data-copy="${encodeURIComponent(code)}">${icon('copy',13)} ${U('copy')}</button></div><pre><code>${linkifyRaw(esc(code))}</code></pre></section>`;
  }

  function lessonPage(lesson) {
    state.last = lesson.id; persist();
    const idx = course.lessons.findIndex(l=>l.id===lesson.id);
    const prev = course.lessons[idx-1], next = course.lessons[idx+1];
    const done = state.completed.has(lesson.id);
    const quizSaved = state.quiz[lesson.id];
    const q = lesson.quiz;
    const content = `<div class="content">
      <header class="lesson-header">
        <div class="lesson-kicker"><span class="pill">${esc(lesson.no)}</span><span class="pill">${esc(lesson.duration)}</span><span>${esc(t(course.groups.find(g=>g.id===lesson.group)))}</span></div>
        <h1 class="lesson-title">${esc(t(lesson.title))}</h1>
        <p class="lesson-intro">${esc(t(lesson.intro))}</p>
        <h3>${U('learned')}</h3>
        <div class="lesson-goals">${t(lesson.outcomes).map(x=>`<div class="goal"><span class="goal-mark">${icon('check',16)}</span><span>${esc(x)}</span></div>`).join('')}</div>
      </header>
      <div class="lesson-body">
        ${lesson.blocks.map(renderBlock).join('')}
        <section class="block checkpoint" data-lesson="${lesson.id}">
          <div class="practice-label">Checkpoint</div><h2>${esc(t(q.q))}</h2>
          <div class="options">${t(q.options).map((op,i)=>`<label class="option"><input type="radio" name="quiz-${lesson.id}" value="${i}" ${quizSaved?.selected===i?'checked':''}/><span>${esc(op)}</span></label>`).join('')}</div>
          <button class="btn btn-secondary btn-small quiz-btn" data-answer="${q.answer}" data-lesson="${lesson.id}">${U('check')}</button>
          <div class="check-result ${quizSaved?'show '+(quizSaved.correct?'good':'bad'):''}">${quizSaved?(quizSaved.correct?U('correct'):U('incorrect')):''}</div>
          <div class="reveal ${quizSaved?.correct?'open':''}"><div class="reveal-panel"><strong>${state.lang==='th'?'เหตุผล':'Why'}</strong><p>${esc(t(q.why))}</p></div></div>
        </section>
        <section class="block wrapup"><div class="practice-label">Wrap-up</div><h2>${U('wrap')}</h2><ul class="wrapup-list">${t(lesson.wrap).map(x=>`<li>${icon('check',15)} ${esc(x)}</li>`).join('')}</ul></section>
      </div>
      <div class="lesson-actions">
        <div>${prev?`<a class="btn btn-secondary" href="#/lesson/${prev.id}">${icon('back',16)} ${U('previous')}</a>`:''}</div>
        <button class="btn ${done?'complete-btn done':'btn-primary complete-btn'}" data-complete="${lesson.id}">${done?icon('check',16)+' '+U('completed'):U('complete')}</button>
        <div>${next?`<a class="btn btn-secondary" href="#/lesson/${next.id}">${U('next')} ${icon('arrow',16)}</a>`:`<a class="btn btn-secondary" href="#/summary">${U('finalSummary')} ${icon('arrow',16)}</a>`}</div>
      </div>
    </div>`;
    return shell(content, lesson.id);
  }

  function summaryPage() {
    const f = course.final;
    const pct = Math.round(state.completed.size/course.lessons.length*100);
    const html = `<div class="content"><section class="section"><div class="final-summary"><span class="eyebrow">${pct}% ${U('progress')}</span><h1 class="lesson-title">${esc(t(f.title))}</h1><p class="lesson-intro">${esc(t(f.intro))}</p><div class="skill-grid">${t(f.skills).map(s=>`<div class="skill">${icon('check',15)} ${esc(s)}</div>`).join('')}</div><div class="hero-actions"><a class="btn btn-primary" href="#/lesson/capstone">Capstone ${icon('arrow',16)}</a><a class="btn btn-secondary" href="${course.meta.starterUrl}" target="_blank" rel="noreferrer">${U('starter')}</a></div></div></section></div>`;
    return shell(html,'');
  }

  function route() {
    const hash = location.hash || '#/';
    if (hash.startsWith('#/lesson/')) {
      const id = hash.split('/')[2];
      const lesson = course.lessons.find(l=>l.id===id) || course.lessons[0];
      app.innerHTML = lessonPage(lesson);
    } else if (hash === '#/summary') app.innerHTML = summaryPage();
    else app.innerHTML = home();
    bind();
    window.scrollTo({top:0,behavior:'instant'});
    setTimeout(renderMermaid, 0);
  }

  function bind() {
    document.getElementById('themeBtn')?.addEventListener('click',()=>setTheme(state.theme==='dark'?'light':'dark'));
    document.getElementById('langBtn')?.addEventListener('click',()=>{
      state.lang = state.lang==='th'?'en':'th';
      document.documentElement.lang=state.lang; persist(); route();
    });
    document.getElementById('menuBtn')?.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
    document.querySelectorAll('.lesson-link').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
    document.getElementById('resetBtn')?.addEventListener('click',()=>{
      if(confirm(U('resetConfirm'))){ state.completed.clear(); state.quiz={}; state.last='prerequisites'; persist(); route(); }
    });
    document.querySelectorAll('.reveal-btn').forEach(btn=>btn.addEventListener('click',()=>{
      const r=btn.closest('.reveal'); r.classList.toggle('open');
      if (r.querySelector('.reveal-panel') && btn.textContent.trim()===U('expected')) btn.textContent=r.classList.contains('open')?U('hideExpected'):U('expected');
    }));
    document.querySelectorAll('.quiz-btn').forEach(btn=>btn.addEventListener('click',()=>{
      const lessonId=btn.dataset.lesson; const selected=document.querySelector(`input[name="quiz-${lessonId}"]:checked`);
      if(!selected){ showToast(state.lang==='th'?'เลือกคำตอบก่อน':'Choose an answer first'); return; }
      const correct=Number(selected.value)===Number(btn.dataset.answer);
      state.quiz[lessonId]={selected:Number(selected.value),correct}; persist();
      const box=btn.parentElement.querySelector('.check-result'); box.textContent=correct?U('correct'):U('incorrect'); box.className=`check-result show ${correct?'good':'bad'}`;
      const reveal=btn.parentElement.querySelector('.reveal'); if(correct) reveal.classList.add('open');
    }));
    document.querySelectorAll('[data-complete]').forEach(btn=>btn.addEventListener('click',()=>{
      const id=btn.dataset.complete;
      const wasDone = state.completed.has(id);
      if(wasDone) state.completed.delete(id); else state.completed.add(id);
      persist();
      if(!wasDone){
        const idx = course.lessons.findIndex(l=>l.id===id);
        const next = course.lessons[idx+1];
        showToast(U('completed'));
        location.hash = next ? `#/lesson/${next.id}` : '#/summary';
      } else {
        route(); showToast(state.lang==='th'?'ยกเลิกสถานะแล้ว':'Completion removed');
      }
    }));
  }

  async function renderMermaid() {
    const nodes=[...document.querySelectorAll('.mermaid')];
    if(!nodes.length || !window.mermaid) return;
    try {
      window.mermaid.initialize({startOnLoad:false,theme:state.theme==='dark'?'dark':'neutral',securityLevel:'strict',fontFamily:'Inter, system-ui, sans-serif'});
      for(const el of nodes){
        if(el.dataset.rendered==='1') continue;
        const source=el.textContent; const id='m'+Math.random().toString(36).slice(2);
        const {svg}=await window.mermaid.render(id,source); el.innerHTML=svg; el.dataset.rendered='1';
      }
    } catch(err){ console.warn('Mermaid render failed',err); }
  }

  const diagramModal = { el:null, content:null, body:null, title:null, zoomLabel:null, scale:1, panX:0, panY:0 };

  function applyDiagramTransform() {
    diagramModal.content.style.transform = `translate(${diagramModal.panX}px, ${diagramModal.panY}px) scale(${diagramModal.scale})`;
  }

  function setDiagramZoom(scale, resetPan=true) {
    diagramModal.scale = Math.min(3, Math.max(0.4, Math.round(scale * 10) / 10));
    if (resetPan) { diagramModal.panX = 0; diagramModal.panY = 0; }
    applyDiagramTransform();
    diagramModal.zoomLabel.textContent = Math.round(diagramModal.scale * 100) + '%';
  }

  function initDiagramPan() {
    const body = diagramModal.body;
    let dragging = false, startX = 0, startY = 0, startPanX = 0, startPanY = 0;
    body.addEventListener('pointerdown', e => {
      dragging = true;
      body.classList.add('dragging');
      body.setPointerCapture(e.pointerId);
      startX = e.clientX; startY = e.clientY;
      startPanX = diagramModal.panX; startPanY = diagramModal.panY;
    });
    body.addEventListener('pointermove', e => {
      if (!dragging) return;
      diagramModal.panX = startPanX + (e.clientX - startX);
      diagramModal.panY = startPanY + (e.clientY - startY);
      applyDiagramTransform();
    });
    const stop = e => { dragging = false; body.classList.remove('dragging'); };
    body.addEventListener('pointerup', stop);
    body.addEventListener('pointercancel', stop);
  }

  function openDiagramModal(svg, title) {
    diagramModal.content.innerHTML = '';
    diagramModal.content.appendChild(svg.cloneNode(true));
    diagramModal.title.textContent = title;
    diagramModal.panX = 0; diagramModal.panY = 0;
    setDiagramZoom(1);
    diagramModal.el.classList.add('open');
    diagramModal.el.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDiagramModal() {
    diagramModal.el.classList.remove('open');
    diagramModal.el.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initDiagramModal() {
    const modal = document.getElementById('diagramModal');
    if (!modal) return;
    diagramModal.el = modal;
    diagramModal.content = document.getElementById('diagramModalContent');
    diagramModal.body = document.getElementById('diagramModalBody');
    diagramModal.title = document.getElementById('diagramModalTitle');
    diagramModal.zoomLabel = document.getElementById('diagramZoomLabel');
    document.getElementById('diagramZoomIn').innerHTML = icon('zoomIn', 16);
    document.getElementById('diagramZoomOut').innerHTML = icon('zoomOut', 16);
    document.getElementById('diagramZoomReset').innerHTML = icon('reset', 16);
    document.getElementById('diagramModalClose').innerHTML = icon('close', 16);
    document.getElementById('diagramZoomIn').addEventListener('click', () => setDiagramZoom(diagramModal.scale + 0.2, false));
    document.getElementById('diagramZoomOut').addEventListener('click', () => setDiagramZoom(diagramModal.scale - 0.2, false));
    document.getElementById('diagramZoomReset').addEventListener('click', () => setDiagramZoom(1));
    modal.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', closeDiagramModal));
    initDiagramPan();
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && diagramModal.el.classList.contains('open')) closeDiagramModal();
    });
    document.addEventListener('click', e => {
      const btn = e.target.closest('.diagram-expand');
      if (!btn) return;
      const svg = btn.parentElement.querySelector('.mermaid svg');
      if (!svg) return;
      openDiagramModal(svg, btn.dataset.diagramTitle || '');
    });
  }

  async function copyText(value) {
    try { await navigator.clipboard.writeText(value); }
    catch {
      const ta = document.createElement('textarea');
      ta.value = value; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove();
    }
    showToast(U('copied'));
  }

  function initDelegation() {
    document.addEventListener('click', e => {
      const copyBtn = e.target.closest('.copy-btn');
      if (copyBtn) { copyText(decodeURIComponent(copyBtn.dataset.copy || '')); return; }
      const langBtn = e.target.closest('[data-prompt-lang]');
      if (langBtn) {
        state.promptLang = langBtn.dataset.promptLang;
        persist();
        applyPromptLang();
      }
    });
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('mermaid-ready', renderMermaid);
  initDiagramModal();
  initDelegation();
  route();
})();
