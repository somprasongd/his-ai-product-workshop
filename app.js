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
    promptLang: 'his-ai-course.promptLang',
    agentTool: 'his-ai-course.agentTool',
    repoHost: 'his-ai-course.repoHost',
    practice: 'his-ai-course.practice',
    speakRate: 'his-ai-course.speakRate',
    certificate: 'his-ai-course.certificate'
  };

  const ui = {
    th: {
      start: 'เริ่มเรียน', continue: 'เรียนต่อจากที่ค้าง', curriculum: 'ดูหลักสูตร',
      duration: 'ระยะเวลา', audience: 'กลุ่มผู้เรียน', format: 'รูปแบบ',
      audienceValue: 'PM · BA · Product Design', formatValue: '3 วัน + Capstone ทำต่อเอง · Hands-on', durationValue: '≈ 18 ชม. + Capstone ≈ 3 ชม.',
      progress: 'ความคืบหน้า', complete: 'เรียนจบบทนี้', completed: 'เรียนจบแล้ว',
      next: 'บทถัดไป', previous: 'บทก่อนหน้า', copy: 'คัดลอก', copied: 'คัดลอกแล้ว',
      shareLink: 'แชร์บทเรียนนี้', shareSite: 'แชร์เว็บนี้', linkCopied: 'คัดลอกลิงก์แล้ว',
      listen: 'ฟังเนื้อหา', speakLoading: 'กำลังเตรียมเสียง', speakPause: 'พัก', speakResume: 'เล่นต่อ', speakStop: 'หยุด', speakSpeed: 'ความเร็วอ่าน', speakControls: 'ตัวควบคุมการฟังเนื้อหา', speakProgress: 'ความคืบหน้าการอ่าน',
      noVoice: 'ไม่พบเสียงอ่านภาษาไทยบนอุปกรณ์นี้ ลองติดตั้งเสียงภาษาไทยในตั้งค่าระบบของอุปกรณ์ แล้วกดฟังอีกครั้ง',
      speechFailed: 'เล่นเสียงไม่สำเร็จ ลองกดเล่นอีกครั้งหรือเปลี่ยนเสียงในตั้งค่าระบบ',
      expected: 'ดูผลลัพธ์ที่คาดหวัง', hideExpected: 'ซ่อนผลลัพธ์',
      check: 'ตรวจคำตอบ', correct: 'ถูกต้อง — ไปต่อได้', incorrect: 'ยังไม่ใช่ ลองคิดจากหลักการในบทนี้อีกครั้ง',
      learned: 'เมื่อจบบทนี้ คุณจะ...', wrap: 'Wrap-up · สิ่งที่ควรจำ',
      output: 'สิ่งที่จะส่งต่อจากบทนี้',
      practice: 'Practice', home: 'หน้าหลัก', allLessons: 'Learning Journey',
      heroTag: 'AI-assisted product development for non-developers',
      heroLead: 'สร้าง ส่งต่อ และ merge US-001 prototype ด้วย AI ภายใน 3 วัน แล้วทำ Capstone ต่อเองจาก follow-up issue เรื่องคลินิกไม่พร้อมรับ โดยพิสูจน์ว่า flow เดิมยังผ่าน',
      whyTitle: 'ออกแบบมาเพื่อ “กำกับ AI ให้ทำงานได้” ไม่ใช่เปลี่ยนทุกคนให้เป็น Developer',
      whyText: 'บท 00–17 ใช้ US-001 ต่อเนื่องจนถูก merge แล้ว Capstone ประยุกต์ทักษะกับ follow-up issue ใน flow เดิม ทุก exercise ซ่อนผลลัพธ์ที่คาดหวังจนกว่าจะกดดู',
      cards: [
        ['หนึ่งโจทย์ต่อเนื่อง','ไม่เสียพลังกับการสลับบริบท ทุกบทต่อยอด US-001 เดิม'],
        ['Review ได้โดยไม่ต้องเขียนโค้ด','ใช้ Storybook, Browser, Error evidence และ git diff เป็นจุดตรวจ'],
        ['กลับมาเรียนต่อได้','บันทึก progress, ภาษา, theme และบทล่าสุดใน browser ของคุณ']
      ],
      roadmapTitle: '3 วันในห้อง + Capstone ทำต่อเอง', roadmapText: 'US-001: Issue → Design → Flow → MR → Handoff → Review/Merge · Capstone (ทำต่อเอง): follow-up issue → ต่อเติม → ตรวจ regression → MR',
      prerequisites: 'Prerequisites', finalSummary: 'สรุปหลังเรียนครบ',
      guided: 'Guided Mode', hint: 'ดู Hint', guide: 'เปิด Step-by-step', closeMenu: 'ปิดเมนู',
      reset: 'รีเซ็ต Progress', resetConfirm: 'ต้องการลบสถานะการเรียนใน browser นี้หรือไม่?',
      source: 'Source', starter: 'Starter Repo', slides: 'สไลด์สำหรับผู้สอน',
      promptLabel: 'Prompt สำหรับ AI Agent', promptLangLabel: 'ภาษาของ prompt',
      promptLangNote: 'เลือกภาษาของ prompt ได้ ระบบจะจำและใช้กับทุก prompt ในเว็บนี้',
      whenToUse: 'ใช้เมื่อไร', afterPrompt: 'หลังส่ง prompt ให้ตรวจสิ่งนี้',
      promptExample: 'ตัวอย่าง', promptExampleNote: 'แท็บ “ตัวอย่าง” คือ prompt ที่ใส่รายการตัวอย่างแล้ว กดคัดลอกไปส่งได้ทันที แล้วเทียบผลกับรายการของคุณเอง',
      commandsLabel: 'ทีละคำสั่ง', expectLabel: 'ควรเห็นอะไร',
      readDiagram: 'อ่านภาพนี้อย่างไร', noCommand: 'ขั้นนี้ไม่ต้องพิมพ์คำสั่ง',
      setupLabel: 'ทีละขั้น', toolChoice: 'เลือกเครื่องมือที่จะใช้',
      glossary: 'คลังคำศัพท์', glossaryTag: 'อ้างอิง', glossaryTitle: 'คลังคำศัพท์ที่ใช้ในเว็บนี้',
      glossaryIntro: 'คำศัพท์เทคนิคที่พบในบทเรียนทุกบท พร้อมคำอธิบายภาษาคน ถ้าเจอคำที่ไม่คุ้นระหว่างเรียน กลับมาค้นที่นี่ได้ตลอด',
      glossarySearchPh: 'พิมพ์คำศัพท์ที่อยากรู้ เช่น branch, mock, worktree',
      glossaryEmpty: 'ไม่พบคำศัพท์ที่ตรงกับการค้นหา ลองพิมพ์คำอื่น เช่น diff, state หรือ prompt',
      privacyNav: 'ความเป็นส่วนตัว', privacyTag: 'นโยบาย', privacyTitle: 'คุกกี้และความเป็นส่วนตัว',
      privacyIntro: 'เว็บนี้เป็นเว็บสถิตสำหรับเรียนรู้ ไม่มีระบบสมาชิกและไม่มี backend อ่านสรุปด้านล่างเพื่อดูว่ามีข้อมูลอะไรอยู่ใน browser ของคุณ และบริการภายนอกที่เว็บเรียกใช้',
      privacyUpdated: 'ปรับปรุงล่าสุด: 1 ตุลาคม 2569',
      privacySections: [
        ['สรุปสั้นๆ', ['**ไม่ใช้ cookie** ไม่มีทั้ง cookie ของเว็บนี้และ cookie ของบุคคลที่สาม', 'ไม่มี analytics โฆษณา หรือเครื่องมือติดตามพฤติกรรม', 'ไม่มีบัญชีผู้ใช้ และไม่ส่งชื่อ ความคืบหน้า หรือคำตอบของคุณไปยังเซิร์ฟเวอร์ของเว็บนี้']],
        ['ข้อมูลที่เก็บใน browser ของคุณ (localStorage)', ['ภาษาและธีมที่คุณเลือก', 'บทที่เรียนจบ ผลควิซ สถานะแบบฝึกหัด และบทที่เรียนล่าสุด', 'ตัวเลือกที่คุณตั้งไว้ เช่น ภาษาของ prompt, AI Agent, ที่เก็บ repository และความเร็วเสียงอ่าน', 'ชื่อที่คุณกรอก วันที่ออก และ Certificate ID เมื่อคุณออกใบประกาศ', 'ข้อมูลเหล่านี้อยู่เฉพาะในเครื่องและ browser นี้ ผู้จัดทำเข้าถึงไม่ได้ และใช้เพื่อให้เรียนต่อจากที่ค้างได้เท่านั้น']],
        ['บริการภายนอกที่ browser เรียกใช้', ['`cdn.jsdelivr.net` ส่งไฟล์ Mermaid สำหรับวาดแผนภาพ ทุกครั้งที่เปิดบทเรียนหรือสไลด์', '`fonts.googleapis.com` ส่งฟอนต์ Noto Sans Thai เฉพาะตอนสร้างภาพใบประกาศ', 'GitHub Pages เป็นผู้โฮสต์เว็บนี้', 'ปุ่ม "เพิ่มใน LinkedIn" ไปยัง linkedin.com เฉพาะเมื่อคุณกดเอง และลิงก์ไม่มีชื่อของคุณ', 'เสียงอ่านใช้ Speech Synthesis ของ browser หรือระบบปฏิบัติการ ซึ่งบางเครื่องอาจใช้เสียงออนไลน์ตามผู้ผลิต', 'บริการเหล่านี้เห็น IP address และข้อมูล browser ตามปกติของการเรียกเว็บ และอยู่ภายใต้นโยบายของผู้ให้บริการแต่ละราย']],
        ['จัดการข้อมูลของคุณ', ['กด "รีเซ็ต Progress" ในเมนูด้านข้างเพื่อลบความคืบหน้าและใบประกาศ', 'หรือล้างข้อมูลเว็บไซต์ (site data) ของเว็บนี้ในการตั้งค่า browser เพื่อลบทุกอย่าง', 'ใบประกาศที่ดาวน์โหลดหรือพิมพ์ไปแล้วเป็นไฟล์ของคุณ ลบได้จากเครื่องของคุณ']],
        ['ข้อมูลตัวอย่างในบทเรียน', ['ข้อมูลสุขภาพทุกตัวอย่างเป็นข้อมูลสมมติ (mock)', 'ห้ามนำข้อมูลผู้ป่วยจริง รหัสผ่าน หรือค่า `.env` ไปใส่ใน prompt หรือ issue ที่ฝึกในหลักสูตรนี้']]
      ],
      privacyContact: 'มีคำถามหรืออยากให้แก้ไขข้อความนี้ เปิด issue ได้ที่ [GitHub repository]({url})',
      certNav: 'Certificate', certTitle: 'Certificate of Completion',
      certIntro: 'เรียนจบบทหลัก 00–17 ครบแล้วรับ certificate ได้ (Capstone และบทเสริมไม่นับ) ใบจะถูกสร้างใน browser ของคุณและบันทึกวันที่ออกครั้งแรกไว้',
      certLocked: (done,total) => `เรียนจบแล้ว ${done} จาก ${total} บทหลัก เรียนบทที่เหลือให้ครบเพื่อรับ certificate`,
      certRemaining: 'บทที่ยังไม่ได้กดเรียนจบ',
      certNameLabel: 'ชื่อที่จะแสดงบน certificate', certNamePh: 'เช่น สมชาย ใจดี หรือ Somchai Jaidee',
      certNameHint: 'ชื่อจะถูกเก็บใน browser นี้เท่านั้น ไม่ถูกส่งไปที่ไหน',
      certNameError: 'กรอกชื่ออย่างน้อย 2 ตัวอักษร',
      certIssue: 'ออก Certificate',
      certConfirmTitle: 'ยืนยันชื่อบน certificate',
      certConfirmText: 'หลังยืนยันแล้วจะแก้ชื่อไม่ได้ ถ้าต้องการแก้ ต้องกด “รีเซ็ต Progress” แล้วเรียนบทหลักให้ครบใหม่',
      certConfirm: 'ยืนยันและออก Certificate', certEdit: 'กลับไปแก้ชื่อ',
      certIssued: 'ออก certificate แล้ว', certReady: 'เรียนครบบทหลักแล้ว รับ Certificate ได้ที่เมนู Certificate',
      certRendering: 'กำลังสร้าง certificate…', certRenderFailed: 'สร้างรูป certificate ไม่สำเร็จ ลองโหลดหน้านี้ใหม่',
      certShare: 'แชร์ไฟล์', certDownload: 'ดาวน์โหลด PNG', certPrint: 'พิมพ์ / บันทึกเป็น PDF', certLinkedIn: 'เพิ่มใน LinkedIn',
      certIssuedOn: 'ออกให้เมื่อ', certIdLabel: 'Certificate ID',
      certLockedNote: 'ชื่อและวันที่บนใบถูกล็อกตั้งแต่ออกครั้งแรก เปิดดูหรือดาวน์โหลดกี่ครั้งก็ได้วันที่เดิม ถ้าต้องการแก้ชื่อ ต้องรีเซ็ต Progress แล้วเรียนใหม่',
      certShareNote: 'แชร์เป็นไฟล์รูปเท่านั้น เว็บนี้ไม่มี server จึงไม่มีลิงก์ของ certificate ให้คนอื่นเปิดดู ปุ่ม “เพิ่มใน LinkedIn” กรอกชื่อคอร์ส วันที่ และ Certificate ID ให้ แล้วแนบไฟล์รูปเองได้',
      resetConfirmCert: 'ต้องการลบสถานะการเรียนใน browser นี้หรือไม่? Certificate และชื่อที่บันทึกไว้จะถูกลบด้วย และต้องเรียนบทหลักให้ครบใหม่จึงจะออกใบได้อีกครั้ง'
    },
    en: {
      start: 'Start learning', continue: 'Continue where you left off', curriculum: 'View curriculum',
      duration: 'Duration', audience: 'Audience', format: 'Format',
      audienceValue: 'PM · BA · Product Design', formatValue: '3 days + self-paced Capstone · Hands-on', durationValue: '≈ 18 h + Capstone ≈ 3 h',
      progress: 'Progress', complete: 'Mark lesson complete', completed: 'Completed',
      next: 'Next lesson', previous: 'Previous lesson', copy: 'Copy', copied: 'Copied',
      shareLink: 'Share this lesson', shareSite: 'Share this site', linkCopied: 'Link copied',
      listen: 'Listen', speakLoading: 'Preparing voice', speakPause: 'Pause', speakResume: 'Resume', speakStop: 'Stop', speakSpeed: 'Reading speed', speakControls: 'Listen playback controls', speakProgress: 'Reading progress',
      noVoice: 'No text-to-speech voice for this language was found on your device. Install one in your device settings, then try again.',
      speechFailed: 'Playback failed. Try again or choose another voice in your device settings.',
      expected: 'Reveal expected result', hideExpected: 'Hide expected result',
      check: 'Check answer', correct: 'Correct — keep going', incorrect: 'Not quite. Revisit the principle in this lesson and try again.',
      learned: 'By the end of this lesson, you will...', wrap: 'Wrap-up · What to remember',
      output: 'Output to carry forward',
      practice: 'Practice', home: 'Home', allLessons: 'Learning Journey',
      heroTag: 'AI-assisted product development for non-developers',
      heroLead: 'Build, hand off, and merge the US-001 prototype with AI in three days, then take the clinic-unavailability follow-up issue on your own as the capstone and prove the original flow still works.',
      whyTitle: 'Designed to help you supervise AI work — not turn everyone into a developer',
      whyText: 'Lessons 00–17 take US-001 all the way to merge; the capstone applies the same skills to a follow-up issue in that flow. Exercise results stay hidden until you reveal them.',
      cards: [
        ['One continuous scenario','No context switching. Every lesson extends the same US-001.'],
        ['Review without deep coding','Use Storybook, browser evidence, errors, and git diff as review surfaces.'],
        ['Resume anytime','Progress, language, theme, and last lesson are stored in your browser.']
      ],
      roadmapTitle: '3 days in class + self-paced Capstone', roadmapText: 'US-001: Issue → Design → Flow → MR → Handoff → Review/Merge · Capstone (self-paced): follow-up issue → change → regression → MR',
      prerequisites: 'Prerequisites', finalSummary: 'Final learning summary',
      guided: 'Guided Mode', hint: 'Reveal hint', guide: 'Show step-by-step', closeMenu: 'Close menu',
      reset: 'Reset progress', resetConfirm: 'Clear learning progress stored in this browser?',
      source: 'Source', starter: 'Starter Repo', slides: 'Instructor Slides',
      promptLabel: 'Prompt for the AI agent', promptLangLabel: 'Prompt language',
      promptLangNote: 'Choose the prompt language. Your choice is remembered and applied to every prompt on this site.',
      whenToUse: 'When to use it', afterPrompt: 'After sending, check this',
      promptExample: 'Example', promptExampleNote: 'The “Example” tab shows this prompt with a sample list filled in. Copy and send it as-is, then compare the result with your own list.',
      commandsLabel: 'Step by step', expectLabel: 'What you should see',
      readDiagram: 'How to read this diagram', noCommand: 'No command to type in this step',
      setupLabel: 'Step by step', toolChoice: 'Choose your tool',
      glossary: 'Glossary', glossaryTag: 'Reference', glossaryTitle: 'Glossary of terms used on this site',
      glossaryIntro: 'The technical terms used across every lesson, explained in plain language. Come back and search here any time a word feels unfamiliar.',
      glossarySearchPh: 'Search a term, e.g. branch, mock, worktree',
      glossaryEmpty: 'No terms match your search. Try another word, such as diff, state, or prompt',
      privacyNav: 'Privacy', privacyTag: 'Policy', privacyTitle: 'Cookies and privacy',
      privacyIntro: 'This is a static learning site with no accounts and no backend. The summary below shows what is stored in your browser and which outside services the site calls.',
      privacyUpdated: 'Last updated: 1 October 2026',
      privacySections: [
        ['In short', ['**No cookies**, neither first-party nor third-party', 'No analytics, advertising, or behavior tracking', 'No user accounts, and your name, progress, and answers are never sent to this site\'s servers']],
        ['What is stored in your browser (localStorage)', ['Your language and theme choices', 'Completed lessons, quiz results, exercise state, and your last lesson', 'Options you set, such as prompt language, AI agent, repository host, and read-aloud speed', 'The name you enter, the issue date, and the Certificate ID when you issue a certificate', 'This stays on this device and browser, the authors cannot access it, and it is used only so you can resume where you left off']],
        ['Outside services your browser calls', ['`cdn.jsdelivr.net` serves the Mermaid library that draws diagrams, each time you open a lesson or the slides', '`fonts.googleapis.com` serves the Noto Sans Thai font, only when the certificate image is generated', 'GitHub Pages hosts this site', 'The "Add to LinkedIn" button goes to linkedin.com only when you click it, and the link does not contain your name', 'Read-aloud uses the speech synthesis of your browser or operating system, which on some devices may use online voices from the vendor', 'These services see your IP address and browser details as with any web request, under each provider\'s own policy']],
        ['Managing your data', ['Use "Reset progress" in the side menu to remove progress and the certificate', 'Or clear this site\'s site data in your browser settings to remove everything', 'A certificate you already downloaded or printed is your own file and can be deleted from your device']],
        ['Sample data in lessons', ['All health data in examples is synthetic (mock)', 'Never put real patient data, passwords, or `.env` values into prompts or issues you practice with in this course']]
      ],
      privacyContact: 'Questions, or want this text changed? Open an issue on the [GitHub repository]({url})',
      certNav: 'Certificate', certTitle: 'Certificate of Completion',
      certIntro: 'Complete core lessons 00–17 to get a certificate (the capstone and bonus lesson are not required). It is generated in your browser and keeps the date it was first issued.',
      certLocked: (done,total) => `You have completed ${done} of ${total} core lessons. Finish the rest to get your certificate.`,
      certRemaining: 'Lessons not yet marked complete',
      certNameLabel: 'Name to show on the certificate', certNamePh: 'e.g. Somchai Jaidee',
      certNameHint: 'Your name is stored in this browser only and is not sent anywhere.',
      certNameError: 'Enter a name of at least 2 characters',
      certIssue: 'Issue certificate',
      certConfirmTitle: 'Confirm the name on your certificate',
      certConfirmText: 'Once confirmed, the name cannot be changed. To change it, use “Reset progress” and complete the core lessons again.',
      certConfirm: 'Confirm and issue', certEdit: 'Edit name',
      certIssued: 'Certificate issued', certReady: 'Core lessons complete — get your certificate from the Certificate menu',
      certRendering: 'Generating certificate…', certRenderFailed: 'Could not generate the certificate image. Reload this page and try again.',
      certShare: 'Share file', certDownload: 'Download PNG', certPrint: 'Print / Save as PDF', certLinkedIn: 'Add to LinkedIn',
      certIssuedOn: 'Issued on', certIdLabel: 'Certificate ID',
      certLockedNote: 'The name and date are locked from the first issue. Viewing or downloading again always shows the original date. To change the name, reset progress and complete the lessons again.',
      certShareNote: 'Share it as an image file. This site has no server, so there is no certificate link others can open. “Add to LinkedIn” fills in the course name, date, and certificate ID; you can attach the image yourself.',
      resetConfirmCert: 'Clear learning progress stored in this browser? Your certificate and saved name will also be deleted, and you will need to complete the core lessons again to issue a new one.'
    }
  };

  function storedJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
    catch { return fallback; }
  }
  const storedArray = key => {
    const value = storedJson(key, []);
    return Array.isArray(value) ? value : [];
  };
  const storedObject = key => {
    const value = storedJson(key, {});
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  };
  const savedLang = localStorage.getItem(STORAGE.lang);
  const savedTheme = localStorage.getItem(STORAGE.theme);

  const state = {
    lang: savedLang === 'th' || savedLang === 'en' ? savedLang : ((navigator.language || 'en').toLowerCase().startsWith('th') ? 'th' : 'en'),
    theme: savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    completed: new Set(storedArray(STORAGE.completed)),
    quiz: storedObject(STORAGE.quiz),
    last: localStorage.getItem(STORAGE.last) || 'prerequisites',
    promptLang: localStorage.getItem(STORAGE.promptLang) || '',
    agentTool: localStorage.getItem(STORAGE.agentTool) || '',
    repoHost: localStorage.getItem(STORAGE.repoHost) || '',
    practice: storedObject(STORAGE.practice),
    speakRate: [0.75, 1, 1.25, 1.5].includes(parseFloat(localStorage.getItem(STORAGE.speakRate))) ? parseFloat(localStorage.getItem(STORAGE.speakRate)) : 1
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
    .replace(/!!([\s\S]+?)!!/g, (_, c) => `<strong class="text-danger">${c}</strong>`)
    .replace(/`([^`]+)`/g, (_, c) => `<code class="inline-code">${c}</code>`)
    .replace(/\*\*([^*]+)\*\*/g, (_, c) => `<strong>${c}</strong>`)
    .replace(/(?<!\/)\blocalhost:(\d{2,5})\b/g, (m, port) => `<a href="http://localhost:${port}" target="_blank" rel="noreferrer noopener">localhost:${port}</a>`);
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
    if (state.agentTool) localStorage.setItem(STORAGE.agentTool, state.agentTool);
    else localStorage.removeItem(STORAGE.agentTool);
    if (state.repoHost) localStorage.setItem(STORAGE.repoHost, state.repoHost);
    else localStorage.removeItem(STORAGE.repoHost);
    if (Object.keys(state.practice).length) localStorage.setItem(STORAGE.practice, JSON.stringify(state.practice));
    else localStorage.removeItem(STORAGE.practice);
    localStorage.setItem(STORAGE.speakRate, String(state.speakRate));
  }

  const promptLang = () => state.promptLang || state.lang;

  // Certificate counts the in-class path (setup + Day 1–3); the capstone and bonus lesson stay optional.
  const CORE_GROUPS = ['start', 'day1', 'day2', 'day3'];
  const coreLessons = course.lessons.filter(l => CORE_GROUPS.includes(l.group));
  const coreDone = () => coreLessons.filter(l => state.completed.has(l.id)).length;
  // Read the certificate straight from storage instead of keeping it in persist(), so a stale tab can never
  // overwrite or drop a certificate issued in another tab. It is written once at issue and removed only by reset.
  function loadCertificate() {
    const c = storedObject(STORAGE.certificate);
    const valid = typeof c.name === 'string' && c.name.trim() && typeof c.certId === 'string'
      && typeof c.issuedAt === 'string' && !Number.isNaN(Date.parse(c.issuedAt));
    return valid ? c : null;
  }

  function showToast(message, duration = 1500) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), duration);
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
      reset:'<path d="M3 12a9 9 0 1 0 2.64-6.36M3 12V5m0 7h7"/>',
      shield:'<path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
      share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
      speaker:'<path d="M11 5 6 9H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9.5 9.5 0 0 1 0 13"/>',
      stop:'<rect x="6.5" y="6.5" width="11" height="11" rx="2"/>',
      pause:'<path d="M9 5v14M15 5v14"/>',
      play:'<path d="M8 5.5v13l11-6.5Z"/>',
      award:'<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/>',
      download:'<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
      print:'<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
      linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>'
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
          <img class="brand-mark" src="./assets/logo.png" alt="" width="38" height="38" />
          <span class="brand-copy"><span>AI Product Workshop</span></span>
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
            <a class="lesson-link ${activeId==='glossary'?'active':''}" href="#/glossary"><span class="lesson-num">${icon('book',14)}</span><span>${U('glossary')}</span></a>
            <a class="lesson-link ${activeId==='certificate'?'active':''}" href="#/certificate"><span class="lesson-num">${icon('award',14)}</span><span>${U('certNav')}</span></a>
            <a class="lesson-link ${activeId==='privacy'?'active':''}" href="#/privacy"><span class="lesson-num">${icon('shield',14)}</span><span>${U('privacyNav')}</span></a>
            <a class="lesson-link" href="./slides.html" target="_blank" rel="noreferrer"><span class="lesson-num">${icon('spark',14)}</span><span>${U('slides')}</span></a>
            <a class="lesson-link" href="${course.meta.starterUrl}" target="_blank" rel="noreferrer"><span class="lesson-num">${icon('code',14)}</span><span>${U('starter')}</span></a>
            <a class="lesson-link" href="${course.meta.sourceUrl}" target="_blank" rel="noreferrer"><span class="lesson-num">${icon('github',14)}</span><span>${U('source')}</span></a>
            <button class="lesson-link" id="resetBtn" style="width:100%;border:0;cursor:pointer;text-align:left;background:transparent"><span class="lesson-num">↺</span><span>${U('reset')}</span></button>
          </nav>
        </aside>
        <main class="main" id="main" tabindex="-1">${content}</main>
      </div>
    </div>`;
  }

  function home() {
    const hasProgress = state.completed.size > 0;
    const cards = U('cards').map((c,i) => `<article class="card"><div class="card-icon">${['01','02','03'][i]}</div><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p></article>`).join('');
    const dayCards = (state.lang==='th' ? [
      ['วันที่ 1','Requirement → Issue → Git → Worktree → Agent Plan','5 ชม.'],
      ['วันที่ 2','Next.js → Design → Component/State → Storybook','6 ชม.'],
      ['วันที่ 3','Mock → Flow → Debug → MR → Handoff → Review/Merge','6 ชม.']
    ] : [
      ['Day 1','Requirement → Issue → Git → Worktree → Agent Plan','5 h'],
      ['Day 2','Next.js → Design → Component/State → Storybook','6 h'],
      ['Day 3','Mocks → Flow → Debug → MR → Handoff → Review/Merge','6 h']
    ]).map(d => `<article class="card track-card"><span class="day">${d[0]}</span><h3>${d[1]}</h3><p>${d[2]}</p></article>`).join('');
    const journey = state.lang==='th' ? [
      ['Requirement & Git','ระบุผลลัพธ์ก่อนสร้าง'],['Component & Storybook','ตรวจ state ที่มีความหมาย'],
      ['Debug & Diff','ใช้หลักฐานก่อนรับงาน'],['MR & Handoff','ส่งต่อให้ Developer ทำต่อ']
    ] : [
      ['Requirement & Git','Think before building'],['Components & Storybook','Review meaningful states'],
      ['Debug & Diff','Evidence before acceptance'],['MR & Handoff','Evidence developers can use']
    ];
    const html = `<section class="hero">
      <div class="hero-orb orb-a"></div><div class="hero-orb orb-b"></div>
      <div class="hero-inner">
        <div>
          <span class="eyebrow">${icon('spark',15)} ${U('heroTag')}</span>
          <h1>${state.lang==='th'?'สร้าง prototype ที่ส่งต่อได้ด้วย <span class="accent">AI Agent</span>':'Build a handoff-ready prototype with <span class="accent">AI agents</span>'}</h1>
          <p class="lead">${U('heroLead')}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#/lesson/${hasProgress?state.last:'prerequisites'}">${hasProgress?U('continue'):U('start')} ${icon('arrow',17)}</a>
            <a class="btn btn-secondary" href="#curriculum">${U('curriculum')}</a>
            <button class="btn btn-secondary" type="button" data-share-site>${icon('share',17)} ${U('shareSite')}</button>
          </div>
          <div class="hero-meta"><span>◷ ${U('durationValue')}</span><span>◎ ${U('audienceValue')}</span><span>◈ ${U('formatValue')}</span></div>
        </div>
        <div class="hero-panel" aria-label="Learning journey preview">
          <div class="journey-mini">
            ${journey.map((step,i)=>`<div class="journey-step"><span class="dot">${i+1}</span><div><strong>${step[0]}</strong><small>${step[1]}</small></div><span>${i===3?'✓':'→'}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </section>
    <div class="content">
      <section class="section"><div class="section-head"><span class="eyebrow">Learning design</span><h2>${U('whyTitle')}</h2><p>${U('whyText')}</p></div><div class="grid-3">${cards}</div></section>
      <section class="section" id="curriculum"><div class="section-head"><span class="eyebrow">Course map</span><h2>${U('roadmapTitle')}</h2><p>${U('roadmapText')}</p></div><div class="grid-3">${dayCards}</div></section>
      <section class="section"><div class="final-summary"><span class="eyebrow">${state.lang==='th'?'Capstone · ทำต่อเองหลังคอร์ส ≈ 3 ชม.':'Capstone · self-paced after the course ≈ 3 h'}</span><h2>${state.lang==='th'?'งานต่อยอด: คลินิกไม่พร้อมรับ Check-in':'Follow-up: unavailable clinic'}</h2><p>${state.lang==='th'?'หยิบ follow-up issue ที่เปิดไว้ตอน review ในบทที่ 17 มาขยายให้มี AC ครบ เพิ่ม mock state และ UX สำหรับคลินิกไม่พร้อมรับ พร้อมหลักฐานว่า flow เดิมไม่เสีย':'Take the follow-up issue filed during the lesson 17 review, refine its ACs, add mock states and UX for an unavailable clinic, and prove the original flow still works.'}</p><div class="hero-actions"><a class="btn btn-primary" href="#/lesson/capstone">${state.lang==='th'?'ดู Capstone':'View Capstone'} ${icon('arrow',17)}</a></div></div></section>
    </div>`;
    return shell(html, '');
  }

  function renderBlock(block, index, lessonId) {
    switch(block.type) {
      case 'callout': return `<section class="block callout ${block.tone||''}"><div class="callout-title">${esc(t(block.title))}</div><p>${rich(t(block.text))}</p></section>`;
      case 'list': return `<section class="block"><h2>${esc(t(block.title))}</h2><ul class="clean">${t(block.items).map(x=>`<li>${rich(x)}</li>`).join('')}</ul></section>`;
      case 'two': return `<section class="block"><h2>${esc(t(block.title))}</h2><div class="two-col">${compareCol(block.left)}${compareCol(block.right)}</div>${block.note?`<p class="block-outro">${rich(t(block.note))}</p>`:''}</section>`;
      case 'code': return block.title || block.lead || block.note
        ? `<section class="block">${block.title?`<h2>${esc(t(block.title))}</h2>`:''}${lead(block)}${codeSectionBody(block)}${block.note?`<p class="block-outro">${rich(t(block.note))}</p>`:''}</section>`
        : codeSectionBody(block);
      case 'diagram': return `<section class="block"><h2>${esc(t(block.title))}</h2>${lead(block)}<div class="diagram${block.diagramMobile?' has-mobile-diagram':''}"><button class="diagram-expand" type="button" data-diagram-title="${esc(t(block.title))}" aria-label="${state.lang==='th'?'ดูภาพขยาย':'View full size'}">${icon('expand',15)}<span>${state.lang==='th'?'ขยาย':'Expand'}</span></button><div class="mermaid">${esc(block.diagram)}</div>${block.diagramMobile?`<div class="mermaid mermaid-mobile">${esc(block.diagramMobile)}</div>`:''}</div>${block.notes?`<div class="diagram-notes"><strong>${U('readDiagram')}</strong><ul class="clean">${t(block.notes).map(n=>`<li>${rich(n)}</li>`).join('')}</ul></div>`:''}${block.outro?`<p class="block-outro">${rich(t(block.outro))}</p>`:''}</section>`;
      case 'prose': return `<section class="block prose">${block.title?`<h2>${esc(t(block.title))}</h2>`:''}${t(block.body).map(pg=>`<p>${rich(pg)}</p>`).join('')}${block.points?`<ul class="clean">${t(block.points).map(x=>`<li>${rich(x)}</li>`).join('')}</ul>`:''}</section>`;
      case 'commands': return commandsBlock(block);
      case 'agent-setup': return agentSetupBlock(block);
      case 'prompt': return promptBlock(block);
      case 'practice': return practiceBlock(block, lessonId);
      case 'capstone': return `<section class="block"><div class="practice-label">${U('guided')}</div><div class="capstone-steps">${block.steps.map((s,i)=>`<details class="capstone-step"><summary>${esc(t(s.title))}</summary><div class="inside"><p><strong>${U('hint')}:</strong> ${linkify(t(s.hint))}</p><div class="reveal"><button class="btn btn-secondary btn-small reveal-btn" type="button">${U('guide')}</button><div class="reveal-panel"><ol class="cmd-list capstone-guide">${t(s.guide).map((g,j)=>`<li class="cmd-step"><div class="cmd-index">${String(j+1).padStart(2,'0')}</div><div class="cmd-body"><p>${rich(g)}</p></div></li>`).join('')}</ol></div></div></div></details>`).join('')}</div></section>`;
      default: return '';
    }
  }

  const lead = block => block.lead ? `<p class="block-lead">${rich(t(block.lead))}</p>` : '';

  const compareCol = col => `<div class="compare"><strong>${rich(t(col.title))}</strong><ul class="clean">${t(col.items).map(x=>`<li>${rich(x)}</li>`).join('')}</ul>${col.example?`<p class="compare-example">${rich(t(col.example))}</p>`:''}</div>`;

  function codeSectionBody(block) {
    return (block.code && typeof block.code === 'object')
      ? bilingualCodeBlock(block.code, block.label || 'code')
      : codeBlock(block.code, block.label || 'code');
  }

  function bilingualCodeBlock(codeObj, label='code') {
    const pl = promptLang();
    const text = codeObj[pl] ?? codeObj.en;
    return `<section class="code-wrap code-bilingual" data-code-th="${encodeURIComponent(codeObj.th || '')}" data-code-en="${encodeURIComponent(codeObj.en || '')}">
      <div class="code-head">
        <span class="code-lang-label" data-label="${esc(label)}">${esc(label)} · ${pl==='th'?'ไทย':'EN'}</span>
        <span class="code-head-actions">
          <span class="lang-switch lang-switch-compact" role="group" aria-label="${U('promptLangLabel')}">
            <button type="button" class="lang-opt ${pl==='th'?'active':''}" data-prompt-lang="th" aria-pressed="${pl==='th'}">ไทย</button>
            <button type="button" class="lang-opt ${pl==='en'?'active':''}" data-prompt-lang="en" aria-pressed="${pl==='en'}">EN</button>
          </span>
          <button class="copy-btn" type="button" data-copy="${encodeURIComponent(text)}">${icon('copy',13)} ${U('copy')}</button>
        </span>
      </div>
      <pre><code>${linkifyRaw(esc(text))}</code></pre>
    </section>`;
  }

  function practiceBlock(block, lessonId) {
    const checked = lessonId && Array.isArray(state.practice[lessonId]) ? state.practice[lessonId] : [];
    const items = t(block.steps).map((raw, i) => {
      const done = checked.includes(i);
      return `<li class="check-item${done?' done':''}">
        <label class="check-row">
          <input type="checkbox" data-practice="${esc(lessonId||'')}" data-step="${i}"${done?' checked':''}>
          <span class="check-text">${rich(raw)}</span>
        </label>
      </li>`;
    }).join('');
    const count = checked.length;
    return `<section class="block practice">
      <div class="practice-label">${U('practice')}</div>
      <h2>${esc(t(block.title))}</h2>
      ${block.code ? codeBlock(block.code, 'commands') : ''}
      <ul class="checklist" data-practice-list>${items}</ul>
      <span class="check-count" role="status">${count}/${block.steps.th.length}</span>
      <div class="reveal"><button class="btn btn-secondary btn-small reveal-btn" type="button" aria-expanded="false">${U('expected')}</button><div class="reveal-panel"><strong>${state.lang==='th'?'ผลลัพธ์ที่คาดหวัง':'Expected result'}</strong><p>${rich(t(block.expected))}</p></div></div>
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

  function agentSetupBlock(block) {
    const store = block.store || 'agentTool';
    const active = block.tools.find(x => x.id === state[store]) || block.tools[0];
    const tabs = block.tools.map(tool => `<button type="button" class="tool-tab${tool.id===active.id?' active':''}" data-agent-tool="${esc(tool.id)}" role="tab" aria-selected="${tool.id===active.id}">${esc(t(tool.name))}</button>`).join('');
    const panels = block.tools.map(tool => `<div class="agent-panel" data-agent-panel="${esc(tool.id)}" role="tabpanel"${tool.id===active.id?'':' hidden'}><ol class="cmd-list">${agentSteps(tool)}</ol></div>`).join('');
    return `<section class="block commands agent-setup" data-agent-setup="${esc(store)}">
      <div class="practice-label">${U('setupLabel')}</div>
      <h2>${esc(t(block.title))}</h2>
      ${lead(block)}
      <div class="tool-tabs" role="tablist" aria-label="${U('toolChoice')}">${tabs}</div>
      ${panels}
      ${block.outro ? `<p class="block-outro">${rich(t(block.outro))}</p>` : ''}
    </section>`;
  }

  function agentSteps(tool) {
    return tool.steps.map((s, i) => `<li class="cmd-step">
      <div class="cmd-index">${String(i+1).padStart(2,'0')}</div>
      <div class="cmd-body">
        <h3>${esc(t(s.title))}</h3>
        <p>${rich(t(s.what))}</p>
        ${s.cmd ? codeBlock(s.cmd, s.label || 'command') : ''}
        ${s.expect ? `<div class="cmd-expect"><strong>${U('expectLabel')}</strong> ${rich(t(s.expect))}</div>` : ''}
      </div>
    </li>`).join('');
  }

  function applyAgentTool() {
    document.querySelectorAll('[data-agent-setup]').forEach(section => {
      const store = section.dataset.agentSetup || 'agentTool';
      const btns = [...section.querySelectorAll('[data-agent-tool]')];
      const active = btns.find(b => b.dataset.agentTool === state[store]) || btns[0];
      if (!active) return;
      btns.forEach(b => {
        const on = b === active;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', String(on));
      });
      section.querySelectorAll('[data-agent-panel]').forEach(p => { p.hidden = p.dataset.agentPanel !== active.dataset.agentTool; });
    });
  }

  function promptBody(block) {
    const pl = promptLang();
    const text = block.prompt[pl] ?? block.prompt.en;
    return codeBlock(text, `prompt · ${pl === 'th' ? 'ไทย' : 'EN'}`);
  }

  function promptCodeLabel(pl, isExample) {
    return `prompt · ${isExample ? U('promptExample') + ' · ' : ''}${pl === 'th' ? 'ไทย' : 'EN'}`;
  }

  function renderPromptBlock(bl) {
    const pl = promptLang();
    const isExample = bl.dataset.exampleActive === '1';
    const raw = isExample
      ? (pl === 'th' ? bl.dataset.promptExampleTh : bl.dataset.promptExampleEn)
      : (pl === 'th' ? bl.dataset.promptTh : bl.dataset.promptEn);
    const holder = bl.querySelector('.prompt-code');
    if (holder) holder.innerHTML = codeBlock(decodeURIComponent(raw || ''), promptCodeLabel(pl, isExample));
    bl.querySelectorAll('[data-prompt-lang]').forEach(btn => {
      const on = !isExample && btn.dataset.promptLang === pl;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', String(on));
    });
    bl.querySelectorAll('[data-prompt-example]').forEach(btn => {
      btn.classList.toggle('active', isExample);
      btn.setAttribute('aria-pressed', String(isExample));
    });
  }

  function promptBlock(block) {
    const pl = promptLang();
    const hasExample = !!(block.example?.th || block.example?.en);
    const exampleAttrs = hasExample ? ` data-prompt-example-th="${encodeURIComponent(block.example.th || '')}" data-prompt-example-en="${encodeURIComponent(block.example.en || '')}"` : '';
    return `<section class="block prompt-block" data-prompt-th="${encodeURIComponent(block.prompt.th)}" data-prompt-en="${encodeURIComponent(block.prompt.en)}"${exampleAttrs}>
      <div class="prompt-head">
        <div class="prompt-heading">
          <div class="practice-label">${U('promptLabel')}</div>
          <h2>${esc(t(block.title))}</h2>
        </div>
        <div class="lang-switch" role="group" aria-label="${U('promptLangLabel')}">
          <span class="lang-switch-label">${U('promptLangLabel')}</span>
          <button type="button" class="lang-opt ${pl==='th'?'active':''}" data-prompt-lang="th" aria-pressed="${pl==='th'}">ไทย</button>
          <button type="button" class="lang-opt ${pl==='en'?'active':''}" data-prompt-lang="en" aria-pressed="${pl==='en'}">EN</button>
          ${hasExample ? `<span class="lang-switch-divider" aria-hidden="true"></span><button type="button" class="lang-opt" data-prompt-example aria-pressed="false">${U('promptExample')}</button>` : ''}
        </div>
      </div>
      ${block.when ? `<p class="block-lead"><strong>${U('whenToUse')}:</strong> ${rich(t(block.when))}</p>` : ''}
      <div class="prompt-code">${promptBody(block)}</div>
      ${block.after ? `<div class="prompt-after"><strong>${U('afterPrompt')}</strong><ul class="clean">${t(block.after).map(x=>`<li>${rich(x)}</li>`).join('')}</ul></div>` : ''}
      <p class="prompt-hint">${U('promptLangNote')}${hasExample ? ` ${U('promptExampleNote')}` : ''}</p>
    </section>`;
  }

  function applyPromptLang() {
    document.querySelectorAll('.prompt-block').forEach(renderPromptBlock);
    document.querySelectorAll('.code-bilingual').forEach(renderBilingualCode);
  }

  function renderBilingualCode(bl) {
    const pl = promptLang();
    const text = decodeURIComponent((pl === 'th' ? bl.dataset.codeTh : bl.dataset.codeEn) || bl.dataset.codeEn || '');
    const codeEl = bl.querySelector('pre code');
    if (codeEl) codeEl.innerHTML = linkifyRaw(esc(text));
    const copyBtn = bl.querySelector('.copy-btn');
    if (copyBtn) copyBtn.dataset.copy = encodeURIComponent(text);
    const labelEl = bl.querySelector('.code-lang-label');
    if (labelEl) labelEl.textContent = `${labelEl.dataset.label || ''} · ${pl==='th'?'ไทย':'EN'}`;
    bl.querySelectorAll('[data-prompt-lang]').forEach(btn => {
      const on = btn.dataset.promptLang === pl;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', String(on));
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
        <div class="lesson-top">
          <div class="lesson-kicker"><span class="pill">${esc(lesson.no)}</span><span class="pill">${esc(lesson.duration)}</span><span>${esc(t(course.groups.find(g=>g.id===lesson.group)))}</span></div>
          <div class="lesson-tools">
            ${speech.supported ? `<div class="speak-area">${speakStartHTML()}</div>` : ''}
            <button class="btn btn-secondary btn-small share-btn" type="button" data-share-lesson="${esc(lesson.id)}">${icon('share',15)} ${U('shareLink')}</button>
          </div>
        </div>
        <h1 class="lesson-title">${esc(t(lesson.title))}</h1>
        <p class="lesson-intro">${esc(t(lesson.intro))}</p>
        <p class="lesson-output"><strong>${U('output')}:</strong> ${esc(t(course.journey[lesson.id]))}</p>
        <h3>${U('learned')}</h3>
        <div class="lesson-goals">${t(lesson.outcomes).map(x=>`<div class="goal"><span class="goal-mark">${icon('check',16)}</span><span>${rich(x)}</span></div>`).join('')}</div>
      </header>
      <div class="lesson-body">
        ${lesson.blocks.map((b,i)=>renderBlock(b,i,lesson.id)).join('')}
        <section class="block checkpoint" data-lesson="${lesson.id}">
          <div class="practice-label">Checkpoint</div><h2>${esc(t(q.q))}</h2>
          <div class="options">${t(q.options).map((op,i)=>`<label class="option"><input type="radio" name="quiz-${lesson.id}" value="${i}" ${quizSaved?.selected===i?'checked':''}/><span>${esc(op)}</span></label>`).join('')}</div>
          <button class="btn btn-secondary btn-small quiz-btn" data-answer="${q.answer}" data-lesson="${lesson.id}">${U('check')}</button>
          <div class="check-result ${quizSaved?'show '+(quizSaved.correct?'good':'bad'):''}">${quizSaved?(quizSaved.correct?U('correct'):U('incorrect')):''}</div>
          <div class="reveal ${quizSaved?.correct?'open':''}"><div class="reveal-panel"><strong>${state.lang==='th'?'เหตุผล':'Why'}</strong><p>${esc(t(q.why))}</p></div></div>
        </section>
        <section class="block wrapup"><div class="practice-label">Wrap-up</div><h2>${U('wrap')}</h2><ul class="wrapup-list">${t(lesson.wrap).map(x=>`<li>${icon('check',15)} ${rich(x)}</li>`).join('')}</ul></section>
      </div>
      <div class="lesson-actions">
        <div>${prev?`<a class="btn btn-secondary" href="#/lesson/${prev.id}">${icon('back',16)} ${U('previous')}</a>`:''}</div>
        <button class="btn ${done?'complete-btn done':'btn-primary complete-btn'}" data-complete="${lesson.id}">${done?icon('check',16)+' '+U('completed'):U('complete')}</button>
        <div>${next?`<a class="btn btn-secondary" href="#/lesson/${next.id}">${U('next')} ${icon('arrow',16)}</a>`:`<a class="btn btn-secondary" href="#/summary">${U('finalSummary')} ${icon('arrow',16)}</a>`}</div>
      </div>
    </div>`;
    return shell(content, lesson.id);
  }

  function sharePage(lesson) {
    const blocks = lesson.blocks.filter(b => b.type !== 'practice' && b.share !== false);
    return `<div class="content share-page">
      <div class="share-topbar">
        <a class="share-badge" href="#/" title="${U('home')}"><img src="./assets/logo.png" alt="" width="18" height="18" /> AI Product Workshop</a>
        <div class="share-actions">
          <button class="icon-btn lang-btn" id="langBtn" aria-label="Language" title="${state.lang==='th'?'Switch to English':'เปลี่ยนเป็นภาษาไทย'}">${state.lang==='th'?'TH':'EN'}</button>
          <button class="icon-btn" id="themeBtn" aria-label="Theme">${state.theme==='dark'?icon('sun'):icon('moon')}</button>
        </div>
      </div>
      <header class="lesson-header">
        <div class="lesson-top">
          <div class="lesson-kicker"><span class="pill">${esc(lesson.no)}</span><span class="pill">${esc(lesson.duration)}</span></div>
          ${speech.supported ? `<div class="lesson-tools"><div class="speak-area">${speakStartHTML()}</div></div>` : ''}
        </div>
        <h1 class="lesson-title">${esc(t(lesson.title))}</h1>
        <p class="lesson-intro">${esc(t(lesson.intro))}</p>
      </header>
      <div class="lesson-body">
        ${blocks.map((b,i)=>renderBlock(b,i,lesson.id)).join('')}
      </div>
    </div>`;
  }

  function summaryPage() {
    const f = course.final;
    const pct = Math.round(state.completed.size/course.lessons.length*100);
    const certCta = coreDone() === coreLessons.length && !loadCertificate();
    const html = `<div class="content"><section class="section"><div class="final-summary"><span class="eyebrow">${pct}% ${U('progress')}</span><h1 class="lesson-title">${esc(t(f.title))}</h1><p class="lesson-intro">${esc(t(f.intro))}</p><div class="skill-grid">${t(f.skills).map(s=>`<div class="skill">${icon('check',15)} ${esc(s)}</div>`).join('')}</div><div class="hero-actions"><a class="btn ${certCta?'btn-primary':'btn-secondary'}" href="#/certificate">${icon('award',16)} ${U('certNav')}</a><a class="btn ${certCta?'btn-secondary':'btn-primary'}" href="#/lesson/capstone">Capstone ${icon('arrow',16)}</a><a class="btn btn-secondary" href="${course.meta.starterUrl}" target="_blank" rel="noreferrer">${U('starter')}</a></div></div></section></div>`;
    return shell(html,'');
  }

  function privacyPage() {
    const sections = U('privacySections').map(([h, items]) => `<section class="block">
      <h2>${esc(h)}</h2>
      <ul class="clean">${items.map(x => `<li>${rich(x)}</li>`).join('')}</ul>
    </section>`).join('');
    const html = `<div class="content">
      <header class="lesson-header">
        <div class="lesson-kicker"><span class="pill">${icon('shield',13)} ${U('privacyTag')}</span></div>
        <h1 class="lesson-title">${U('privacyTitle')}</h1>
        <p class="lesson-intro">${U('privacyIntro')}</p>
        <p class="glossary-count">${U('privacyUpdated')}</p>
      </header>
      <div class="lesson-body">
        ${sections}
        <section class="block"><p>${rich(U('privacyContact').replace('{url}', course.meta.sourceUrl))}</p></section>
      </div>
    </div>`;
    return shell(html, 'privacy');
  }

  function glossaryPage() {
    const cats = course.glossary.categories;
    const groups = cats.map(c => `<section class="block glossary-group" data-glossary-group>
      <h2>${esc(t(c.name))}</h2>
      <dl class="glossary-grid">${c.terms.map(term => {
        const hay = [term.term, term.alias || '', term.th, term.en].join(' ').replace(/[`*]/g, '').toLowerCase();
        return `<div class="glossary-item" data-search="${esc(hay)}">
          <dt>${esc(term.term)}${term.alias ? `<span class="glossary-alias">${esc(term.alias)}</span>` : ''}</dt>
          <dd>${rich(state.lang==='th'?term.th:term.en)}</dd>
        </div>`;
      }).join('')}</dl>
    </section>`).join('');
    const html = `<div class="content">
      <header class="lesson-header">
        <div class="lesson-kicker"><span class="pill">${icon('book',13)} ${U('glossaryTag')}</span></div>
        <h1 class="lesson-title">${U('glossaryTitle')}</h1>
        <p class="lesson-intro">${U('glossaryIntro')}</p>
      </header>
      <div class="glossary-toolbar">
        <input id="glossarySearch" type="search" placeholder="${esc(U('glossarySearchPh'))}" aria-label="${esc(U('glossarySearchPh'))}" autocomplete="off"/>
        <p class="glossary-count" id="glossaryCount" role="status"></p>
      </div>
      <div class="lesson-body">
        ${groups}
        <section class="block glossary-empty" id="glossaryEmpty" hidden>${esc(U('glossaryEmpty'))}</section>
      </div>
    </div>`;
    return shell(html, 'glossary');
  }

  function applyGlossaryFilter(raw) {
    const q = (raw || '').trim().toLowerCase();
    const cats = course.glossary.categories;
    const total = cats.reduce((n,c) => n + c.terms.length, 0);
    let visible = 0;
    document.querySelectorAll('[data-glossary-group]').forEach(sec => {
      let inGroup = 0;
      sec.querySelectorAll('.glossary-item').forEach(item => {
        const show = !q || (item.dataset.search || '').includes(q);
        item.hidden = !show;
        if (show) inGroup++;
      });
      sec.hidden = inGroup === 0;
      visible += inGroup;
    });
    const count = document.getElementById('glossaryCount');
    if (count) count.textContent = q
      ? (state.lang==='th' ? `พบ ${visible} จาก ${total} คำ` : `${visible} of ${total} terms`)
      : (state.lang==='th' ? `${total} คำ · ${cats.length} หมวด` : `${total} terms · ${cats.length} categories`);
    const empty = document.getElementById('glossaryEmpty');
    if (empty) empty.hidden = visible > 0;
  }

  // ---- certificate ----
  const CERT_W = 2000, CERT_H = 1414; // A4 landscape ratio, so print and PNG share one layout
  const CERT_FONT = '"Noto Sans Thai", "Noto Sans", system-ui, sans-serif';
  const CERT_FONT_CSS = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;600;700&display=swap';
  const CERT_COLORS = { ink:'#17302b', muted:'#61756f', primary:'#0f766e', line:'#d7e2df', soft:'#eef5f3' };
  const CERT_COPY = {
    th: {
      kicker: 'ประกาศนียบัตรการเรียนจบหลักสูตร', certifies: 'ขอมอบให้ไว้เพื่อแสดงว่า',
      completed: n => `ได้เรียนจบบทเรียนหลักครบทั้ง ${n} บทของหลักสูตร`,
      subtitle: 'สร้าง prototype ที่ส่งต่อได้ด้วย AI Agent ตั้งแต่ requirement และ Git ไปจนถึง Storybook, Merge Request และ developer handoff',
      skills: 'ทักษะที่ฝึก', issued: 'ออกให้เมื่อ', id: 'Certificate ID', course: 'หลักสูตร',
      band: ['ประกาศนียบัตร', 'หลักสูตร'], bandSub: n => `${n} บทเรียนหลัก`,
      note: 'บันทึกการเรียนจบแบบเรียนด้วยตนเอง ออกจากเว็บไซต์บทเรียน ไม่ใช่วุฒิการศึกษาที่ได้รับการรับรอง'
    },
    en: {
      kicker: 'CERTIFICATE OF COMPLETION', certifies: 'This certifies that',
      completed: n => `has completed all ${n} core lessons of`,
      subtitle: 'Build a handoff-ready prototype with AI agents — from requirement and Git to Storybook, merge request, and developer handoff.',
      skills: 'SKILLS PRACTICED', issued: 'Issued on', id: 'Certificate ID', course: 'Course',
      band: ['COURSE', 'CERTIFICATE'], bandSub: n => `${n} core lessons`,
      note: 'Self-paced completion record issued by the learning site. Not an accredited qualification.'
    }
  };
  const certAsset = { key: '', blob: null, url: '' };

  const certDate = (iso, lang) => new Intl.DateTimeFormat(lang === 'th' ? 'th-TH-u-ca-gregory' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
  const certFileName = cert => `ai-product-workshop-certificate-${cert.certId}.png`;
  const normalizeName = raw => String(raw || '').normalize('NFC').replace(/\s+/g, ' ').trim();

  function newCertId() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 32 symbols without look-alikes, so % 32 stays unbiased
    return 'AIPW-' + [...crypto.getRandomValues(new Uint8Array(8))].map(b => chars[b % 32]).join('');
  }

  function linkedInUrl(cert) {
    const d = new Date(cert.issuedAt);
    const params = new URLSearchParams({
      startTask: 'CERTIFICATION_NAME', name: 'AI Product Workshop — Certificate of Completion',
      organizationName: 'AI Product Workshop', issueYear: String(d.getFullYear()), issueMonth: String(d.getMonth() + 1),
      certUrl: course.meta.pagesUrl, certId: cert.certId
    });
    return `https://www.linkedin.com/profile/add?${params}`;
  }

  function certificatePage() {
    const cert = loadCertificate();
    const total = coreLessons.length, done = coreDone();
    let body;
    if (cert) {
      body = `<section class="block cert-view">
        <div class="cert-frame" id="certFrame" aria-busy="true">
          <img id="certImage" class="cert-image" alt="${esc(`${U('certTitle')} · ${cert.name}`)}" width="${CERT_W}" height="${CERT_H}" hidden />
          <p class="cert-status" id="certStatus" role="status">${U('certRendering')}</p>
        </div>
        <div class="cert-actions">
          <button class="btn btn-primary" type="button" data-cert-share hidden>${icon('share',16)} ${U('certShare')}</button>
          <button class="btn btn-secondary" type="button" data-cert-download disabled>${icon('download',16)} ${U('certDownload')}</button>
          <button class="btn btn-secondary" type="button" data-cert-print disabled>${icon('print',16)} ${U('certPrint')}</button>
          <a class="btn btn-secondary" href="${esc(linkedInUrl(cert))}" target="_blank" rel="noreferrer noopener">${icon('linkedin',16)} ${U('certLinkedIn')}</a>
        </div>
        <dl class="cert-meta">
          <div><dt>${U('certIssuedOn')}</dt><dd>${esc(certDate(cert.issuedAt, state.lang))}</dd></div>
          <div><dt>${U('certIdLabel')}</dt><dd><code class="inline-code">${esc(cert.certId)}</code></dd></div>
        </dl>
        <p class="cert-note">${U('certLockedNote')}</p>
        <p class="cert-note">${U('certShareNote')}</p>
      </section>`;
    } else if (done < total) {
      const pct = Math.round(done / total * 100);
      const remaining = coreLessons.filter(l => !state.completed.has(l.id));
      body = `<section class="block cert-locked">
        <p>${esc(U('certLocked')(done, total))}</p>
        <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}"><div class="progress-fill" style="width:${pct}%"></div></div>
        <h2>${U('certRemaining')}</h2>
        <nav class="lesson-nav">${remaining.map(l => `<a class="lesson-link" href="#/lesson/${l.id}"><span class="lesson-num">${esc(l.no)}</span><span>${esc(t(l.title))}</span><span class="lesson-duration">${esc(l.duration)}</span></a>`).join('')}</nav>
      </section>`;
    } else {
      body = `<section class="block cert-form-block">
        <form id="certForm" class="cert-form" novalidate>
          <label for="certName">${U('certNameLabel')}</label>
          <input id="certName" name="name" type="text" maxlength="80" autocomplete="name" placeholder="${esc(U('certNamePh'))}" aria-describedby="certNameHint certNameError" required />
          <p class="cert-hint" id="certNameHint">${U('certNameHint')}</p>
          <p class="cert-error" id="certNameError" role="alert" hidden>${U('certNameError')}</p>
          <div><button class="btn btn-primary" type="submit">${icon('award',16)} ${U('certIssue')}</button></div>
        </form>
        <div class="cert-confirm" id="certConfirm" hidden>
          <div class="block callout warning"><div class="callout-title">${U('certConfirmTitle')}</div>
            <p class="cert-confirm-name" id="certConfirmName"></p>
            <p>${U('certConfirmText')}</p></div>
          <div class="cert-actions">
            <button class="btn btn-primary" type="button" data-cert-confirm>${icon('check',16)} ${U('certConfirm')}</button>
            <button class="btn btn-secondary" type="button" data-cert-edit>${U('certEdit')}</button>
          </div>
        </div>
      </section>`;
    }
    const html = `<div class="content">
      <header class="lesson-header">
        <div class="lesson-kicker"><span class="pill">${icon('award',13)} ${U('certNav')}</span></div>
        <h1 class="lesson-title">${U('certTitle')}</h1>
        <p class="lesson-intro">${U('certIntro')}</p>
      </header>
      <div class="lesson-body">${body}</div>
    </div>`;
    return shell(html, 'certificate');
  }

  function bindCertificate() {
    const form = document.getElementById('certForm');
    if (!form) return;
    const input = document.getElementById('certName');
    const error = document.getElementById('certNameError');
    const confirmBox = document.getElementById('certConfirm');
    let pending = '';
    input.addEventListener('input', () => { error.hidden = true; input.removeAttribute('aria-invalid'); });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = normalizeName(input.value);
      if ([...name].length < 2) { error.hidden = false; input.setAttribute('aria-invalid', 'true'); input.focus(); return; }
      pending = name;
      error.hidden = true; input.removeAttribute('aria-invalid');
      document.getElementById('certConfirmName').textContent = name;
      form.hidden = true; confirmBox.hidden = false;
      confirmBox.querySelector('[data-cert-confirm]').focus();
    });
    confirmBox.querySelector('[data-cert-edit]').addEventListener('click', () => {
      confirmBox.hidden = true; form.hidden = false; input.focus();
    });
    confirmBox.querySelector('[data-cert-confirm]').addEventListener('click', () => {
      // Another tab may have issued first; keep that original rather than stamping a new date.
      if (!loadCertificate() && pending && coreDone() === coreLessons.length) {
        localStorage.setItem(STORAGE.certificate, JSON.stringify({ name: pending, issuedAt: new Date().toISOString(), certId: newCertId() }));
        showToast(U('certIssued'));
      }
      route();
    });
  }

  let certFontsReady;
  function loadCertFonts(sample) {
    if (!certFontsReady) certFontsReady = new Promise(resolve => {
      const link = document.createElement('link');
      link.rel = 'stylesheet'; link.href = CERT_FONT_CSS;
      link.onload = resolve; link.onerror = resolve;
      document.head.appendChild(link);
    });
    // Google Fonts splits Thai and Latin by unicode-range, so load with the real text to fetch every subset needed.
    const loaded = certFontsReady.then(() => Promise.all([400, 600, 700].map(w => document.fonts.load(`${w} 40px "Noto Sans Thai"`, sample))));
    // Offline or blocked fonts: fall back to system fonts rather than leaving the certificate unrendered.
    return Promise.race([loaded, new Promise(r => setTimeout(r, 4000))]).catch(() => {});
  }

  function loadImage(src) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  }

  function wrapLines(ctx, text, maxWidth, lang) {
    const parts = typeof Intl.Segmenter === 'function'
      ? [...new Intl.Segmenter(lang, { granularity: 'word' }).segment(text)].map(s => s.segment) // Thai has no spaces between words
      : text.split(/(\s+)/);
    const lines = [];
    let line = '';
    for (const part of parts) {
      if (line && ctx.measureText(line + part).width > maxWidth) { lines.push(line.trim()); line = part.trimStart(); }
      else line += part;
    }
    if (line.trim()) lines.push(line.trim());
    return lines;
  }

  function fitSize(ctx, text, weight, size, min, maxWidth) {
    while (size > min) {
      ctx.font = `${weight} ${size}px ${CERT_FONT}`;
      if (ctx.measureText(text).width <= maxWidth) break;
      size -= 2;
    }
    ctx.font = `${weight} ${size}px ${CERT_FONT}`;
    return size;
  }

  function drawCertificate(cert, lang, logo) {
    const c = CERT_COLORS, copy = CERT_COPY[lang], total = coreLessons.length;
    const canvas = document.createElement('canvas');
    canvas.width = CERT_W; canvas.height = CERT_H;
    const ctx = canvas.getContext('2d');
    const font = (weight, size) => { ctx.font = `${weight} ${size}px ${CERT_FONT}`; };
    // Letter-spacing suits Latin caps only; it breaks Thai vowel and tone-mark stacking.
    const spacing = px => { if ('letterSpacing' in ctx) ctx.letterSpacing = lang === 'th' ? '0px' : `${px}px`; };

    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, CERT_W, CERT_H);
    ctx.strokeStyle = c.primary; ctx.lineWidth = 6; ctx.strokeRect(36, 36, CERT_W - 72, CERT_H - 72);
    ctx.strokeStyle = c.line; ctx.lineWidth = 2; ctx.strokeRect(56, 56, CERT_W - 112, CERT_H - 112);

    // Right band with the seal, echoing the ribbon on course certificates.
    const bandX = 1530, bandR = CERT_W - 57, bandW = bandR - bandX, bx = bandX + bandW / 2;
    ctx.fillStyle = c.soft; ctx.fillRect(bandX, 57, bandW, CERT_H - 114);
    ctx.fillStyle = c.primary; ctx.fillRect(bandX, 57, 8, CERT_H - 114);
    const sy = 400;
    ctx.beginPath(); ctx.arc(bx, sy, 160, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();
    ctx.lineWidth = 8; ctx.strokeStyle = c.primary; ctx.stroke();
    ctx.beginPath(); ctx.arc(bx, sy, 136, 0, Math.PI * 2); ctx.lineWidth = 3; ctx.strokeStyle = c.line; ctx.stroke();
    if (logo) ctx.drawImage(logo, bx - 84, sy - 84, 168, 168);
    ctx.textAlign = 'center'; ctx.fillStyle = c.primary; font(700, 34); spacing(6);
    copy.band.forEach((line, i) => ctx.fillText(line, bx, sy + 250 + i * 50));
    spacing(0); font(600, 26); ctx.fillStyle = c.muted;
    ctx.fillText(copy.bandSub(total), bx, sy + 380);
    font(400, 21);
    const noteLines = wrapLines(ctx, copy.note, bandW - 90, lang);
    noteLines.forEach((line, i) => ctx.fillText(line, bx, CERT_H - 110 - (noteLines.length - 1 - i) * 32));

    // Main column
    const x = 150, maxW = bandX - x - 110;
    ctx.textAlign = 'left';
    if (logo) ctx.drawImage(logo, x, 118, 76, 76);
    ctx.fillStyle = c.ink; font(700, 38); ctx.fillText('AI Product Workshop', x + (logo ? 96 : 0), 170);

    ctx.fillStyle = c.primary; font(700, 30); spacing(6); ctx.fillText(copy.kicker, x, 300); spacing(0);
    ctx.fillStyle = c.muted; font(400, 32); ctx.fillText(copy.certifies, x, 410);

    let y = 525;
    ctx.fillStyle = c.ink;
    const nameSize = fitSize(ctx, cert.name, 700, 104, 60, maxW);
    const nameLines = ctx.measureText(cert.name).width > maxW ? wrapLines(ctx, cert.name, maxW, lang).slice(0, 2) : [cert.name];
    nameLines.forEach((line, i) => ctx.fillText(line, x, y + i * nameSize * 1.15));
    y += (nameLines.length - 1) * nameSize * 1.15;
    ctx.fillStyle = c.primary; ctx.fillRect(x, y + 36, 140, 6);

    y += 120; ctx.fillStyle = c.muted; font(400, 32); ctx.fillText(copy.completed(total), x, y);
    y += 82; ctx.fillStyle = c.ink; font(700, 60); ctx.fillText('AI Product Workshop', x, y);
    font(400, 29); ctx.fillStyle = c.muted;
    wrapLines(ctx, copy.subtitle, maxW, lang).slice(0, 2).forEach(line => { y += 46; ctx.fillText(line, x, y); });

    // Skill chips; a very long wrapped name pushes them down, so drop rows that would reach the footer.
    const footerY = 1215;
    y += 68; ctx.fillStyle = c.primary; font(700, 24); spacing(3); ctx.fillText(copy.skills, x, y); spacing(0);
    font(500, 23);
    let cx = x, cy = y + 20;
    const chipH = 46;
    for (const skill of t(course.final.skills)) {
      const w = ctx.measureText(skill).width + 36;
      if (cx + w > x + maxW) { cx = x; cy += chipH + 10; }
      if (cy + chipH > footerY - 24) break;
      ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(cx, cy, w, chipH, 23); else ctx.rect(cx, cy, w, chipH);
      ctx.fillStyle = c.soft; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = c.line; ctx.stroke();
      ctx.fillStyle = c.ink; ctx.fillText(skill, cx + 18, cy + 31);
      cx += w + 10;
    }

    // Footer: issued date, certificate ID, course URL.
    ctx.fillStyle = c.line; ctx.fillRect(x, footerY, maxW, 2);
    const url = course.meta.pagesUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    const cols = [[copy.issued, certDate(cert.issuedAt, lang), x], [copy.id, cert.certId, x + 430], [copy.course, url, x + 800]];
    cols.forEach(([label, value, cxPos], i) => {
      ctx.fillStyle = c.muted; font(600, 22); ctx.fillText(label, cxPos, footerY + 54);
      ctx.fillStyle = c.ink;
      const limit = i < cols.length - 1 ? cols[i + 1][2] - cxPos - 30 : x + maxW - cxPos;
      fitSize(ctx, value, i === 2 ? 500 : 700, i === 2 ? 26 : 30, 18, limit);
      ctx.fillText(value, cxPos, footerY + 96);
    });
    return canvas;
  }

  async function renderCertificateImage() {
    const cert = loadCertificate();
    const img = document.getElementById('certImage');
    if (!cert || !img) return;
    const lang = state.lang;
    const key = [lang, cert.certId, cert.name, cert.issuedAt].join('|');
    if (certAsset.key !== key) {
      const copy = CERT_COPY[lang];
      await loadCertFonts([cert.name, copy.kicker, copy.certifies, copy.subtitle, copy.note, ...t(course.final.skills), 'AI Product Workshop 0123456789'].join(' '));
      const logo = await loadImage('./assets/logo.png');
      let blob = null;
      try { blob = await new Promise(r => drawCertificate(cert, lang, logo).toBlob(r, 'image/png')); }
      catch { blob = await new Promise(r => drawCertificate(cert, lang, null).toBlob(r, 'image/png')); } // tainted canvas (e.g. file://)
      if (!blob) { document.getElementById('certStatus').textContent = U('certRenderFailed'); return; }
      if (certAsset.url) URL.revokeObjectURL(certAsset.url);
      Object.assign(certAsset, { key, blob, url: URL.createObjectURL(blob) });
    }
    // The page may have been re-rendered (language switch, navigation) while fonts were loading.
    const liveImg = document.getElementById('certImage');
    if (!liveImg || certAsset.key !== [state.lang, cert.certId, cert.name, cert.issuedAt].join('|')) return;
    liveImg.src = certAsset.url; liveImg.hidden = false;
    document.getElementById('certStatus')?.remove();
    document.getElementById('certFrame')?.setAttribute('aria-busy', 'false');
    document.querySelectorAll('[data-cert-download], [data-cert-print]').forEach(b => { b.disabled = false; });
    // Share the file itself: with no server there is no certificate link to share.
    const file = new File([certAsset.blob], certFileName(cert), { type: 'image/png' });
    const shareBtn = document.querySelector('[data-cert-share]');
    if (shareBtn && navigator.canShare?.({ files: [file] })) shareBtn.hidden = false;
  }

  async function shareCertificate() {
    const cert = loadCertificate();
    if (!cert || !certAsset.blob) return;
    const file = new File([certAsset.blob], certFileName(cert), { type: 'image/png' });
    try { await navigator.share({ files: [file], title: 'AI Product Workshop — Certificate of Completion' }); }
    catch (err) { if (err?.name !== 'AbortError') downloadCertificate(); }
  }

  function downloadCertificate() {
    const cert = loadCertificate();
    if (!cert || !certAsset.url) return;
    const a = document.createElement('a');
    a.href = certAsset.url; a.download = certFileName(cert);
    document.body.appendChild(a); a.click(); a.remove();
  }

  function printCertificate() {
    if (!certAsset.url) return;
    const holder = document.createElement('div');
    holder.id = 'certPrint';
    holder.innerHTML = `<img src="${certAsset.url}" alt="" />`;
    // Scope the landscape page size to this print only, so printing a lesson keeps the browser default.
    const pageStyle = document.createElement('style');
    pageStyle.textContent = '@page { size: A4 landscape; margin: 0; }';
    document.body.appendChild(holder); document.head.appendChild(pageStyle);
    document.body.classList.add('print-cert');
    const cleanup = () => {
      holder.remove(); pageStyle.remove(); document.body.classList.remove('print-cert');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    holder.querySelector('img').decode().catch(() => {}).then(() => window.print());
  }

  function route() {
    const skip = document.querySelector('.skip-link');
    if (skip) skip.textContent = state.lang === 'th' ? 'ข้ามไปเนื้อหาหลัก' : 'Skip to main content';
    const hash = location.hash || '#/';
    if (hash.startsWith('#/share/')) {
      const id = hash.split('/')[2];
      const lesson = course.lessons.find(l=>l.id===id);
      app.innerHTML = lesson ? sharePage(lesson) : home();
    } else if (hash.startsWith('#/lesson/')) {
      const id = hash.split('/')[2];
      const lesson = course.lessons.find(l=>l.id===id) || course.lessons[0];
      app.innerHTML = lessonPage(lesson);
    } else if (hash === '#/summary') app.innerHTML = summaryPage();
    else if (hash === '#/glossary') app.innerHTML = glossaryPage();
    else if (hash === '#/certificate') app.innerHTML = certificatePage();
    else if (hash === '#/privacy') app.innerHTML = privacyPage();
    else app.innerHTML = home();
    bind();
    if (document.getElementById('certImage')) renderCertificateImage();
    // left:0 เคลียร์ pan แนวนอนที่อาจค้างจากหน้าก่อนหน้า (ระบบ Android บางเวอร์ชัน)
    window.scrollTo({top:0,left:0,behavior:'instant'});
    setTimeout(renderMermaid, 0);
  }

  function bind() {
    stopSpeaking();
    document.querySelector('.skip-link')?.addEventListener('click', e=>{
      e.preventDefault();
      document.getElementById('main')?.focus();
    });
    document.getElementById('themeBtn')?.addEventListener('click',()=>setTheme(state.theme==='dark'?'light':'dark'));
    document.getElementById('langBtn')?.addEventListener('click',()=>{
      state.lang = state.lang==='th'?'en':'th';
      document.documentElement.lang=state.lang; persist(); route();
    });
    document.getElementById('menuBtn')?.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
    document.querySelectorAll('.lesson-link').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
    document.getElementById('resetBtn')?.addEventListener('click',()=>{
      if(confirm(U(loadCertificate()?'resetConfirmCert':'resetConfirm'))){
        state.completed.clear(); state.quiz={}; state.practice={}; state.last='prerequisites';
        localStorage.removeItem(STORAGE.certificate);
        persist(); route();
      }
    });
    bindCertificate();
    const gSearch = document.getElementById('glossarySearch');
    if (gSearch) {
      gSearch.addEventListener('input', () => applyGlossaryFilter(gSearch.value));
      applyGlossaryFilter('');
    }
    document.querySelectorAll('.reveal-btn').forEach(btn=>btn.addEventListener('click',()=>{
      const r=btn.closest('.reveal');
      r.classList.toggle('open');
      const open=r.classList.contains('open');
      btn.setAttribute('aria-expanded',String(open));
      if (btn.closest('.practice')) btn.textContent=open?U('hideExpected'):U('expected');
      else btn.textContent=open?(state.lang==='th'?'ซ่อนขั้นตอน':'Hide step-by-step'):U('guide');
    }));
    document.querySelectorAll('.quiz-btn').forEach(btn=>btn.addEventListener('click',()=>{
      const lessonId=btn.dataset.lesson; const selected=document.querySelector(`input[name="quiz-${lessonId}"]:checked`);
      if(!selected){ showToast(state.lang==='th'?'เลือกคำตอบก่อน':'Choose an answer first'); return; }
      const correct=Number(selected.value)===Number(btn.dataset.answer);
      state.quiz[lessonId]={selected:Number(selected.value),correct}; persist();
      const box=btn.parentElement.querySelector('.check-result'); box.textContent=correct?U('correct'):U('incorrect'); box.className=`check-result show ${correct?'good':'bad'}`;
      const reveal=btn.parentElement.querySelector('.reveal'); if(correct) reveal.classList.add('open');
    }));
    document.querySelectorAll('.practice input[type="checkbox"]').forEach(cb=>cb.addEventListener('change',()=>{
      const lessonId=cb.dataset.practice; const step=Number(cb.dataset.step);
      if(!lessonId) return;
      const list=Array.isArray(state.practice[lessonId]) ? state.practice[lessonId] : (state.practice[lessonId]=[]);
      const pos=list.indexOf(step);
      if(cb.checked && pos<0) list.push(step);
      else if(!cb.checked && pos>=0) list.splice(pos,1);
      cb.closest('.check-item').classList.toggle('done',cb.checked);
      const section=cb.closest('.practice');
      const count=section.querySelector('.check-count');
      if(count) count.textContent=`${list.length}/${section.querySelectorAll('.check-item').length}`;
      persist();
    }));
    document.querySelectorAll('[data-complete]').forEach(btn=>btn.addEventListener('click',()=>{
      const id=btn.dataset.complete;
      const wasDone = state.completed.has(id);
      if(wasDone) state.completed.delete(id); else state.completed.add(id);
      persist();
      if(!wasDone){
        const idx = course.lessons.findIndex(l=>l.id===id);
        const next = course.lessons[idx+1];
        const certNowReady = coreLessons.some(l=>l.id===id) && coreDone()===coreLessons.length && !loadCertificate();
        showToast(certNowReady ? U('certReady') : U('completed'), certNowReady ? 5000 : 1500);
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
        sizeInlineDiagram(el);
      }
    } catch(err){ console.warn('Mermaid render failed',err); }
    // เคลียร์ pan แนวนอนที่อาจค้างจาก render ชั่วคราว (คุมทั้ง html และ body สำหรับ browser ที่ propagate ต่างกัน)
    document.scrollingElement.scrollLeft = 0;
    document.body.scrollLeft = 0;
    // เผื่อ SVG ถูกแทนที่หลังจากนี้ (โหลดช้า/แท็บเบื้องหลัง): ยืนยันขนาดอีกรอบเมื่อทุกอย่างเซ็ตเทิล
    setTimeout(()=>{document.querySelectorAll('.mermaid[data-rendered="1"]').forEach(sizeInlineDiagram);},400);
  }

  // มือถือ: ไดอะแกรมแนวนอนที่กว้างเมื่อเทียบกับความสูง (เช่น 20:1) พอย่อให้พอดีความกว้างจอจะเหลือความสูง
  // ไม่กี่สิบพิกเซลจนอ่านไม่ได้ จึงกำหนดขนาดจริง (width/height attribute) ให้ทุก SVG หลัง render
  // โดยยึดความสูงขั้นต่ำ 170px คงสัดส่วนเดิมเสมอ ตัวที่สูงพออยู่แล้วย่อพอดีความกว้างตามเดิม
  // ส่วนตัวที่ต้องขยาย (class diagram-pinned) จะกว้างเกินกรอบ เลื่อนแนวนอนในกล่อง หรือกดขยายดูทั้งภาพได้
  const DIAGRAM_MIN_HEIGHT = 170;
  function sizeInlineDiagram(el){
    const svg=el.querySelector('svg'); const box=el.closest('.diagram');
    if(!svg||!box) return;
    const vb=svg.viewBox.baseVal;
    if(!(vb.width>0)||!(vb.height>0)) return;
    if(!window.matchMedia('(max-width: 780px)').matches){
      svg.removeAttribute('width'); svg.removeAttribute('height'); svg.style.maxWidth='';
      el.classList.remove('diagram-pinned');
      return;
    }
    const avail=box.clientWidth-32;
    if(!(avail>0)) return;
    const fitH=avail*vb.height/vb.width;
    const pinned=fitH<DIAGRAM_MIN_HEIGHT;
    const h=pinned?DIAGRAM_MIN_HEIGHT:fitH;
    svg.setAttribute('width',Math.round(h*vb.width/vb.height));
    svg.setAttribute('height',Math.round(h));
    svg.style.maxWidth=pinned?'none':'';
    el.classList.toggle('diagram-pinned',pinned);
  }
  let diagramSizeTimer=0;
  window.addEventListener('resize',()=>{
    clearTimeout(diagramSizeTimer);
    diagramSizeTimer=setTimeout(()=>{document.querySelectorAll('.mermaid[data-rendered="1"]').forEach(sizeInlineDiagram);},150);
  });

  // scale 1 (100%) = ภาพเต็มความกว้างของพื้นที่แสดงผล fit คือสัดส่วนจากขนาดจริงของ SVG ไปเป็น 100%
  const diagramModal = { el:null, content:null, body:null, title:null, zoomLabel:null, scale:1, fit:1, natural:0, panX:0, panY:0 };

  function applyDiagramTransform() {
    const rendered = diagramModal.fit * diagramModal.scale;
    diagramModal.content.style.transform = `translate(${diagramModal.panX}px, ${diagramModal.panY}px) scale(${rendered.toFixed(4)})`;
  }

  function setDiagramZoom(scale, resetPan=true) {
    diagramModal.scale = Math.max(0.4, Math.round(scale * 10) / 10);
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

  function computeDiagramFit() {
    const cs = getComputedStyle(diagramModal.body);
    const avail = diagramModal.body.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    if (!(diagramModal.natural > 0) || !(avail > 0)) { diagramModal.fit = 1; return; }
    diagramModal.fit = avail / diagramModal.natural;
  }

  function openDiagramModal(svg, title) {
    diagramModal.content.innerHTML = '';
    const clone = svg.cloneNode(true);
    // ไดอะแกรมบนจอกว้างถูกลบ width/height attribute ออกแล้วพึ่งพา flex ของ .mermaid ให้กำหนดขนาด
    // (ดู sizeInlineDiagram) แต่ในโมดัลไม่มี flex context แบบนั้น ถ้าไม่ตั้ง width เอง SVG จะไม่มี
    // ขนาดตั้งต้นให้ layout อ้างอิง (แม้มี viewBox) จนกลายเป็นกล่องขนาด 0 ทั้งภาพและการวัด natural width
    const vb = clone.viewBox && clone.viewBox.baseVal;
    if (vb && vb.width > 0) clone.setAttribute('width', vb.width);
    diagramModal.content.appendChild(clone);
    diagramModal.title.textContent = title;
    diagramModal.panX = 0; diagramModal.panY = 0;
    diagramModal.el.classList.add('open');
    diagramModal.el.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // วัดความกว้างจริงของ SVG ตอนยังไม่มี transform และปิด transition ชั่วคราว ไม่ให้ค่าที่อ่านได้ติด animation
    const svgEl = diagramModal.content.querySelector('svg');
    const prevTransition = diagramModal.content.style.transition;
    diagramModal.content.style.transition = 'none';
    diagramModal.fit = 1; diagramModal.scale = 1; applyDiagramTransform();
    diagramModal.natural = svgEl ? svgEl.getBoundingClientRect().width : 0;
    diagramModal.content.style.transition = prevTransition;
    computeDiagramFit();
    setDiagramZoom(1);
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
    window.addEventListener('resize', () => {
      if (!diagramModal.el.classList.contains('open')) return;
      computeDiagramFit();
      applyDiagramTransform();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && diagramModal.el.classList.contains('open')) closeDiagramModal();
    });
    document.addEventListener('click', e => {
      const btn = e.target.closest('.diagram-expand');
      if (!btn) return;
      // เลือก SVG ของตัวแปรที่กำลังแสดงจริง (desktop/mobile) เพื่อขยายเป็นภาพที่ผู้ใช้เห็น
      const wrap = btn.parentElement;
      const source = [...wrap.querySelectorAll('.mermaid')].find(m => m.offsetParent !== null) || wrap.querySelector('.mermaid');
      const svg = source?.querySelector('svg');
      if (!svg) return;
      openDiagramModal(svg, btn.dataset.diagramTitle || '');
    });
  }

  async function copyText(value, message) {
    try { await navigator.clipboard.writeText(value); }
    catch {
      const ta = document.createElement('textarea');
      ta.value = value; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove();
    }
    showToast(message || U('copied'));
  }

  function shareLesson(lessonId) {
    const lesson = course.lessons.find(l => l.id === lessonId);
    shareUrl(lesson ? t(lesson.title) : document.title, `${location.origin}${location.pathname}#/share/${lessonId}`);
  }

  async function shareUrl(title, url) {
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; }
      catch (err) { if (err?.name === 'AbortError') return; }
    }
    copyText(url, U('linkCopied'));
  }

  // Shared speech player keeps the lesson and slide controls in sync with browser voices.
  const speech = window.CourseSpeech.createPlayer({
    onState: () => renderSpeakArea(),
    onProgress: () => updateSpeakProgress(),
    onError: code => showToast(U(code === 'noVoice' ? 'noVoice' : 'speechFailed'), 5000)
  });
  const SPEAK_RATES = window.CourseSpeech.rates;
  const SPEAK_SELECTOR = 'h1, h2, h3, p, li, summary, .callout-title, .goal, .cmd-expect, .option, .compare > strong, .prompt-after > strong, .practice-label';
  // Read visible prose only, leaving hidden answers, code, and diagrams to visual review.
  const SPEAK_SKIP = '.reveal:not(.open), details:not([open]), [hidden], .code-wrap, .mermaid, .diagram, .prompt-hint';

  function collectSpeakables(root) {
    return [...root.querySelectorAll(SPEAK_SELECTOR)]
      .filter(el => !el.closest(SPEAK_SKIP))
      .filter(el => !el.querySelector(SPEAK_SELECTOR))
      .map(el => el.textContent.replace(/\s+/g, ' ').trim())
      .filter(Boolean);
  }

  function speakStartHTML() {
    return `<button class="btn btn-secondary btn-small speak-btn" type="button" data-speak-start>${icon('speaker', 15)} <span>${esc(U('listen'))}</span></button>`;
  }

  function speakPanelHTML() {
    const pct = speech.chunks.length ? Math.min(100, Math.round(speech.done / speech.chunks.length * 100)) : 0;
    return `<div class="speak-panel" role="group" aria-label="${esc(U('speakControls'))}">
      <button class="btn btn-secondary btn-small" type="button" data-speak-pause aria-pressed="${speech.paused}" ${speech.loading ? 'disabled' : ''}>${icon(speech.paused ? 'play' : 'pause', 15)} <span>${esc(speech.loading ? U('speakLoading') : speech.paused ? U('speakResume') : U('speakPause'))}</span></button>
      <button class="btn btn-secondary btn-small" type="button" data-speak-stop>${icon('stop', 15)} <span>${esc(U('speakStop'))}</span></button>
      <span class="lang-switch lang-switch-compact rate-switch" role="group" aria-label="${esc(U('speakSpeed'))}">${SPEAK_RATES.map(r => `<button type="button" class="lang-opt${speech.rate === r ? ' active' : ''}" data-speak-rate="${r}" aria-pressed="${speech.rate === r}">${r}×</button>`).join('')}</span>
      <span class="speak-progress" role="progressbar" aria-label="${esc(U('speakProgress'))}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><i style="width:${pct}%"></i></span>
    </div>`;
  }

  function renderSpeakArea() {
    const focused = document.activeElement;
    const focusSelector = focused?.matches('[data-speak-rate]') ? `[data-speak-rate="${focused.dataset.speakRate}"]`
      : focused?.matches('[data-speak-stop]') ? (speech.active ? '[data-speak-stop]' : '[data-speak-start]')
      : focused?.matches('[data-speak-pause], [data-speak-start]') ? (speech.active ? '[data-speak-pause]' : '[data-speak-start]')
      : null;
    document.querySelectorAll('.speak-area').forEach(area => { area.innerHTML = speech.active ? speakPanelHTML() : speakStartHTML(); });
    if (focusSelector) {
      const target = document.querySelector(`.speak-area ${focusSelector}`);
      (target?.disabled ? document.querySelector('.speak-area [data-speak-stop]') : target)?.focus({ preventScroll: true });
    }
  }

  function updateSpeakProgress() {
    const pct = speech.chunks.length ? Math.min(100, Math.round(speech.done / speech.chunks.length * 100)) : 0;
    document.querySelectorAll('.speak-progress').forEach(bar => {
      bar.setAttribute('aria-valuenow', String(pct));
      const fill = bar.querySelector('i');
      if (fill) fill.style.width = pct + '%';
    });
  }

  function stopSpeaking() { speech.stop(); }

  function toggleSpeaking() {
    const header = document.querySelector('.content .lesson-header');
    const body = document.querySelector('.content .lesson-body');
    if (!header || !body) return;
    speech.play([...collectSpeakables(header), ...collectSpeakables(body)], state.lang, state.speakRate);
  }

  function toggleSpeakPause() {
    if (speech.paused) speech.resume();
    else speech.pause();
  }

  function setSpeakRate(rate) {
    if (!SPEAK_RATES.includes(rate)) return;
    state.speakRate = rate;
    persist();
    speech.setRate(rate);
  }

  function initDelegation() {
    document.addEventListener('click', e => {
      const speakStart = e.target.closest('[data-speak-start]');
      if (speakStart) { toggleSpeaking(); return; }
      const speakPauseBtn = e.target.closest('[data-speak-pause]');
      if (speakPauseBtn) { toggleSpeakPause(); return; }
      const speakStopBtn = e.target.closest('[data-speak-stop]');
      if (speakStopBtn) { stopSpeaking(); return; }
      const speakRateBtn = e.target.closest('[data-speak-rate]');
      if (speakRateBtn) { setSpeakRate(parseFloat(speakRateBtn.dataset.speakRate)); return; }
      const copyBtn = e.target.closest('.copy-btn');
      if (copyBtn) { copyText(decodeURIComponent(copyBtn.dataset.copy || '')); return; }
      const shareBtn = e.target.closest('[data-share-lesson]');
      if (shareBtn) { shareLesson(shareBtn.dataset.shareLesson); return; }
      if (e.target.closest('[data-share-site]')) { shareUrl(document.title, `${location.origin}${location.pathname}`); return; }
      if (e.target.closest('[data-cert-share]')) { shareCertificate(); return; }
      if (e.target.closest('[data-cert-download]')) { downloadCertificate(); return; }
      if (e.target.closest('[data-cert-print]')) { printCertificate(); return; }
      const exBtn = e.target.closest('[data-prompt-example]');
      if (exBtn) {
        const bl = exBtn.closest('.prompt-block');
        if (bl) {
          bl.dataset.exampleActive = bl.dataset.exampleActive === '1' ? '0' : '1';
          renderPromptBlock(bl);
        }
      }
      const langBtn = e.target.closest('[data-prompt-lang]');
      if (langBtn) {
        state.promptLang = langBtn.dataset.promptLang;
        persist();
        const bl = langBtn.closest('.prompt-block');
        if (bl) bl.dataset.exampleActive = '0';
        applyPromptLang();
      }
      const agentToolBtn = e.target.closest('[data-agent-tool]');
      if (agentToolBtn) {
        const setupSection = agentToolBtn.closest('[data-agent-setup]');
        state[setupSection?.dataset.agentSetup || 'agentTool'] = agentToolBtn.dataset.agentTool;
        persist();
        applyAgentTool();
      }
    });
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('pagehide', stopSpeaking);
  window.addEventListener('mermaid-ready', renderMermaid);
  initDiagramModal();
  initDelegation();
  route();
})();
