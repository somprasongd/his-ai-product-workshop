window.COURSE = {
  meta: {
    title: { th: 'HIS AI Product Workshop', en: 'HIS AI Product Workshop' },
    subtitle: {
      th: 'เรียนรู้การทำ Product ด้วย AI Agent สำหรับ PM, BA และ Product Design โดยไม่ต้องเริ่มจากการเขียนโค้ด',
      en: 'AI-assisted product development for PM, BA, and Product Design — without starting from coding.'
    },
    starterUrl: 'https://github.com/somprasongd/his-ai-opd-checkin-starter',
    sourceUrl: 'https://github.com/somprasongd/his-ai-product-workshop',
    pagesUrl: 'https://somprasongd.github.io/his-ai-product-workshop/'
  },
  groups: [
    { id:'start', th:'เตรียมพร้อม', en:'Get ready' },
    { id:'day1', th:'Day 1 · จาก Requirement สู่ AI Workspace', en:'Day 1 · Requirement to AI Workspace' },
    { id:'day2', th:'Day 2 · จาก Requirement สู่ Component', en:'Day 2 · Requirement to Components' },
    { id:'day3', th:'Day 3 · Integration, Debug & Delivery', en:'Day 3 · Integration, Debug & Delivery' },
    { id:'capstone', th:'Capstone', en:'Capstone' }
  ],
  lessons: [
    {
      id:'prerequisites', group:'start', no:'00', duration:'60 min', kind:'setup',
      title:{th:'Prerequisites & Environment Setup',en:'Prerequisites & Environment Setup'},
      intro:{th:'เตรียมเครื่องมือให้พร้อมก่อนเริ่ม เพื่อให้เวลาเรียนใช้ไปกับการเข้าใจ workflow ไม่ใช่การแก้ปัญหา installation',en:'Prepare the environment first so class time is spent understanding the workflow, not fighting installation issues.'},
      outcomes:{th:['รู้ว่าเครื่องมือแต่ละตัวใช้ทำอะไร','ตรวจสอบว่า Git, Node.js, Editor และ AI Agent พร้อมใช้งาน','ตั้ง Git identity และมี repository ของตัวเองที่เปิด Issue และ push ได้','รัน Next.js และ Storybook ได้','เข้าใจกฎข้อมูลสำหรับ training: ใช้ mock/synthetic data เท่านั้น'],en:['Know what each tool is for','Verify Git, Node.js, editor, and AI agent setup','Set your Git identity and own a repository you can file issues and push to','Run Next.js and Storybook','Understand the training data rule: mock/synthetic data only']},
      blocks:[
        {type:'callout',tone:'warning',title:{th:'เป้าหมายของคอร์สนี้',en:'Course boundary'},text:{th:'คอร์สนี้ไม่สอน Backend, Database หรือ REST API implementation เราจะจำลอง Data/API เพื่อโฟกัสที่ Product thinking, UI states, Git workflow และการกำกับ AI Agent',en:'This course does not teach backend, database, or REST API implementation. Data/API behavior is mocked so we can focus on product thinking, UI states, Git workflow, and supervising an AI agent.'}},
        {type:'prose',title:{th:'ทำไมต้องเสียเวลากับ Setup ก่อน',en:'Why setup comes first'},body:{th:[
          'ในคอร์สที่มีคนเรียนสายธุรกิจเป็นหลัก เวลาที่เสียไปมากที่สุดมักไม่ใช่เรื่องยากทางความคิด แต่เป็น “เครื่องของฉันรันไม่ได้” การเตรียมเครื่องให้เสร็จก่อนวันเรียน ทำให้เราใช้เวลาไปกับสิ่งที่มีค่าจริง คือการฝึกกำกับ AI Agent',
          'เครื่องมือในคอร์สนี้แบ่งเป็น 4 กลุ่ม และแต่ละกลุ่มตอบคำถามคนละข้อ ถ้าเข้าใจว่าแต่ละตัวตอบคำถามอะไร คุณจะรู้ทันทีว่าเวลามีปัญหาควรไปดูที่ไหน',
          '**Git** ตอบว่า “อะไรเปลี่ยนไปบ้าง และงานนี้อยู่บนสายงานไหน” · **Node.js กับ npm** ตอบว่า “จะรันโปรเจกต์นี้ได้อย่างไร” · **Editor กับ Browser** ตอบว่า “ผลลัพธ์หน้าตาเป็นอย่างไร และ error อยู่ตรงไหน” · **AI Agent** ตอบว่า “ใครจะเป็นคนลงมือแก้ไฟล์”'
        ],en:[
          'In a course built for business-side learners, the biggest time sink is rarely the hard thinking — it is “my machine does not run it.” Getting the environment ready before class means class time goes into the valuable part: practising how to direct an AI agent.',
          'The tools in this course fall into four groups, and each answers a different question. Once you know which question each tool answers, you also know where to look when something breaks.',
          '**Git** answers “what changed, and which line of work is this on?” · **Node.js and npm** answer “how do I run this project?” · **Editor and browser** answer “what does the result look like, and where is the error?” · **The AI agent** answers “who actually edits the files?”'
        ]}},
        {type:'diagram',title:{th:'เครื่องมือ 4 กลุ่มทำงานร่วมกันอย่างไร',en:'How the four tool groups work together'},
          lead:{th:'ภาพนี้ไม่ได้บอกวิธีติดตั้ง แต่บอกว่าเครื่องมือแต่ละตัวยืนอยู่ตรงไหนของวงจรการทำงาน',en:'This picture is not an install guide; it shows where each tool sits in the working loop.'},
          diagram:`flowchart LR\nYou[คุณ / You] --> Agent[AI Agent\\nChatGPT / Claude Desktop]\nAgent --> Files[Source code\\nin the repository]\nFiles --> Git[Git\\ntracks every change]\nFiles --> Node[Node.js + npm\\nruns the project]\nNode --> App[Next.js\\nlocalhost:3000]\nNode --> SB[Storybook\\nlocalhost:6006]\nApp --> You\nSB --> You\nGit --> MR[Merge Request]`,
          notes:{th:['คุณสั่งงาน Agent ด้วยภาษาคน ไม่ใช่การแก้ไฟล์เอง','Agent แก้ไฟล์ในโฟลเดอร์โปรเจกต์ — Git คือสิ่งที่บันทึกว่าไฟล์ไหนเปลี่ยนไปบ้าง','Node.js/npm เป็นตัวรันโปรเจกต์ ทำให้เกิด 2 หน้าต่างที่เราใช้ตรวจงาน คือ Next.js app และ Storybook','ลูกศรที่วิ่งกลับมาหา “คุณ” คือจุดที่คนต้องตัดสินใจว่างานผ่านหรือไม่ผ่าน'],en:['You instruct the agent in human language rather than editing files yourself','The agent edits files in the project folder — Git is what records which files changed','Node.js/npm runs the project, producing the two review surfaces: the Next.js app and Storybook','The arrows returning to “you” are where a human decides whether the work passes']}},
        {type:'list',title:{th:'ติดตั้งก่อนเรียน',en:'Install before class'},items:{th:['[Git](https://git-scm.com/downloads) เวอร์ชันปัจจุบัน','[Node.js](https://nodejs.org/) 20.9+ (ข้อกำหนดขั้นต่ำของ Next.js 16)','[VS Code](https://code.visualstudio.com/) หรือ editor ที่ทีมใช้','[Chrome](https://www.google.com/chrome/) หรือ [Edge](https://www.microsoft.com/edge) สำหรับ DevTools','เลือก AI Agent แบบแอป desktop อย่างน้อย 1 ตัว: [ChatGPT Desktop App](https://openai.com/chatgpt/download/) หรือ [Claude Desktop App](https://claude.com/download) — ไม่ต้องใช้ CLI','บัญชีที่เก็บโค้ดของคุณเอง: [GitHub](https://github.com/signup) หรือ GitLab (gitlab.com หรือ GitLab ของบริษัท) — ต้องมี เพราะคุณจะต้องเปิด Issue และ push branch ด้วยบัญชีตัวเอง','ทางเลือก: [GitHub CLI](https://cli.github.com/) หรือ [GitLab CLI](https://gitlab.com/gitlab-org/cli) ใช้ในบทที่ 15 เพื่อให้ Agent ช่วยสร้าง Issue และ MR ตาม template'],en:['[Git](https://git-scm.com/downloads), current version','[Node.js](https://nodejs.org/) 20.9+ (minimum for Next.js 16)','[VS Code](https://code.visualstudio.com/) or your team editor','[Chrome](https://www.google.com/chrome/) or [Edge](https://www.microsoft.com/edge) for DevTools','At least one AI agent desktop app: [ChatGPT Desktop App](https://openai.com/chatgpt/download/) or [Claude Desktop App](https://claude.com/download) — no CLI needed','An account that will host your own copy of the code: [GitHub](https://github.com/signup) or GitLab (gitlab.com or your company server) — required, because you will file issues and push branches under your own account','Optional: [GitHub CLI](https://cli.github.com/) or [GitLab CLI](https://gitlab.com/gitlab-org/cli), used in lesson 15 so the agent can create issues and MRs from your template']}},
        {type:'commands',title:{th:'ตรวจว่าเครื่องพร้อมจริงหรือยัง',en:'Verify the machine is actually ready'},
          lead:{th:'พิมพ์ทีละคำสั่งใน Terminal แล้วดูผลลัพธ์ก่อนไปคำสั่งถัดไป ถ้าคำสั่งไหนขึ้นว่า command not found แปลว่ายังติดตั้งไม่สำเร็จ ให้แก้ตรงนั้นก่อน',en:'Type one command at a time in the terminal and read the result before moving on. A “command not found” message means that tool is not installed yet — fix it before continuing.'},
          steps:[
            {title:{th:'ตรวจว่ามี Git และเป็นเวอร์ชันไหน',en:'Check that Git exists and which version'},what:{th:'`--version` เป็นวิธีมาตรฐานในการถามโปรแกรมว่า “คุณอยู่ไหม และเป็นรุ่นอะไร” เราใช้ Git ตลอดคอร์สเพื่อดูว่า AI เปลี่ยนอะไรไปบ้าง',en:'`--version` is the standard way to ask a program “are you there, and which release?” We use Git all course long to see what the AI changed.'},cmd:`git --version`,expect:{th:'บรรทัดเดียวคล้าย `git version 2.43.0` ตัวเลขไม่ต้องตรงกับเพื่อน',en:'A single line like `git version 2.43.0`. The exact number does not need to match anyone else.'}},
            {title:{th:'ตรวจ Node.js',en:'Check Node.js'},what:{th:'Node.js คือตัวที่รัน JavaScript นอก browser — Next.js และ Storybook รันอยู่บนมัน คอร์สนี้ต้องการเวอร์ชัน 20.9 ขึ้นไป',en:'Node.js runs JavaScript outside the browser — both Next.js and Storybook sit on top of it. This course needs version 20.9 or newer.'},cmd:`node --version`,expect:{th:'ตัวเลขขึ้นต้นด้วย `v20.` หรือสูงกว่า เช่น `v22.11.0` ถ้าได้ `v18` ให้อัปเกรดก่อน',en:'A number starting with `v20.` or higher, e.g. `v22.11.0`. If you see `v18`, upgrade first.'}},
            {title:{th:'ตรวจ npm',en:'Check npm'},what:{th:'npm มาพร้อม Node.js ทำหน้าที่ 2 อย่าง คือ ดาวน์โหลด dependency ของโปรเจกต์ และรัน script เช่น `npm run dev`',en:'npm ships with Node.js and does two jobs: download the project dependencies, and run scripts such as `npm run dev`.'},cmd:`npm --version`,expect:{th:'ตัวเลขเช่น `10.8.2` ถ้าไม่ขึ้นแปลว่า Node.js ติดตั้งไม่สมบูรณ์',en:'A number such as `10.8.2`. If nothing appears, the Node.js install is incomplete.'}}
          ],
          outro:{th:'จดผลลัพธ์ทั้งสามบรรทัดไว้ ถ้าวันเรียนมีปัญหา ผู้สอนจะถามหาข้อมูลชุดนี้เป็นอย่างแรก',en:'Note all three outputs. If something breaks in class, this is the first information the instructor will ask for.'}},
        {type:'commands',title:{th:'บอก Git ว่าคุณเป็นใคร',en:'Tell Git who you are'},
          lead:{th:'ทุก commit จะถูกเซ็นชื่อด้วยข้อมูลสองบรรทัดนี้ ถ้ายังไม่ตั้ง commit แรกของคุณจะขึ้น error และหยุดกลางคัน ตั้งครั้งเดียวใช้ได้ทุกโปรเจกต์ในเครื่อง',en:'Every commit is signed with these two values. Without them your first commit stops with an error. Set them once and they apply to every project on this machine.'},
          steps:[
            {title:{th:'ตั้งชื่อที่จะปรากฏในประวัติ',en:'Set the name that appears in history'},what:{th:'ใช้ชื่อจริงหรือชื่อที่ทีมรู้จัก เพราะชื่อนี้จะติดอยู่กับทุก commit ตลอดไป และเป็นสิ่งที่คนอื่นใช้ตามหาเจ้าของงาน',en:'Use your real name or the name your team knows you by. It stays attached to every commit forever and is how people find the owner of a change.'},cmd:`git config --global user.name "Your Name"`,expect:{th:'ไม่มีข้อความตอบกลับ แปลว่าสำเร็จ (Git เงียบเมื่อทำงานสำเร็จ)',en:'No output at all — Git stays silent on success.'}},
            {title:{th:'ตั้งอีเมลให้ตรงกับบัญชี GitHub/GitLab',en:'Set the email that matches your GitHub/GitLab account'},what:{th:'อีเมลนี้คือสิ่งที่ GitHub และ GitLab ใช้จับคู่ commit กับบัญชีของคุณ ถ้าใส่ไม่ตรง commit จะแสดงเป็นคนแปลกหน้าในหน้าเว็บ',en:'GitHub and GitLab use this email to link a commit to your account. If it does not match, your commits show up as a stranger on the web UI.'},cmd:`git config --global user.email "you@example.com"`,expect:{th:'ไม่มีข้อความตอบกลับเช่นกัน',en:'Again, no output.'}},
            {title:{th:'ตรวจว่าตั้งค่าติดจริง',en:'Verify the values stuck'},what:{th:'คำสั่งนี้อ่านค่าที่เพิ่งตั้งกลับมาให้ดู ถ้าไม่ขึ้นอะไรเลยแปลว่าพิมพ์คำสั่งก่อนหน้าผิด ให้ทำซ้ำ',en:'This reads back what you just set. If nothing appears, the previous commands were mistyped — run them again.'},cmd:`git config --global --get user.name
git config --global --get user.email`,expect:{th:'สองบรรทัด คือชื่อและอีเมลที่คุณเพิ่งตั้ง',en:'Two lines: the name and email you just set.'}}
          ],
          outro:{th:'เรื่อง credential ตอน push ไม่ต้องตั้งล่วงหน้า ครั้งแรกที่ `git push` Git จะเปิด browser ให้ล็อกอินเอง (Git Credential Manager) แล้วจำไว้ให้ครั้งต่อไป',en:'You do not need to set up push credentials in advance. The first `git push` opens a browser sign-in (Git Credential Manager) and remembers it afterwards.'}},
        {type:'agent-setup',store:'repoHost',title:{th:'สร้าง repository ของคุณเอง',en:'Create a repository of your own'},
          lead:{th:'อย่าเพิ่ง clone repo ของผู้สอนตรง ๆ เพราะคุณจะเปิด Issue ไม่ได้และ push ไม่ได้ ตั้งแต่บทที่ 02 เป็นต้นไปคุณต้องมี repository ที่ **คุณเป็นเจ้าของ** เลือกแท็บตามที่ทีมคุณใช้ ผลลัพธ์ปลายทางเหมือนกันทั้งสองทาง',en:'Do not clone the instructor’s repo directly — you would not be able to file issues or push. From lesson 02 onwards you need a repository **you own**. Pick the tab that matches your team; both paths end in the same place.'},
          tools:[
            {id:'github',name:{th:'GitHub · Fork',en:'GitHub · Fork'},steps:[
              {title:{th:'ล็อกอิน GitHub',en:'Sign in to GitHub'},what:{th:'เปิด [github.com](https://github.com/) แล้วล็อกอิน ถ้ายังไม่มีบัญชีให้ [สมัครก่อน](https://github.com/signup) ใช้อีเมลเดียวกับที่ตั้งไว้ใน `git config` เมื่อครู่',en:'Open [github.com](https://github.com/) and sign in. If you have no account, [sign up](https://github.com/signup) first — use the same email you just set in `git config`.'},expect:{th:'เห็นหน้า dashboard ของบัญชีตัวเอง',en:'You land on your account dashboard.'}},
              {title:{th:'Fork starter เข้าบัญชีของคุณ',en:'Fork the starter into your account'},what:{th:'เปิด [starter repository](https://github.com/somprasongd/his-ai-opd-checkin-starter) แล้วกดปุ่ม **Fork** → **Create fork** — Fork คือการสร้างสำเนา repo ไว้ใต้บัญชีของคุณ ต่างจาก clone ตรงที่ clone อย่างเดียวได้แค่ “อ่าน” แต่ fork ทำให้คุณ push branch, เปิด Issue และเปิด Pull Request ได้เอง',en:'Open the [starter repository](https://github.com/somprasongd/his-ai-opd-checkin-starter) and press **Fork** → **Create fork**. A fork is a copy under your own account. Cloning alone only lets you read; a fork lets you push branches, open issues, and open pull requests.'},expect:{th:'URL เปลี่ยนเป็น `github.com/<ชื่อบัญชีคุณ>/his-ai-opd-checkin-starter`',en:'The URL becomes `github.com/<your-username>/his-ai-opd-checkin-starter`.'}},
              {title:{th:'เปิดใช้งาน Issues ใน fork',en:'Turn on Issues in your fork'},what:{th:'GitHub ปิดแท็บ Issues ของ fork ไว้เป็นค่าเริ่มต้น ให้ไปที่ **Settings → General → Features** แล้วติ๊ก **Issues** ขั้นนี้สำคัญ เพราะบทที่ 02 จะให้คุณเปิด Issue จริงในนี้',en:'GitHub disables the Issues tab on forks by default. Go to **Settings → General → Features** and tick **Issues**. This matters: lesson 02 has you file a real issue here.'},expect:{th:'แท็บ **Issues** ปรากฏขึ้นบนหน้า repo ของคุณ',en:'The **Issues** tab appears on your repository page.'}},
              {title:{th:'Clone fork ของคุณลงเครื่อง',en:'Clone your fork to your machine'},what:{th:'แทนที่ `<ชื่อบัญชีคุณ>` ด้วยชื่อบัญชี GitHub ของคุณจริง ๆ ถ้า clone ผิด repo คุณจะไปเจอปัญหา push ไม่ได้ตอนวันสุดท้าย',en:'Replace `<your-username>` with your actual GitHub account name. Cloning the wrong repo only surfaces as a push failure on the last day.'},cmd:`git clone https://github.com/<your-username>/his-ai-opd-checkin-starter.git`,expect:{th:'โฟลเดอร์ใหม่ชื่อ `his-ai-opd-checkin-starter` ปรากฏขึ้น',en:'A new folder named `his-ai-opd-checkin-starter` appears.'}},
              {title:{th:'ยืนยันว่า origin ชี้ไปที่ของคุณ',en:'Confirm origin points at your copy'},what:{th:'`origin` คือชื่อเล่นของ remote ปลายทางที่เราจะ push ขึ้นไป ต้องเป็นบัญชีของคุณ ไม่ใช่ `somprasongd`',en:'`origin` is the nickname of the remote you push to. It must be your account, not `somprasongd`.'},cmd:`cd his-ai-opd-checkin-starter
git remote -v`,expect:{th:'สองบรรทัดที่มีชื่อบัญชีของคุณ และลงท้ายด้วย `(fetch)` กับ `(push)`',en:'Two lines containing your username, ending in `(fetch)` and `(push)`.'}},
              {title:{th:'ทางเลือก: ติดตั้ง GitHub CLI',en:'Optional: install the GitHub CLI'},what:{th:'`gh` ทำให้สร้าง Issue และ Pull Request ได้จาก Terminal ซึ่งบทที่ 15 จะใช้ทำเป็น skill ให้ Agent เรียก ติดตั้งด้วย `brew install gh` (macOS) หรือ `winget install GitHub.cli` (Windows) แล้วค่อยล็อกอิน ถ้ายังไม่พร้อมตอนนี้ ข้ามได้ ใช้หน้าเว็บแทนได้ทั้งคอร์ส',en:'`gh` creates issues and pull requests from the terminal; lesson 15 wraps it in a skill the agent can call. Install with `brew install gh` (macOS) or `winget install GitHub.cli` (Windows), then sign in. Skip it for now if you prefer — the web UI works all course.'},cmd:`gh auth login
gh auth status`,expect:{th:'`gh auth status` บอกว่า Logged in to github.com พร้อมชื่อบัญชีของคุณ',en:'`gh auth status` reports “Logged in to github.com” with your account name.'}}
            ]},
            {id:'gitlab',name:{th:'GitLab · สร้าง project เอง',en:'GitLab · Create your own project'},steps:[
              {title:{th:'ล็อกอิน GitLab ที่ทีมใช้',en:'Sign in to the GitLab you use'},what:{th:'ใช้ [gitlab.com](https://gitlab.com/users/sign_in) หรือ GitLab ของบริษัทก็ได้ ถ้าเป็นของบริษัท ให้ใช้ URL ภายในที่ทีมให้มา และตรวจว่าคุณมีสิทธิ์สร้าง project ใน group ของตัวเอง',en:'Use [gitlab.com](https://gitlab.com/users/sign_in) or your company GitLab. For a company server use the internal URL your team gave you, and check that you may create a project in your own namespace.'},expect:{th:'เข้าหน้า Projects ของบัญชีตัวเองได้',en:'You reach the Projects page of your own account.'}},
              {title:{th:'ดาวน์โหลด starter เป็น ZIP',en:'Download the starter as a ZIP'},what:{th:'เปิด [starter repository](https://github.com/somprasongd/his-ai-opd-checkin-starter) กด **Code → Download ZIP** แล้วแตกไฟล์ เปลี่ยนชื่อโฟลเดอร์ให้เป็น `his-ai-opd-checkin-starter` เหตุผลที่ดาวน์โหลดแทนการ clone คือเราจะเริ่มประวัติ (history) ใหม่ใน repository ของคุณเอง ไม่ผูกกับ repo ต้นทาง',en:'Open the [starter repository](https://github.com/somprasongd/his-ai-opd-checkin-starter), press **Code → Download ZIP**, unzip it, and rename the folder to `his-ai-opd-checkin-starter`. We download rather than clone because we want a fresh history inside your own repository, unattached to the source repo.'},expect:{th:'มีโฟลเดอร์โปรเจกต์ในเครื่อง และยังไม่มีโฟลเดอร์ `.git` ข้างใน',en:'You have the project folder locally, with no `.git` folder inside it yet.'}},
              {title:{th:'สร้าง Blank project ใน GitLab',en:'Create a blank project in GitLab'},what:{th:'กด **New project → Create blank project** ตั้งชื่อ `his-ai-opd-checkin-starter` เลือก Visibility เป็น **Private** และ **อย่าติ๊ก** “Initialize repository with a README” เพราะถ้าติ๊ก repo จะมี commit อยู่ก่อนแล้ว ทำให้ push ครั้งแรกชนกัน',en:'Press **New project → Create blank project**, name it `his-ai-opd-checkin-starter`, set visibility to **Private**, and **do not tick** “Initialize repository with a README” — that would create a commit first and make your initial push collide.'},expect:{th:'GitLab แสดงหน้า project เปล่า พร้อมคำแนะนำการ push และ URL ของ repo',en:'GitLab shows an empty project page with push instructions and the repo URL.'}},
              {title:{th:'เริ่มประวัติของโปรเจกต์ในเครื่อง',en:'Start the project history locally'},what:{th:'`git init -b main` สร้าง repository เปล่าในโฟลเดอร์นี้โดยตั้งชื่อ branch หลักว่า `main` จากนั้นบันทึกไฟล์ทั้งหมดเป็น commit แรก ข้อความ `chore:` ใช้กับงานตั้งต้นที่ไม่ใช่ฟีเจอร์',en:'`git init -b main` creates an empty repository here with `main` as the default branch, then records every file as the first commit. The `chore:` prefix marks setup work that is not a feature.'},cmd:`cd his-ai-opd-checkin-starter
git init -b main
git add .
git commit -m "chore: import training starter"`,expect:{th:'ข้อความสรุปจำนวนไฟล์ที่ถูกบันทึกใน commit แรก',en:'A summary of how many files went into the first commit.'}},
              {title:{th:'ผูกกับ GitLab แล้ว push ขึ้นไป',en:'Connect it to GitLab and push'},what:{th:'`git remote add origin` คือการบอกว่าปลายทางของเราอยู่ที่ไหน คัดลอก URL จากหน้า project ที่เพิ่งสร้าง (ถ้าเป็น GitLab บริษัท host จะเป็นของบริษัท ไม่ใช่ gitlab.com)',en:'`git remote add origin` tells Git where your destination is. Copy the URL from the project page you just created (a company GitLab uses your internal host, not gitlab.com).'},cmd:`git remote add origin https://gitlab.com/<your-username>/his-ai-opd-checkin-starter.git
git push -u origin main`,expect:{th:'รีเฟรชหน้า GitLab แล้วเห็นไฟล์ของโปรเจกต์และ branch `main`',en:'Refresh the GitLab page and you see the project files and the `main` branch.'}},
              {title:{th:'ทางเลือก: ติดตั้ง GitLab CLI',en:'Optional: install the GitLab CLI'},what:{th:'`glab` ทำให้สร้าง Issue และ Merge Request ได้จาก Terminal ซึ่งบทที่ 15 จะใช้ทำเป็น skill ให้ Agent เรียก ติดตั้งด้วย `brew install glab` (macOS) หรือ `winget install glab` (Windows) ถ้าใช้ GitLab ของบริษัท ต้องระบุ `--hostname` ตอนล็อกอิน ถ้ายังไม่พร้อม ข้ามได้ ใช้หน้าเว็บแทนได้ทั้งคอร์ส',en:'`glab` creates issues and merge requests from the terminal; lesson 15 wraps it in a skill the agent can call. Install with `brew install glab` (macOS) or `winget install glab` (Windows). On a company GitLab you must pass `--hostname` when signing in. Skip it for now if you prefer — the web UI works all course.'},cmd:`glab auth login --hostname gitlab.com
glab auth status`,expect:{th:'`glab auth status` บอกว่าล็อกอินกับ host ที่ระบุสำเร็จ',en:'`glab auth status` reports a successful login to that host.'}}
            ]}
          ],
          outro:{th:'ไม่ว่าจะเลือกทางไหน สิ่งที่ต้องได้เหมือนกันคือ repository ที่คุณเป็นเจ้าของ และทำได้สามอย่าง คือ **เปิด Issue ได้**, **push branch ได้** และ **เปิด MR/PR ได้** ทั้งสามอย่างนี้จำเป็นตั้งแต่บทที่ 02 เป็นต้นไป ระบบจำแท็บที่คุณเลือกไว้ทั้งเว็บ จึงไม่ต้องเลือกใหม่ทุกครั้งที่กลับมาอ่าน',en:'Whichever path you took, the result must be the same: a repository you own where you can **file issues**, **push branches**, and **open MRs/PRs**. All three are needed from lesson 02 onwards. The site remembers which tab you picked, so you never have to choose again on a later visit.'}},
        {type:'commands',title:{th:'รันโปรเจกต์ครั้งแรก',en:'Run the project for the first time'},
          lead:{th:'สามคำสั่งนี้รันจากในโฟลเดอร์โปรเจกต์ที่เพิ่งได้มา ทำทีละบรรทัดและอ่านผลลัพธ์ทุกครั้ง',en:'Run these three from inside the project folder you just created. One line at a time, reading the output each time.'},
          steps:[
            {title:{th:'ติดตั้ง dependency ของโปรเจกต์',en:'Install the project dependencies'},what:{th:'โปรเจกต์ Next.js ใช้ library ของคนอื่นจำนวนมาก `npm install` อ่านรายการจาก `package.json` แล้วดาวน์โหลดลงโฟลเดอร์ `node_modules` ครั้งแรกจะช้าหน่อย ถือเป็นเรื่องปกติ',en:'A Next.js project depends on many third-party libraries. `npm install` reads the list in `package.json` and downloads them into `node_modules`. The first run is slow — that is normal.'},cmd:`npm install`,expect:{th:'จบด้วยสรุปจำนวน package ที่ติดตั้ง คำเตือน (warning) ไม่ใช่ปัญหา แต่คำว่า error คือปัญหา',en:'It ends with a summary of installed packages. Warnings are fine; the word “error” is not.'}},
            {title:{th:'รัน Next.js application',en:'Run the Next.js application'},what:{th:'`npm run dev` เปิด development server ที่รันค้างไว้และ reload อัตโนมัติเมื่อไฟล์เปลี่ยน อย่าปิด Terminal หน้านี้ระหว่างทำงาน',en:'`npm run dev` starts a development server that keeps running and reloads automatically when files change. Do not close this terminal while you work.'},cmd:`npm run dev`,expect:{th:'ข้อความ `Local: http://localhost:3000` เปิด URL นี้แล้วเห็นหน้า Training Starter',en:'A line reading `Local: http://localhost:3000`. Open it and you should see the Training Starter page.'}},
            {title:{th:'เปิด Terminal ที่สอง แล้วรัน Storybook',en:'Open a second terminal and run Storybook'},what:{th:'Storybook เป็นคนละ process กับ Next.js จึงต้องใช้อีกหน้าต่าง Terminal มันคือที่ที่เราจะ review component ทีละตัวโดยไม่ต้องเปิดหน้าจริง',en:'Storybook is a separate process from Next.js, so it needs its own terminal window. It is where we review components one at a time without opening the real page.'},cmd:`npm run storybook`,expect:{th:'`http://localhost:6006` เปิดได้ และเห็นรายการ component ทางซ้าย',en:'`http://localhost:6006` opens and you see a component list on the left.'}}
          ],
          outro:{th:'ปล่อยทั้งสอง Terminal รันค้างไว้ตลอดคอร์ส เวลามีปัญหา ที่นี่คือแหล่งหลักฐานแรกที่ต้องไปอ่าน',en:'Leave both terminals running for the rest of the course. When something breaks, this is the first place to read evidence.'}},
        {type:'agent-setup',title:{th:'ติดตั้งและเปิด AI Agent ครั้งแรก',en:'Install and open the AI agent for the first time'},
          lead:{th:'ทีมของเราไม่จำเป็นต้องคุ้น CLI เลย คอร์สนี้ใช้แอป desktop แทน terminal เลือกสักตัวเดียว — ChatGPT Desktop App หรือ Claude Desktop App — แล้วกดแท็บด้านล่างเพื่อดูวิธีติดตั้งของเครื่องมือที่เลือก ทั้งสองตัวลำดับความคิดเหมือนกัน คือ ติดตั้งแอป → ล็อกอิน → เปิดโฟลเดอร์ starter repo → ทดสอบว่า Agent อ่าน repo ได้',en:'No CLI experience needed — this course uses desktop apps instead of a terminal. Pick exactly one, the ChatGPT Desktop App or the Claude Desktop App, then switch tabs below to see its setup steps. Both follow the same sequence: install the app → sign in → open the starter repo folder → test that the agent can read the repo.'},
          tools:[
            {id:'chatgpt',name:{th:'ChatGPT Desktop App',en:'ChatGPT Desktop App'},steps:[
              {title:{th:'ดาวน์โหลดและติดตั้งแอป',en:'Download and install the app'},what:{th:'ดาวน์โหลดจากหน้า [Download ChatGPT](https://openai.com/chatgpt/download/) มีให้ทั้ง macOS และ Windows ติดตั้งเหมือนโปรแกรมทั่วไป บน macOS ลากไอคอนเข้าโฟลเดอร์ Applications บน Windows กด Next จนจบ',en:'Download it from the [ChatGPT download page](https://openai.com/chatgpt/download/) — macOS and Windows both work. Install it like any regular app: on macOS drag the icon into Applications; on Windows step through the installer.'},expect:{th:'เปิดแอป ChatGPT ขึ้นมาได้ และเห็นหน้าล็อกอิน',en:'The ChatGPT app opens and shows the sign-in screen.'}},
              {title:{th:'ล็อกอินด้วยบัญชีของคุณ',en:'Sign in with your account'},what:{th:'ใช้บัญชี ChatGPT ที่ทีมใช้ทำงานจริง เพราะประวัติการทำงานของ Agent ผูกอยู่กับบัญชีนี้ ถ้ายังไม่มีบัญชี สมัครจากในแอปก่อน',en:'Sign in with the ChatGPT account your team actually uses — agent history is tied to this account. If you do not have one yet, sign up from the app first.'},expect:{th:'ล็อกอินสำเร็จ และเห็นหน้าหลักของแอป',en:'You sign in and reach the main screen of the app.'}},
              {title:{th:'เปิด starter repo จากโฟลเดอร์ในเครื่อง',en:'Open the starter repo from a local folder'},what:{th:'ในโหมด Work หรือ Codex ให้เริ่มงานใหม่แบบ local แล้วเลือก “On my computer” และเลือกโฟลเดอร์ `his-ai-opd-checkin-starter` ที่ clone ไว้ในหัวข้อก่อนหน้า หลักการสำคัญ: Agent เห็นเฉพาะโฟลเดอร์ที่คุณเลือก ถ้าเลือกผิดโฟลเดอร์ มันจะไปแก้โปรเจกต์ผิดตัว',en:'In Work or Codex mode, start a new local task, choose “On my computer”, and select the `his-ai-opd-checkin-starter` folder you cloned in the previous section. The key principle: the agent only sees the folder you give it. Pick the wrong folder and it will edit the wrong project.'},expect:{th:'แอปขอสิทธิ์เข้าถึงโฟลเดอร์ แล้วแสดงชื่อโฟลเดอร์โปรเจกต์ที่กำลังทำงานด้วย',en:'The app asks for folder access, then shows the project folder it is working in.'}}
            ]},
            {id:'claude',name:{th:'Claude Desktop App',en:'Claude Desktop App'},steps:[
              {title:{th:'ดาวน์โหลดและติดตั้งแอป',en:'Download and install the app'},what:{th:'ดาวน์โหลดจาก [claude.com/download](https://claude.com/download) มีให้ทั้ง macOS และ Windows ติดตั้งแบบเดียวกับโปรแกรมทั่วไป',en:'Download it from [claude.com/download](https://claude.com/download) — macOS and Windows both work — and install it like any regular app.'},expect:{th:'เปิดแอป Claude ขึ้นมาได้ และเห็นหน้าล็อกอิน',en:'The Claude app opens and shows the sign-in screen.'}},
              {title:{th:'ล็อกอินด้วยบัญชีของคุณ',en:'Sign in with your account'},what:{th:'ใช้บัญชี Claude ของคุณล็อกอิน ประวัติการทำงานของ Agent ผูกอยู่กับบัญชีนี้ ถ้ายังไม่มีบัญชี ให้สมัครก่อน',en:'Sign in with your Claude account — agent history is tied to this account. Sign up first if you do not have one.'},expect:{th:'ล็อกอินสำเร็จ และเห็นหน้าหลักของแอป',en:'You sign in and reach the main screen of the app.'}},
              {title:{th:'เปิดแท็บ Code แล้วเลือกโฟลเดอร์โปรเจกต์',en:'Open the Code tab and select the project folder'},what:{th:'กดแท็บ **Code** แล้วตั้งค่า 2 อย่างในช่องพิมพ์: **Environment** เลือก `Local` เพื่อให้ Agent ทำงานกับไฟล์ในเครื่องเราโดยตรง และ **Project folder** กด Select folder แล้วเลือกโฟลเดอร์ `his-ai-opd-checkin-starter` ที่ clone ไว้ในหัวข้อก่อนหน้า',en:'Click the **Code** tab, then set two things in the prompt area: **Environment** = `Local`, so the agent works directly with files on your machine, and **Project folder** = Select folder, then pick the `his-ai-opd-checkin-starter` folder you cloned in the previous section.'},expect:{th:'ชื่อโฟลเดอร์โปรเจกต์ที่เลือก แสดงอยู่ในหน้าต่าง Code',en:'The selected project folder name appears in the Code window.'}},
              {title:{th:'ตั้ง Permission mode เป็น Manual',en:'Set the permission mode to Manual'},what:{th:'ตัวเลือกโหมดสิทธิ์อยู่ข้างปุ่มส่ง เลือก **Manual** เพื่อให้ Agent ต้องถามก่อนทุกครั้งที่จะแก้ไฟล์หรือรันคำสั่ง ปลอดภัยที่สุดสำหรับผู้เริ่มต้น และทำให้เราเห็นชัดว่ามันกำลังจะทำอะไร',en:'The mode selector sits next to the send button. Choose **Manual** so the agent asks before every file edit or command — the safest starting point for beginners, and it makes each action visible before it happens.'},expect:{th:'เมนูโหมดข้างปุ่มส่งแสดงค่า Manual',en:'The mode menu next to the send button reads Manual.'}}
            ]}
          ],
          outro:{th:'ระบบจำแท็บที่คุณเลือกไว้ทั้งเว็บ เมื่อเปิดโฟลเดอร์โปรเจกต์ได้แล้ว ขั้นถัดไปคือพิสูจน์ว่า Agent อ่าน repo ของเราได้จริง ด้วย Prompt แรกด้านล่าง',en:'Your tab choice is remembered across the site. Once the project folder is open, the next step is proving the agent can read your repo — using the first prompt below.'}},
        {type:'prompt',title:{th:'Prompt แรก: ให้ Agent แนะนำตัวกับโปรเจกต์',en:'First prompt: let the agent introduce itself to the project'},
          when:{th:'ใช้ทันทีหลังเปิด Agent ในโฟลเดอร์โปรเจกต์ เพื่อพิสูจน์ว่ามันอ่าน repo ของเราได้จริง และเพื่อฝึกนิสัย “สั่งให้อ่านก่อน ไม่ใช่สั่งให้แก้”',en:'Use it right after opening the agent in the project folder, to prove it can actually read your repo and to start the habit of “ask it to read before asking it to change”.'},
          prompt:{th:`อ่านไฟล์ README.md และ AGENTS.md ในโปรเจกต์นี้ ห้ามแก้ไขไฟล์ใด ๆ

แล้วตอบเป็นภาษาไทยสั้น ๆ ว่า
1. โปรเจกต์นี้คืออะไร
2. คำสั่งที่ใช้รัน application และ Storybook คืออะไร
3. กฎสำคัญที่ระบุไว้ใน AGENTS.md มีอะไรบ้าง
4. โฟลเดอร์หลักที่เก็บ page, component และ mock data อยู่ที่ไหน`,en:`Read README.md and AGENTS.md in this project. Do not modify any files.

Then answer briefly:
1. What is this project?
2. Which commands run the application and Storybook?
3. What are the key rules stated in AGENTS.md?
4. Where are the main folders for pages, components, and mock data?`},
          after:{th:['คำตอบต้องอ้างถึงไฟล์จริงในโปรเจกต์ ไม่ใช่คำอธิบาย Next.js ทั่วไป','ถ้ามันตอบแบบกว้าง ๆ โดยไม่อ้างไฟล์ แปลว่าอาจเปิด Agent ผิดโฟลเดอร์','ยืนยันว่า `git status` ยังสะอาด แปลว่า Agent ไม่ได้แอบแก้ไฟล์'],en:['The answer must reference real files in the project, not generic Next.js explanations','If it answers vaguely without citing files, you may have opened the agent in the wrong folder','Confirm `git status` is still clean, proving the agent changed nothing']}},
        {type:'callout',tone:'danger',title:{th:'กฎข้อมูลของคอร์สนี้',en:'The data rule for this course'},text:{th:'ห้ามนำข้อมูลผู้ป่วยจริง, ข้อมูลใน `.env`, credential ของ production หรือ endpoint จริงของโรงพยาบาลมาใช้ในแบบฝึกหัดหรือใส่ใน prompt ทุกตัวอย่างในคอร์สใช้ข้อมูลสมมติที่สร้างขึ้นเพื่อการเรียนเท่านั้น',en:'Never use real patient data, `.env` values, production credentials, or real hospital endpoints in exercises or prompts. Every example in this course uses synthetic data created for learning only.'}},
        {type:'practice',title:{th:'ลงมือทำ: ยืนยันว่าเครื่องพร้อมจริง',en:'Practice: confirm your machine is genuinely ready'},steps:{th:['รันคำสั่งตรวจเวอร์ชันทั้งสามให้ผ่าน','ตั้ง `git config` ชื่อและอีเมล แล้วอ่านค่ากลับมาดู','ทำตามแท็บ GitHub หรือ GitLab จนได้ repository ของตัวเอง','รัน `git remote -v` แล้วยืนยันว่า origin เป็นบัญชีของคุณ ไม่ใช่ของผู้สอน','เปิดหน้าเว็บ repo ของคุณ แล้วยืนยันว่ากดสร้าง Issue ใหม่ได้','รัน `npm install`, `npm run dev` และ `npm run storybook` ให้ขึ้นครบ','ส่ง Prompt แรกให้ Agent แล้วตรวจว่ามันอ้างถึงไฟล์จริงในโปรเจกต์'],en:['Pass all three version checks','Set `git config` name and email, then read the values back','Follow either the GitHub or the GitLab tab until you own a repository','Run `git remote -v` and confirm origin is your account, not the instructor’s','Open your repo in the browser and confirm you can start a new issue','Run `npm install`, `npm run dev`, and `npm run storybook` successfully','Send the first prompt and check that the agent cites real project files']},expected:{th:'คุณมี repository ของตัวเองที่เปิด Issue ได้ Git รู้จักชื่อคุณ หน้า Training Starter และ Storybook เปิดได้ และ Agent อธิบายโปรเจกต์ได้จากไฟล์จริง',en:'You own a repository where you can file issues, Git knows your name, the Training Starter page and Storybook both open, and the agent describes the project from its real files.'}}
      ],
      quiz:{q:{th:'ถ้า Storybook เปิดได้แต่ Next.js เปิดไม่ได้ สิ่งแรกที่ควรทำคืออะไร?',en:'If Storybook opens but Next.js does not, what should you do first?'},options:{th:['ติดตั้ง Database','อ่าน error ใน terminal ของ Next.js','ลบ repository แล้ว clone ใหม่'],en:['Install a database','Read the error in the Next.js terminal','Delete the repository and clone again']},answer:1,why:{th:'เริ่มจาก evidence ก่อนเสมอ: อ่าน error ที่ process ซึ่งล้มเหลว แล้วค่อยให้ Agent ช่วยวิเคราะห์',en:'Start with evidence: read the error from the failing process, then ask the agent to analyze it.'}},
      wrap:{th:['Environment พร้อมก่อนเข้าเนื้อหา','มี repository ของตัวเองที่เปิด Issue, push branch และเปิด MR/PR ได้','รู้จุดแบ่งระหว่าง training mock กับ production system','รู้คำสั่งเปิด Next.js และ Storybook และรู้ว่าแต่ละคำสั่งทำอะไร'],en:['Environment ready before the course','You own a repository where you can file issues, push branches, and open MRs/PRs','Know the boundary between training mocks and production systems','Know how to start Next.js and Storybook — and what each command does']}
    },
    {
      id:'mental-model', group:'day1', no:'01', duration:'45 min',
      title:{th:'AI Product Development Mental Model',en:'AI Product Development Mental Model'},
      intro:{th:'เริ่มจากภาพใหญ่ก่อน: Requirement หนึ่งเรื่องเดินทางอย่างไรจาก Issue ไปเป็น UI ที่ review และ merge ได้',en:'Start with the big picture: how one requirement travels from an issue to a reviewable, mergeable UI.'},
      outcomes:{th:['เข้าใจ Repository, Page, Component, State, Branch และ Merge Request ในระดับใช้งาน','เห็นบทบาทของ Human กับ AI Agent แยกจากกัน','รู้ว่า “AI ทำเสร็จ” ยังไม่เท่ากับ “งานเสร็จ”'],en:['Understand Repository, Page, Component, State, Branch, and Merge Request at a practical level','Separate human responsibility from AI-agent responsibility','Understand that “AI finished” is not the same as “work finished”']},
      blocks:[
        {type:'prose',title:{th:'สิ่งที่เปลี่ยนไป เมื่อมี AI Agent อยู่ในทีม',en:'What changes when an AI agent joins the team'},body:{th:[
          'เดิมทีงานของ PM, BA และ Product Design จบลงที่เอกสาร แล้วส่งต่อให้ Developer แปลงเป็นโค้ด ช่องว่างระหว่าง “สิ่งที่เขียนไว้” กับ “สิ่งที่ได้จริง” จึงถูกค้นพบช้า มักจะตอนเดโม หรือแย่กว่านั้นคือตอน UAT',
          'เมื่อมี AI Agent ช่องว่างนี้สั้นลงมาก คุณสามารถเปลี่ยน requirement เป็นหน้าจอที่กดได้จริงภายในไม่กี่ชั่วโมง แต่ความเร็วนี้มาพร้อมความเสี่ยงใหม่ คือ Agent เขียนโค้ดได้เร็วกว่าที่คนอ่านทัน และมันจะเติมช่องว่างที่คุณไม่ได้ระบุด้วยการเดา',
          'ดังนั้นทักษะที่คอร์สนี้ต้องการไม่ใช่ “เขียนโค้ดเป็น” แต่คือ **การกำกับและตรวจสอบ** นั่นคือ ระบุสิ่งที่ต้องการให้ชัด, จำกัดขอบเขตให้แคบ, และมีหลักฐานยืนยันผลงานทุกครั้งก่อนบอกว่าเสร็จ',
          'ตลอดคอร์สเราจะเดินตามเส้นทางเดียวกันซ้ำ ๆ จนเป็นนิสัย เส้นทางนั้นหน้าตาแบบนี้'
        ],en:[
          'Traditionally PM, BA, and Product Design work ends at a document that developers translate into code. The gap between “what was written” and “what was built” therefore surfaces late — at a demo, or worse, at UAT.',
          'With an AI agent that gap shrinks dramatically. You can turn a requirement into a clickable screen within hours. But that speed brings a new risk: the agent writes code faster than anyone can read it, and it fills any gap you left unspecified by guessing.',
          'So the skill this course builds is not “write code”. It is **direction and verification**: state what you want precisely, keep the scope narrow, and demand evidence before accepting that something is done.',
          'Throughout the course we walk the same path repeatedly until it becomes habit. That path looks like this.'
        ]}},
        {type:'diagram',title:{th:'เส้นทางของงาน',en:'The work journey'},
          lead:{th:'อ่านจากซ้ายไปขวา ทุกกล่องคือสิ่งที่จับต้องได้ ไม่ใช่นามธรรม และมีอย่างน้อยหนึ่งจุดที่คนต้องเข้ามาตัดสินใจ',en:'Read left to right. Every box is something concrete, not abstract, and at least one of them requires a human decision.'},
          diagram:`flowchart LR\nR[Requirement] --> I[GitLab Issue]\nI --> W[Branch + Worktree]\nW --> A[AI Agent]\nA --> C[Component + Storybook Story]\nC --> P[Next.js Page]\nP --> V[Human Verify]\nV --> D[git diff + checks]\nD --> M[Merge Request]`,
          notes:{th:['**Requirement → Issue**: เปลี่ยนความต้องการเป็นงานที่มีขอบเขตและเจ้าของ (ลงรายละเอียดในบทที่ 02)','**Branch + Worktree**: จองพื้นที่ทำงานแยก เพื่อไม่ให้งานที่ยังไม่เสร็จไปปนกับของคนอื่น','**AI Agent**: ผู้ลงมือแก้ไฟล์ — ไม่ใช่ผู้ตัดสินใจว่าอะไรถูกต้อง','**Component + Storybook Story** (Storybook story ไม่ใช่ user story): ผลงานชิ้นเล็กที่ review ได้ทีละชิ้น ก่อนประกอบเป็นหน้าจริง','**Human Verify**: คนเปิดดูของจริงด้วยตา ไม่ใช่เชื่อคำสรุปของ Agent','**git diff + checks**: หลักฐานว่าเปลี่ยนอะไรไปบ้าง และระบบยังทำงานได้','**Merge Request**: จุดส่งมอบให้ Developer review'],en:['**Requirement → Issue**: turn a need into scoped work with an owner (detailed in lesson 02)','**Branch + Worktree**: reserve a separate workspace so unfinished work does not mix with anyone else’s','**AI Agent**: the one who edits files — not the one who decides what is correct','**Component + Storybook Story** (a Storybook story, not a user story): small pieces reviewable one at a time, before assembly into a real page','**Human Verify**: a person looks at the real thing instead of trusting the agent’s summary','**git diff + checks**: evidence of what changed and that the system still works','**Merge Request**: the handoff point for developer review']}},
        {type:'two',title:{th:'ใครรับผิดชอบอะไร',en:'Who owns what'},left:{title:{th:'Human',en:'Human'},items:{th:['นิยาม outcome และ acceptance criteria','ตรวจ scope, state, edge case และ usability','อนุมัติ plan ก่อนเปลี่ยนไฟล์สำคัญ','ตรวจ Storybook, running app และ git diff'],en:['Define outcomes and acceptance criteria','Review scope, states, edge cases, and usability','Approve plans before significant changes','Review Storybook, running app, and git diff']}},right:{title:{th:'AI Agent',en:'AI Agent'},items:{th:['สำรวจ repository','เสนอ plan','สร้าง/แก้ component และ Storybook story','รัน command, test และช่วยวิเคราะห์ error'],en:['Explore the repository','Propose a plan','Create/edit components and Storybook stories','Run commands/tests and help analyze errors']}}},
        {type:'prose',title:{th:'คำศัพท์ 7 คำที่ต้องแปลเป็นภาษาของตัวเองให้ได้',en:'Seven words you should be able to explain in your own language'},body:{th:[
          'คุณไม่ต้องท่องนิยามทางเทคนิค แต่ควรอธิบายคำเหล่านี้ได้ในประโยคเดียว เพราะมันจะโผล่มาในทุกบทถัดไป'
        ],en:[
          'You do not need textbook definitions, but you should be able to explain each of these in one sentence, because they appear in every later lesson.'
        ]},points:{th:[
          '**Repository (repo)** — กล่องที่เก็บซอร์สโค้ดทั้งหมดของโปรเจกต์ พร้อมประวัติการเปลี่ยนแปลง',
          '**Page** — หน้าจอหนึ่งหน้าที่ผู้ใช้เปิดได้ผ่าน URL เช่น `/opd/check-in`',
          '**Component** — ชิ้นส่วน UI ที่นำกลับมาใช้ซ้ำได้ เช่น ช่องค้นหา หรือการ์ดข้อมูลผู้ป่วย',
          '**State** — สถานะที่ผู้ใช้เห็นในช่วงเวลาหนึ่ง เช่น กำลังโหลด, ไม่พบข้อมูล, เกิดข้อผิดพลาด',
          '**Branch** — สายงานแยกที่ให้ทดลองแก้ได้โดยไม่กระทบงานหลัก',
          '**Commit** — การบันทึกชุดการเปลี่ยนแปลงพร้อมคำอธิบายว่าเปลี่ยนเพราะอะไร',
          '**Merge Request (MR)** — คำขอให้รวมงานของเรากลับเข้าสายหลัก พร้อมให้คนอื่น review'
        ],en:[
          '**Repository (repo)** — the box holding all the project’s source code plus its change history',
          '**Page** — one screen a user can open via a URL, e.g. `/opd/check-in`',
          '**Component** — a reusable piece of UI, such as a search field or a patient card',
          '**State** — what the user sees at a given moment: loading, no results, error, and so on',
          '**Branch** — a separate line of work where you can experiment without affecting the main line',
          '**Commit** — a saved set of changes with a note explaining why they were made',
          '**Merge Request (MR)** — a request to fold your work back into the main line, with review'
        ]}},
        {type:'callout',title:{th:'กฎหลักตลอดคอร์ส',en:'Core rule for the whole course'},text:{th:'อย่าให้ Agent กระโดดจาก Requirement ไป Implement ทันที ให้ผ่าน Explore → Plan → Human Review → Implement → Verify',en:'Do not let the agent jump straight from Requirement to implementation. Use Explore → Plan → Human Review → Implement → Verify.'}},
        {type:'prompt',title:{th:'Prompt: ให้ Agent อธิบายโครงสร้างโปรเจกต์ด้วยภาษาคน',en:'Prompt: ask the agent to explain the project in plain language'},
          when:{th:'ใช้ตอนเข้าโปรเจกต์ใหม่ที่ยังไม่คุ้น เพื่อสร้างแผนที่ในหัวก่อนเริ่มงานจริง สังเกตว่า prompt นี้ห้ามแก้ไฟล์โดยเด็ดขาด',en:'Use it when entering an unfamiliar project, to build a mental map before real work starts. Note that this prompt forbids file changes.'},
          prompt:{th:`สำรวจโปรเจกต์นี้แล้วอธิบายให้คนที่ไม่ได้เขียนโค้ดเข้าใจ ห้ามแก้ไขไฟล์ใด ๆ

อธิบาย 5 ข้อนี้ ข้อละไม่เกิน 3 บรรทัด
1. โฟลเดอร์หลักแต่ละอันมีหน้าที่อะไร
2. ถ้าผู้ใช้เปิด URL /opd/check-in จะไปโหลดไฟล์ไหน
3. component ที่มีอยู่แล้วและน่าจะนำกลับมาใช้ซ้ำได้มีอะไรบ้าง
4. ข้อมูลตัวอย่าง (mock data) เก็บไว้ที่ไหน
5. คำสั่งที่ใช้ตรวจคุณภาพงาน เช่น lint, test, build คืออะไร

ตอบเป็นภาษาไทย และอ้างชื่อไฟล์จริงประกอบทุกข้อ`,en:`Explore this project and explain it to someone who does not write code. Do not modify any files.

Cover these five points, at most three lines each:
1. What each main folder is responsible for
2. Which file loads when a user opens /opd/check-in
3. Which existing components could likely be reused
4. Where the mock data lives
5. Which commands check quality: lint, test, build

Cite real file names for every point.`},
          after:{th:['ทุกข้อควรมีชื่อไฟล์จริงประกอบ ถ้าไม่มี ให้ถามกลับว่า “อยู่ไฟล์ไหน”','เก็บคำตอบนี้ไว้ จะได้ใช้เทียบในบท Next.js literacy','ตรวจ `git status` ว่ายังไม่มีไฟล์ถูกแก้'],en:['Every point should name a real file; if not, ask “which file?”','Keep the answer — you will compare against it in the Next.js literacy lesson','Check `git status` to confirm no files were changed']}},
        {type:'practice',title:{th:'ลงมือทำ: สำรวจ repo โดยยังไม่แก้ไฟล์',en:'Practice: explore without changing files'},steps:{th:['เปิด starter repo ใน editor','หา README.md, AGENTS.md, src/app, src/features, src/mocks และ .storybook','อธิบายด้วยภาษาของตัวเองว่าแต่ละส่วนมีหน้าที่อะไร','ส่ง Prompt ด้านบนให้ Agent แล้วเทียบกับคำอธิบายของตัวเอง'],en:['Open the starter repo in your editor','Find README.md, AGENTS.md, src/app, src/features, src/mocks, and .storybook','Explain in your own words what each area is for','Send the prompt above and compare the agent’s answer with your own']},expected:{th:'ผู้เรียนสามารถชี้ตำแหน่งของ page, feature code, mock และ agent instruction ได้ แม้ยังอ่านโค้ดไม่คล่อง',en:'You can point to the page, feature code, mocks, and agent instructions even if you are not comfortable reading code yet.'}}
      ],
      quiz:{q:{th:'จุดใดควรเกิดก่อน Agent เริ่ม Implement?',en:'What should happen before the agent begins implementation?'},options:{th:['Human review แผน','Merge Request','Production deploy'],en:['Human review of the plan','Merge Request','Production deploy']},answer:0,why:{th:'Plan review เป็นจุดควบคุม scope ที่สำคัญที่สุดสำหรับผู้ใช้ AI ที่ไม่ใช่ developer',en:'Plan review is one of the strongest scope-control points for non-developer AI users.'}},
      wrap:{th:['เข้าใจ end-to-end workflow','แยก Human judgment กับ Agent execution','รู้ว่าการ verify เป็นส่วนหนึ่งของ Definition of Done'],en:['Understand the end-to-end workflow','Separate human judgment from agent execution','Know that verification is part of the Definition of Done']}
    },
    {
      id:'requirement-issue', group:'day1', no:'02', duration:'45 min',
      title:{th:'จาก Requirement สู่ Issue ที่ AI ทำงานต่อได้',en:'From Requirement to an Agent-Ready Issue'},
      intro:{th:'ก่อนจะเปิด branch หรือสั่ง Agent ต้องมี Issue หนึ่งใบที่บอกได้ว่างานนี้คืออะไร แค่ไหนถึงพอ และจะรู้ได้อย่างไรว่าเสร็จ',en:'Before any branch or any agent, one issue must say what the work is, where it stops, and how you will know it is done.'},
      outcomes:{th:['แยกให้ออกระหว่าง Requirement, Issue และ Acceptance Criteria','เขียน Issue ที่มี Context, In/Out of scope, AC และ Definition of Done','เขียน AC สองแบบ คือ AC ที่เป็นสถานะ และ AC ที่เป็นพฤติกรรม','ตัดงานที่ใหญ่เกินให้เหลือขนาดที่ 1 branch จบได้'],en:['Tell requirement, issue, and acceptance criteria apart','Write an issue with context, in/out of scope, ACs, and a definition of done','Write both kinds of AC: state ACs and behaviour ACs','Cut oversized work down to something one branch can finish']},
      blocks:[
        {type:'prose',title:{th:'กล่องเดียวในภาพที่ AI ทำแทนคุณไม่ได้',en:'The one box in the picture the AI cannot fill for you'},body:{th:[
          'ในบทที่แล้วเราเห็นเส้นทางของงานทั้งเส้น กล่องแรกสุดคือ **Requirement → Issue** และนี่คือกล่องเดียวในภาพที่เป็นการตัดสินใจว่า “อะไรคือสิ่งที่ถูกต้อง” ไม่ใช่ “ทำอย่างไร” — ซึ่งเป็นงานของคุณ ไม่ใช่ของ Agent',
          'Requirement เขียนไว้ให้คนอ่านแล้วเข้าใจภาพรวม ส่วน Issue เขียนไว้ให้คนลงมือทำได้ทันที ความต่างอยู่ตรงที่ Issue ต้องตอบสามคำถามให้ครบ คือ **ทำอะไร**, **แค่ไหนถึงพอ** และ **จะรู้ได้อย่างไรว่าเสร็จ**',
          'เมื่อผู้ลงมือคือ AI Agent ความต่างนี้ยิ่งสำคัญ เพราะ Agent ไม่ถามกลับเวลาไม่แน่ใจ มันจะเดาแล้วเขียนโค้ดต่อทันที ทุกช่องว่างใน Issue จึงเท่ากับการตัดสินใจทางธุรกิจที่ถูกยกให้ Agent ทำแทนคุณโดยที่คุณไม่รู้ตัว และคุณจะเพิ่งมาเห็นตอน review',
          'ข่าวดีคือ Issue ที่ดีไม่จำเป็นต้องยาว มันแค่ต้องคมในสี่จุด คือ **บริบท**, **ขอบเขต**, **เงื่อนไขการยอมรับ (AC)** และ **นิยามว่าเสร็จ (Definition of Done)** ที่เหลือปล่อยให้เป็นเรื่องของแผนที่ Agent จะเสนอมาให้คุณตรวจในบทที่ 05'
        ],en:[
          'The previous lesson showed the whole journey. Its very first box is **Requirement → Issue**, and it is the only box in that picture that decides “what is correct” rather than “how to build it” — which makes it your job, not the agent’s.',
          'A requirement is written so people understand the big picture. An issue is written so someone can start working immediately. The difference is that an issue must answer three questions: **what are we building**, **where does it stop**, and **how will we know it is done**.',
          'When the builder is an AI agent, that difference matters even more, because the agent never asks you back when it is unsure. It guesses and keeps writing code. Every gap in the issue is therefore a business decision handed to the agent without you noticing — and you only see it at review time.',
          'The good news is that a good issue is not a long one. It only has to be sharp on four things: **context**, **scope**, **acceptance criteria**, and **definition of done**. Everything else belongs in the plan the agent proposes for your review in lesson 05.'
        ]}},
        {type:'diagram',title:{th:'Requirement หนึ่งฉบับ แตกเป็น Issue ได้หลายใบ',en:'One requirement, several issues'},
          lead:{th:'Requirement คือเอกสารเล่าเรื่อง ส่วน Issue คือหน่วยของงาน หนึ่ง Issue ควรจบได้ใน 1 branch และ review ได้ในครั้งเดียว',en:'A requirement is a narrative document; an issue is a unit of work. One issue should finish in one branch and be reviewable in one sitting.'},
          diagram:`flowchart TD\nR[Requirement doc: OPD Check-in Lite] --> P{Split by user outcome}\nP --> I1[Issue US-001 Patient Check-in]\nP --> I2[Issue US-002 Queue Board]\nP --> I3[Issue US-003 Daily Report]\nI1 --> C[Context + In / Out of scope]\nI1 --> A[Acceptance Criteria]\nI1 --> D[Definition of Done]\nC --> B[Branch + Worktree]\nA --> B\nD --> B\nB --> AG[AI Agent]`,
          notes:{th:['เอกสาร requirement หนึ่งฉบับมักมีงานหลายก้อนซ่อนอยู่ อย่าเปิด Issue ใบเดียวแล้วโยนทั้งเอกสารให้ Agent','US-001 ที่เราใช้ตลอดคอร์สคือหนึ่ง Issue ที่ถูกตัดมาแล้วให้พอดีกับหนึ่ง branch','สามกล่องใต้ Issue คือส่วนที่คุณต้องเขียนเอง ไม่ใช่ copy จาก requirement มาทั้งดุ้น','ลูกศรสุดท้ายคือประเด็นสำคัญ — Agent เห็นเฉพาะสิ่งที่อยู่ใน Issue สิ่งที่คุณคิดไว้ในหัวแต่ไม่ได้เขียน มันไม่เห็น'],en:['One requirement document usually hides several chunks of work; do not open a single issue and hand the agent the whole document','The US-001 we use all course is one issue already cut to fit one branch','The three boxes under the issue are yours to write — not copied wholesale from the requirement','The last arrow is the point: the agent sees only what is in the issue, never what stayed in your head']}},
        {type:'two',title:{th:'Requirement กับ Issue ต่างกันตรงไหน',en:'Requirement vs. issue'},left:{title:{th:'Requirement',en:'Requirement'},items:{th:['เล่าว่าทำไมธุรกิจถึงต้องการสิ่งนี้','ครอบคลุมหลายหน้าจอและหลายรอบการส่งงาน','เปลี่ยนช้า มีเจ้าของเป็นฝ่ายธุรกิจ','อ่านแล้วเข้าใจ แต่ยังลงมือทำทันทีไม่ได้'],en:['Explains why the business needs this','Spans several screens and several deliveries','Changes slowly, owned by the business side','Understandable, but not yet actionable']}},right:{title:{th:'Issue',en:'Issue'},items:{th:['บอกว่าจะทำอะไรในรอบนี้','จบได้ใน 1 branch และ review ได้ครั้งเดียว','มี AC ที่ตอบได้ว่า ผ่าน หรือ ไม่ผ่าน','มีเจ้าของ มีสถานะ และอ้างอิงกลับไปที่ requirement ได้'],en:['States what gets built this round','Finishes in one branch, reviewable in one sitting','Has ACs that answer pass or fail','Has an owner, a status, and a link back to the requirement']}}},
        {type:'code',title:{th:'Issue Template ที่ใช้ได้ทันที',en:'A ready-to-use issue template'},
          lead:{th:'คัดลอกไปวางใน GitLab หรือ GitHub ได้เลย ตัวอย่างนี้กรอกด้วย US-001 ซึ่งเป็นโจทย์ที่เราจะใช้ต่อกันทั้งคอร์ส',en:'Copy it straight into GitLab or GitHub. This one is filled in with US-001, the scenario we carry through the whole course.'},
          label:'GitLab Issue · US-001',code:`Title: US-001 OPD Patient Check-in (Lite)

## Context
OPD staff currently record walk-in check-in on paper, so the queue is
rebuilt by hand every morning. This issue covers the check-in screen only.
Requirement: docs/requirements/US-001-opd-checkin.md

## In scope
- Search a patient by HN or name
- Select a patient and see their basic information
- Choose a clinic (required) and a chief complaint (optional)
- Preview, confirm, and show a success screen with a queue number

## Out of scope
- Real HIS / backend integration
- Authentication and permissions
- Printing and the physical queue display

## Acceptance Criteria - states
- AC1 While a search runs, a loading state is shown
- AC2 When nothing matches, an empty state with a retry hint is shown
- AC3 When the search fails, an error state with a retry action is shown
- AC4 A result row shows HN, full name, age, and gender

## Acceptance Criteria - behaviour
- AC5 Given the search screen, when HN 65000123 is searched,
      then the patient "Somchai Jaidee" is listed
- AC6 Given a selected patient, when Confirm is clicked with no clinic,
      then a validation message appears and nothing is submitted
- AC7 Given a clinic is selected, when Confirm is clicked,
      then a success screen shows a synthetic queue number

## Definition of Done
- Every state above exists as a Storybook story
- At least one behaviour AC is covered by an interaction test
- lint / test / build pass
- git diff reviewed and a Draft MR is open

## Data
Synthetic/mock data only. No production data, no real patient records.`,
          note:{th:'สังเกตว่าทั้งใบไม่มีคำว่า component, props หรือชื่อไฟล์เลยสักคำ — Issue บอกว่า “อะไร” ส่วน “อย่างไร” คือแผนที่ Agent จะเสนอมาให้คุณ review ในบทที่ 05',en:'Notice the whole issue never says component, props, or a file name. The issue states the what; the how is the plan the agent proposes for review in lesson 05.'}},
        {type:'prose',title:{th:'AC สองแบบ และทำไมต้องแยกกัน',en:'Two kinds of AC, and why they are separated'},body:{th:[
          'AC ที่เป็น **สถานะ (state)** อธิบายว่าหน้าจอต้องหน้าตาแบบไหนในแต่ละสถานการณ์ เช่น กำลังโหลด ไม่พบข้อมูล หรือเกิดข้อผิดพลาด ส่วน AC ที่เป็น **พฤติกรรม (behaviour)** อธิบายลำดับเหตุการณ์ว่า เมื่อผู้ใช้ทำอะไร แล้วระบบต้องตอบสนองอย่างไร',
          'เหตุผลที่ต้องแยกไม่ใช่เรื่องความสวยงามของเอกสาร แต่เพราะ **สองแบบนี้ตรวจด้วยเครื่องมือคนละตัว** AC ที่เป็นสถานะจะถูกตรวจด้วยการเปิด Storybook ดูทีละสถานะ ส่วน AC ที่เป็นพฤติกรรมจะถูกตรวจด้วย interaction test หรือการเดิน flow จริงในแอป',
          'ถ้าคุณเขียนปนกัน เวลาตรวจงานคุณจะไม่รู้ว่าข้อไหนต้องดูที่ไหน และมักจบลงด้วยการเชื่อคำสรุปของ Agent แทนที่จะดูของจริง',
          'เคล็ดลับที่ทำให้ AC ตรวจได้จริงคือ **ใช้ค่าตายตัวจาก mock data** เช่น HN `65000123` แทนคำว่า “ผู้ป่วยคนหนึ่ง” เพราะค่าตายตัวทดสอบซ้ำแล้วได้ผลเดิมทุกครั้ง'
        ],en:[
          '**State ACs** describe what the screen must look like in a given situation — loading, nothing found, error. **Behaviour ACs** describe a sequence: when the user does this, the system must respond like that.',
          'Separating them is not documentation tidiness. The two kinds **are verified with different tools**: state ACs are checked by opening Storybook state by state, behaviour ACs by an interaction test or by walking the real flow in the app.',
          'Mix them together and, at review time, you will not know where to look for each one — which usually ends with trusting the agent’s summary instead of looking at the real thing.',
          'The trick that makes ACs truly checkable is **using fixed values from the mock data**, such as HN `65000123` instead of “a patient”, because a fixed value reproduces the same result every time.'
        ]}},
        {type:'list',title:{th:'เช็กลิสต์ก่อนกด Create Issue',en:'Checklist before you click Create Issue'},items:{th:['หัวข้อบอกผลลัพธ์ต่อผู้ใช้ ไม่ใช่แค่ชื่อหน้าจอ','มีลิงก์กลับไปยัง requirement ฉบับเต็ม','ระบุ Out of scope อย่างน้อย 2 ข้อ','AC ทุกข้อตอบได้ว่า ผ่าน หรือ ไม่ผ่าน โดยไม่ต้องตีความ','AC ที่เป็นพฤติกรรมใช้ค่าตายตัวจาก mock data','ไม่มีคำว่า “ใช้งานง่าย” หรือ “สวยงาม” ลอย ๆ โดยไม่มีเกณฑ์','งานจบได้ใน 1 branch ถ้าไม่จบ ให้ตัดเป็นสองใบ','ระบุชัดว่าใช้ข้อมูลสมมติเท่านั้น'],en:['The title states a user outcome, not just a screen name','It links back to the full requirement','It names at least two out-of-scope items','Every AC answers pass or fail with no interpretation','Behaviour ACs use fixed values from the mock data','No floating “easy to use” or “looks nice” without a criterion','The work fits in one branch — if not, split it into two issues','It states explicitly that only synthetic data is used']}},
        {type:'callout',tone:'danger',title:{th:'Red flag',en:'Red flag'},text:{th:'AC ที่เขียนว่า “ระบบต้องค้นหาผู้ป่วยได้อย่างรวดเร็วและใช้งานง่าย” ตรวจไม่ได้ว่าผ่านหรือไม่ผ่าน Agent จะตีความเอง และตอน review คุณจะเถียงไม่ได้ เพราะไม่เคยมีเกณฑ์ตั้งแต่แรก',en:'An AC that reads “patient search must be fast and easy to use” cannot be judged pass or fail. The agent will interpret it for you, and at review time you have no ground to disagree because no criterion ever existed.'}},
        {type:'code',title:{th:'เลข Issue ต้องตามไปได้ทั้งสาย',en:'The issue number has to survive the whole trip'},
          lead:{th:'เลข Issue ไม่ได้มีไว้สวย ๆ มันคือด้ายที่ร้อยงานทั้งเส้นเข้าด้วยกัน สมมติ Issue ของคุณคือ #12 นี่คือที่ที่เลขนี้จะโผล่อีกสี่ครั้ง',en:'The issue number is not decoration; it is the thread that ties the whole journey together. If your issue is #12, here is where that number shows up four more times.'},
          label:'traceability',code:`Issue    #12  US-001 OPD Patient Check-in (Lite)
Branch   feature/us001-patient-checkin        <- lesson 04
Commit   feat(us001): add PatientSearch ...
         Refs #12                             <- lessons 08-12
MR       Closes #12                           <- lesson 14`,
          note:{th:'ประโยชน์จริงคือ หกเดือนต่อมามีคนถามว่า “ทำไมหน้านี้ต้องบังคับเลือกคลินิก” คุณเดินจากโค้ดย้อนกลับไปหา commit → MR → Issue → requirement ได้ใน 30 วินาที บทที่ 15 จะทำให้ขั้นตอนนี้เป็น skill ที่ Agent ทำซ้ำให้ได้',en:'The real payoff: six months later someone asks “why is clinic required here?” and you can walk from the code back to the commit, the MR, the issue, and the requirement in thirty seconds. Lesson 15 turns this into a skill the agent repeats for you.'}},
        {type:'prompt',title:{th:'Prompt: ให้ Agent หาช่องว่างใน Issue ก่อนเริ่มงาน',en:'Prompt: have the agent find the gaps in your issue'},
          when:{th:'ใช้หลังร่าง Issue เสร็จ แต่ยังไม่เปิด branch จุดสำคัญคือให้มันบอก “สิ่งที่มันจะต้องเดา” ไม่ใช่ให้มันเติมช่องว่างแทนคุณ เพราะการเติมช่องว่างคือการตัดสินใจทางธุรกิจ',en:'Use it once your issue draft is ready but before any branch exists. The point is to make it list what it would have to guess — not to let it fill the gaps, because filling them is a business decision.'},
          prompt:{th:`นี่คือร่าง Issue ของฉัน ห้ามแก้ไขไฟล์ใด ๆ และห้ามเขียน Issue ฉบับใหม่ให้

[วางร่าง Issue ของคุณตรงนี้]

ช่วยตรวจให้ 4 ข้อ
1. ถ้าคุณต้องลงมือทำตาม Issue นี้ มีจุดไหนบ้างที่คุณจะต้องเดา และคุณจะเดาว่าอะไร
2. AC ข้อไหนที่ยังตรวจไม่ได้ว่าผ่านหรือไม่ผ่าน และเพราะอะไร
3. มีสถานะหน้าจอหรือ edge case อะไรที่ยังไม่ถูกพูดถึง
4. งานนี้ใหญ่เกินไปสำหรับหนึ่ง branch หรือไม่ ถ้าใหญ่เกิน ควรตัดตรงไหน

ตอบกลับเป็นคำถามถึงฉัน อย่าตอบแทนฉันเอง`,en:`Here is my draft issue. Do not modify any files, and do not rewrite the issue for me.

[paste your draft issue here]

Check four things:
1. If you had to implement this issue, where would you have to guess, and what would you guess?
2. Which ACs cannot be judged pass or fail, and why?
3. Which UI states or edge cases are still unmentioned?
4. Is this too large for one branch? If so, where would you split it?

Answer as questions back to me. Do not answer them on my behalf.`},
          example:{th:`นี่คือร่าง Issue ของฉัน ห้ามแก้ไขไฟล์ใด ๆ และห้ามเขียน Issue ฉบับใหม่ให้

Title: ทำหน้า OPD Check-in
- ค้นหาผู้ป่วยแล้วเลือกคนไข้
- กรอกข้อมูลแล้วกดยืนยัน
- หน้าจอต้องใช้งานง่ายและรองรับมือถือ

ช่วยตรวจให้ 4 ข้อ
1. ถ้าคุณต้องลงมือทำตาม Issue นี้ มีจุดไหนบ้างที่คุณจะต้องเดา และคุณจะเดาว่าอะไร
2. AC ข้อไหนที่ยังตรวจไม่ได้ว่าผ่านหรือไม่ผ่าน และเพราะอะไร
3. มีสถานะหน้าจอหรือ edge case อะไรที่ยังไม่ถูกพูดถึง
4. งานนี้ใหญ่เกินไปสำหรับหนึ่ง branch หรือไม่ ถ้าใหญ่เกิน ควรตัดตรงไหน

ตอบกลับเป็นคำถามถึงฉัน อย่าตอบแทนฉันเอง`,en:`Here is my draft issue. Do not modify any files, and do not rewrite the issue for me.

Title: Build the OPD check-in page
- Search for a patient and pick one
- Fill in the details and press confirm
- The screen should be easy to use and work on mobile

Check four things:
1. If you had to implement this issue, where would you have to guess, and what would you guess?
2. Which ACs cannot be judged pass or fail, and why?
3. Which UI states or edge cases are still unmentioned?
4. Is this too large for one branch? If so, where would you split it?

Answer as questions back to me. Do not answer them on my behalf.`},
          after:{th:['ทุกข้อที่ Agent ตอบว่า “จะเดา” คือช่องว่างที่คุณต้องกลับไปเขียนเพิ่มใน Issue ไม่ใช่ปล่อยให้มันเดา','ถ้าข้อ 4 บอกว่าใหญ่เกิน ให้ตัด Issue ก่อนเปิด branch ดีกว่าไปตัดตอนทำไปครึ่งทาง','บันทึกคำตอบของมันไว้เทียบกับแผนในบทที่ 05 — ถ้าแผนยังมีเรื่องที่มันเคยบอกว่า “ต้องเดา” แปลว่า Issue ยังไม่ถูกแก้','อัปเดต Issue ให้เป็นฉบับล่าสุดเสมอ เพราะบทถัดไปจะใช้เลข Issue ตั้งชื่อ branch และใช้ AC ตรวจงาน'],en:['Everything it says it would guess is a gap you go back and write into the issue, not something to leave to it','If answer 4 says it is too large, split the issue before opening a branch rather than halfway through','Keep its answers to compare against the plan in lesson 05 — if the plan still contains something it once had to guess, the issue was never fixed','Keep the issue up to date: the next lesson names the branch after the issue and reviews work against these ACs']}},
        {type:'practice',title:{th:'ลงมือทำ: เขียน Issue ของ US-001 ด้วยตัวเอง',en:'Practice: write the US-001 issue yourself'},steps:{th:['เปิด `docs/requirements/US-001-opd-checkin.md` ใน starter repo แล้วอ่านให้จบก่อน','ร่าง Issue ตาม template ด้านบน โดยยังไม่เปิดกลับมาดู template ระหว่างเขียน','แยก AC ออกเป็นสองกอง คือสถานะ และพฤติกรรม แล้วนับว่าแต่ละกองมีกี่ข้อ','ส่ง Prompt ด้านบนให้ Agent แล้วจดรายการ “สิ่งที่มันจะเดา” ไว้ทุกข้อ','แก้ Issue จนรายการนั้นเหลือเฉพาะเรื่องที่คุณตั้งใจให้เป็นอิสระของ Agent เช่น ชื่อไฟล์หรือโครงสร้างโฟลเดอร์','เปิด Issue จริงใน repository ของคุณเอง (fork หรือ GitLab project ที่สร้างไว้ในบทที่ 00) แล้วจดเลข Issue ไว้','ยังไม่ต้องเปิด branch และยังไม่ต้องเรียก Agent ให้ลงมือ — บทที่ 03 และ 04 จะพาไปเปิดพื้นที่ทำงานเอง'],en:['Open `docs/requirements/US-001-opd-checkin.md` in the starter repo and read it through first','Draft the issue using the template above, without looking back at it while you write','Sort your ACs into two piles — states and behaviours — and count each pile','Send the prompt above and write down every item the agent says it would guess','Revise the issue until that list contains only what you deliberately leave to the agent, such as file names or folder structure','File the real issue in your own repository (the fork or GitLab project from lesson 00) and note its number','Do not open a branch or call the agent yet — lessons 03 and 04 set up the workspace']},expected:{th:'ได้ Issue หนึ่งใบที่มี Context, In/Out of scope, AC แยกสถานะกับพฤติกรรม และ Definition of Done โดยไม่มีข้อใดที่ต้องตีความ และคุณอธิบายได้ว่าทำไมแต่ละข้อใน Out of scope ถึงถูกตัดออก',en:'One issue with context, in/out of scope, ACs split into states and behaviours, and a definition of done — with nothing left to interpretation, and you can explain why each out-of-scope item was cut.'}}
      ],
      quiz:{q:{th:'AC ข้อใดพร้อมให้ AI Agent ทำงานต่อมากที่สุด?',en:'Which AC is most ready for an AI agent to work from?'},options:{th:['ระบบต้องค้นหาผู้ป่วยได้อย่างรวดเร็วและใช้งานง่าย','เมื่อค้นหาด้วย HN 65000123 ต้องแสดงผู้ป่วยชื่อ Somchai Jaidee','หน้าจอ check-in ต้องออกแบบให้ตรงกับ design system'],en:['Patient search must be fast and easy to use','Searching HN 65000123 must list the patient Somchai Jaidee','The check-in screen must match the design system']},answer:1,why:{th:'AC ที่ดีต้องตรวจได้ว่าผ่านหรือไม่ผ่านโดยไม่ต้องตีความ และใช้ค่าตายตัวที่ทดสอบซ้ำแล้วได้ผลเดิม',en:'A good AC is judged pass or fail with no interpretation, and uses a fixed value that reproduces the same result every time.'}},
      wrap:{th:['เขียน Issue ที่ลงมือทำต่อได้ทันที ไม่ใช่เอกสารเล่าเรื่อง','AC ทุกข้อตรวจได้ว่าผ่านหรือไม่ผ่าน และรู้ว่าจะไปตรวจที่ไหน','Issue หนึ่งใบมีขนาดพอดีกับ 1 branch และ 1 Agent session'],en:['Write issues that can be acted on, not narratives','Every AC is pass/fail, and you know where to verify it','One issue is sized to fit one branch and one agent session']}
    },
    {
      id:'git-basics', group:'day1', no:'03', duration:'75 min',
      title:{th:'Git Fundamentals สำหรับคนที่ไม่ได้เป็น Developer',en:'Git Fundamentals for Non-Developers'},
      intro:{th:'เรียน Git เท่าที่ต้องใช้เพื่อควบคุมงานของ AI: รู้ว่าเราอยู่ตรงไหน เปลี่ยนอะไร และจะส่งงานอย่างไรอย่างปลอดภัย',en:'Learn only the Git needed to supervise AI work: where you are, what changed, and how to deliver safely.'},
      outcomes:{th:['เข้าใจ Local/Remote, main, Branch, Commit, Push/Pull และ MR','ใช้ git status และ git diff เป็นนิสัย','รู้ว่าควร commit ตอนไหน และเขียนข้อความ commit ที่ตามงานย้อนกลับได้','รู้คำสั่งที่ควรหลีกเลี่ยงในช่วงเริ่มต้น'],en:['Understand Local/Remote, main, Branch, Commit, Push/Pull, and MR','Build the habit of git status and git diff','Know when to commit and how to write a message you can trace back','Know which commands to avoid early on']},
      blocks:[
        {type:'prose',title:{th:'Git คืออะไร ถ้าอธิบายโดยไม่ใช้ศัพท์ Developer',en:'What Git is, without developer jargon'},body:{th:[
          'ลองนึกถึง Google Docs ที่มี Version history แต่มีความต่างสำคัญ 3 ข้อ ข้อแรก คุณเป็นคนเลือกเองว่าจะ “บันทึกเป็นเวอร์ชัน” ตอนไหน (เรียกว่า commit) ไม่ใช่ระบบบันทึกให้อัตโนมัติ ข้อสอง ทุกเวอร์ชันต้องมีคำอธิบายว่าเปลี่ยนเพราะอะไร และข้อสาม คุณสามารถแตกสายงานออกไปทดลองแล้วค่อยรวมกลับได้',
          'สำหรับคอร์สนี้ Git มีประโยชน์ชัดเจนมากอยู่เรื่องเดียว คือ **มันคือเครื่องมือตรวจงาน AI ที่ดีที่สุดที่คุณมี** เมื่อ Agent บอกว่า “แก้เรียบร้อยแล้วครับ” Git จะบอกคุณตรง ๆ ว่ามันแตะไฟล์อะไรไปบ้าง กี่บรรทัด และมีอะไรที่ไม่เกี่ยวข้องปนมาหรือเปล่า',
          'คำศัพท์ที่ต้องแยกให้ออกมี 2 คู่ คู่แรกคือ **Local กับ Remote** — Local คือสำเนาในเครื่องคุณ ทำอะไรก็ได้ ยังไม่มีใครเห็น ส่วน Remote คือสำเนากลางบน GitHub/GitLab ที่ทีมใช้ร่วมกัน คู่ที่สองคือ **main กับ feature branch** — main คือสายงานหลักที่ต้องใช้งานได้เสมอ ส่วน feature branch คือสายที่เราแยกออกมาทำงานของเราโดยเฉพาะ',
          'กฎที่จะพูดซ้ำตลอดคอร์สคือ: **อย่าให้ AI ทำงานบน main โดยตรง** เพราะถ้ามันทำพัง คุณจะไม่มีจุดปลอดภัยให้ถอยกลับไป'
        ],en:[
          'Think of Google Docs with version history, with three important differences. First, you decide when a version is saved (a commit) rather than the system saving automatically. Second, every version carries a note about why it changed. Third, you can branch off to experiment and merge back later.',
          'For this course Git has one very clear benefit: **it is the best tool you have for reviewing AI work**. When the agent says “done!”, Git tells you plainly which files it touched, how many lines, and whether anything unrelated slipped in.',
          'Two pairs of words are worth separating. First, **local vs remote** — local is the copy on your machine, where nobody sees your work yet; remote is the shared copy on GitHub/GitLab. Second, **main vs feature branch** — main is the primary line that must always work; a feature branch is the line you split off for your own task.',
          'The rule we will repeat all course: **never let the AI work directly on main**, because if it breaks something you lose your safe point to retreat to.'
        ]}},
        {type:'diagram',title:{th:'Git ในภาพเดียว',en:'Git in one picture'},
          lead:{th:'เส้นทางนี้วนเป็นวงกลม เริ่มที่ main และทุกครั้งที่งานหนึ่งชิ้นเสร็จ คุณจะกลับมาที่ main เสมอ',en:'This path is a loop: it starts at main, and every finished piece of work brings you back to main.'},
          diagram:`flowchart LR\nM[main] -->|git switch -c| B[Feature branch]\nL[Local files] -->|git add + commit| B\nB -->|git push| R[Remote GitHub/GitLab]\nR -->|Merge Request| M\nM -->|git pull| L`,
          notes:{th:['`git switch -c` = สร้าง branch ใหม่จาก main แล้วย้ายไปทำงานบนนั้น (branch ทุกสายเกิดจาก main เสมอ)','`git add` + `git commit` = เลือกการเปลี่ยนแปลงแล้วบันทึกเป็นเวอร์ชันพร้อมเหตุผล','`git push` = ส่งเวอร์ชันในเครื่องขึ้นไปบน server ให้คนอื่นเห็น','Merge Request = ขออนุญาตรวมงานเข้า main โดยมีคน review','`git pull` = ดึงงานล่าสุดของทีมลงมา ทำก่อนเริ่มงานใหม่เสมอ'],en:['`git switch -c` = create a new branch from main and move onto it (every branch starts from main)','`git add` + `git commit` = select changes and save them as a version with a reason','`git push` = send local versions to the server so others can see them','Merge Request = ask to fold work into main, with review','`git pull` = fetch the team’s latest work; always do this before starting something new']}},
        {type:'commands',title:{th:'5 คำสั่งที่ใช้ทุกวัน',en:'The five commands you use every day'},
          lead:{th:'คำสั่งเหล่านี้เป็นคำสั่ง “อ่านอย่างเดียว” ทั้งหมด รันได้อย่างปลอดภัย ไม่เปลี่ยนแปลงอะไรในโปรเจกต์ ลองรันทีละคำสั่งแล้วสังเกตว่ามันตอบคำถามอะไรให้คุณ',en:'These are all read-only commands. They are safe to run and change nothing. Run them one at a time and notice which question each one answers.'},
          steps:[
            {title:{th:'ฉันอยู่ตรงไหน และมีอะไรค้างอยู่',en:'Where am I, and what is pending?'},what:{th:'`git status` คือคำสั่งที่ควรพิมพ์บ่อยที่สุด มันบอก 3 อย่าง คือ อยู่ branch ไหน, ไฟล์ไหนถูกแก้แต่ยังไม่ commit และมีไฟล์ใหม่ที่ Git ยังไม่รู้จักหรือไม่ ให้รันทั้งก่อนและหลังให้ Agent ทำงาน',en:'`git status` is the command to type most often. It tells you three things: which branch you are on, which files are modified but not committed, and whether there are new files Git does not track yet. Run it before and after the agent works.'},cmd:`git status`,expect:{th:'ถ้ายังไม่ได้แก้อะไร จะเห็นข้อความทำนอง `nothing to commit, working tree clean`',en:'If nothing was edited you see something like `nothing to commit, working tree clean`.'}},
            {title:{th:'มี branch อะไรบ้าง และตอนนี้อยู่อันไหน',en:'Which branches exist, and which am I on?'},what:{th:'`git branch` แสดงรายชื่อสายงานทั้งหมดในเครื่อง โดยมีเครื่องหมาย `*` นำหน้าอันที่คุณอยู่ตอนนี้ ใช้ตอนที่สงสัยว่า “งานนี้ฉันทำอยู่บน branch ถูกตัวหรือเปล่า”',en:'`git branch` lists every local line of work, with `*` marking the one you are on. Use it whenever you wonder “am I working on the right branch?”'},cmd:`git branch`,expect:{th:'รายชื่อ branch โดยมี `* main` ถ้าคุณยังไม่ได้แยกสายงาน',en:'A list of branches with `* main` if you have not branched off yet.'}},
            {title:{th:'ดึงงานล่าสุดของทีมลงมา',en:'Pull the team’s latest work'},what:{th:'`git pull` ดึงการเปลี่ยนแปลงจาก remote ลงมาที่ branch ปัจจุบัน ควรทำก่อนแยก branch ใหม่เสมอ เพื่อไม่ให้เริ่มงานจากฐานที่เก่าเกินไป',en:'`git pull` downloads changes from the remote into your current branch. Always do it before creating a new branch, so you do not start from a stale base.'},cmd:`git pull`,expect:{th:'`Already up to date.` หรือรายการไฟล์ที่ถูกอัปเดต',en:'`Already up to date.` or a list of updated files.'}},
            {title:{th:'ดูว่าอะไรเปลี่ยนไปบ้าง',en:'See exactly what changed'},what:{th:'`git diff` คือคำสั่งที่สำคัญที่สุดสำหรับการตรวจงาน AI มันแสดงทีละบรรทัดว่าอะไรถูกเพิ่ม (เครื่องหมาย +) และอะไรถูกลบ (เครื่องหมาย −) กด `q` เพื่อออกจากหน้าจอแสดงผล',en:'`git diff` is the most important command for reviewing AI work. It shows line by line what was added (+) and removed (−). Press `q` to exit the viewer.'},cmd:`git diff`,expect:{th:'ถ้ายังไม่มีการแก้ไฟล์ จะไม่แสดงอะไรเลย ซึ่งถูกต้องแล้ว',en:'If nothing was edited it prints nothing — which is correct.'}},
            {title:{th:'ดูประวัติย่อ ๆ ว่าใครทำอะไรไว้',en:'Skim the history of who did what'},what:{th:'`git log` แสดงประวัติ commit `--oneline` ย่อให้เหลือบรรทัดเดียวต่อ commit และ `-10` คือขอแค่ 10 รายการล่าสุด ใช้ดูว่าโปรเจกต์นี้เคลื่อนไหวไปทางไหน',en:'`git log` shows commit history. `--oneline` compresses each commit to one line and `-10` limits it to the ten most recent. Use it to sense where the project has been heading.'},cmd:`git log --oneline --decorate -10`,expect:{th:'10 บรรทัด แต่ละบรรทัดมีรหัสสั้น ๆ และข้อความอธิบาย commit',en:'Ten lines, each with a short hash and the commit message.'}}
          ],
          outro:{th:'สังเกตว่าไม่มีคำสั่งไหนในชุดนี้เปลี่ยนแปลงไฟล์เลย นี่คือชุดเครื่องมือ “มองก่อนทำ” ที่ควรใช้จนติดเป็นนิสัย',en:'Notice that none of these change anything. This is your “look before you act” toolkit — make it a habit.'}},
        {type:'prose',title:{th:'ทำไม node_modules ไม่เคยโผล่ใน git status',en:'Why node_modules never shows up in git status'},body:{th:[
          'ตอนรัน `npm install` ในบทที่ 00 มีไฟล์ถูกสร้างขึ้นเป็นหมื่นไฟล์ในโฟลเดอร์ `node_modules` แต่ `git status` กลับไม่เคยพูดถึงมันเลย ไม่ใช่เพราะ Git มองไม่เห็น แต่เพราะโปรเจกต์มีไฟล์ชื่อ **`.gitignore`** ที่ระบุว่าอะไรบ้างที่ Git ควรทำเป็นมองไม่เห็น',
          '`.gitignore` เป็นไฟล์ข้อความธรรมดา หนึ่งบรรทัดคือหนึ่งรูปแบบชื่อไฟล์หรือโฟลเดอร์ ของที่ทีมมักใส่ไว้มีสามกลุ่ม',
          'ข้อควรระวังที่ทำให้คนพลาดบ่อยคือ **`.gitignore` มีผลกับไฟล์ที่ยังไม่เคยถูก commit เท่านั้น** ถ้าเผลอ commit ไฟล์ `.env` ขึ้นไปแล้ว การมาเพิ่มบรรทัดใน `.gitignore` ทีหลังไม่ได้ลบมันออกจากประวัติ และถ้า push ไปแล้วต้องถือว่าความลับนั้นรั่วแล้ว ต้องไปเปลี่ยนรหัสหรือ token ตัวนั้นจริง ๆ ไม่ใช่แค่ลบไฟล์',
          'เวลาทำงานกับ AI เรื่องนี้มีประโยชน์ตรงที่ ถ้ามีไฟล์ประเภทที่ไม่ควรเข้า Git ตั้งแต่แรก การเพิ่มลงใน `.gitignore` หนึ่งครั้ง ดีกว่าการต้องคอยระวังเองทุกครั้งที่ Agent สร้างไฟล์'
        ],en:[
          'When you ran `npm install` in lesson 00, tens of thousands of files appeared under `node_modules` — yet `git status` never mentions them. Not because Git cannot see them, but because the project has a **`.gitignore`** listing what Git should pretend not to see.',
          '`.gitignore` is a plain text file: one line per file or folder pattern. Teams usually put three kinds of things in it.',
          'The mistake people make most: **`.gitignore` only affects files that were never committed**. If a `.env` already went into a commit, adding a line afterwards does not remove it from history — and once pushed, treat that secret as leaked and actually rotate the password or token rather than just deleting the file.',
          'Working with an AI, this pays off in one specific way: for a kind of file that should never enter Git, one line in `.gitignore` beats watching out for it by hand every time the agent creates something.'
        ]},points:{th:[
          '**ของที่สร้างใหม่ได้เสมอ** — `node_modules/`, `.next/`, `storybook-static/` ไม่ต้องเก็บ เพราะรัน `npm install` หรือ build ใหม่ก็ได้กลับมา',
          '**ของเฉพาะเครื่องและความลับ** — `.env`, key, token, ไฟล์ config ส่วนตัว สิ่งเหล่านี้ห้ามขึ้น Git เด็ดขาด',
          '**ของระบบปฏิบัติการและ editor** — `.DS_Store` บน mac หรือโฟลเดอร์ตั้งค่าของ editor ซึ่งเป็นเรื่องของแต่ละคน ไม่ใช่ของโปรเจกต์'
        ],en:[
          '**Anything regenerable** — `node_modules/`, `.next/`, `storybook-static/`: no need to store what `npm install` or a build recreates',
          '**Machine-specific values and secrets** — `.env`, keys, tokens, personal config. These must never reach Git',
          '**OS and editor noise** — `.DS_Store` on macOS, editor settings folders: personal, not part of the project'
        ]}},
        {type:'two',title:{th:'ใช้บ่อย vs ยังไม่ต้องใช้',en:'Use now vs avoid for now'},left:{title:{th:'ใช้บ่อย',en:'Use often'},items:{th:['git status','git diff','git switch -c','git add / commit / push'],en:['git status','git diff','git switch -c','git add / commit / push']}},right:{title:{th:'ยังไม่ต้องใช้',en:'Avoid for now'},items:{th:['git reset --hard','git push --force','interactive rebase','คำสั่งที่ Agent ขอรันแต่ผู้เรียนอธิบายไม่ได้'],en:['git reset --hard','git push --force','interactive rebase','Any command the agent asks to run that you cannot explain']}}},
        {type:'commands',title:{th:'ฝึกวงจรเต็ม: แยก branch → แก้ → ดู diff → ย้อนกลับ',en:'Practise the full loop: branch → edit → diff → undo'},
          lead:{th:'รอบนี้เราจะเปลี่ยนไฟล์จริง แต่เป็นการเปลี่ยนที่ย้อนกลับได้ทั้งหมด จุดประสงค์คือให้เห็นว่า Git จับการเปลี่ยนแปลงได้อย่างไร และเรายกเลิกมันได้อย่างไร',en:'This round changes a real file, but every change is reversible. The point is to see how Git notices a change and how you undo it.'},
          steps:[
            {title:{th:'เช็กจุดตั้งต้นว่าสะอาด',en:'Confirm a clean starting point'},what:{th:'ก่อนแยก branch ต้องแน่ใจว่าไม่มีงานค้างอยู่ ถ้ามีไฟล์ค้างแล้วแยก branch มันจะติดตามไปด้วย และทำให้สับสนว่าอะไรเป็นงานของ task ไหน',en:'Before branching, make sure nothing is pending. Uncommitted files follow you onto the new branch and blur which task they belong to.'},cmd:`git status`,expect:{th:'`working tree clean` ถ้าไม่ clean ให้จัดการไฟล์ค้างก่อน',en:'`working tree clean`. If it is not clean, deal with the pending files first.'}},
            {title:{th:'สร้าง branch ใหม่และย้ายเข้าไปทันที',en:'Create a new branch and switch to it'},what:{th:'`git switch -c` ทำสองอย่างพร้อมกัน คือสร้าง branch ใหม่ (`-c` มาจาก create) แล้วย้ายคุณเข้าไปอยู่บนนั้น ชื่อ branch ควรบอกได้ว่าทำอะไร งานจริงของเราจะใช้ `feature/us001-patient-checkin` ในบทถัดไป แต่รอบนี้เป็นการซ้อม จึงใช้ชื่อ `practice/git-warmup` แล้วลบทิ้งตอนจบ',en:'`git switch -c` does two things at once: create a branch (`-c` for create) and move you onto it. The name should say what the work is. Our real branch will be `feature/us001-patient-checkin` in the next lesson; this round is a rehearsal, so we use `practice/git-warmup` and delete it at the end.'},cmd:`git switch -c practice/git-warmup`,expect:{th:'`Switched to a new branch ...` และถ้ารัน `git branch` จะเห็น `*` อยู่หน้า branch ใหม่',en:'`Switched to a new branch ...`, and `git branch` now shows `*` on the new branch.'}},
            {title:{th:'แก้ไฟล์เล็กน้อยด้วยมือ',en:'Make a small edit by hand'},what:{th:'เปิด `README.md` ใน editor แล้วพิมพ์อะไรก็ได้สักบรรทัด จากนั้นบันทึกไฟล์ ขั้นนี้ไม่มีคำสั่งให้พิมพ์ เราแค่ต้องการให้เกิดการเปลี่ยนแปลงจริงเพื่อดูผลในขั้นถัดไป',en:'Open `README.md` in your editor, add any line, and save. No command to type here — we just need a real change to observe in the next step.'},expect:{th:'ไฟล์ถูกบันทึกแล้ว',en:'The file is saved.'}},
            {title:{th:'ให้ Git บอกว่าอะไรเปลี่ยน',en:'Ask Git what changed'},what:{th:'`git diff` จะแสดงบรรทัดที่คุณเพิ่มด้วยเครื่องหมาย `+` นี่คือมุมมองเดียวกับที่คุณจะใช้ตรวจงาน Agent ในบทหลัง ๆ ต่างกันแค่ตอนนั้นจะมีหลายไฟล์',en:'`git diff` shows the line you added, prefixed with `+`. This is the exact view you will use to review agent work later — only then there will be more files.'},cmd:`git diff`,expect:{th:'เห็นชื่อไฟล์ `README.md` และบรรทัดใหม่ที่ขึ้นต้นด้วย `+`',en:'You see `README.md` and your new line prefixed with `+`.'}},
            {title:{th:'ยกเลิกการแก้ไขที่ยังไม่ commit',en:'Undo an uncommitted edit'},what:{th:'`git restore` คืนไฟล์กลับไปเป็นเวอร์ชันล่าสุดที่ commit ไว้ ใช้เมื่อทดลองแล้วไม่เอา ปลอดภัยกว่า `git reset --hard` เพราะระบุเจาะจงทีละไฟล์ และไม่ไปยุ่งกับ commit',en:'`git restore` returns a file to its last committed version. Use it when an experiment is not worth keeping. It is safer than `git reset --hard` because it targets one named file and leaves commits alone.'},cmd:`git restore README.md`,expect:{th:'`git status` กลับมาเป็น clean และบรรทัดที่พิมพ์ไว้หายไป',en:'`git status` is clean again and your added line is gone.'}},
            {title:{th:'กลับไป main แล้วเก็บกวาด branch ซ้อม',en:'Return to main and clean up the rehearsal branch'},what:{th:'`git switch main` ย้ายกลับสายหลัก ส่วน `git branch -d` ลบ branch ที่ไม่ใช้แล้ว ตัวพิมพ์เล็ก `-d` จะลบให้เฉพาะ branch ที่ไม่มีงานค้าง ถ้ามีงานที่ยังไม่ถูกรวม มันจะเตือนและไม่ลบ — นี่คือเหตุผลที่เราใช้ `-d` ไม่ใช่ `-D`',en:'`git switch main` moves back to the main line and `git branch -d` deletes a branch you are done with. Lowercase `-d` refuses to delete a branch whose work is not merged yet — that is exactly why we use `-d` and not `-D`.'},cmd:`git switch main\ngit branch -d practice/git-warmup`,expect:{th:'`Deleted branch practice/git-warmup` และ `git branch` เหลือ `* main`',en:'`Deleted branch practice/git-warmup`, and `git branch` shows only `* main`.'}}
          ],
          outro:{th:'วงจรนี้คือสิ่งที่คุณจะทำซ้ำตลอดคอร์ส เพียงแต่ในบทหลัง ๆ คนที่แก้ไฟล์ในขั้นที่ 3 จะเป็น AI Agent แทนคุณ',en:'This loop repeats all course long; in later lessons the AI agent takes over step 3 instead of you.'}},
        {type:'prose',title:{th:'commit เมื่อไร และข้อความควรเขียนอย่างไร',en:'When to commit, and what the message should say'},body:{th:[
          'คำถามที่คนเริ่มใหม่ถามบ่อยที่สุดคือ “ควร commit ตอนไหน” คำตอบที่ใช้ได้จริงคือ **commit เมื่อผ่านจุดที่คุณตรวจแล้วว่าใช้ได้** ไม่ใช่ commit ตามเวลา และไม่ใช่รอจนจบงานทั้งก้อน',
          'ตลอดคอร์สนี้จุดตรวจมีรูปแบบซ้ำ ๆ อยู่สี่แบบ คือ component หนึ่งตัวกับ Storybook story ของมันผ่านสายตาคุณใน Storybook, interaction test ผ่าน, หน้าเว็บเดิน flow ได้ครบ และบั๊กหนึ่งตัวถูกแก้จบพร้อมหลักฐาน — สี่จังหวะนี้คือสี่ commit และคุณจะได้ทำจริงในบทที่ 08, 09, 11 และ 12',
          'เหตุผลที่ไม่รอ commit ทีเดียวตอนจบมีสองข้อ ข้อแรก ถ้าของพังคุณมีจุดปลอดภัยให้ถอยกลับไป ข้อสอง diff ก้อนละ 3 ไฟล์คนยังอ่านไหว แต่ diff 40 ไฟล์ไม่มีใครอ่านจริง ข้อสองนี้สำคัญเป็นพิเศษเวลาทำงานกับ AI เพราะมันสร้างไฟล์ได้เร็วกว่าที่คนอ่านทัน',
          'ส่วนข้อความ commit มีโครงที่ทีมส่วนใหญ่ใช้ร่วมกันคือ `type(scope): subject` เว้นบรรทัด แล้วอธิบายเหตุผลกับหลักฐาน และปิดท้ายด้วยเลข Issue ที่คุณเพิ่งเปิดในบทที่ 02'
        ],en:[
          'The question beginners ask most is “when should I commit?” The practical answer is **commit when you pass a point you have checked**, not on a timer and not only when the whole job is finished.',
          'This course repeats four such checkpoints: one component and its Storybook story pass your review in Storybook, an interaction test passes, the page walks the full flow, and one bug is fixed with evidence. Those four moments are four commits, and you will make them in lessons 08, 09, 11, and 12.',
          'Two reasons not to save it all for the end. First, when something breaks you have a safe point to step back to. Second, a three-file diff is readable and a forty-file diff is not — which matters doubly with an AI, because it produces files faster than anyone reads them.',
          'The message itself follows a shape most teams share: `type(scope): subject`, a blank line, then the reason and the evidence, and finally the issue number you created in lesson 02.'
        ]},points:{th:[
          '**feat** — ฟีเจอร์ใหม่ที่ผู้ใช้มองเห็น',
          '**fix** — แก้พฤติกรรมที่ผิด',
          '**test** — เพิ่มหรือแก้การทดสอบ',
          '**docs** — เอกสาร เช่น README หรือ template',
          '**refactor** — จัดระเบียบโค้ดโดยพฤติกรรมเหมือนเดิม',
          '**chore** — งานตั้งต้นหรืองานระบบที่ผู้ใช้ไม่เห็นผล'
        ],en:[
          '**feat** — a new user-visible feature',
          '**fix** — corrected behaviour',
          '**test** — tests added or changed',
          '**docs** — documentation such as a README or a template',
          '**refactor** — tidier code, same behaviour',
          '**chore** — setup or housekeeping with no user-visible effect'
        ]}},
        {type:'code',title:{th:'กายวิภาคของข้อความ commit',en:'Anatomy of a commit message'},
          lead:{th:'บรรทัดแรกคือสิ่งที่คนเห็นในประวัติ ส่วนย่อหน้าล่างคือสิ่งที่ช่วยคุณเองในอีกหกเดือน ให้บรรทัดแรกสั้นกว่า 72 ตัวอักษร และเขียนเป็นรูปปัจจุบัน (add ไม่ใช่ added)',en:'The first line is what people see in the history; the paragraph below is what helps you six months later. Keep the first line under 72 characters and write it in the present tense (add, not added).'},
          label:'commit message',code:`feat(us001): add PatientSearch with loading, empty and error states

Storybook stories reviewed for all four states using fixed mock data.
Clinic validation is not included here; it belongs to the check-in form.

Refs #12`,
          note:{th:'`feat` คือชนิดของงาน, `us001` คือ scope ที่บอกว่าแตะส่วนไหนของระบบ, บรรทัดว่างเป็นตัวแบ่งที่ Git ใช้จริง (ห้ามลืม) และ `Refs #12` คือด้ายที่ร้อยกลับไปหา Issue',en:'`feat` is the kind of work, `us001` is the scope telling which part of the system it touches, the blank line is a real separator Git relies on, and `Refs #12` is the thread back to the issue.'}},
        {type:'two',title:{th:'ข้อความที่ review ได้ vs ข้อความที่ต้องถามกลับ',en:'Messages you can review vs messages that force a question'},left:{title:{th:'review ได้',en:'Reviewable'},items:{th:['`feat(us001): add clinic selection with required validation`','`fix(us001): keep selected patient after a failed submit`','`test(us001): cover search happy path with interaction test`','`docs: add issue template for the team`'],en:['`feat(us001): add clinic selection with required validation`','`fix(us001): keep selected patient after a failed submit`','`test(us001): cover search happy path with interaction test`','`docs: add issue template for the team`']}},right:{title:{th:'ต้องถามกลับ',en:'Forces a question'},items:{th:['`update files` — ไฟล์อะไร และเปลี่ยนทำไม','`fix bug` — บั๊กตัวไหน แก้อย่างไร','`งานจาก AI` — ไม่ได้บอกอะไรเลยเกี่ยวกับงาน','`feat: เพิ่ม PatientSearch.tsx` — บอกชื่อไฟล์ แต่ไม่บอกผลลัพธ์ต่อผู้ใช้'],en:['`update files` — which files, and why','`fix bug` — which bug, fixed how','`work from AI` — says nothing about the work','`feat: add PatientSearch.tsx` — names a file but not the outcome']}}},
        {type:'practice',title:{th:'ลงมือทำ: Branch แรกของคุณ',en:'Practice: your first branch'},steps:{th:['เช็กว่าอยู่ main และ working tree สะอาด','สร้าง branch `practice/git-warmup`','แก้ README เล็กน้อย','ใช้ `git diff` ดูการเปลี่ยนแปลง แล้ว restore กลับโดยไม่ commit','กลับไป main แล้วลบ branch ซ้อมด้วย `git branch -d`','เขียนข้อความ commit สมมติสำหรับงาน US-001 หนึ่งข้อความ ให้ครบทั้ง type, scope, subject และ `Refs #<เลข Issue ของคุณ>`','อธิบายให้เพื่อนฟังว่าแต่ละคำสั่งทำอะไร'],en:['Confirm you are on main with a clean working tree','Create branch `practice/git-warmup`','Make a small README edit','Use `git diff` to inspect it, then restore without committing','Switch back to main and delete the rehearsal branch with `git branch -d`','Write one hypothetical commit message for US-001 with a type, scope, subject, and `Refs #<your issue number>`','Explain to a peer what each command did']},expected:{th:'สร้าง branch, เห็น diff, ย้อนการแก้ไฟล์ และเก็บกวาด branch ได้ พร้อมข้อความ commit หนึ่งข้อความที่เพื่อนอ่านแล้วรู้ทันทีว่างานนี้ทำอะไรและผูกกับ Issue ไหน',en:'You can branch, read a diff, undo an edit, and clean up — plus one commit message a peer instantly understands and can trace to an issue.'}}
      ],
      quiz:{q:{th:'คำสั่งไหนตอบคำถาม “AI เปลี่ยนอะไรไปบ้าง?” ได้ตรงที่สุด?',en:'Which command best answers “What did the AI change?”'},options:{th:['git diff','git clone','git branch -d'],en:['git diff','git clone','git branch -d']},answer:0,why:{th:'git diff คือหน้าต่างหลักในการตรวจการเปลี่ยนแปลงก่อน commit',en:'git diff is the primary window for reviewing changes before committing.'}},
      wrap:{th:['Git คือระบบควบคุมการเปลี่ยนแปลง ไม่ใช่เรื่องเฉพาะ Developer','status ก่อนทำ และ diff หลังทำ','commit ที่จุดตรวจที่ผ่านแล้ว ไม่ใช่ทีเดียวตอนจบ','main ไม่ใช่พื้นที่ทดลอง'],en:['Git is change control, not just a developer tool','status before work, diff after work','Commit at checkpoints you have verified, not once at the end','main is not a playground']}
    },
    {
      id:'worktree', group:'day1', no:'04', duration:'60 min',
      title:{th:'Git Worktree & Parallel AI',en:'Git Worktree & Parallel AI'},
      intro:{th:'แยก workspace ต่อ task เพื่อให้หลาย Agent หรือหลายงานทำพร้อมกันโดยไม่สลับ branch และไม่เอาไฟล์มาปนกัน',en:'Separate workspaces per task so multiple agents or tasks can run in parallel without branch switching or mixed file changes.'},
      outcomes:{th:['เข้าใจ 1 Issue = 1 Branch = 1 Worktree = 1 Agent Session','สร้าง/ดู/ลบ worktree ได้','รู้เรื่อง port conflict และ dependency ต่อ worktree','รู้ว่า parallel เหมาะเมื่อ task แยกกันจริง'],en:['Understand 1 Issue = 1 Branch = 1 Worktree = 1 Agent Session','Create/list/remove worktrees','Understand port conflicts and per-worktree dependencies','Use parallel work only when tasks are truly independent']},
      blocks:[
        {type:'prose',title:{th:'ปัญหาที่ Worktree เกิดมาเพื่อแก้',en:'The problem worktrees exist to solve'},body:{th:[
          'ในบทที่แล้วเราใช้ `git switch` เพื่อย้าย branch วิธีนั้นใช้ได้ดีเมื่อทำงานทีละอย่าง แต่มันมีข้อจำกัดที่สำคัญคือ **โฟลเดอร์มีได้แค่สถานะเดียวในเวลาหนึ่ง** เมื่อคุณสลับ branch ไฟล์ทั้งโฟลเดอร์จะเปลี่ยนไปเป็นของ branch ใหม่ทันที',
          'ลองนึกภาพว่า Agent กำลังแก้ไฟล์ของ US-001 อยู่ แล้วมีคนขอให้คุณดูงานด่วนอีกเรื่อง ถ้าคุณสลับ branch ตอนนั้น Agent ที่ยังทำงานค้างอยู่จะเห็นไฟล์เปลี่ยนไปกลางคัน ผลลัพธ์คือความสับสนที่หาสาเหตุยากมาก',
          '`git worktree` แก้ปัญหานี้ด้วยแนวคิดง่าย ๆ คือ ให้ repository เดียวกันมี **โฟลเดอร์ทำงานได้หลายโฟลเดอร์** แต่ละโฟลเดอร์ผูกกับ branch ของตัวเอง มีไฟล์ของตัวเอง และ Agent ที่รันอยู่คนละโฟลเดอร์จะไม่เห็นงานของกันและกัน',
          'กฎที่เราจะใช้ตลอดคอร์สคือ **1 Issue = 1 Branch = 1 Worktree = 1 Agent Session** จำง่ายและตัดปัญหาได้เกือบทั้งหมด'
        ],en:[
          'In the previous lesson we used `git switch` to move between branches. That works well when you do one thing at a time, but it has a key limit: **a folder can only hold one state at a time**. Switch branches and every file in the folder changes at once.',
          'Imagine the agent is mid-edit on US-001 and someone asks you to look at something urgent. Switching branches now means the working agent sees its files change underneath it — a source of confusion that is very hard to trace.',
          '`git worktree` fixes this with a simple idea: one repository can have **several working folders**. Each is tied to its own branch, holds its own files, and agents running in different folders never see each other’s work.',
          'The rule we use all course: **1 Issue = 1 Branch = 1 Worktree = 1 Agent Session.** Easy to remember, and it removes most of the confusion.'
        ]}},
        {type:'diagram',title:{th:'หนึ่ง Repo หลาย Workspace',en:'One repo, multiple workspaces'},
          lead:{th:'ประวัติ commit ทั้งหมดยังอยู่ที่เดียว สิ่งที่แยกออกไปคือ “โต๊ะทำงาน” เท่านั้น',en:'All commit history still lives in one place; what gets duplicated is only the “desk” you work at.'},
          diagram:`flowchart TB\nR[(Repository)] --> M[main worktree]\nR --> W1[wt-us001\\nfeature/us001]\nR --> W2[wt-us002\\nfeature/us002]\nW1 --> A1[Agent A]\nW2 --> A2[Agent B]`,
          notes:{th:['กล่องบนสุดคือ repository เดียว — ประวัติและ branch ทั้งหมดใช้ร่วมกัน','แต่ละ worktree เป็นโฟลเดอร์แยกบนดิสก์ มีไฟล์ของตัวเอง','Agent A กับ Agent B แก้ไฟล์กันคนละโฟลเดอร์ จึงไม่ชนกัน','ถ้าจะรันแอปพร้อมกัน ต้องใช้คนละ port เพราะ port ใช้ซ้ำไม่ได้'],en:['The top box is a single repository — history and branches are shared','Each worktree is its own folder on disk with its own files','Agent A and Agent B edit different folders, so they cannot collide','To run both apps at once you need different ports, since a port cannot be shared']}},
        {type:'two',title:{th:'ตกลงต้องใช้ switch หรือ worktree',en:'So which one: switch or worktree?'},left:{title:{th:'`git switch -c` พอแล้ว',en:'`git switch -c` is enough'},items:{th:['ทำงานทีละเรื่อง ไม่มีอะไรค้าง','แก้เล็ก ๆ ที่จบได้ในไม่กี่นาที','ไม่มี Agent หรือ dev server รันค้างอยู่','พื้นที่ดิสก์จำกัด เพราะแต่ละ worktree ต้อง `npm install` ของตัวเอง'],en:['One task at a time with nothing left open','A small change you finish in minutes','No agent session or dev server left running','Limited disk, since each worktree needs its own `npm install`']}},right:{title:{th:'ใช้ worktree',en:'Use a worktree'},items:{th:['มี Agent session รันค้างอยู่กับไฟล์ชุดนั้น','มีงานแทรกด่วนแต่ยังไม่อยากทิ้งงานเดิมกลางคัน','อยากเปิด Storybook ของสองงานเทียบกัน','งานยาวข้ามวัน'],en:['An agent session is live on that set of files','Something urgent arrives and you will not abandon the current work','You want two Storybooks open side by side','Work that spans more than a day']}}},
        {type:'callout',title:{th:'ค่าเริ่มต้นของคอร์สนี้',en:'The default for this course'},text:{th:'ตั้งแต่บทนี้เป็นต้นไป งาน US-001 ทั้งหมดอยู่บน **worktree เดียว** ชื่อ `wt-us001-patient-checkin` และ **branch เดียว** ชื่อ `feature/us001-patient-checkin` คำสั่ง git ในบทถัดไปทุกคำสั่งให้รันจากในโฟลเดอร์ worktree นี้ ไม่ใช่โฟลเดอร์ repo หลัก เหตุผลที่เลือก worktree เป็นค่าเริ่มต้นคือ Agent จะรันค้างอยู่ในนั้นตลอดสองวันข้างหน้า',en:'From here on, all US-001 work lives in **one worktree**, `wt-us001-patient-checkin`, on **one branch**, `feature/us001-patient-checkin`. Every git command in later lessons runs from inside that worktree folder, not the main repo folder. We default to a worktree because an agent session stays live in it for the next two days.'}},
        {type:'commands',title:{th:'สร้าง Worktree สำหรับ US-001 ทีละขั้น',en:'Create the US-001 worktree, step by step'},
          lead:{th:'ทำจากในโฟลเดอร์ repo หลัก (main worktree) เสมอ และอ่านผลลัพธ์ทุกครั้งก่อนไปขั้นถัดไป',en:'Always run these from the main repository folder, and read each result before moving on.'},
          steps:[
            {title:{th:'ยืนยันว่าอยู่ main และสะอาด',en:'Confirm you are on main and clean'},what:{th:'worktree ใหม่จะแตกออกจากจุดที่เราระบุ ดังนั้นควรเริ่มจาก main ที่เป็นปัจจุบัน เพื่อไม่ให้ทำงานต่อจากฐานเก่า',en:'A new worktree branches from the point you name, so start from an up-to-date main rather than a stale base.'},cmd:`git switch main
git status`,expect:{th:'อยู่บน main และ `working tree clean`',en:'You are on main and the working tree is clean.'}},
            {title:{th:'ดึงงานล่าสุดก่อนแตกสายงาน',en:'Pull the latest before branching'},what:{th:'ถ้าไม่ pull ก่อน คุณอาจสร้าง branch จากโค้ดเมื่อสัปดาห์ที่แล้ว แล้วต้องมาแก้ conflict ทีหลังโดยไม่จำเป็น',en:'Without pulling first you may branch from last week’s code and deal with avoidable conflicts later.'},cmd:`git pull`,expect:{th:'`Already up to date.` หรือรายการไฟล์ที่ถูกอัปเดต',en:'`Already up to date.` or a list of updated files.'}},
            {title:{th:'สร้าง worktree พร้อม branch ใหม่',en:'Create the worktree and its branch together'},what:{th:'คำสั่งนี้ทำ 3 อย่างในครั้งเดียว: สร้างโฟลเดอร์ `../wt-us001-patient-checkin`, สร้าง branch ชื่อ `feature/us001-patient-checkin` (จาก `-b`) และผูก branch นั้นเข้ากับโฟลเดอร์ใหม่ ส่วน `main` ท้ายคำสั่งคือจุดตั้งต้น เครื่องหมาย `..` แปลว่าวางโฟลเดอร์ไว้ข้างนอก repo หลัก ไม่ใช่ซ้อนอยู่ข้างใน',en:'This does three things at once: creates the folder `../wt-us001-patient-checkin`, creates the branch `feature/us001-patient-checkin` (that is what `-b` means), and binds that branch to the new folder. The trailing `main` is the starting point. The `..` places the folder beside the main repo rather than nested inside it.'},cmd:`git worktree add ../wt-us001-patient-checkin \\
  -b feature/us001-patient-checkin main`,expect:{th:'ข้อความ `Preparing worktree ...` และมีโฟลเดอร์ใหม่เกิดขึ้นข้าง ๆ repo เดิม',en:'A `Preparing worktree ...` message and a new folder beside the original repo.'}},
            {title:{th:'ตรวจรายการ worktree ทั้งหมด',en:'List every worktree'},what:{th:'ใช้เมื่อจำไม่ได้ว่ามีงานอะไรค้างอยู่บ้าง แต่ละบรรทัดบอก path ของโฟลเดอร์และ branch ที่ผูกอยู่',en:'Use this when you cannot remember what is in flight. Each line shows a folder path and the branch bound to it.'},cmd:`git worktree list`,expect:{th:'อย่างน้อย 2 บรรทัด: main worktree เดิม และ wt-us001 ที่เพิ่งสร้าง',en:'At least two lines: the original main worktree and the new wt-us001.'}},
            {title:{th:'ย้ายเข้าไปทำงานใน worktree ใหม่',en:'Move into the new worktree'},what:{th:'จุดสำคัญคือ Agent ต้องถูกเปิดขึ้นมา **จากในโฟลเดอร์นี้** ไม่ใช่โฟลเดอร์เดิม ให้เปิดหน้าต่าง editor ใหม่ที่ path นี้ด้วย เพื่อไม่ให้แก้ผิดที่',en:'The key point: the agent must be launched **from inside this folder**, not the original one. Open a fresh editor window at this path too, so you do not edit in the wrong place.'},cmd:`cd ../wt-us001-patient-checkin
git status`,expect:{th:'`On branch feature/us001-patient-checkin` — ถ้ายังขึ้น main แปลว่า cd ผิดโฟลเดอร์',en:'`On branch feature/us001-patient-checkin`. If it still says main, you changed into the wrong folder.'}},
            {title:{th:'ติดตั้ง dependency ของ worktree นี้',en:'Install dependencies for this worktree'},what:{th:'`node_modules` ไม่ถูกแชร์ข้าม worktree เพราะ Git ไม่ได้ติดตามโฟลเดอร์นี้ จึงต้อง install ใหม่ในแต่ละ worktree ที่จะรันแอป',en:'`node_modules` is not shared between worktrees because Git does not track that folder, so each worktree that runs the app needs its own install.'},cmd:`npm install`,expect:{th:'ติดตั้งเสร็จ และรัน `npm run dev` ใน worktree นี้ได้',en:'The install completes and `npm run dev` works inside this worktree.'}}
          ]},
        {type:'callout',tone:'warning',title:{th:'สิ่งที่มักเจอ',en:'Common friction'},text:{th:'แต่ละ worktree มีไฟล์ working copy ของตัวเอง จึงอาจต้อง `npm install` และถ้ารันหลาย Next.js/Storybook พร้อมกันต้องใช้คนละ port เช่น 3001/6001 และ 3002/6002',en:'Each worktree has its own working files, so you may need `npm install`. Multiple Next.js/Storybook processes also need different ports, e.g. 3001/6001 and 3002/6002.'}},
        {type:'commands',title:{th:'เมื่องานจบแล้ว: เก็บกวาด worktree',en:'When the work is done: clean up the worktree'},
          lead:{th:'อย่าปล่อยให้มี worktree ค้างเป็นสิบอัน เพราะจะสับสนว่าโฟลเดอร์ไหนคืองานไหน ทำขั้นตอนนี้ตอนจบจริง ๆ เท่านั้น คือหลังจาก MR ถูก merge แล้ว (ลำดับเต็มอยู่ในบทที่ 14) ถ้าทำก่อน คุณจะไม่มีที่ให้แก้งานตาม review',en:'Do not let a dozen worktrees pile up — you will lose track of which folder is which task. Do this only at the true end, after the MR is merged (the full order is in lesson 14). Clean up earlier and you have nowhere to make review fixes.'},
          steps:[
            {title:{th:'กลับไปที่ repo หลักก่อน',en:'Return to the main repo first'},what:{th:'คุณลบโฟลเดอร์ที่ตัวเองยืนอยู่ไม่ได้ ต้องออกมาก่อน',en:'You cannot remove the folder you are standing in, so step out first.'},cmd:`cd ../his-ai-opd-checkin-starter`,expect:{th:'กลับมาอยู่ที่ main worktree',en:'You are back in the main worktree.'}},
            {title:{th:'ลบ worktree ที่ไม่ใช้แล้ว',en:'Remove the finished worktree'},what:{th:'คำสั่งนี้ลบเฉพาะ **โฟลเดอร์ทำงาน** เท่านั้น branch และ commit ทั้งหมดยังอยู่ครบ ถ้ายังมีไฟล์ค้างที่ยังไม่ commit Git จะเตือนและไม่ยอมลบ ซึ่งเป็นการป้องกันที่ดี',en:'This removes only the **working folder**. The branch and all commits remain. If uncommitted files exist, Git refuses and warns you — a useful safety net.'},cmd:`git worktree remove ../wt-us001-patient-checkin`,expect:{th:'โฟลเดอร์หายไป และ `git worktree list` เหลือรายการน้อยลง',en:'The folder disappears and `git worktree list` shows one entry fewer.'}}
          ]},
        {type:'practice',title:{th:'ลงมือทำ: สร้าง workspace ของ US-001',en:'Practice: create a workspace for US-001'},steps:{th:['กลับไป main worktree และ pull ล่าสุด','สร้าง worktree `wt-us001-patient-checkin`','เปิด editor ใหม่ที่ worktree นี้ และเปิด Agent จากในโฟลเดอร์นี้','รัน `git worktree list` และ `git status` เพื่อยืนยัน context','ตอบให้ได้ว่า ตอนนี้ Agent กำลังแก้ไฟล์ในโฟลเดอร์ไหน'],en:['Return to the main worktree and pull latest','Create `wt-us001-patient-checkin`','Open a new editor window there and launch the agent from inside that folder','Run `git worktree list` and `git status` to confirm context','Be able to answer: which folder is the agent editing right now?']},expected:{th:'เห็น worktree อย่างน้อย 2 รายการ และ US-001 อยู่บน feature branch ของตัวเอง',en:'You see at least two worktrees, and US-001 is on its own feature branch.'}}
      ],
      quiz:{q:{th:'กฎไหนลดความสับสนได้ดีที่สุด?',en:'Which rule best reduces confusion?'},options:{th:['ทุก Agent ใช้ folder เดียว','1 task = 1 branch = 1 worktree','เปลี่ยน main โดยตรงเพื่อเร็วขึ้น'],en:['All agents use the same folder','1 task = 1 branch = 1 worktree','Edit main directly to move faster']},answer:1,why:{th:'การแยก task/branch/workspace ทำให้ขอบเขตการเปลี่ยนแปลงและ context ของ Agent ชัดเจน',en:'Separating task/branch/workspace keeps change boundaries and agent context clear.'}},
      wrap:{th:['Worktree คือ workspace ของ branch','Parallel ไม่ได้แปลว่าต้องเปิด Agent เยอะที่สุด','ตรวจ context ก่อนให้ Agent ทำงานเสมอ'],en:['A worktree is a workspace for a branch','Parallel does not mean “run as many agents as possible”','Confirm context before the agent starts']}
    },
    {
      id:'agent-plan', group:'day1', no:'05', duration:'75 min',
      title:{th:'AI Agent: Explore → Plan → Human Review',en:'AI Agent: Explore → Plan → Human Review'},
      intro:{th:'ฝึกสั่ง Agent ให้สำรวจระบบและอธิบายแผนก่อนแตะไฟล์ เพื่อให้คนที่ไม่เขียนโค้ดสามารถควบคุม scope ได้',en:'Train the agent to inspect and explain before touching files, giving non-coders a strong scope-control point.'},
      outcomes:{th:['เขียน prompt ที่มี context, constraints และ expected output','ให้ Agent อ่าน AGENTS.md ก่อนทำ','review plan ได้ด้วยคำถามด้าน scope/state/files/tests','รู้ว่า CLAUDE.md ใช้ reference ไปที่ AGENTS.md เพื่อลดกฎซ้ำ'],en:['Write prompts with context, constraints, and expected output','Make the agent read AGENTS.md first','Review plans using scope/state/files/tests questions','Use CLAUDE.md as a reference to AGENTS.md to avoid duplicated rules']},
      blocks:[
        {type:'prose',title:{th:'ทำไมห้ามสั่งว่า “ทำหน้า Check-in ให้หน่อย”',en:'Why “just build the check-in page” is the wrong first instruction'},body:{th:[
          'ถ้าคุณพิมพ์ประโยคเดียวว่า “สร้างหน้า OPD Check-in ให้หน่อย” Agent จะทำได้จริง และจะทำเร็วด้วย ปัญหาคือทุกช่องว่างที่คุณไม่ได้ระบุ มันจะเติมด้วยการเดา — เดาว่าฟิลด์ไหนบังคับ เดาว่าถ้าไม่พบผู้ป่วยควรแสดงอะไร เดาว่าควรติดตั้ง library เพิ่มหรือไม่',
          'ผลที่ตามมาไม่ใช่ “โค้ดผิด” เสมอไป แต่มักเป็น “โค้ดที่ถูกตามที่มันเดา แต่ไม่ตรงกับที่ธุรกิจต้องการ” และกว่าจะรู้ตัวก็แก้ไฟล์ไป 20 ไฟล์แล้ว',
          'วิธีแก้ที่ได้ผลที่สุดสำหรับคนที่ไม่ได้อ่านโค้ด คือแทรกจุดหยุดหนึ่งจุดก่อนที่ไฟล์ใด ๆ จะถูกแตะ นั่นคือให้ Agent **สำรวจแล้วเสนอแผนก่อน** แผนอ่านง่ายกว่าโค้ดมาก และการแก้แผนใช้เวลาไม่กี่นาที ในขณะที่การแก้โค้ดที่ผิดทิศใช้เวลาเป็นชั่วโมง',
          'Prompt ที่ใช้ได้จริงมักมี 3 ส่วนเสมอ คือ **Context** (ให้อ่านอะไรก่อน), **Constraints** (ห้ามทำอะไร) และ **Expected output** (อยากได้ผลลัพธ์หน้าตาแบบไหน) ถ้าขาดส่วนใดส่วนหนึ่ง Agent จะเติมให้เองโดยอัตโนมัติ'
        ],en:[
          'If you type a single line — “build the OPD check-in page” — the agent will do it, and quickly. The problem is that every gap you left unspecified gets filled by guessing: which fields are required, what to show when no patient is found, whether to add another library.',
          'The result is not necessarily “wrong code”. More often it is “code that is correct for what it guessed but wrong for the business” — and by the time you notice, twenty files have changed.',
          'The most effective fix for people who do not read code is to insert one stop before any file is touched: make the agent **explore and propose a plan first**. A plan is far easier to read than code, and revising a plan takes minutes where revising misdirected code takes hours.',
          'Prompts that work in practice always contain three parts: **context** (what to read first), **constraints** (what not to do), and **expected output** (what shape of answer you want). Leave one out and the agent fills it in for you.'
        ]}},
        {type:'diagram',title:{th:'จุดหยุดที่คุณควบคุมได้',en:'The control point you own'},
          lead:{th:'สังเกตว่าลูกศรจาก Plan ไป Implement ไม่ได้เกิดขึ้นเอง แต่ต้องผ่านการอนุมัติของคน',en:'Notice that the arrow from Plan to Implement does not happen by itself — a human must approve it.'},
          diagram:`flowchart LR\nReq[Requirement + AGENTS.md] --> Ex[Agent explores repo]\nEx --> Plan[Agent proposes a plan]\nPlan --> Rev{Human review}\nRev -->|ยังไม่ครบ / not complete| Plan\nRev -->|อนุมัติ / approved| Imp[Agent implements]\nImp --> Ver[Verify: Storybook, app, diff]`,
          notes:{th:['ขั้น Explore ต้องไม่มีการแก้ไฟล์เลย ยืนยันได้ด้วย `git status`','วงลูปกลับจาก Review ไป Plan คือหัวใจของบทนี้ — วนได้หลายรอบ ถูกกว่าการแก้โค้ดผิดทิศ','คนอนุมัติคือคนที่รู้ requirement ไม่ใช่คนที่อ่านโค้ดเก่งที่สุด'],en:['The explore step must change no files — verify with `git status`','The loop back from Review to Plan is the heart of this lesson; several rounds still cost less than misdirected code','The approver is whoever knows the requirement, not whoever reads code best']}},
        {type:'prompt',title:{th:'Explore Prompt — ใช้ก่อนเสมอ',en:'Explore Prompt — always use it first'},
          when:{th:'ใช้เป็น prompt แรกของทุก Issue หลังเปิด Agent ใน worktree ที่ถูกต้องแล้ว จุดสำคัญคือประโยค “ห้ามแก้ไขไฟล์” ซึ่งทำให้คุณยังมีอำนาจตัดสินใจอยู่',en:'Use it as the first prompt for every issue, after opening the agent in the correct worktree. The “do not modify files” line is what keeps the decision in your hands.'},
          prompt:{th:`อ่านไฟล์ AGENTS.md และ docs/requirements/US-001-opd-checkin.md

ห้ามแก้ไขไฟล์ใด ๆ ในขั้นตอนนี้

จากนั้นรายงานให้ฉันตามหัวข้อนี้
1. โครงสร้างโปรเจกต์ปัจจุบันเป็นอย่างไร
2. component ที่เล็กที่สุดที่จำเป็นต้องมีสำหรับงานนี้คืออะไรบ้าง
3. UI state และ edge case ที่ต้องรองรับมีอะไรบ้าง
4. มีไฟล์หรือ component เดิมที่ควรนำกลับมาใช้ซ้ำหรือไม่
5. ไฟล์ที่คาดว่าจะสร้างใหม่หรือแก้ไข มีอะไรบ้าง
6. จะตรวจสอบผลงานอย่างไรว่าถูกต้อง

สรุปเป็นแผนการทำงานสั้น ๆ เพื่อให้คนตรวจก่อนอนุมัติ`,en:`Read AGENTS.md and docs/requirements/US-001-opd-checkin.md.

Do not modify any files at this stage.

Then report back on:
1. The current project structure
2. The smallest components needed for this work
3. The UI states and edge cases that must be handled
4. Any existing files or components worth reusing
5. The files you expect to create or change
6. How you will verify the result is correct

Summarize it as a short implementation plan for human review.`},
          after:{th:['รัน `git status` ทันที ต้องยังสะอาด ถ้าไม่สะอาดแปลว่า Agent ไม่ทำตามข้อห้าม','เทียบรายการ UI state กับ acceptance criteria ของ US-001 ทีละข้อ','ดูจำนวนไฟล์ที่มันจะแตะ ถ้าเยอะผิดปกติให้ถามว่า “ไฟล์นี้จำเป็นเพราะอะไร”'],en:['Run `git status` immediately — it must still be clean; if not, the agent ignored the constraint','Compare its UI state list against the US-001 acceptance criteria, one by one','Look at how many files it plans to touch; if the number looks high, ask “why is this file necessary?”']}},
        {type:'list',title:{th:'คำถามที่ Human ใช้ review Plan',en:'Human plan-review questions'},items:{th:['เข้าใจ Requirement ถูกหรือยัง?','ขาด Loading / Empty / Error / Validation / Success หรือไม่?','ไฟล์ที่จะเปลี่ยนอยู่ใน scope หรือไม่?','กำลังสร้าง abstraction เกินจำเป็นหรือไม่?','Verification plan มี Storybook + running app + lint/test/build หรือไม่?'],en:['Does the plan understand the requirement correctly?','Are Loading / Empty / Error / Validation / Success states covered?','Are proposed files within scope?','Is the agent creating unnecessary abstraction?','Does verification include Storybook + running app + lint/test/build?']}},
        {type:'prompt',title:{th:'Refine Prompt — เมื่อแผนยังไม่ครบ',en:'Refine Prompt — when the plan has gaps'},
          when:{th:'ใช้เมื่อ review แล้วพบว่าแผนขาด state, ตีความ requirement ผิด หรือจะไปแก้ไฟล์ที่ไม่เกี่ยวข้อง อย่าเพิ่งอนุมัติเพราะเกรงใจ — การวนแผนอีกรอบถูกกว่าการรื้อโค้ดมาก',en:'Use it when your review finds missing states, a misread requirement, or plans to touch unrelated files. Do not approve out of politeness — another planning round is far cheaper than rewriting code.'},
          prompt:{th:`แผนที่เสนอมายังไม่ครบ ปรับแผนใหม่โดยยังไม่ต้องแก้ไฟล์

สิ่งที่ต้องแก้ในแผน
- เพิ่ม UI state ที่ขาดไป: [ระบุ เช่น Empty, Error]
- ตัดไฟล์ที่ไม่เกี่ยวกับ US-001 ออกจากรายการ: [ระบุไฟล์]
- อธิบายเหตุผลของแต่ละไฟล์ที่ยังอยู่ในรายการ ว่าจำเป็นกับ US-001 อย่างไร

ส่งแผนฉบับปรับปรุงกลับมาให้ตรวจอีกครั้ง ยังไม่ต้องลงมือทำ`,en:`The proposed plan is incomplete. Revise it without modifying any files.

What to fix in the plan:
- Add the missing UI states: [name them, e.g. Empty, Error]
- Remove files unrelated to US-001 from the list: [name them]
- For every file still on the list, explain why US-001 needs it

Return the revised plan for another review. Do not implement yet.`},
          after:{th:['แผนรอบสองควรสั้นลงและชัดขึ้น ไม่ใช่ยาวขึ้น','ถ้ามันยังยืนยันว่าต้องแก้ไฟล์ที่คุณสงสัย ให้ขอเหตุผลเป็นภาษาธุรกิจ ไม่ใช่ศัพท์เทคนิค'],en:['The second plan should get shorter and sharper, not longer','If it still insists on a file you doubt, ask for the reason in business language, not technical jargon']}},
        {type:'prompt',title:{th:'Implement Prompt — หลังอนุมัติแผนแล้วเท่านั้น',en:'Implement Prompt — only after the plan is approved'},
          when:{th:'ใช้เมื่อแผนผ่านการ review แล้ว สังเกตว่าเราไม่ได้อธิบายวิธีเขียนโค้ด แต่กำหนดขอบเขตและสิ่งที่ห้ามทำ รวมถึงห้าม commit/push ซึ่งเป็นการรักษาสิทธิ์ตรวจงานไว้ที่คน',en:'Use it once the plan passes review. Notice we never describe how to write code; we set boundaries and prohibitions — including no commit or push, which keeps the final check with a human.'},
          prompt:{th:`ลงมือทำตามแผนที่อนุมัติแล้ว

ข้อกำหนด
- จำกัดการเปลี่ยนแปลงให้อยู่ในขอบเขตของ US-001 เท่านั้น
- ใช้ mock data / synthetic data เท่านั้น ห้ามต่อระบบจริง
- component ที่นำกลับมาใช้ซ้ำได้ ต้องมีไฟล์ Storybook story คู่กันเสมอ
- ห้ามเพิ่ม backend, database, ระบบ authentication หรือ UI library ใหม่
- ห้าม commit และห้าม push

เมื่อทำเสร็จ ให้รัน check ที่เกี่ยวข้อง แล้วสรุปเป็นรายการว่าแก้ไฟล์อะไรไปบ้าง และแต่ละไฟล์เปลี่ยนเพราะอะไร`,en:`Implement the approved plan.

Constraints:
- Keep changes scoped to US-001 only
- Use mock/synthetic data only; never connect to a real system
- Every reusable product component must come with its Storybook story file
- Do not add a backend, database, auth system, or a new UI library
- Do not commit and do not push

When finished, run the relevant checks and summarize every changed file and why it changed.`},
          after:{th:['ยังไม่ใช่ตอนที่เชื่อว่าเสร็จ — ไปตรวจ Storybook, หน้าแอปจริง และ `git diff` ก่อน','เทียบรายการไฟล์ที่มันสรุป กับผลของ `git diff --stat` ว่าตรงกันหรือไม่','ถ้ามันเผลอ commit ให้บอกทันทีว่าผิดกติกา และตรวจว่า commit อะไรไป'],en:['This is not yet the moment to believe it is done — check Storybook, the running app, and `git diff` first','Compare its summary against `git diff --stat` and see whether they match','If it committed anyway, say so immediately and inspect what was committed']}},
        {type:'prose',title:{th:'AGENTS.md คือกติกาที่ไม่ต้องพิมพ์ซ้ำทุกครั้ง',en:'AGENTS.md is the rulebook you do not retype every time'},body:{th:[
          'สังเกตว่า prompt ด้านบนสั้นกว่าที่ควรจะเป็น เพราะกฎจำนวนมากถูกย้ายไปอยู่ในไฟล์ `AGENTS.md` ของโปรเจกต์แล้ว เช่น ห้าม commit เอง, ต้องมี Storybook story คู่กับ component, ใช้ mock data เท่านั้น',
          'ประโยชน์คือกฎเหล่านี้จะถูกใช้กับทุก session ของทุกคนในทีม โดยไม่ต้องหวังว่าแต่ละคนจะจำพิมพ์ครบ ถ้าคุณพบว่าต้องเตือน Agent เรื่องเดิมซ้ำ ๆ นั่นคือสัญญาณว่าควรเพิ่มกฎข้อนั้นลงใน `AGENTS.md` แทน',
          'สำหรับ Claude Code ไฟล์ `CLAUDE.md` สามารถอ้างอิงไปที่ `AGENTS.md` ได้ เพื่อไม่ให้ต้องดูแลกฎสองชุดที่อาจขัดกันเอง'
        ],en:[
          'Notice the prompts above are shorter than you might expect. Many rules already live in the project’s `AGENTS.md` — no self-committing, components ship with Storybook stories, mock data only.',
          'The benefit is that those rules apply to every session for everyone on the team, without relying on each person remembering to type them. If you find yourself reminding the agent of the same thing repeatedly, that is a signal the rule belongs in `AGENTS.md`.',
          'For Claude Code, `CLAUDE.md` can simply point at `AGENTS.md` so you never maintain two rulebooks that can disagree.'
        ]}},
        {type:'practice',title:{th:'ลงมือทำ: ให้ Agent เสนอแผน US-001',en:'Practice: ask the agent to plan US-001'},steps:{th:['เปิด Agent ใน worktree US-001','ส่ง Explore Prompt แล้วรอแผน','รัน `git status` เพื่อยืนยันว่ายังไม่มีไฟล์ถูกแก้','เปรียบเทียบ plan กับ acceptance criteria ทีละข้อ','ถ้ายังขาด ให้ใช้ Refine Prompt แล้ว review ซ้ำจนพอใจ'],en:['Open the agent in the US-001 worktree','Send the Explore Prompt and wait for the plan','Run `git status` to confirm no files changed','Compare the plan against the acceptance criteria one by one','If gaps remain, use the Refine Prompt and review again until satisfied']},expected:{th:'ได้ plan ที่ระบุ component, state, file scope และ verification โดยยังไม่มีไฟล์ถูกแก้',en:'You get a plan listing components, states, file scope, and verification, with no files changed yet.'}}
      ],
      quiz:{q:{th:'Prompt ที่ดีสำหรับเริ่มงานควรขาดอะไรไม่ได้?',en:'What must a good task-start prompt include?'},options:{th:['คำว่า “สวยๆ”','Context + constraints + expected output','ชื่อ model ที่ยาวที่สุด'],en:['The phrase “make it pretty”','Context + constraints + expected output','The longest model name']},answer:1,why:{th:'สามส่วนนี้ทำให้ Agent รู้ว่าต้องทำอะไร ห้ามทำอะไร และต้องรายงานอะไรกลับมา',en:'Those three elements tell the agent what to do, what not to do, and what to return.'}},
      wrap:{th:['AGENTS.md คือกติกาหลัก','Explore ก่อน Implement','Human review plan ก่อนอนุญาตให้แก้ไฟล์'],en:['AGENTS.md is the primary rulebook','Explore before implement','Human reviews the plan before file changes']}
    },
    {
      id:'next-literacy', group:'day2', no:'06', duration:'60 min',
      title:{th:'อ่าน Next.js Project โดยไม่ต้องเขียน React',en:'Read a Next.js Project Without Writing React'},
      intro:{th:'เรียนแผนที่ของ project เพื่อรู้ว่า Agent กำลังแตะส่วนไหน ไม่ได้เรียน React syntax แบบ Developer course',en:'Learn the project map so you know what the agent is touching — not React syntax as in a developer course.'},
      outcomes:{th:['หา page, feature, component, mock และ configuration ได้','อ่าน JSX/TSX ระดับ component + props ได้','รู้จัก package.json และ npm scripts','รู้ว่า route /opd/check-in มาจากโครงสร้าง app อย่างไร'],en:['Find pages, features, components, mocks, and configuration','Read JSX/TSX at component + props level','Understand package.json and npm scripts','Know how /opd/check-in maps to the app directory']},
      blocks:[
        {type:'prose',title:{th:'เป้าหมายคือ “อ่านแผนที่” ไม่ใช่ “อ่านทุกบรรทัด”',en:'The goal is reading the map, not reading every line'},body:{th:[
          'คุณไม่จำเป็นต้องเข้าใจโค้ดทุกบรรทัดเพื่อกำกับ AI ได้ดี สิ่งที่จำเป็นจริง ๆ มีแค่ความสามารถในการตอบ 3 คำถามนี้ได้เร็ว ๆ คือ **ไฟล์นี้อยู่ตรงไหนของระบบ**, **มันเกี่ยวกับ Issue ที่ทำอยู่หรือไม่** และ **ถ้ามันพัง ผู้ใช้จะเห็นอะไรผิดปกติ**',
          'Next.js มีกติกาที่ช่วยเราตรงนี้มาก คือ **โครงสร้างโฟลเดอร์คือ URL** ไม่ต้องมีไฟล์ config บอกว่า URL ไหนไปหน้าไหน แค่ดูตำแหน่งของไฟล์ `page.tsx` ก็รู้ทันที',
          'ตัวอย่างเช่น ไฟล์ที่อยู่ที่ `src/app/opd/check-in/page.tsx` จะกลายเป็น URL `/opd/check-in` โดยอัตโนมัติ นั่นแปลว่าถ้า Agent บอกว่าจะสร้างหน้าใหม่ คุณเดาได้ทันทีว่าไฟล์ควรไปอยู่ตรงไหน และถ้ามันไปสร้างที่อื่น คุณมีเหตุผลที่จะถาม',
          'ส่วนนามสกุลไฟล์ `.tsx` อ่านง่าย ๆ ว่า “ไฟล์ที่เขียนหน้าตา UI ได้” ตัว `x` มาจาก JSX ซึ่งเป็นวิธีเขียน UI ให้หน้าตาคล้าย HTML ส่วน `ts` คือ TypeScript ที่ช่วยจับข้อผิดพลาดตั้งแต่ก่อนรัน — และนี่แหละคือที่มาของ error ประเภทที่เราจะเจอในบท Debugging'
        ],en:[
          'You do not need to understand every line to direct an AI well. What you really need is to answer three questions quickly: **where does this file sit in the system**, **is it related to the issue I am working on**, and **if it breaks, what would the user see?**',
          'Next.js helps a lot here with one convention: **the folder structure is the URL**. No config file maps URLs to pages — the location of a `page.tsx` file tells you directly.',
          'For example, a file at `src/app/opd/check-in/page.tsx` automatically becomes the URL `/opd/check-in`. So when the agent says it will add a new page, you can predict where the file should go — and if it puts it somewhere else, you have grounds to ask why.',
          'Read the `.tsx` extension simply as “a file that can describe UI”. The `x` comes from JSX, a way of writing UI that looks like HTML; `ts` is TypeScript, which catches mistakes before the app even runs — and that is exactly where the errors in the Debugging lesson come from.'
        ]}},
        {type:'diagram',title:{th:'จากโฟลเดอร์ไปเป็น URL',en:'From folder to URL'},
          lead:{th:'ภาพนี้อธิบายกติกาเดียวที่ต้องจำในบทนี้ คือโครงสร้างโฟลเดอร์กำหนดเส้นทางของหน้าเว็บ',en:'This picture explains the one rule to remember: folder structure defines the page route.'},
          diagram:`flowchart LR\nA[src/app/] --> B[opd/]\nB --> C[check-in/]\nC --> D[page.tsx]\nD --> E["/opd/check-in\\nURL ที่ผู้ใช้เปิด"]\nD -.uses.-> F[features/opd-checkin/\\nlogic + components]\nF -.uses.-> G[mocks/\\nsynthetic data]`,
          notes:{th:['`src/app/` คือรากของทุก route ในแอป','ทุกโฟลเดอร์ย่อยจะกลายเป็นส่วนหนึ่งของ URL','ไฟล์ชื่อ `page.tsx` คือสิ่งที่ทำให้ path นั้นเปิดได้จริง','`features/` เก็บ component และ logic ของฟีเจอร์ ไม่ใช่ตัว route','`mocks/` เก็บข้อมูลสมมติ ทำให้ UI ทำงานได้โดยไม่มี backend'],en:['`src/app/` is the root of every route in the app','Each nested folder becomes a segment of the URL','A file named `page.tsx` is what makes that path openable','`features/` holds a feature’s components and logic, not the route itself','`mocks/` holds synthetic data so the UI works without a backend']}},
        {type:'code',title:{th:'แผนผังโฟลเดอร์ที่ควรจำ',en:'The folder map worth memorizing'},
          lead:{th:'จำไว้ 5 ตำแหน่งพอ ที่เหลือค่อยถาม Agent เอาได้เมื่อจำเป็น',en:'Five locations are enough to remember; ask the agent about the rest when it matters.'},
          label:'Project map',code:`src/\n├── app/                  ← route: โฟลเดอร์ = URL\n│   └── opd/\n│       └── check-in/\n│           └── page.tsx  ← /opd/check-in\n├── features/             ← component + logic ของแต่ละฟีเจอร์\n│   └── opd-checkin/\n├── components/           ← UI ชิ้นเล็กที่ใช้ซ้ำได้ทั้งแอป\n├── mocks/                ← synthetic data สำหรับ training\n└── services/             ← ตัวกลางเรียกข้อมูล (ในคอร์สนี้คือ mock)\n.storybook/               ← config ของ Storybook\npackage.json              ← รายการคำสั่งและ dependency\nAGENTS.md                 ← กติกาสำหรับ AI Agent`,
          note:{th:'ถ้า Agent เสนอจะสร้างไฟล์นอก 5 ตำแหน่งนี้ ให้ถามเหตุผลก่อนอนุมัติ',en:'If the agent proposes files outside these five places, ask why before approving.'}},
        {type:'two',title:{th:'อ่าน TSX แบบ Product Person',en:'Read TSX like a product person'},left:{title:{th:'สิ่งที่เห็น',en:'What you see'},items:{th:['`<PatientCard />` = เรียกใช้ Component','`patient={patient}` = ส่งข้อมูลเข้าไป','`selected={true}` = ส่ง state/option','`onSelect={...}` = มี interaction callback'],en:['`<PatientCard />` = use a component','`patient={patient}` = pass data in','`selected={true}` = pass a state/option','`onSelect={...}` = interaction callback']}},right:{title:{th:'สิ่งที่ยังไม่ต้องเรียนลึก',en:'Not yet'},items:{th:['React lifecycle','Generic types','Server Component internals','State management libraries'],en:['React lifecycle','Generic types','Server Component internals','State management libraries']}}},
        {type:'code',title:{th:'ตัวอย่างที่อ่านได้ใน 30 วินาที',en:'An example you can read in 30 seconds'},
          lead:{th:'อ่านจากบนลงล่าง: ชื่อ component บอกว่าเป็นอะไร ส่วนบรรทัดถัดมาแต่ละบรรทัดคือ “ข้อมูลหรือพฤติกรรม” ที่ส่งเข้าไป ศัพท์เทคนิคเรียกสิ่งเหล่านี้ว่า props',en:'Read top to bottom: the component name says what it is, and each following line is a piece of data or behaviour passed into it. The technical term for these is props.'},
          label:'Example',code:`<PatientCard\n  patient={patient}\n  selected={selectedPatientId === patient.id}\n  onSelect={() => selectPatient(patient.id)}\n/>`,
          note:{th:'แปลเป็นภาษาคน: “แสดงการ์ดผู้ป่วยหนึ่งใบ ใช้ข้อมูลของผู้ป่วยคนนี้ ให้แสดงสถานะถูกเลือกเมื่อ id ตรงกับที่เลือกไว้ และเมื่อผู้ใช้คลิกให้เลือกผู้ป่วยคนนี้” — เท่านี้ก็เพียงพอต่อการ review',en:'In plain words: “show one patient card, use this patient’s data, mark it selected when its id matches the selected one, and select this patient when the user clicks.” That is enough to review it.'}},
        {type:'commands',title:{th:'ค้นหาคำสั่งของโปรเจกต์ด้วยตัวเอง',en:'Discover the project’s commands yourself'},
          lead:{th:'อย่าท่องคำสั่งจากสไลด์ ให้ดูจากไฟล์จริงของโปรเจกต์ เพราะทุกโปรเจกต์ตั้งชื่อ script ไม่เหมือนกัน',en:'Do not memorize commands from slides; read them from the project’s own file, because every project names its scripts differently.'},
          steps:[
            {title:{th:'เปิดดูรายการ script ทั้งหมด',en:'List every available script'},what:{th:'`npm run` เฉย ๆ โดยไม่ใส่ชื่อ script จะแสดงรายการคำสั่งทั้งหมดที่โปรเจกต์นี้รองรับ เป็นวิธีที่เร็วกว่าการเปิดไฟล์อ่านเอง',en:'Running `npm run` with no script name lists every command the project supports — faster than opening the file to look.'},cmd:`npm run`,expect:{th:'รายการเช่น `dev`, `build`, `lint`, `test`, `storybook`',en:'A list such as `dev`, `build`, `lint`, `test`, `storybook`.'}},
            {title:{th:'เปิดไฟล์ package.json เพื่อดูรายละเอียด',en:'Open package.json for detail'},what:{th:'ในไฟล์นี้ส่วน `"scripts"` คือรายการคำสั่งย่อ ส่วน `"dependencies"` คือ library ที่โปรเจกต์ใช้ ถ้า Agent เพิ่ม library ใหม่โดยไม่ได้บอก คุณจะเห็นความเปลี่ยนแปลงในไฟล์นี้',en:'In this file, `"scripts"` lists the shortcut commands and `"dependencies"` lists the libraries in use. If the agent quietly adds a library, this file changes.'},expect:{th:'เห็นว่า `npm run dev` จริง ๆ แล้วไปเรียกคำสั่งอะไรของ Next.js',en:'You can see what `npm run dev` actually invokes under the hood.'}},
            {title:{th:'ตรวจว่า route มีอยู่จริง',en:'Confirm the route really exists'},what:{th:'เปิดไฟล์ `src/app/opd/check-in/page.tsx` แล้วเทียบกับ URL `http://localhost:3000/opd/check-in` ในเบราว์เซอร์ นี่คือการพิสูจน์กติกา “โฟลเดอร์คือ URL” ด้วยตาตัวเอง',en:'Open `src/app/opd/check-in/page.tsx` and compare it with `http://localhost:3000/opd/check-in` in the browser. This proves the “folder is the URL” rule with your own eyes.'},expect:{th:'เนื้อหาบนหน้าจอสอดคล้องกับสิ่งที่เขียนอยู่ในไฟล์นั้น',en:'What is on screen matches what that file describes.'}}
          ]},
        {type:'prompt',title:{th:'Prompt: ให้ Agent พาทัวร์โปรเจกต์',en:'Prompt: ask the agent for a guided tour'},
          when:{th:'ใช้เมื่ออยากรู้ว่า component ใหม่ควรไปอยู่ที่ไหน ก่อนอนุญาตให้สร้างไฟล์ การถามก่อนช่วยจับกรณีที่ Agent กำลังจะวางไฟล์ผิดที่',en:'Use it when you want to know where a new component belongs, before allowing any file creation. Asking first catches cases where the agent is about to put files in the wrong place.'},
          prompt:{th:`ห้ามแก้ไขไฟล์ ให้ตอบคำถามต่อไปนี้โดยอ้างอิง path จริงในโปรเจกต์

1. ถ้าผู้ใช้เปิด /opd/check-in ระบบจะโหลดไฟล์ไหนเป็นไฟล์แรก
2. ถ้าจะเพิ่ม component ใหม่สำหรับฟีเจอร์นี้ ควรวางไว้ที่ไหน และเพราะอะไร
3. component ที่มีอยู่แล้วและใช้ซ้ำได้มีอะไรบ้าง
4. ข้อมูลตัวอย่างของผู้ป่วยอยู่ไฟล์ไหน
5. คำสั่งที่ใช้รันแอป, รัน Storybook และตรวจคุณภาพคืออะไร

ตอบสั้น ๆ เป็นข้อ ๆ พร้อม path ของไฟล์`,en:`Do not modify any files. Answer the following, citing real paths in this project.

1. Which file loads first when a user opens /opd/check-in?
2. Where should a new component for this feature live, and why?
3. Which existing components can be reused?
4. Which file holds the sample patient data?
5. Which commands run the app, run Storybook, and check quality?

Answer briefly as a numbered list with file paths.`},
          after:{th:['เปิดไฟล์ตาม path ที่มันตอบ เพื่อยืนยันว่ามีอยู่จริง','ถ้ามันเสนอที่วางไฟล์ต่างจากโครงสร้างเดิมของโปรเจกต์ ให้ถามเหตุผล'],en:['Open the paths it cites to confirm they exist','If it suggests a location that breaks the project’s existing structure, ask why']}},
        {type:'practice',title:{th:'ลงมือทำ: หา route และ script',en:'Practice: find the route and scripts'},steps:{th:['เปิด `src/app/opd/check-in/page.tsx`','เปิด `package.json` แล้วหา dev, storybook, lint, test และ build','เปิด URL จริงในเบราว์เซอร์แล้วเทียบกับไฟล์','ถาม Agent ด้วย Prompt ด้านบน แล้วตรวจว่า path ที่มันตอบมีอยู่จริง'],en:['Open `src/app/opd/check-in/page.tsx`','Open `package.json` and find dev, storybook, lint, test, and build','Open the real URL in the browser and compare with the file','Send the prompt above and verify the paths it cites actually exist']},expected:{th:'สามารถอธิบายว่า route, page และ feature folder เชื่อมกันอย่างไร และรู้คำสั่งที่ใช้รัน/ตรวจงาน',en:'You can explain how route, page, and feature folders connect and know the commands used to run/check work.'}}
      ],
      quiz:{q:{th:'เป้าหมายของบทนี้คืออะไร?',en:'What is the goal of this lesson?'},options:{th:['เขียน React Hook จากความจำ','รู้แผนที่ project และอ่าน component usage ได้','ออกแบบ Database schema'],en:['Write React Hooks from memory','Know the project map and read component usage','Design a database schema']},answer:1,why:{th:'เราต้องการ technical literacy เพื่อกำกับ Agent ไม่ใช่เปลี่ยน PM/BA/Designer ให้เป็น Developer ภายในหนึ่งคอร์ส',en:'We want technical literacy to supervise the agent, not turn PM/BA/Designers into developers in one course.'}},
      wrap:{th:['อ่าน structure ก่อนอ่าน syntax','รู้ตำแหน่ง page/component/mock','package.json คือจุดดูคำสั่งหลักของ project'],en:['Read structure before syntax','Know where pages/components/mocks live','package.json is the place to discover project commands']}
    },
    {
      id:'component-state', group:'day2', no:'07', duration:'75 min',
      title:{th:'Component Thinking & UI State',en:'Component Thinking & UI State'},
      intro:{th:'เปลี่ยน Requirement ที่เป็นข้อความให้เป็นหน่วย UI ที่เล็กพอสำหรับ Agent ทำงานและ Human review ได้',en:'Turn a textual requirement into UI units small enough for the agent to build and humans to review.'},
      outcomes:{th:['แตก Page → Component → State → Interaction','ระบุ meaningful states โดยไม่สร้าง Storybook story เกินจำเป็น','เชื่อมบทบาท PM/BA/Design ผ่าน artifact เดียวกัน','มอง edge case ก่อน Agent implement'],en:['Decompose Page → Component → State → Interaction','Define meaningful states without inflating Storybook stories','Connect PM/BA/Design through one shared artifact','Surface edge cases before implementation']},
      blocks:[
        {type:'prose',title:{th:'Component คือหน่วยของการตรวจงาน',en:'A component is a unit of review'},body:{th:[
          'คนมักอธิบาย component ว่าเป็น “ชิ้นส่วน UI ที่ใช้ซ้ำได้” ซึ่งถูก แต่สำหรับคอร์สนี้มีนิยามที่ใช้งานได้ดีกว่า คือ **component คือหน่วยที่เล็กที่สุดที่คุณสามารถเปิดดูและบอกได้ว่าผ่านหรือไม่ผ่าน**',
          'ถ้าคุณให้ Agent สร้าง “หน้า Check-in ทั้งหน้า” ในครั้งเดียว เวลามีอะไรผิด คุณจะบอกได้แค่ว่า “หน้านี้ยังไม่ถูก” ซึ่งแก้ยากมาก แต่ถ้าแตกเป็นชิ้นเล็ก คุณจะบอกได้ว่า “ช่องค้นหาโอเค แต่การ์ดผู้ป่วยแสดงชื่อยาวแล้วล้น” ซึ่งแก้ตรงจุดและเร็วกว่ามาก',
          'ทักษะที่ตามมาคู่กันคือ **State thinking** ข้อผิดพลาดที่พบบ่อยที่สุดของ requirement ที่เขียนโดยคนที่ไม่ได้ทำ UI คือเขียนแค่กรณีที่ทุกอย่างราบรื่น เช่น “ค้นหาผู้ป่วยแล้วเลือกได้” แต่ในชีวิตจริงผู้ใช้จะเจอสถานะอื่นบ่อยกว่าที่คิด',
          'ตั้งคำถาม 5 ข้อนี้กับทุก component ที่มีการดึงข้อมูล แล้วคุณจะได้ state ที่ครบเกือบทั้งหมด: กำลังโหลดอยู่จะเห็นอะไร, ถ้าไม่มีข้อมูลเลยล่ะ, ถ้าระบบพังล่ะ, ถ้าข้อมูลเยอะมากล่ะ, และถ้าผู้ใช้กรอกไม่ครบล่ะ'
        ],en:[
          'People usually define a component as “a reusable piece of UI”, which is true. For this course a more useful definition is: **a component is the smallest unit you can open and judge pass or fail.**',
          'If you ask the agent to build “the whole check-in page” in one go, the only feedback you can give when something is off is “this page is wrong” — which is very hard to act on. Break it into pieces and you can say “the search field is fine, but the patient card overflows with long names” — precise and much faster to fix.',
          'The companion skill is **state thinking**. The most common flaw in requirements written by people who do not build UI is that they describe only the happy path — “search for a patient and select them” — while real users hit the other states more often than expected.',
          'Ask these five questions of any component that loads data and you will capture nearly every state: what shows while loading, what if there is no data at all, what if the system fails, what if there is a lot of data, and what if the user leaves something blank.'
        ]}},
        {type:'diagram',title:{th:'จาก Page ลงสู่สิ่งที่ทดสอบได้',en:'From page to testable pieces'},
          lead:{th:'ชั้นบนคือสิ่งที่ผู้ใช้เห็นเป็นหน้าเดียว ชั้นกลางคือหน่วยที่ Agent สร้างทีละชิ้น ชั้นล่างคือสถานะที่เราจะเปิดตรวจใน Storybook',en:'The top layer is what the user sees as one page; the middle is what the agent builds piece by piece; the bottom is the states we open and check in Storybook.'},
          diagram:`flowchart TD\nP[OPD Check-in Page] --> S[PatientSearch]\nP --> R[PatientResults]\nP --> F[CheckInForm]\nP --> C[Confirmation]\nP --> X[Success]\nS --> S1[Default]\nS --> S2[Loading]\nS --> S3[Empty]\nS --> S4[WithResults]\nS --> S5[Error]`,
          notes:{th:['ยิ่งแตกละเอียดเกินไป ยิ่งตรวจยากเพราะมีของให้ดูเยอะ — เป้าหมายคือ “เล็กพอที่จะตัดสินได้” ไม่ใช่ “เล็กที่สุดเท่าที่ทำได้”','เราแตก state เฉพาะของ PatientSearch ให้ดูเป็นตัวอย่าง component อื่นก็มี state ของตัวเองเช่นกัน','state ที่ไม่มีผลต่อผู้ใช้ ไม่ต้องทำเป็น Storybook story'],en:['Over-splitting makes review harder because there is more to look at — aim for “small enough to judge”, not “as small as possible”','Only PatientSearch’s states are expanded here as an example; every other component has its own','States with no user-visible difference do not need their own Storybook story']}},
        {type:'two',title:{th:'มุมมองของแต่ละ Role',en:'Role lenses'},left:{title:{th:'PM + BA',en:'PM + BA'},items:{th:['Scope และ flow','Business rules','Validation','Acceptance criteria','Edge cases'],en:['Scope and flow','Business rules','Validation','Acceptance criteria','Edge cases']}},right:{title:{th:'Product Design',en:'Product Design'},items:{th:['Visual hierarchy','Component boundaries','Loading/empty/error states','Interaction','Responsive behavior'],en:['Visual hierarchy','Component boundaries','Loading/empty/error states','Interaction','Responsive behavior']}}},
        {type:'list',title:{th:'US-001 ที่เราจะสร้างต่อเนื่อง',en:'Our continuous US-001 example'},items:{th:['ค้นหาผู้ป่วยด้วย HN หรือชื่อ','ระหว่างค้นหาแสดง Loading','ไม่พบข้อมูลแสดง Empty','ผิดพลาดแสดง Error','เลือกผู้ป่วยและดูรายละเอียด','เลือก Clinic','Chief Complaint เป็น optional','Preview → Confirm → Success'],en:['Search patients by HN or name','Show Loading during search','Show Empty when no results','Show Error on failure','Select a patient and view details','Choose a Clinic','Chief Complaint is optional','Preview → Confirm → Success']}},
        {type:'prose',title:{th:'ลำดับที่แนะนำ: คิดเองก่อน แล้วค่อยให้ AI วิจารณ์',en:'Recommended order: think first, then let the AI critique'},body:{th:[
          'มีความแตกต่างสำคัญระหว่างการ “ให้ AI คิดแทน” กับ “ให้ AI ตรวจสิ่งที่เราคิด” อย่างแรกทำให้คุณเสียโอกาสเข้าใจงานของตัวเอง และมักได้โครงสร้างที่ซับซ้อนเกินจำเป็น อย่างหลังทำให้คุณยังเป็นเจ้าของการตัดสินใจ แต่ได้มุมมองเพิ่ม',
          'ในทางปฏิบัติ ให้เขียนรายการ component และ state ของคุณเองก่อน (ใช้เวลา 10 นาทีก็พอ แม้จะไม่สมบูรณ์) แล้วค่อยส่งให้ Agent วิจารณ์ คุณจะพบว่าคำวิจารณ์ที่ได้มีคุณภาพสูงกว่าตอนที่ปล่อยให้มันคิดเองตั้งแต่ต้นมาก เพราะมันมีบริบทที่คุณให้ไว้'
        ],en:[
          'There is an important difference between “letting the AI think for you” and “letting the AI critique your thinking”. The first costs you the understanding of your own work and usually produces more structure than needed. The second keeps the decision yours while adding a perspective.',
          'In practice: write your own list of components and states first — ten minutes is enough, even if incomplete — then hand it to the agent for critique. The feedback is noticeably better than when it starts from scratch, because it now has the context you provided.'
        ]}},
        {type:'prompt',title:{th:'Prompt: ให้ Agent วิจารณ์ Component/State map ของคุณ',en:'Prompt: have the agent critique your component/state map'},
          when:{th:'ใช้หลังจากที่คุณเขียนรายการของตัวเองแล้ว ไม่ใช่ก่อนหน้านั้น จุดประสงค์คือหาช่องโหว่ ไม่ใช่ขอคำตอบสำเร็จรูป',en:'Use it after you have written your own list, not before. The purpose is to find gaps, not to get a ready-made answer.'},
          prompt:{th:`นี่คือ component และ UI state ที่ฉันร่างไว้สำหรับ US-001 OPD Patient Check-in

[วางรายการของคุณตรงนี้]

ห้ามแก้ไขไฟล์ ให้วิจารณ์รายการนี้ในมุมของ product review
1. มี UI state ไหนที่ผู้ใช้จะเจอจริง แต่ฉันยังไม่ได้ระบุ
2. มี component ไหนที่แตกย่อยเกินจำเป็นจนตรวจงานยากขึ้น
3. มี edge case ของข้อมูลอะไรที่มักถูกลืม เช่น ชื่อยาวมาก หรือฟิลด์ที่ไม่มีค่า
4. ถ้าต้องตัดให้เหลือเฉพาะสิ่งที่จำเป็นต่อ acceptance criteria จะเหลืออะไรบ้าง

ตอบเป็นรายการสั้น ๆ พร้อมเหตุผลข้อละหนึ่งบรรทัด`,en:`Here is the component and UI-state list I drafted for US-001 OPD Patient Check-in.

[paste your list here]

Do not modify any files. Critique this list as a product review:
1. Which states will real users hit that I have not listed?
2. Which components are split so finely that review becomes harder?
3. Which data edge cases are commonly forgotten, e.g. very long names or empty optional fields?
4. If we trimmed this to only what the acceptance criteria require, what would remain?

Answer as a short list with one line of reasoning each.`},
          example:{th:`นี่คือ component และ UI state ที่ฉันร่างไว้สำหรับ US-001 OPD Patient Check-in

PatientSearch (ช่องค้นหาผู้ป่วย)
- Default: ยังไม่ได้พิมพ์คำค้น
- Loading: กำลังค้นหา
- Empty: ค้นแล้วไม่พบผู้ป่วย
- Error: ระบบค้นหาขัดข้อง

PatientResults (รายการผู้ป่วยที่พบ)
- WithResults: พบหลายรายการ เลือกได้รายการเดียว การ์ดแต่ละใบแสดง HN ชื่อ อายุ

CheckInForm (ฟอร์มลงทะเบียนเข้ารับบริการ)
- Default: ผู้ป่วยถูกเติมจากที่เลือกไว้ Clinic ยังว่าง
- Validation: กดยืนยันโดยไม่เลือก Clinic แล้วแสดงข้อความเตือน

Confirmation (ตรวจสอบก่อนบันทึก)
- Preview: แสดงข้อมูลทั้งหมดที่จะบันทึก ก่อนกดยืนยัน

Success (หลังบันทึกสำเร็จ)
- Success: แสดงเลขที่การเข้ารับบริการ พร้อมปุ่มกลับหน้าค้นหา

ห้ามแก้ไขไฟล์ ให้วิจารณ์รายการนี้ในมุมของ product review
1. มี UI state ไหนที่ผู้ใช้จะเจอจริง แต่ฉันยังไม่ได้ระบุ
2. มี component ไหนที่แตกย่อยเกินจำเป็นจนตรวจงานยากขึ้น
3. มี edge case ของข้อมูลอะไรที่มักถูกลืม เช่น ชื่อยาวมาก หรือฟิลด์ที่ไม่มีค่า
4. ถ้าต้องตัดให้เหลือเฉพาะสิ่งที่จำเป็นต่อ acceptance criteria จะเหลืออะไรบ้าง

ตอบเป็นรายการสั้น ๆ พร้อมเหตุผลข้อละหนึ่งบรรทัด`,en:`Here is the component and UI-state list I drafted for US-001 OPD Patient Check-in.

PatientSearch (patient search field)
- Default: nothing typed yet
- Loading: search in progress
- Empty: search found no patient
- Error: the search service failed

PatientResults (list of matching patients)
- WithResults: several matches, single selection; each card shows HN, name, and age

CheckInForm (check-in form)
- Default: patient pre-filled from the selection, Clinic still empty
- Validation: pressing confirm without a Clinic shows a warning message

Confirmation (review before saving)
- Preview: shows everything that will be saved, before confirming

Success (after saving)
- Success: shows the visit number with a button back to the search page

Do not modify any files. Critique this list as a product review:
1. Which states will real users hit that I have not listed?
2. Which components are split so finely that review becomes harder?
3. Which data edge cases are commonly forgotten, e.g. very long names or empty optional fields?
4. If we trimmed this to only what the acceptance criteria require, what would remain?

Answer as a short list with one line of reasoning each.`},
          after:{th:['อย่ารับทุกข้อเสนอ เลือกเฉพาะที่ตอบ acceptance criteria จริง','ถ้ามันเสนอ component เพิ่มเยอะผิดปกติ ให้ถามว่าข้อไหน “จำเป็น” และข้อไหน “แค่ดีถ้ามี”'],en:['Do not accept every suggestion; keep only what the acceptance criteria demand','If it proposes an unusual number of extra components, ask which are “required” and which are “nice to have”']}},
        {type:'practice',title:{th:'ลงมือทำ: State inventory',en:'Practice: state inventory'},steps:{th:['เขียน component ที่คิดว่าจำเป็นก่อนถาม Agent','สำหรับแต่ละ component เขียน states ที่มีผลต่อผู้ใช้','ส่ง Prompt วิจารณ์ให้ Agent','ปรับให้เหลือชุดที่ Human review ได้ง่าย และอธิบายได้ว่าแต่ละ state มาจาก AC ข้อไหน'],en:['Write the components you think are needed before asking the agent','List user-visible states for each component','Send the critique prompt','Trim to a set humans can review easily, and be able to trace each state to an acceptance criterion']},expected:{th:'ได้ component/state map ที่ครอบคลุม Default, Loading, Empty, Error, Data, Validation และ Success เท่าที่เกี่ยวข้อง',en:'A component/state map covering Default, Loading, Empty, Error, Data, Validation, and Success where relevant.'}}
      ],
      quiz:{q:{th:'ชุด Storybook story ที่ชื่อ “Default, DefaultWithPadding, DefaultWide, Default2” เป็นสัญญาณอะไร?',en:'What does a set of Storybook stories like “Default, DefaultWithPadding, DefaultWide, Default2” suggest?'},options:{th:['State design ชัดมาก','อาจกำลังสร้าง Storybook story ตาม implementation detail มากกว่า meaningful user state','ต้องเพิ่มอีก 10 Storybook stories'],en:['Excellent state design','Storybook stories may be tracking implementation details rather than meaningful user states','Add ten more Storybook stories']},answer:1,why:{th:'Storybook story คือ component หนึ่งตัวใน state หนึ่ง ไม่ใช่ user story มันควรสื่อ state/behavior ที่มีความหมายต่อ requirement และ review',en:'A Storybook story is one component in one state — not a user story. It should communicate states/behaviors meaningful to requirements and review.'}},
      wrap:{th:['Component Thinking สำคัญกว่า React syntax สำหรับกลุ่มนี้','State inventory ช่วยจับ requirement ที่ตกหล่น','ไม่ใช่ทุก div ต้องเป็น component หรือ Storybook story'],en:['Component thinking matters more than React syntax for this audience','State inventory catches missing requirements','Not every div needs a component or Storybook story']}
    },
    {
      id:'storybook', group:'day2', no:'08', duration:'75 min',
      title:{th:'Component + Storybook ต้องเกิดคู่กัน',en:'Build Components and Storybook Stories Together'},
      intro:{th:'ใช้ Storybook เป็น review surface ของ Product Component ก่อนประกอบเข้า Page โดยให้ AI เขียน code แต่ Human นิยาม states',en:'Use Storybook as the review surface for product components before page integration. AI writes code; humans define states.'},
      outcomes:{th:['เข้าใจว่า Storybook story = ตัวอย่าง state ที่ทำซ้ำได้','สั่ง Agent สร้าง Component.tsx + Component.stories.tsx คู่กัน','review UI ผ่าน browser โดยไม่ต้องอ่านโค้ดทุกบรรทัด','ใช้ mock data ที่ deterministic ใน Storybook stories'],en:['Understand a Storybook story as a repeatable UI state','Ask the agent to create Component.tsx + Component.stories.tsx together','Review UI in the browser without reading every line of code','Use deterministic mock data in Storybook stories']},
      blocks:[
        {type:'prose',title:{th:'Storybook คืออะไร และทำไม PM/BA/Designer ควรใช้',en:'What Storybook is, and why PM/BA/Design should use it'},body:{th:[
          'Storybook คือเว็บอีกตัวหนึ่งที่รันคู่กับแอปของเรา แต่แทนที่จะแสดง “หน้าเว็บทั้งหน้า” มันแสดง **component ทีละชิ้นในสถานะที่เรากำหนด** เปิดดูได้เหมือนแคตตาล็อก',
          'ประโยชน์ที่ชัดเจนที่สุดสำหรับคนที่ไม่เขียนโค้ดคือ **คุณสามารถเห็นสถานะที่ปกติแล้วสร้างยากมาก** ลองคิดดูว่าถ้าจะดูหน้าจอตอน “ระบบค้นหาล่ม” บนแอปจริง คุณต้องทำให้ระบบล่มจริง ๆ แต่ใน Storybook มันเป็นแค่รายการหนึ่งที่คลิกดูได้ทันที',
          'คำว่า Storybook story หนึ่งอัน = component หนึ่งตัว ในสถานะหนึ่งสถานะ เช่น `PatientSearch / Empty` คือ “ช่องค้นหาผู้ป่วย ในตอนที่ค้นแล้วไม่พบใครเลย” ทั้งชื่อและเนื้อหาอ่านได้โดยไม่ต้องรู้จัก React (ไม่ใช่ “user story” ในงาน BA)',
          'กติกาที่เราจะใช้คือ **component กับ Storybook story ต้องเกิดพร้อมกันเสมอ** ถ้า Agent ส่ง component มาโดยไม่มี Storybook story แปลว่ามันส่งของที่คุณตรวจไม่ได้ ให้ตีกลับ',
          'ข้อควรระวังคือ Storybook story ไม่ใช่ของฟรี ทุก Storybook story ที่เพิ่มคือของที่ต้องดูแลต่อ ดังนั้นสร้างเฉพาะ state ที่ **มีความหมายต่อผู้ใช้หรือ acceptance criteria** ไม่ใช่สร้างเพื่อให้ตัวเลขดูเยอะ'
        ],en:[
          'Storybook is a second website that runs alongside your app. Instead of showing whole pages, it shows **one component at a time in a state you choose** — browsable like a catalogue.',
          'The clearest benefit for non-coders: **you can see states that are normally very hard to produce**. To view the “search service is down” screen in the real app you would have to break the service; in Storybook it is just an entry you click.',
          'One Storybook story = one component in one state. `PatientSearch / Empty` means “the patient search field when the search found nobody.” Both the name and the content are readable without knowing React. (This is not a BA “user story”.)',
          'Our rule: **a component and its Storybook story are always created together.** If the agent delivers a component with no Storybook story, it has delivered something you cannot review — send it back.',
          'One caution: Storybook stories are not free. Each one is something to maintain. Create only states that are **meaningful to users or to an acceptance criterion**, not Storybook stories that exist to inflate a count.'
        ]}},
        {type:'diagram',title:{th:'Component-driven loop',en:'Component-driven loop'},
          lead:{th:'จุดสำคัญของวงจรนี้คือ การตรวจงานเกิดขึ้น **ก่อน** นำไปประกอบเป็นหน้าจริง ทำให้แยกได้ว่าปัญหาอยู่ที่ชิ้นส่วน หรืออยู่ที่การประกอบ',en:'The key point of this loop: review happens **before** assembly into a real page, so you can tell whether a problem lives in a piece or in the assembly.'},
          diagram:`flowchart LR\nAC[Acceptance Criteria] --> ST[UI States]\nST --> S[Storybook Stories]\nS --> C[Component]\nC --> H[Human Visual Review]\nH -->|feedback| C\nH -->|approved| P[Integrate into Page]`,
          notes:{th:['ทุกอย่างเริ่มจาก Acceptance Criteria ไม่ใช่เริ่มจากไอเดียของ Agent','วงลูป feedback คือส่วนที่คุณใช้เวลามากที่สุด และเป็นส่วนที่มีค่าที่สุด','ลูกศร approved จะเกิดขึ้นได้ต่อเมื่อคนเปิดดูจริงแล้วเท่านั้น'],en:['Everything starts from acceptance criteria, not from the agent’s idea','The feedback loop is where you spend most of your time — and where most of the value is','The approved arrow only happens after a human actually looked']}},
        {type:'commands',title:{th:'เปิด Storybook และหาสิ่งที่ต้องตรวจ',en:'Open Storybook and find what to review'},
          lead:{th:'ถ้าคุณรัน `npm run dev` ไว้อยู่แล้ว ให้เปิด Terminal อีกหน้าต่างสำหรับ Storybook เพราะเป็นคนละ process กัน',en:'If `npm run dev` is already running, open another terminal for Storybook — they are separate processes.'},
          steps:[
            {title:{th:'ตรวจว่ายืนอยู่ใน worktree ที่ถูกต้อง',en:'Confirm you are in the right worktree'},what:{th:'ขั้นนี้ป้องกันความผิดพลาดที่พบบ่อยที่สุดในวันจริง คือเปิด Storybook จากโฟลเดอร์เก่า แล้วสงสัยว่าทำไมไม่เห็น component ที่ Agent เพิ่งสร้าง',en:'This prevents the most common mistake on the day: opening Storybook from the old folder and wondering why the agent’s new component is missing.'},cmd:`git status`,expect:{th:'`On branch feature/us001-...` ตรงกับงานที่กำลังทำ',en:'`On branch feature/us001-...` matching the task at hand.'}},
            {title:{th:'รัน Storybook',en:'Run Storybook'},what:{th:'คำสั่งนี้เปิด server แยกที่ port 6006 และจะ reload อัตโนมัติเมื่อ Agent แก้ไฟล์ ปล่อยให้รันค้างไว้ตลอดช่วง review',en:'This starts a separate server on port 6006 and reloads automatically when the agent edits files. Leave it running throughout the review.'},cmd:`npm run storybook`,expect:{th:'เบราว์เซอร์เปิดที่ `http://localhost:6006` และเห็นรายการ component ทางซ้าย',en:'The browser opens `http://localhost:6006` with a component list on the left.'}},
            {title:{th:'ไล่ดู Storybook story ทีละ state',en:'Walk through the states one at a time'},what:{th:'คลิกชื่อ component ทางซ้าย แล้วคลิก Storybook story ย่อยทีละอัน ดูทีละ state อย่ารีบ และจดสิ่งที่สะดุดตาเป็นภาษาของ product เช่น “ข้อความตอนไม่พบข้อมูลยังไม่บอกว่าผู้ใช้ควรทำอะไรต่อ”',en:'Click a component on the left, then each Storybook story beneath it. Take them one at a time and note anything that snags, in product language: “the empty message does not tell the user what to do next.”'},expect:{th:'มีรายการ feedback ที่เป็นพฤติกรรม/ข้อความ ไม่ใช่คำสั่งว่าต้องเขียนโค้ดอย่างไร',en:'A feedback list about behaviour and wording, not instructions about how to write code.'}}
          ]},
        {type:'prompt',title:{th:'Prompt: สร้าง PatientSearch พร้อม Storybook stories',en:'Prompt: build PatientSearch with its Storybook stories'},
          when:{th:'ใช้หลังจากที่แผนผ่าน review แล้ว และคุณรู้ชัดว่าต้องการ state อะไรบ้าง สังเกตว่าเราสั่งให้สร้างสองไฟล์คู่กันเสมอ และห้ามเอาไปต่อกับหน้าจริงในรอบนี้',en:'Use it after the plan passes review and you know exactly which states you need. Notice we always ask for the two files together, and forbid page integration in this round.'},
          prompt:{th:`สร้าง component ชื่อ PatientSearch แบบแยกอิสระ ยังไม่ต้องนำไปใส่ในหน้าจริง

สร้างสองไฟล์นี้คู่กัน
- PatientSearch.tsx
- PatientSearch.stories.tsx

Story ที่ต้องมี
- Default: ยังไม่ได้ค้นหา
- Loading: กำลังค้นหา
- Empty: ค้นหาแล้วไม่พบผู้ป่วย
- WithResults: พบผู้ป่วยหลายคน
- Error: ระบบค้นหาขัดข้อง

ข้อกำหนด
- ใช้ mock data ที่กำหนดค่าตายตัว ผลลัพธ์ต้องเหมือนเดิมทุกครั้งที่เปิด
- ห้ามต่อ backend จริง
- ห้ามนำไป integrate เข้า page ในรอบนี้
- ห้าม commit และห้าม push

เมื่อเสร็จแล้ว บอกชื่อไฟล์ทั้งหมดที่สร้างหรือแก้ไข`,en:`Create an isolated component named PatientSearch. Do not add it to any real page yet.

Create these two files together:
- PatientSearch.tsx
- PatientSearch.stories.tsx

Required stories:
- Default: nothing searched yet
- Loading: search in progress
- Empty: search returned no patients
- WithResults: several patients found
- Error: the search service failed

Constraints:
- Use fixed mock data so results look identical on every open
- Do not connect to a real backend
- Do not integrate it into the page in this round
- Do not commit and do not push

When finished, list every file you created or changed.`},
          after:{th:['เปิด Storybook แล้วต้องเห็นครบทั้ง 5 Storybook story ถ้าขาดข้อไหนให้ตีกลับพร้อมระบุชื่อ Storybook story','ดูว่าข้อมูลเหมือนเดิมทุกครั้งที่ refresh ถ้าเปลี่ยนไปเรื่อย ๆ แปลว่าใช้ข้อมูลสุ่ม ซึ่งทำให้ review ยาก','ตรวจว่ายังไม่มีการแก้ไฟล์ page จริง ด้วย `git status`'],en:['Open Storybook and confirm all five Storybook stories exist; if one is missing, send it back naming the Storybook story','Refresh and confirm the data stays identical — random data makes review harder','Use `git status` to confirm no real page file was touched']}},
        {type:'prompt',title:{th:'Prompt: ส่ง feedback กลับเป็นภาษา Product',en:'Prompt: send feedback back in product language'},
          when:{th:'ใช้หลังเปิด Storybook แล้วเจอสิ่งที่ยังไม่ถูกต้อง หลักการคือบอก “ผลลัพธ์ที่ต้องการ” ไม่ใช่ “วิธีเขียนโค้ด” เพราะการบอกวิธีทั้งที่เราไม่ถนัด มักทำให้ผลแย่ลง',en:'Use it after Storybook review reveals problems. Describe the outcome you want, not the code to write — prescribing implementation you are not expert in usually makes results worse.'},
          prompt:{th:`ฉัน review story ของ PatientSearch ใน Storybook แล้ว มีสิ่งที่ต้องแก้ดังนี้

[ตัวอย่าง — แก้ให้ตรงกับที่คุณเจอจริง]
1. Story Empty: ข้อความยังไม่บอกผู้ใช้ว่าควรทำอะไรต่อ ควรแนะนำให้ตรวจ HN อีกครั้งหรือค้นด้วยชื่อ
2. Story WithResults: ถ้าชื่อผู้ป่วยยาวมาก ข้อความล้นออกนอกกรอบ
3. Story Error: ยังแยกไม่ออกจาก Empty เมื่อดูเร็ว ๆ

ข้อกำหนด
- แก้เฉพาะ PatientSearch และ story ของมัน ห้ามแตะไฟล์อื่น
- ห้ามเปลี่ยนชื่อ story ที่มีอยู่
- ห้าม commit

สรุปให้ด้วยว่าแต่ละข้อแก้อย่างไร`,en:`I reviewed the PatientSearch stories in Storybook. These need to change:

[example — replace with what you actually found]
1. Empty story: the message does not tell users what to do next; suggest re-checking the HN or searching by name
2. WithResults story: very long patient names overflow their container
3. Error story: at a glance it is not distinguishable from Empty

Constraints:
- Change only PatientSearch and its stories; do not touch other files
- Do not rename existing stories
- Do not commit

Summarize how you addressed each point.`},
          after:{th:['กลับไปเปิด Storybook story เดิมอีกครั้งเพื่อยืนยันด้วยตา ไม่ใช่เชื่อคำสรุป','ตรวจว่า Storybook story อื่นที่เคยผ่านแล้ว ยังไม่พังจากการแก้รอบนี้'],en:['Reopen the same Storybook stories and confirm with your eyes rather than trusting the summary','Check that previously approved Storybook stories did not break in this round']}},
        {type:'list',title:{th:'Human review ใน Storybook ดูอะไร',en:'What humans review in Storybook'},items:{th:['คำและข้อความสอดคล้อง Requirement','Visual hierarchy อ่านง่าย','Loading/Empty/Error ไม่ทำให้ผู้ใช้สับสน','ข้อมูลยาว/optional field ไม่ทำ layout พัง','Interaction controls มีความหมาย'],en:['Copy matches the requirement','Visual hierarchy is easy to scan','Loading/Empty/Error are understandable','Long/optional data does not break layout','Interaction controls are meaningful']}},
        {type:'commands',title:{th:'Commit checkpoint 1 · component แรกที่ผ่าน review',en:'Commit checkpoint 1 · the first reviewed component'},
          lead:{th:'สามคำสั่งนี้ **คุณเป็นคนรันเอง** ไม่ใช่ Agent (prompt ทุกอันในคอร์สห้าม Agent commit) และรันจากในโฟลเดอร์ worktree `wt-us001-patient-checkin` ทำก็ต่อเมื่อคุณเปิดดู Storybook story ครบทุก state แล้วพอใจ ถ้ายังมี state ที่ดูแล้วไม่ผ่าน อย่าเพิ่ง commit',en:'You run these three yourself — not the agent (every prompt in this course forbids the agent from committing) — from inside the `wt-us001-patient-checkin` worktree. Only after you have opened every Storybook story state and are satisfied — if one state still looks wrong, do not commit yet.'},
          steps:[
            {title:{th:'ดูว่ามีอะไรเปลี่ยนไปบ้าง และอยู่ branch ถูกหรือเปล่า',en:'See what changed, and confirm the branch'},what:{th:'บรรทัดแรกต้องเป็น `On branch feature/us001-patient-checkin` ถ้าไม่ใช่ ให้หยุดแล้วย้อนไปดูบทที่ 04 ก่อน จากนั้นอ่านรายชื่อไฟล์ว่าตรงกับงานที่เพิ่ง review หรือไม่',en:'The first line must read `On branch feature/us001-patient-checkin`. If not, stop and revisit lesson 04. Then read the file list and check it matches the work you just reviewed.'},cmd:`git status`,expect:{th:'ชื่อ branch ถูกต้อง และรายชื่อไฟล์ไม่มีอะไรที่คุณอธิบายไม่ได้',en:'The right branch name, and no file you cannot explain.'}},
            {title:{th:'เลือกเฉพาะไฟล์ของงานนี้',en:'Stage only this task’s files'},what:{th:'ระบุ path ของงานนี้ตรง ๆ แทนการใช้ `git add .` เพราะ `.` จะกวาดทุกไฟล์ที่เปลี่ยนในโฟลเดอร์เข้ามาด้วย รวมถึงไฟล์ที่ Agent เผลอสร้างทิ้งไว้ การระบุ path ทำให้ commit นี้มีแต่เรื่องเดียว',en:'Name the path for this task instead of `git add .` — the dot sweeps in every changed file in the folder, including anything the agent left behind. Naming the path keeps this commit about one thing.'},cmd:`git add src/features/patient-search`,expect:{th:'`git status` แสดงไฟล์เป็นสีเขียวใต้หัวข้อ `Changes to be committed`',en:'`git status` shows those files in green under `Changes to be committed`.'}},
            {title:{th:'บันทึกพร้อมเหตุผลและเลข Issue',en:'Record it with a reason and the issue number'},what:{th:'`-m` ตัวแรกคือบรรทัดหัวเรื่องที่คนเห็นในประวัติ ส่วน `-m` ตัวที่สองกลายเป็นย่อหน้าถัดไป ใช้ใส่เลข Issue ของคุณ (เปลี่ยน `#12` เป็นเลขจริง) โครงสร้างนี้คือสิ่งที่เรียนไว้ในบทที่ 03',en:'The first `-m` is the headline people see in the history; the second becomes the next paragraph, where your issue number goes (replace `#12` with your real number). This is the shape you learned in lesson 03.'},cmd:`git commit -m "feat(us001): add PatientSearch with loading, empty and error states" -m "Refs #12"`,expect:{th:'สรุปจำนวนไฟล์และบรรทัดที่ถูกบันทึก และ `git status` สะอาดขึ้นกว่าเดิม',en:'A summary of files and lines recorded, and a cleaner `git status` than before.'}}
          ],
          outro:{th:'ยังไม่ต้อง push ตอนนี้ commit อยู่ในเครื่องคุณเท่านั้น การส่งขึ้น server จะเกิดครั้งเดียวในบทที่ 14 พร้อมกันทุก commit',en:'Do not push yet. The commit lives on your machine only; sending everything to the server happens once, in lesson 14.'}},
        {type:'practice',title:{th:'ลงมือทำ: PatientSearch Storybook stories',en:'Practice: PatientSearch Storybook stories'},steps:{th:['ส่ง prompt สร้าง component ให้ Agent','รัน Storybook','เปิด Storybook story ทั้ง 5 state ทีละตัว','จด feedback ในภาษาของ Product ไม่ต้องอธิบายวิธีเขียน code','ส่ง Feedback Prompt แล้ว review ซ้ำจนผ่าน'],en:['Send the component prompt to the agent','Run Storybook','Open all five states one by one','Write product-language feedback without prescribing code','Send the feedback prompt and review again until it passes']},expected:{th:'มี PatientSearch component กับ Storybook stories 5 state ที่เปิดได้แยกกัน และยังไม่ผูกกับ page จริง',en:'A PatientSearch component with five independently viewable Storybook stories, not yet integrated into the real page.'}}
      ],
      quiz:{q:{th:'ใครควรเป็นเจ้าของการนิยาม “ต้องมี Storybook story อะไรบ้าง”?',en:'Who should own the decision about which Storybook stories matter?'},options:{th:['AI อย่างเดียว','Human จาก requirement/state แล้วให้ AI implement','Storybook CLI'],en:['AI alone','Humans derive them from requirements/states, then AI implements','Storybook CLI']},answer:1,why:{th:'AI ช่วยเสนอได้ แต่ state ที่ต้องครอบคลุมเป็น product decision',en:'AI can suggest, but required state coverage is a product decision.'}},
      wrap:{th:['Storybook คือพื้นที่ review ไม่ใช่แค่เอกสารของ Dev','Component และ Storybook story เดินคู่กัน','Human ระบุ state; AI รับผิดชอบ implementation'],en:['Storybook is a review surface, not just dev documentation','Components and Storybook stories move together','Humans define states; AI handles implementation']}
    },
    {
      id:'acceptance-interaction', group:'day2', no:'09', duration:'60 min',
      title:{th:'Storybook as Acceptance Example & Interaction',en:'Storybook as Acceptance Example & Interaction'},
      intro:{th:'เชื่อม Acceptance Criteria กับ Storybook story และ interaction scenario เพื่อให้ BA/PM อ่านแล้วเห็น behavior ที่คาดหวัง',en:'Connect acceptance criteria to Storybook stories and interaction scenarios so PM/BA can see expected behavior directly.'},
      outcomes:{th:['map AC → Storybook story ได้','เขียน Given/When/Then ในภาษาธุรกิจ','ให้ AI แปลง scenario เป็น Storybook interaction test','แยก visual state กับ behavior flow'],en:['Map AC → Storybook story','Write Given/When/Then in business language','Let AI translate scenarios into Storybook interaction tests','Separate visual states from behavioral flows']},
      blocks:[
        {type:'prose',title:{th:'จาก “เอกสารที่ไม่มีใครอ่าน” สู่ “ตัวอย่างที่กดดูได้”',en:'From “documents nobody reads” to “examples you can click”'},body:{th:[
          'ปัญหาคลาสสิกของ Acceptance Criteria คือมันอยู่ในเอกสาร ส่วนของจริงอยู่ในระบบ และไม่มีใครรับประกันว่าสองอย่างนี้ตรงกัน เมื่อเวลาผ่านไป requirement ถูกแก้ แต่เอกสารไม่ได้แก้ตาม',
          'สิ่งที่บทนี้ทำคือเชื่อมสองอย่างเข้าด้วยกัน โดยให้ **AC แต่ละข้อที่เป็นสถานะ กลายเป็น Storybook story ที่เปิดดูได้จริง** เมื่อทำแบบนี้ การตรวจว่า requirement ครบหรือไม่ เปลี่ยนจากการอ่านเอกสารเทียบกับความจำ เป็นการเปิด Storybook ไล่ดูทีละรายการ',
          'แต่ AC ไม่ได้เป็นสถานะทั้งหมด บางข้อเป็น **พฤติกรรม** เช่น “เมื่อผู้ใช้กรอก HN แล้วกดค้นหา ต้องพบผู้ป่วยที่ตรงกัน” สิ่งนี้เป็นลำดับเหตุการณ์ ไม่ใช่ภาพนิ่ง',
          'สำหรับพฤติกรรม เราใช้รูปแบบ **Given / When / Then** ซึ่งเป็นภาษากลางที่ BA เขียนได้โดยไม่ต้องรู้ syntax ของ test เลย: Given = สถานการณ์ตั้งต้น, When = สิ่งที่ผู้ใช้ทำ, Then = ผลลัพธ์ที่ต้องเกิด จากนั้นให้ Agent แปลงเป็น interaction test ใน Storybook ซึ่งจะกดและพิมพ์ให้อัตโนมัติแล้วแสดงผลทีละขั้น'
        ],en:[
          'The classic problem with acceptance criteria: they live in a document while the real thing lives in the system, and nothing guarantees the two agree. Over time the requirement changes and the document does not.',
          'This lesson connects them by turning **each state-shaped AC into a Storybook story you can actually open**. Checking requirement coverage then shifts from reading a document against memory to clicking through Storybook item by item.',
          'But not all ACs are states. Some are **behaviours**: “when the user enters an HN and clicks Search, the matching patient appears.” That is a sequence of events, not a still image.',
          'For behaviours we use **Given / When / Then**, a shared language a BA can write with no test syntax at all: Given = the starting situation, When = what the user does, Then = what must result. The agent then turns it into a Storybook interaction test that types and clicks automatically and replays each step.'
        ]}},
        {type:'two',title:{th:'Acceptance → Storybook Story',en:'Acceptance → Storybook Story'},left:{title:{th:'Requirement',en:'Requirement'},items:{th:['AC: ไม่พบผู้ป่วย','AC: ระบบค้นหาขัดข้อง','AC: พบผู้ป่วยหลายคน'],en:['AC: No patient found','AC: Search service fails','AC: Multiple patients found']}},right:{title:{th:'Storybook Story',en:'Storybook Story'},items:{th:['Empty','Error','WithResults'],en:['Empty','Error','WithResults']}}},
        {type:'diagram',title:{th:'AC สองแบบ ไปคนละทาง',en:'Two kinds of AC take two different paths'},
          lead:{th:'ก่อนจะสั่ง Agent ให้แยกก่อนว่า AC ข้อนี้เป็น “ภาพนิ่ง” หรือ “ลำดับเหตุการณ์” เพราะสองอย่างนี้ตรวจกันคนละวิธี',en:'Before instructing the agent, decide whether an AC is a “still image” or a “sequence”, because they are verified differently.'},
          diagram:`flowchart TD\nAC[Acceptance Criterion] --> Q{เป็นสถานะ หรือ พฤติกรรม?}\nQ -->|สถานะ / state| S[Storybook Story\\nเปิดดูด้วยตา]\nQ -->|พฤติกรรม / behaviour| G[Given / When / Then]\nG --> I[Interaction test\\nกด พิมพ์ ตรวจผลอัตโนมัติ]\nS --> R[Human review]\nI --> R`,
          notes:{th:['AC ที่ขึ้นต้นด้วย “ถ้า/เมื่อไม่มี/เมื่อเกิดข้อผิดพลาด” มักเป็นสถานะ','AC ที่มีลำดับ “ผู้ใช้ทำ A แล้วต้องได้ B” เป็นพฤติกรรม','ทั้งสองทางจบที่คนตรวจเหมือนกัน — automation ไม่ได้แทนการตัดสินใจของคน'],en:['ACs starting with “if / when there is no / when an error occurs” are usually states','ACs with a sequence “user does A, then B must happen” are behaviours','Both paths end at human review — automation does not replace the human judgement']}},
        {type:'code',title:{th:'เขียน Given/When/Then ให้ Agent เข้าใจ',en:'Writing Given/When/Then the agent can use'},
          lead:{th:'ใช้ภาษาธุรกิจล้วน ๆ ไม่ต้องมีศัพท์เทคนิค ข้อมูลที่ใส่ควรเป็นค่าตายตัวที่มีอยู่ใน mock data เพื่อให้ทดสอบซ้ำได้ผลเดิม',en:'Use pure business language with no technical terms. Use fixed values that exist in the mock data so the test repeats identically.'},
          label:'BDD-style scenario',code:`Given Patient Search is displayed\nWhen the user enters HN "65000123"\nAnd clicks Search\nThen a patient named "Somchai Jaidee" is displayed`,
          note:{th:'สังเกตว่าไม่มีคำว่า component, props, หรือชื่อฟังก์ชันเลย — นี่คือสิ่งที่ทำให้ BA เขียนเองได้',en:'Notice there is no mention of components, props, or function names — that is what makes it writable by a BA.'}},
        {type:'prompt',title:{th:'Prompt: แปลง Scenario เป็น Interaction Test',en:'Prompt: turn a scenario into an interaction test'},
          when:{th:'ใช้เมื่อคุณเขียน Given/When/Then เสร็จแล้ว และ component ตัวนั้นผ่าน review สถานะพื้นฐานมาแล้ว อย่าเพิ่งทำ interaction ตั้งแต่ component ยังไม่นิ่ง เพราะจะต้องแก้ test ซ้ำหลายรอบ',en:'Use it once your Given/When/Then is written and the component has already passed basic state review. Do not add interactions while the component is still shifting — you will rewrite the test repeatedly.'},
          prompt:{th:`เพิ่ม interaction test ให้ component PatientSearch ใน Storybook

Business scenario ที่ต้องทดสอบ
Given หน้าค้นหาผู้ป่วยแสดงอยู่
When ผู้ใช้กรอก HN "65000123"
And กดปุ่มค้นหา
Then ต้องแสดงผู้ป่วยชื่อ "Somchai Jaidee"

ข้อกำหนด
- ใช้ mock service และข้อมูลตายตัวที่มีอยู่แล้วในโปรเจกต์
- เขียนให้อ่านแล้วเทียบกับ acceptance criteria ได้ง่าย
- ห้ามแก้ logic ของ component เพื่อให้ test ผ่าน ถ้า test ไม่ผ่านให้รายงานกลับมาก่อน
- ห้าม commit

บอกด้วยว่าจะเปิดดูผลการทดสอบนี้ใน Storybook ได้อย่างไร`,en:`Add an interaction test for the PatientSearch component in Storybook.

Business scenario to verify:
Given the patient search screen is displayed
When the user enters HN "65000123"
And clicks the search button
Then the patient "Somchai Jaidee" must be displayed

Constraints:
- Use the mock service and fixed data already present in the project
- Keep it readable enough to compare against the acceptance criteria
- Do not change component logic to make the test pass; if it fails, report back first
- Do not commit

Also tell me how to view this test running inside Storybook.`},
          after:{th:['เปิด Storybook แล้วดู panel ที่แสดงขั้นตอน interaction ทีละขั้น ว่าตรงกับ Given/When/Then ที่เขียนไว้','ถ้า test ผ่านตั้งแต่ครั้งแรกโดยที่ component ยังไม่มีพฤติกรรมนั้นจริง ให้สงสัยไว้ก่อนและตรวจซ้ำ','ลองแก้ค่า HN ใน scenario เป็นค่าที่ไม่มีในระบบ แล้วดูว่า test fail อย่างที่ควรเป็นหรือไม่'],en:['Open Storybook and read the interactions panel step by step against your Given/When/Then','If it passes on the first try while the component does not really have that behaviour, be suspicious and re-check','Change the HN to a value that does not exist and confirm the test fails as it should']}},
        {type:'commands',title:{th:'Commit checkpoint 2 · interaction test ที่ผ่านแล้ว',en:'Commit checkpoint 2 · the passing interaction test'},
          lead:{th:'สามคำสั่งนี้ **คุณเป็นคนรันเอง** ไม่ใช่ Agent (prompt ทุกอันในคอร์สห้าม Agent commit) และรันจากในโฟลเดอร์ worktree `wt-us001-patient-checkin` ทำหลังจากเห็น interaction วิ่งจบเป็นสีเขียวใน Storybook ด้วยตาตัวเองแล้ว',en:'You run these three yourself — not the agent (every prompt in this course forbids the agent from committing) — from inside the `wt-us001-patient-checkin` worktree, once you have watched the interaction run green in Storybook with your own eyes.'},
          steps:[
            {title:{th:'ดูว่ามีอะไรเปลี่ยนไปบ้าง และอยู่ branch ถูกหรือเปล่า',en:'See what changed, and confirm the branch'},what:{th:'บรรทัดแรกต้องเป็น `On branch feature/us001-patient-checkin` ถ้าไม่ใช่ ให้หยุดแล้วย้อนไปดูบทที่ 04 ก่อน จากนั้นอ่านรายชื่อไฟล์ว่าตรงกับงานที่เพิ่ง review หรือไม่',en:'The first line must read `On branch feature/us001-patient-checkin`. If not, stop and revisit lesson 04. Then read the file list and check it matches the work you just reviewed.'},cmd:`git status`,expect:{th:'ชื่อ branch ถูกต้อง และรายชื่อไฟล์ไม่มีอะไรที่คุณอธิบายไม่ได้',en:'The right branch name, and no file you cannot explain.'}},
            {title:{th:'เลือกเฉพาะไฟล์ของงานนี้',en:'Stage only this task’s files'},what:{th:'ไฟล์ test อยู่ข้าง ๆ component เดียวกัน การ add ทั้งโฟลเดอร์จึงพอ แต่ให้ดู `git status` ก่อนเสมอว่าไม่มีไฟล์แปลกปลอมปนอยู่ในโฟลเดอร์นั้น',en:'The test file sits next to its component, so staging the folder is enough — but always read `git status` first to be sure nothing foreign snuck into it.'},cmd:`git add src/features/patient-search`,expect:{th:'`git status` แสดงไฟล์ test และไฟล์ที่เกี่ยวข้องอยู่ใต้ `Changes to be committed`',en:'`git status` lists the test and its related files under `Changes to be committed`.'}},
            {title:{th:'บันทึกพร้อมเหตุผลและเลข Issue',en:'Record it with a reason and the issue number'},what:{th:'ใช้ `test` ไม่ใช่ `feat` เพราะงานรอบนี้ไม่ได้เพิ่มสิ่งที่ผู้ใช้มองเห็น แต่เพิ่มหลักฐานว่าพฤติกรรมเดิมยังถูกต้อง การแยกชนิดแบบนี้ทำให้อ่านประวัติแล้วรู้ว่ารอบไหนเพิ่มของ รอบไหนเพิ่มความมั่นใจ',en:'Use `test`, not `feat`: this round adds no user-visible thing, it adds evidence that the behaviour still holds. Separating the types lets anyone read the history and see which rounds added features and which added confidence.'},cmd:`git commit -m "test(us001): cover patient search happy path with an interaction test" -m "Refs #12"`,expect:{th:'สรุปจำนวนไฟล์และบรรทัดที่ถูกบันทึก และ `git status` สะอาดขึ้นกว่าเดิม',en:'A summary of files and lines recorded, and a cleaner `git status` than before.'}}
          ],
          outro:{th:'ตอนนี้ประวัติของ branch คุณเริ่มเล่าเรื่องได้แล้ว ลอง `git log --oneline` ดู จะเห็นสองบรรทัดที่บอกได้ว่าทำอะไรไปบ้างโดยไม่ต้องเปิดโค้ด',en:'Your branch history now tells a coherent narrative. Run `git log --oneline` and you get two lines that explain the work without opening any code.'}},
        {type:'practice',title:{th:'ลงมือทำ: AC coverage matrix',en:'Practice: AC coverage matrix'},steps:{th:['เปิด requirement US-001','แยก AC ออกเป็นสองกอง: สถานะ กับ พฤติกรรม','จับคู่ AC ที่เป็นสถานะกับ Storybook story ที่มีอยู่ และหาว่าข้อไหนยังไม่มี Storybook story','เลือก 1 behavior flow แล้วเขียน Given/When/Then','ส่ง Prompt ให้ Agent implement แล้วเปิดดูใน Storybook ทีละขั้น'],en:['Open requirement US-001','Sort the ACs into two piles: states and behaviours','Match state ACs to existing Storybook stories and find which have none','Choose one behaviour flow and write Given/When/Then','Send the prompt, then watch it run step by step in Storybook']},expected:{th:'มีหลักฐานชัดว่า AC สำคัญถูก represent ด้วย Storybook story หรือ interaction และผู้เรียนอธิบาย coverage ได้',en:'There is clear evidence that key ACs are represented by Storybook stories or interactions, and you can explain the coverage.'}}
      ],
      quiz:{q:{th:'Given/When/Then มีประโยชน์หลักกับกลุ่มนี้เพราะอะไร?',en:'Why is Given/When/Then especially useful for this audience?'},options:{th:['ทำให้ไม่ต้องมี requirement','เป็นภาษากลางระหว่าง business behavior กับ test implementation','ทำให้ Git เร็วขึ้น'],en:['It eliminates requirements','It is a shared language between business behavior and test implementation','It makes Git faster']},answer:1,why:{th:'BA/PM สามารถนิยาม behavior โดยไม่ต้องรู้ test syntax แล้วให้ Agent แปลงเป็น implementation',en:'PM/BA can define behavior without test syntax, then let the agent implement it.'}},
      wrap:{th:['Storybook story = state example','Interaction = behavior example','Acceptance Criteria สามารถ trace ไปยังสิ่งที่เปิดดู/รันได้'],en:['Storybook story = state example','Interaction = behavior example','Acceptance criteria can trace to something visible/runnable']}
    },
    {
      id:'mock-data', group:'day3', no:'10', duration:'45 min',
      title:{th:'Mock Data / Mock API โดยไม่ต้องเรียน Backend',en:'Mock Data / Mock API Without Learning Backend'},
      intro:{th:'จำลอง response ที่ UI ต้องรับมือให้ครบ โดยไม่เสียเวลาเรียน server, database หรือ authentication',en:'Simulate the responses the UI must handle without spending course time on servers, databases, or authentication.'},
      outcomes:{th:['เข้าใจ request/response แค่ระดับ concept','สร้าง scenario success/empty/slow/error ด้วย mock','ใช้ synthetic HIS data อย่างปลอดภัย','รู้ว่า mock contract ควร stable และ deterministic'],en:['Understand request/response at concept level','Model success/empty/slow/error using mocks','Use safe synthetic HIS data','Keep mock contracts stable and deterministic']},
      blocks:[
        {type:'prose',title:{th:'API คืออะไร ในเวลา 3 นาที',en:'What an API is, in three minutes'},body:{th:[
          'ในระบบจริง หน้าจอที่ผู้ใช้เห็น (Frontend) ไม่ได้เก็บข้อมูลผู้ป่วยไว้เอง มันต้อง **ถาม** ระบบหลังบ้าน (Backend) ว่า “ผู้ป่วย HN นี้ชื่ออะไร” แล้วรอคำตอบกลับมา การถาม-ตอบนี้เรียกว่า request และ response ส่วน API คือข้อตกลงว่าจะถามด้วยรูปแบบไหน และจะได้คำตอบหน้าตาอย่างไร',
          'สำหรับ PM, BA และ Designer สิ่งที่ต้องรู้จบแค่นี้ เพราะคำถามที่คุณต้องตอบไม่ใช่ “Backend เขียน query อย่างไร” แต่คือ **“ระหว่างที่รอคำตอบ ผู้ใช้เห็นอะไร”** และ **“ถ้าคำตอบไม่เป็นอย่างที่หวัง ผู้ใช้ควรเห็นอะไร”**',
          'เพราะการถาม-ตอบนี้ใช้เวลา และบางครั้งก็ล้มเหลว ทุกหน้าจอที่ดึงข้อมูลจึงมีอย่างน้อย 4 สถานะที่เป็นไปได้เสมอ คือ กำลังรอ, ได้ข้อมูลมา, ได้คำตอบแต่ว่างเปล่า และเกิดข้อผิดพลาด สังเกตว่าสามในสี่ข้อนี้ ไม่ใช่กรณีที่ทุกอย่างราบรื่น',
          'ในคอร์สนี้เราไม่ต่อ Backend จริง แต่ใช้ **Mock** ซึ่งก็คือโค้ดชิ้นเล็ก ๆ ที่แกล้งทำเป็น Backend ตอบกลับมาตามที่เรากำหนดไว้ ข้อดีคือคุณสั่งให้มัน “ช้า” หรือ “พัง” เมื่อไรก็ได้ ซึ่งบนระบบจริงทำได้ยากมาก'
        ],en:[
          'In a real system the screen the user sees (the frontend) does not hold patient data itself. It has to **ask** the backend “what is the name for this HN?” and wait for an answer. That exchange is a request and a response; the API is the agreement on how to ask and what shape the answer takes.',
          'For PM, BA, and Design that is where the knowledge needs to stop, because your question is not “how does the backend write its query?” It is **“what does the user see while waiting?”** and **“what should the user see when the answer is not what we hoped?”**',
          'Because that exchange takes time and sometimes fails, every data-loading screen has at least four possible states: waiting, data arrived, an answer arrived but it is empty, and something went wrong. Note that three of the four are not the happy path.',
          'In this course we never connect a real backend. We use a **mock**: a small piece of code that pretends to be the backend and answers exactly as we tell it. The advantage is that you can make it “slow” or “broken” on demand — something that is very hard to arrange on a real system.'
        ]}},
        {type:'diagram',title:{th:'Training architecture',en:'Training architecture'},
          lead:{th:'เทียบสองภาพนี้: ระบบจริงมี Backend และ Database ส่วน training ของเราตัดสองกล่องนั้นออก แล้วใส่ Mock Service แทน โดย UI แทบไม่รู้ความต่าง',en:'Compare the two: a real system has a backend and a database; our training removes both and substitutes a mock service — and the UI barely notices the difference.'},
          diagram:`flowchart LR\nUI[Next.js UI] --> S[Mock Service]\nS --> D[(Synthetic Data)]\nS --> N[normal]\nS --> L[slow]\nS --> E[empty]\nS --> X[error]`,
          notes:{th:['UI เรียก Mock Service ด้วยวิธีเดียวกับที่จะเรียก API จริง — ดังนั้นเมื่อเปลี่ยนไปใช้ของจริงในอนาคต UI แทบไม่ต้องแก้','`normal` คือกรณีปกติที่มีข้อมูล','`slow` หน่วงเวลาเพื่อให้เห็น Loading ได้นานพอที่จะ review','`empty` คืนผลว่างเปล่า ใช้ตรวจ Empty state','`error` จงใจล้มเหลว ใช้ตรวจ Error state'],en:['The UI calls the mock service exactly as it would call a real API, so swapping in the real one later changes the UI very little','`normal` is the ordinary case with data','`slow` adds a delay so Loading stays visible long enough to review','`empty` returns nothing, to exercise the Empty state','`error` fails on purpose, to exercise the Error state']}},
        {type:'callout',title:{th:'ในระบบจริงมี Backend แต่คอร์สนี้ไม่จำเป็นต้องรู้ implementation',en:'A real system has a backend, but this course does not need its implementation'},text:{th:'สิ่งที่ Product role ต้องคิดคือ UI ทำอะไรเมื่อ response ช้า, ว่าง, ผิดพลาด หรือสำเร็จ ไม่ใช่ว่า database query เขียนอย่างไร',en:'The product role needs to decide what UI does when responses are slow, empty, erroneous, or successful — not how database queries are written.'}},
        {type:'code',title:{th:'ข้อมูลสมมติที่ใช้ตลอดคอร์ส',en:'The synthetic data we use all course'},
          lead:{th:'ค่าเหล่านี้เป็นค่าตายตัว จำไว้ได้เลย เพราะเราจะใช้มันซ้ำในทุกแบบฝึกหัด การมีค่าที่แน่นอนทำให้ทุกคนในห้องเห็นผลเหมือนกันและเทียบกันได้',en:'These values are fixed and worth memorizing — we reuse them in every exercise. Fixed values mean everyone in the room sees the same result and can compare.'},
          label:'Synthetic examples',code:`65000123 -> Somchai Jaidee      # พบข้อมูล / found\n65000124 -> Somying Sukjai      # พบข้อมูล / found\n99999999 -> []                  # empty state\nERROR     -> throw Error         # error state\nSLOW      -> 2000ms delay        # loading state`,
          note:{th:'ทั้งหมดนี้เป็นข้อมูลที่แต่งขึ้นเพื่อการเรียนเท่านั้น ห้ามแทนที่ด้วย HN หรือชื่อผู้ป่วยจริงเด็ดขาด แม้จะทดสอบในเครื่องตัวเองก็ตาม',en:'All of this is invented for training only. Never replace it with a real HN or patient name, not even on your own machine.'}},
        {type:'prompt',title:{th:'Prompt: เพิ่ม scenario ให้ครบทุก state',en:'Prompt: add scenarios covering every state'},
          when:{th:'ใช้เมื่อพบว่า mock ที่มีอยู่ยังบังคับให้เกิดบาง state ไม่ได้ เช่น เห็น Loading ไม่ทันเพราะเร็วเกินไป',en:'Use it when the existing mocks cannot force a state — for example when Loading flashes by too fast to review.'},
          prompt:{th:`ตรวจ mock service ของโปรเจกต์นี้ แล้วบอกฉันก่อนว่าปัจจุบันรองรับ scenario อะไรบ้าง ห้ามแก้ไฟล์ในขั้นนี้

จากนั้นเสนอวิธีที่จะทำให้ฉันบังคับให้เกิด 4 สถานะนี้ได้ทุกครั้งที่ต้องการ
- normal: มีข้อมูลผู้ป่วย
- slow: หน่วงประมาณ 2 วินาที เพื่อให้เห็นสถานะกำลังโหลดชัด ๆ
- empty: ค้นแล้วไม่พบใคร
- error: ระบบค้นหาล้มเหลว

ข้อกำหนด
- ใช้ข้อมูลสมมติเท่านั้น ห้ามใช้ข้อมูลผู้ป่วยจริง
- ผลลัพธ์ต้องเหมือนเดิมทุกครั้ง ห้ามสุ่ม
- เปลี่ยน scenario ได้โดยไม่ต้องแก้โค้ดของ component

เสนอแผนก่อน รอฉันอนุมัติแล้วค่อยลงมือ`,en:`Inspect this project’s mock service and first tell me which scenarios it currently supports. Do not modify files at this stage.

Then propose how I can reliably force each of these four states whenever I want:
- normal: patient data is returned
- slow: about a two-second delay so the loading state is clearly visible
- empty: the search finds nobody
- error: the search service fails

Constraints:
- Synthetic data only; never real patient data
- Results must be identical every time; no randomness
- Switching scenarios must not require editing component code

Propose the plan first and wait for my approval before implementing.`},
          after:{th:['ถามให้ชัดว่า “ฉันต้องทำอะไรบ้างเพื่อสลับ scenario” แล้วลองทำตามด้วยตัวเอง','ทดสอบว่าเปิดซ้ำสองครั้งได้ผลเหมือนเดิม','ยืนยันว่าไม่มีการเพิ่ม dependency ใหม่โดยไม่จำเป็น'],en:['Ask explicitly “what do I do to switch scenarios?” then do it yourself','Run it twice and confirm identical results','Confirm no unnecessary new dependency was added']}},
        {type:'prose',title:{th:'ทำไม mock ต้อง “เดาได้”',en:'Why mocks must be predictable'},body:{th:[
          'มีความอยากทำให้ mock ดูสมจริงด้วยการสุ่มข้อมูลหรือสุ่มความเร็ว ซึ่งฟังดูดีแต่เป็นกับดัก เพราะเมื่อผลเปลี่ยนทุกครั้งที่เปิด คุณจะแยกไม่ออกว่าสิ่งที่เห็นเป็น bug หรือเป็นเพราะข้อมูลบังเอิญเปลี่ยน',
          'หลักการคือ mock สำหรับการเรียนและการ review ต้อง **deterministic** คือใส่ input เดิมได้ output เดิมเสมอ เมื่อผลคงที่ การพูดคุยในทีมจะง่ายขึ้นมาก เช่น “ลองค้น 99999999 สิ จะเห็นปัญหาที่ผมพูดถึง” แล้วทุกคนเห็นเหมือนกัน'
        ],en:[
          'It is tempting to make mocks feel realistic with random data or random delays. That sounds good but is a trap: when the result changes on every run, you cannot tell whether what you see is a bug or just different data.',
          'The principle is that mocks for learning and review must be **deterministic** — the same input always produces the same output. With stable results, team conversations get much easier: “search 99999999 and you will see the problem” and everyone sees the same thing.'
        ]}},
        {type:'practice',title:{th:'ลงมือทำ: บังคับทุก state ด้วย mock',en:'Practice: force every state with mocks'},steps:{th:['ใช้ mock scenario `normal` แล้วค้นหา HN 65000123','สลับเป็น `empty` แล้วค้น 99999999 เพื่อตรวจ Empty state','สลับเป็น `slow` แล้วสังเกต Loading ว่าอยู่นานพอให้ผู้ใช้เข้าใจหรือไม่','สลับเป็น `error` แล้วตรวจว่า Error state บอกผู้ใช้ชัดเจนว่าควรทำอะไรต่อ','ทำซ้ำแต่ละ scenario สองครั้ง เพื่อยืนยันว่าได้ผลเหมือนเดิม'],en:['Use the `normal` scenario and search HN 65000123','Switch to `empty`, search 99999999, and inspect the Empty state','Switch to `slow` and judge whether Loading lasts long enough to be understood','Switch to `error` and check the Error state tells users what to do next','Repeat each scenario twice to confirm identical results']},expected:{th:'เปิด UI state ทั้ง 4 แบบได้ซ้ำ ๆ โดยไม่ต้องมี Backend จริงและไม่ใช้ข้อมูลผู้ป่วยจริง',en:'You can repeatedly reproduce all four UI states without a real backend or real patient data.'}}
      ],
      quiz:{q:{th:'คุณสมบัติที่สำคัญของ mock สำหรับ training คืออะไร?',en:'What is important for training mocks?'},options:{th:['สุ่มทุกครั้งเพื่อสมจริง','Deterministic และใช้ synthetic data','ต่อ production เพื่อข้อมูลใหม่เสมอ'],en:['Random every time for realism','Deterministic and synthetic','Always connect to production for fresh data']},answer:1,why:{th:'ผลที่ทำซ้ำได้ช่วยให้เรียน, review และ debug ได้ง่ายและปลอดภัย',en:'Repeatable outcomes make learning, review, and debugging easier and safer.'}},
      wrap:{th:['ตัด Backend ได้โดยไม่เสียเป้าหมายหลัก','Mock ใช้สร้าง state ที่ต้อง review','Training HIS ต้องใช้ synthetic data'],en:['Backend can be removed without losing the course goal','Mocks create reviewable states','HIS training must use synthetic data']}
    },
    {
      id:'integration', group:'day3', no:'11', duration:'60 min',
      title:{th:'Assemble Components into OPD Check-in Page',en:'Assemble Components into the OPD Check-in Page'},
      intro:{th:'เมื่อ component ผ่าน Storybook review แล้ว ค่อยให้ Agent ประกอบเป็น flow จริงบน Next.js page',en:'After components pass Storybook review, let the agent assemble them into the real Next.js flow.'},
      outcomes:{th:['เห็นความต่างระหว่าง isolated component กับ integrated flow','review state transition ทั้งหน้า','ตรวจ validation และ confirmation flow','ใช้ mock service เดิมโดยไม่สร้าง backend'],en:['See the difference between isolated components and an integrated flow','Review state transitions across the page','Check validation and confirmation flow','Reuse the mock service without adding a backend']},
      blocks:[
        {type:'prose',title:{th:'ชิ้นส่วนดีทุกชิ้น ไม่ได้แปลว่าประกอบแล้วจะดี',en:'Good pieces do not guarantee a good assembly'},body:{th:[
          'เมื่อ component ทุกตัวผ่าน Storybook แล้ว หลายคนคิดว่างานเกือบเสร็จ ความจริงคือเพิ่งผ่านครึ่งทาง เพราะ Storybook ตรวจได้เฉพาะ “แต่ละชิ้นในสถานะที่เรากำหนดเอง” แต่ยังไม่ได้ตรวจสิ่งที่สำคัญที่สุดสำหรับผู้ใช้ คือ **การเปลี่ยนจากสถานะหนึ่งไปอีกสถานะหนึ่ง**',
          'ตัวอย่างปัญหาที่เจอเฉพาะตอน integrate เท่านั้น: ค้นหาผู้ป่วยคนแรกแล้วเลือกไว้ จากนั้นค้นใหม่ — ข้อมูลของคนเก่ายังค้างอยู่หรือเปล่า? หรือกดปุ่มยืนยันสองครั้งเร็ว ๆ จะเกิด check-in ซ้ำไหม? หรือกดย้อนกลับจากหน้ายืนยัน ข้อมูลที่กรอกไว้หายหมดหรือไม่?',
          'ปัญหาเหล่านี้ไม่มีทางเห็นใน Storybook เพราะแต่ละ Storybook story เริ่มจากสถานะสะอาดเสมอ วิธีเดียวที่จะเจอคือเปิดหน้าจริงแล้วเดินทั้ง flow เหมือนเป็นผู้ใช้จริง',
          'นี่คือเหตุผลที่เราแยก review เป็นสองชั้น ถ้าเจอปัญหาตอน integrate คุณจะรู้ทันทีว่าเป็นปัญหาของการต่อกัน ไม่ใช่ปัญหาของชิ้นส่วน เพราะชิ้นส่วนผ่านการตรวจมาแล้ว'
        ],en:[
          'When every component passes Storybook, it feels like the work is nearly done. In truth you are halfway, because Storybook only checks “each piece in a state you set up”. It has not yet checked what matters most to users: **moving from one state to the next**.',
          'Problems that appear only during integration: search a patient, select them, then search again — does the previous patient’s data linger? Click Confirm twice quickly — does it check in twice? Go back from the confirmation screen — is everything you typed gone?',
          'None of these can appear in Storybook, because each Storybook story always starts from a clean state. The only way to find them is to open the real page and walk the whole flow like a user.',
          'That is why we review in two layers. A problem found at integration is immediately known to be a wiring problem rather than a piece problem, because the pieces already passed.'
        ]}},
        {type:'diagram',title:{th:'OPD Check-in flow',en:'OPD Check-in flow'},
          lead:{th:'ใช้ภาพนี้เป็น checklist ตอนเดินทดสอบ ทุกเส้นทางในภาพต้องถูกเดินอย่างน้อยหนึ่งครั้ง ไม่ใช่แค่เส้นทางที่ทุกอย่างราบรื่น',en:'Use this as a checklist while testing. Every path in the picture must be walked at least once, not only the smooth one.'},
          diagram:`flowchart TD\nA[Search HN / Name] --> B{Result}\nB -->|loading| L[Loading]\nB -->|empty| E[Empty]\nB -->|error| X[Error]\nB -->|found| R[Select Patient]\nR --> F[Choose Clinic + Chief Complaint]\nF --> V{Valid?}\nV -->|No| VE[Validation message]\nV -->|Yes| P[Preview]\nP --> C[Confirm]\nC --> S[Check-in Success + Queue No.]`,
          notes:{th:['กล่องสี่เหลี่ยมขนมเปียกปูนคือจุดตัดสินใจ ซึ่งเป็นจุดที่มักมี bug มากที่สุด','เส้นทางจาก B ไป Empty/Error ต้องทดสอบด้วย mock scenario ไม่ใช่รอให้เกิดเอง','Preview ก่อน Confirm มีไว้เพื่อให้ผู้ใช้ย้อนกลับไปแก้ได้ — ต้องทดสอบการย้อนกลับด้วย','ทดสอบด้วยว่าเมื่อจบ flow แล้วเริ่มใหม่ ข้อมูลเก่าไม่ค้าง'],en:['Diamonds are decision points, and decision points hold most of the bugs','The paths from B to Empty/Error must be forced with mock scenarios rather than waited for','Preview before Confirm exists so users can go back and edit — test going back','Also test that starting over after a completed flow leaves no stale data']}},
        {type:'prompt',title:{th:'Prompt: ประกอบ component เข้าเป็นหน้าจริง',en:'Prompt: assemble the components into the real page'},
          when:{th:'ใช้เมื่อ component ทุกตัวที่เกี่ยวข้องผ่าน Storybook review แล้วเท่านั้น จุดสำคัญคือย้ำว่าให้ใช้ของเดิมที่ตรวจแล้ว ไม่ใช่สร้างใหม่ทับ',en:'Use it only after every relevant component has passed Storybook review. The key point is to insist on reusing what was reviewed rather than rebuilding on top of it.'},
          prompt:{th:`นำ component ที่ผ่านการ review แล้วมาประกอบเป็นหน้า /opd/check-in

ข้อกำหนดด้านการทำงาน
- ต้องใช้ component และ mock service ที่มีอยู่แล้ว ห้ามสร้างใหม่ซ้ำซ้อน
- สถานะที่ review ไว้ใน Storybook ต้องยังทำงานเหมือนเดิม
- ต้องเลือก Clinic ก่อนจึงจะ check-in ได้
- Chief Complaint กรอกหรือไม่กรอกก็ได้
- ก่อนยืนยันขั้นสุดท้าย ต้องมีหน้าสรุปให้ตรวจและย้อนกลับไปแก้ได้
- เมื่อยืนยันสำเร็จ ให้แสดงหมายเลขคิวสมมติ

ข้อห้าม
- ห้ามเพิ่ม backend หรือ database
- ห้ามแก้ไฟล์ที่ไม่เกี่ยวกับ US-001
- ห้าม commit และห้าม push

เมื่อเสร็จแล้ว อธิบายเป็นข้อ ๆ ว่าหน้าจอเปลี่ยนสถานะอย่างไรตั้งแต่เริ่มค้นหาจนถึงสำเร็จ`,en:`Assemble the reviewed components into the /opd/check-in page.

Behaviour requirements:
- Reuse the existing components and mock service; do not create duplicates
- Every state reviewed in Storybook must still work
- A clinic must be selected before check-in is allowed
- Chief Complaint is optional
- Before the final confirmation, show a summary the user can review and go back to edit
- On success, display a synthetic queue number

Prohibitions:
- Do not add a backend or database
- Do not modify files unrelated to US-001
- Do not commit and do not push

When finished, describe step by step how the screen changes state from the first search to success.`},
          after:{th:['อย่าเชื่อคำอธิบาย ให้เปิด `/opd/check-in` แล้วเดินเองทุกเส้นทางในผังด้านบน','รัน `git diff --stat` ดูจำนวนไฟล์ ถ้าเยอะเกินคาดให้หยุดและถามก่อน','กลับไปเปิด Storybook อีกรอบ เพื่อยืนยันว่า Storybook story เดิมยังไม่พัง'],en:['Do not trust the description — open `/opd/check-in` and walk every path in the diagram yourself','Run `git diff --stat` and check the file count; if it is higher than expected, stop and ask','Reopen Storybook to confirm the existing Storybook stories did not break']}},
        {type:'commands',title:{th:'เดิน flow จริงอย่างเป็นระบบ',en:'Walk the real flow systematically'},
          lead:{th:'อย่าสุ่มกด ให้เดินตามลำดับนี้ทีละรอบ และจดผลทุกรอบ เพราะสิ่งที่คุณจดจะกลายเป็นเนื้อหาของ Merge Request ในบทสุดท้าย',en:'Do not click at random. Walk these rounds in order and record each result — what you record becomes the content of your Merge Request in the final lesson.'},
          steps:[
            {title:{th:'เปิดแอปและไปที่หน้าที่ต้องตรวจ',en:'Start the app and go to the page under review'},what:{th:'ถ้ารันอยู่แล้วไม่ต้องรันซ้ำ ให้ดูที่ Terminal ว่ามี error ขึ้นหลังจาก Agent แก้ไฟล์หรือไม่ ซึ่งเป็นสัญญาณแรกที่มักถูกมองข้าม',en:'If it is already running, do not restart — check the terminal for errors that appeared after the agent’s edits. That is the first signal people usually miss.'},cmd:`npm run dev`,expect:{th:'Terminal ไม่มี error สีแดง และเปิด `http://localhost:3000/opd/check-in` ได้',en:'No red errors in the terminal, and `http://localhost:3000/opd/check-in` opens.'}},
            {title:{th:'รอบที่ 1 — เส้นทางปกติ',en:'Round 1 — the happy path'},what:{th:'ค้นหา HN 65000123 → เลือกผู้ป่วย → เลือกคลินิก → กรอก Chief Complaint → ตรวจหน้าสรุป → ยืนยัน สังเกตว่าข้อมูลที่แสดงในหน้าสรุปตรงกับที่กรอกหรือไม่',en:'Search HN 65000123 → select the patient → choose a clinic → type a chief complaint → check the summary → confirm. Watch whether the summary matches what you entered.'},expect:{th:'จบด้วยหน้าสำเร็จพร้อมหมายเลขคิว และข้อมูลทุกช่องตรงกับที่กรอก',en:'It ends on a success screen with a queue number, and every field matches what you entered.'}},
            {title:{th:'รอบที่ 2 — ไม่เลือกคลินิก',en:'Round 2 — skip the clinic'},what:{th:'ทำซ้ำแต่ข้ามการเลือกคลินิก แล้วพยายามกดยืนยัน จุดที่ต้องดูคือข้อความเตือนบอกชัดหรือไม่ว่าต้องทำอะไร และโฟกัสวิ่งไปที่ช่องที่ต้องแก้หรือเปล่า',en:'Repeat but skip the clinic, then try to confirm. Check whether the warning clearly says what to do and whether focus moves to the field that needs fixing.'},expect:{th:'ระบบไม่ยอมให้ผ่าน และข้อความเตือนเข้าใจได้โดยไม่ต้องเดา',en:'It blocks you, and the message is understandable without guessing.'}},
            {title:{th:'รอบที่ 3 — ไม่พบผู้ป่วย',en:'Round 3 — no patient found'},what:{th:'สลับ mock เป็น scenario `empty` หรือค้นด้วย HN 99999999 ตรวจว่า Empty state บนหน้าจริง เหมือนกับที่เคย review ใน Storybook หรือไม่',en:'Switch the mock to `empty` or search HN 99999999. Check whether the Empty state on the real page matches what you reviewed in Storybook.'},expect:{th:'ข้อความบอกชัดว่าไม่พบ และแนะนำสิ่งที่ผู้ใช้ทำต่อได้',en:'The message clearly says nothing was found and suggests what the user can do next.'}},
            {title:{th:'รอบที่ 4 — ระบบขัดข้อง',en:'Round 4 — the service fails'},what:{th:'สลับ mock เป็น `error` แล้วค้นหา ตรวจว่าผู้ใช้แยกออกไหมว่านี่คือ “ระบบมีปัญหา” ไม่ใช่ “ไม่มีผู้ป่วยคนนี้” ซึ่งเป็นคนละเรื่องกันโดยสิ้นเชิงในงานจริง',en:'Switch the mock to `error` and search. Check that users can tell this is “the system has a problem”, not “this patient does not exist” — in real work those are completely different.'},expect:{th:'Error state ต่างจาก Empty state อย่างชัดเจน และมีทางให้ลองใหม่',en:'The Error state is clearly different from Empty and offers a way to retry.'}},
            {title:{th:'รอบที่ 5 — ย้อนกลับและเริ่มใหม่',en:'Round 5 — go back and start over'},what:{th:'เดินถึงหน้าสรุปแล้วกดย้อนกลับไปแก้ จากนั้นทำจนสำเร็จ แล้วเริ่มค้นหาคนใหม่ ตรวจว่าข้อมูลของคนก่อนหน้าไม่ค้างอยู่ นี่คือ bug ที่พบบ่อยที่สุดตอน integrate',en:'Reach the summary, go back to edit, finish successfully, then search for a different patient. Check that the previous patient’s data does not linger — the most common integration bug.'},expect:{th:'ฟอร์มสะอาดเมื่อเริ่มผู้ป่วยคนใหม่ และการย้อนกลับไม่ทำให้ข้อมูลที่กรอกหายทั้งหมด',en:'The form is clean for the new patient, and going back does not wipe everything you typed.'}}
          ],
          outro:{th:'จดผลทั้ง 5 รอบไว้ ถ้ารอบไหนไม่ผ่าน ให้เขียนเป็นพฤติกรรมที่สังเกตได้ เช่น “กดย้อนกลับแล้วคลินิกที่เลือกไว้หาย” แล้วส่งให้ Agent แก้ทีละข้อ',en:'Record all five rounds. For any that fail, write the observed behaviour — “going back clears the selected clinic” — and send them to the agent one at a time.'}},
        {type:'commands',title:{th:'Commit checkpoint 3 · หน้าเว็บที่เดิน flow ได้',en:'Commit checkpoint 3 · the page that walks the flow'},
          lead:{th:'สามคำสั่งนี้ **คุณเป็นคนรันเอง** ไม่ใช่ Agent (prompt ทุกอันในคอร์สห้าม Agent commit) และรันจากในโฟลเดอร์ worktree `wt-us001-patient-checkin` ทำหลังจากเดินครบทั้ง 5 รอบในหัวข้อก่อนหน้าแล้ว และ Storybook เดิมยังไม่พัง',en:'You run these three yourself — not the agent (every prompt in this course forbids the agent from committing) — from inside the `wt-us001-patient-checkin` worktree, after all five rounds above pass and the existing Storybook stories still work.'},
          steps:[
            {title:{th:'ดูว่ามีอะไรเปลี่ยนไปบ้าง และอยู่ branch ถูกหรือเปล่า',en:'See what changed, and confirm the branch'},what:{th:'บรรทัดแรกต้องเป็น `On branch feature/us001-patient-checkin` ถ้าไม่ใช่ ให้หยุดแล้วย้อนไปดูบทที่ 04 ก่อน จากนั้นอ่านรายชื่อไฟล์ว่าตรงกับงานที่เพิ่ง review หรือไม่',en:'The first line must read `On branch feature/us001-patient-checkin`. If not, stop and revisit lesson 04. Then read the file list and check it matches the work you just reviewed.'},cmd:`git status`,expect:{th:'ชื่อ branch ถูกต้อง และรายชื่อไฟล์ไม่มีอะไรที่คุณอธิบายไม่ได้',en:'The right branch name, and no file you cannot explain.'}},
            {title:{th:'เลือกเฉพาะไฟล์ของงานนี้',en:'Stage only this task’s files'},what:{th:'รอบนี้มีสองที่ที่เปลี่ยน คือหน้าเว็บที่ `src/app/opd/check-in` และ component ที่ถูกปรับระหว่างประกอบ ระบุทั้งสอง path แล้วอ่าน `git status` ซ้ำ ถ้ามีไฟล์นอกสองที่นี้โผล่มา ให้ถาม Agent ก่อนว่าจำเป็นเพราะอะไร',en:'Two places changed this round: the page at `src/app/opd/check-in` and the components adjusted during assembly. Name both paths, then re-read `git status` — if anything outside them appears, ask the agent why it was necessary before staging it.'},cmd:`git add src/app/opd/check-in src/features`,expect:{th:'เห็นทั้งไฟล์หน้าเว็บและ component อยู่ใต้ `Changes to be committed`',en:'Both the page file and the components appear under `Changes to be committed`.'}},
            {title:{th:'บันทึกพร้อมเหตุผลและเลข Issue',en:'Record it with a reason and the issue number'},what:{th:'ย่อหน้าที่สองคือที่ที่ใส่ **หลักฐาน** ว่าคุณเดินอะไรมาบ้าง ประโยคนี้จะถูกนำไปใช้ซ้ำตอนเขียน Merge Request ในบทที่ 14 ดังนั้นเขียนตอนที่ยังจำได้จะง่ายกว่ามาก',en:'The second paragraph is where the **evidence** goes — what you actually walked. You will reuse this sentence when writing the Merge Request in lesson 14, and writing it while you still remember is far easier.'},cmd:`git commit -m "feat(us001): assemble OPD check-in page from reviewed components" -m "Walked happy path, missing clinic, empty, error and restart. Refs #12"`,expect:{th:'สรุปจำนวนไฟล์และบรรทัดที่ถูกบันทึก และ `git status` สะอาดขึ้นกว่าเดิม',en:'A summary of files and lines recorded, and a cleaner `git status` than before.'}}
          ],
          outro:{th:'ถ้าหลังจากนี้ integration พังระหว่าง debug คุณมีจุดถอยกลับที่ “หน้าเว็บเคยเดินได้” แล้ว',en:'If integration breaks later while debugging, you now have a fallback point where the page demonstrably worked.'}},
        {type:'practice',title:{th:'ลงมือทำ: Walk the flow',en:'Practice: walk the flow'},steps:{th:['ให้ Agent integrate ตาม prompt','เดินทั้ง 5 รอบตามตารางด้านบน','จดปัญหาเป็น behavior feedback ไม่ใช่ code instruction','ส่งให้ Agent แก้ทีละข้อ แล้วเดิน flow ซ้ำเพื่อยืนยัน','ยืนยันว่า Storybook เดิมยังไม่พัง'],en:['Ask the agent to integrate using the prompt','Walk all five rounds above','Write issues as behaviour feedback, not code instructions','Send them one at a time and re-walk the flow to confirm','Confirm the existing Storybook stories still work']},expected:{th:'Flow หลักทำงานครบจาก Search → Select → Form → Preview → Confirm → Success และ state สำคัญยังทดสอบได้',en:'The main flow works from Search → Select → Form → Preview → Confirm → Success, with key states still testable.'}}
      ],
      quiz:{q:{th:'ทำไมควร review component ใน Storybook ก่อน integrate?',en:'Why review components in Storybook before integration?'},options:{th:['เพื่อให้ไฟล์เยอะขึ้น','แยกปัญหา component/state ออกจากปัญหา page integration','เพราะ Next.js เปิด Storybook ไม่ได้'],en:['To create more files','To separate component/state problems from page-integration problems','Because Next.js cannot open Storybook']},answer:1,why:{th:'การแยก review layer ลดความซับซ้อนเมื่อเกิดปัญหา',en:'Separating review layers reduces complexity when something goes wrong.'}},
      wrap:{th:['Review isolated ก่อน integrated','ตรวจ state transition ไม่ใช่แค่ screenshot','ยังใช้ mock ได้ครบโดยไม่มี backend'],en:['Review isolated before integrated','Review state transitions, not just screenshots','Mocks remain sufficient without a backend']}
    },
    {
      id:'debugging', group:'day3', no:'12', duration:'75 min',
      title:{th:'Debugging Literacy สำหรับผู้ใช้ AI Agent',en:'Debugging Literacy for AI-Agent Users'},
      intro:{th:'ไม่ต้องแก้ error เองทุกครั้ง แต่ต้องหา evidence, ระบุตำแหน่งปัญหา และให้ Agent อธิบาย root cause ก่อนแก้',en:'You do not have to fix every error yourself, but you must gather evidence, locate the problem, and ask the agent to explain root cause before fixing it.'},
      outcomes:{th:['รู้ 4 แหล่งหลัก: Terminal, Browser UI, Console, Network','อ่าน Error type → message → file → line','แยก UI symptom กับ data/service failure','หยุดวงจร “fix ซ้ำโดยไม่เข้าใจ”'],en:['Know the four evidence sources: Terminal, Browser UI, Console, Network','Read Error type → message → file → line','Separate UI symptoms from data/service failures','Stop the “blind repeated fix” loop']},
      blocks:[
        {type:'prose',title:{th:'กับดักที่ทุกคนตกในสัปดาห์แรกของการใช้ AI',en:'The trap everyone falls into in their first week with AI'},body:{th:[
          'เมื่อเจอ error สิ่งที่คนส่วนใหญ่ทำคือ copy ข้อความ error ทั้งก้อนแล้วส่งให้ Agent พร้อมคำว่า “แก้ให้หน่อย” Agent ก็จะแก้ให้จริง บางครั้งก็หาย แต่บ่อยครั้งจะเกิด error ใหม่ขึ้นแทน แล้วคุณก็ส่งอันใหม่ไปอีก วนแบบนี้ไปเรื่อย ๆ',
          'ปัญหาของวงจรนี้ไม่ใช่ว่า Agent โง่ แต่คือ **มันแก้อาการ ไม่ได้แก้สาเหตุ** และเมื่อวนไปหลายรอบ โค้ดจะถูกแก้ไปหลายจุดโดยไม่มีใครเข้าใจภาพรวม สุดท้ายอาจ “ไม่ error แล้ว” แต่พฤติกรรมของระบบผิดไปจากเดิม',
          'ทางออกคือเพิ่มขั้นตอนเดียว คือ **ถามหาสาเหตุก่อนอนุญาตให้แก้** คุณไม่จำเป็นต้องรู้วิธีแก้ แต่คุณต้องเข้าใจคำอธิบายสาเหตุได้ และถ้าคำอธิบายฟังไม่เข้าท่า นั่นคือสัญญาณว่าอย่าเพิ่งให้แก้',
          'ส่วนสำคัญที่สองคือการรู้ว่า **หลักฐานอยู่ที่ไหน** เพราะ error แต่ละแบบปรากฏคนละที่ และถ้าคุณดูผิดที่ ก็จะให้ข้อมูลผิดกับ Agent'
        ],en:[
          'When an error appears, most people copy the whole message to the agent with “please fix this”. It does fix something. Sometimes the error goes away; often a new one appears, so you paste that one too, and the loop continues.',
          'The problem with the loop is not that the agent is stupid — it is that **it treats symptoms rather than the cause**. After several rounds the code has been patched in many places with nobody holding the whole picture. Eventually there may be “no error” while the system behaves differently from what was intended.',
          'The fix is one extra step: **ask for the cause before permitting a change**. You do not need to know the solution, but you must be able to follow the explanation — and if the explanation does not add up, that is your signal to hold.',
          'The second essential part is knowing **where the evidence lives**, because different failures surface in different places, and looking in the wrong place means giving the agent wrong information.'
        ]}},
        {type:'diagram',title:{th:'หลักฐาน 4 แหล่ง และแต่ละแหล่งบอกอะไร',en:'Four evidence sources and what each tells you'},
          lead:{th:'ก่อนถาม Agent ให้ไล่ดู 4 ที่นี้เสมอ ใช้เวลาไม่เกินหนึ่งนาที แต่เปลี่ยนคุณภาพของคำตอบที่ได้อย่างชัดเจน',en:'Before asking the agent, check these four places. It takes under a minute and visibly changes the quality of the answer you get.'},
          diagram:`flowchart TD\nP[พบปัญหา / Problem observed] --> T[1. Terminal\\nbuild & type errors]\nP --> U[2. Browser UI\\nสิ่งที่ผู้ใช้เห็นจริง]\nP --> C[3. Console\\nJavaScript runtime errors]\nP --> N[4. Network\\nstatus + response]\nT --> E[รวบรวมหลักฐาน]\nU --> E\nC --> E\nN --> E\nE --> A[ถาม Agent หา root cause]`,
          notes:{th:['**Terminal** — หน้าต่างที่รัน `npm run dev` บอก error ที่เกิดตอน build หรือ type ไม่ตรงกัน มักเป็น error ที่ทำให้หน้าเว็บขึ้นไม่ได้เลย','**Browser UI** — สิ่งที่ผู้ใช้เห็นจริง บางทีไม่มี error แต่แสดงข้อมูลผิด ซึ่งร้ายแรงกว่า error เสียอีก','**Console** — เปิดด้วยปุ่ม F12 แท็บ Console บอก error ที่เกิดตอนผู้ใช้กดใช้งาน','**Network** — แท็บ Network บอกว่า request สำเร็จหรือไม่ ตัวเลข 200 คือสำเร็จ 404 คือไม่พบ 500 คือฝั่งข้อมูลพัง'],en:['**Terminal** — the window running `npm run dev` reports build and type errors, usually the kind that stop the page from loading at all','**Browser UI** — what the user actually sees; sometimes there is no error but the data is wrong, which is worse than an error','**Console** — press F12 and open Console; it reports errors that happen while the user interacts','**Network** — the Network tab shows whether a request succeeded: 200 means success, 404 not found, 500 the data side broke']}},
        {type:'prose',title:{th:'วิธีอ่าน error message โดยไม่ต้องเข้าใจโค้ด',en:'How to read an error message without understanding code'},body:{th:[
          'ข้อความ error มักดูน่ากลัวเพราะยาวและมีศัพท์แปลก ๆ แต่โครงสร้างของมันคงที่เสมอ และคุณต้องการแค่ 4 ส่วนนี้',
          '**ประเภท** อยู่ต้นข้อความ เช่น `TypeError` หรือ `Error` · **ข้อความ** คือประโยคที่บอกว่าอะไรผิด เช่น `Property "hn" does not exist` · **ไฟล์** คือ path ที่ตามมา ซึ่งบอกว่าปัญหาอยู่ส่วนไหนของระบบ · **บรรทัด** คือตัวเลขท้าย path',
          'ประโยชน์จริงของการอ่าน 4 ส่วนนี้คือ คุณจะรู้ทันทีว่า **ปัญหาอยู่ในไฟล์ที่เกี่ยวกับงานของคุณหรือเปล่า** ถ้า error ชี้ไปที่ไฟล์ที่คุณไม่ได้แตะเลยในงานนี้ นั่นเป็นข้อมูลสำคัญที่ควรบอก Agent ตั้งแต่ต้น',
          'อีกเรื่องที่ควรแยกให้ออกคือ error บางอย่าง **ไม่ใช่ bug** เช่น ถ้าคุณตั้ง mock เป็น scenario `error` แล้วเห็นข้อความแสดงข้อผิดพลาดบนหน้าจอ นั่นคือระบบทำงาน **ถูกต้อง** ตามที่เราออกแบบไว้'
        ],en:[
          'Error messages look intimidating because they are long and full of unfamiliar words, but their structure is constant, and you only need four parts.',
          '**Type** comes first, e.g. `TypeError` or `Error` · **Message** is the sentence saying what is wrong, e.g. `Property "hn" does not exist` · **File** is the path that follows, telling you which part of the system it is in · **Line** is the number at the end of that path.',
          'The real benefit of reading those four parts: you instantly know **whether the problem is in a file related to your work**. If the error points at a file you never touched for this task, that is important information to give the agent up front.',
          'One more distinction: some errors are **not bugs**. If you set the mock to the `error` scenario and then see an error message on screen, the system is working **exactly as designed**.'
        ]}},
        {type:'commands',title:{th:'เก็บหลักฐานก่อนถาม — ทีละที่',en:'Collect the evidence first — one place at a time'},
          lead:{th:'ทำตามลำดับนี้ทุกครั้งที่เจอปัญหา ใช้เวลาไม่นาน และทำให้คำถามที่ส่งให้ Agent มีคุณภาพขึ้นมาก',en:'Follow this order every time something breaks. It is quick, and it makes the question you send the agent far better.'},
          steps:[
            {title:{th:'ดู Terminal ที่รันแอปอยู่',en:'Look at the terminal running the app'},what:{th:'สลับไปที่หน้าต่างที่รัน `npm run dev` แล้วเลื่อนขึ้นไปหาข้อความสีแดงบรรทัดแรก **สำคัญมาก** ให้อ่านบรรทัดแรกสุดของ error ไม่ใช่บรรทัดสุดท้าย เพราะบรรทัดหลัง ๆ มักเป็นผลพวงที่ตามมา',en:'Switch to the window running `npm run dev` and scroll up to the first red line. **Important:** read the first line of the error, not the last — later lines are usually consequences.'},expect:{th:'ได้ข้อความ error พร้อมชื่อไฟล์และเลขบรรทัด copy เก็บไว้',en:'You have an error message with a file name and line number. Copy it.'}},
            {title:{th:'ดูสิ่งที่ผู้ใช้เห็นบนหน้าจอ',en:'Look at what the user sees on screen'},what:{th:'บันทึกด้วยคำพูดว่า “กดอะไรแล้วเกิดอะไร” เช่น “กดปุ่มค้นหาแล้วหน้าจอค้างอยู่ที่ Loading ไม่เปลี่ยน” คำอธิบายพฤติกรรมมีค่ามากกว่าที่คิด เพราะบอกได้ว่าปัญหาเกิดตอนไหนของ flow',en:'Write down “what I clicked and what happened”: “I clicked Search and the screen stayed on Loading forever.” Behavioural descriptions are more valuable than they look — they tell you where in the flow it broke.'},expect:{th:'มีประโยคเดียวที่อธิบายอาการได้ชัดโดยไม่ต้องใช้ศัพท์เทคนิค',en:'One clear sentence describing the symptom, with no technical jargon.'}},
            {title:{th:'เปิด Console ในเบราว์เซอร์',en:'Open the browser Console'},what:{th:'กด F12 (หรือคลิกขวา → Inspect) แล้วเลือกแท็บ Console นี่คือที่ที่ error ซึ่งเกิดตอนผู้ใช้โต้ตอบจะไปปรากฏ ถ้าไม่มีอะไรเลยก็เป็นข้อมูลที่มีประโยชน์เช่นกัน',en:'Press F12 (or right-click → Inspect) and choose the Console tab. This is where errors that happen during interaction appear. An empty console is also useful information.'},expect:{th:'เห็นข้อความสีแดง (ถ้ามี) พร้อมไฟล์ต้นทาง',en:'Red messages (if any) with their source file.'}},
            {title:{th:'เปิดแท็บ Network แล้วทำซ้ำอาการ',en:'Open the Network tab and reproduce the problem'},what:{th:'เปิดแท็บ Network ค้างไว้แล้วกดทำสิ่งที่ทำให้เกิดปัญหาอีกครั้ง ดูที่คอลัมน์ Status ตัวเลขนี้จะบอกคุณทันทีว่าปัญหาอยู่ฝั่งข้อมูล หรืออยู่ฝั่งหน้าจอ ซึ่งเป็นการแยกที่สำคัญที่สุดในบทนี้',en:'Keep the Network tab open and reproduce the problem. Look at the Status column — it tells you immediately whether the problem is on the data side or the screen side, the most important split in this lesson.'},expect:{th:'เห็นรายการ request พร้อม status เช่น 200, 404 หรือ 500',en:'A list of requests with statuses such as 200, 404, or 500.'}},
            {title:{th:'ตรวจว่ามีไฟล์อะไรเปลี่ยนไปบ้างก่อนหน้านี้',en:'Check what changed just before this'},what:{th:'ถ้าเมื่อกี้ยังใช้งานได้ แล้วตอนนี้พัง แปลว่ามีบางอย่างเพิ่งเปลี่ยน `git diff` จะบอกคุณว่าอะไรเปลี่ยน ซึ่งมักชี้ไปที่ต้นเหตุโดยตรง',en:'If it worked a moment ago and is broken now, something just changed. `git diff` shows what, and it often points straight at the cause.'},cmd:`git status
git diff --stat`,expect:{th:'รายชื่อไฟล์ที่เปลี่ยน ถ้ามีไฟล์ที่คุณไม่ได้คาดว่าจะเปลี่ยน ให้สงสัยไฟล์นั้นก่อน',en:'A list of changed files. Any file you did not expect to change is your first suspect.'}}
          ]},
        {type:'prompt',title:{th:'Root-cause Prompt — ห้ามข้าม',en:'Root-cause Prompt — do not skip it'},
          when:{th:'ใช้ทันทีหลังเก็บหลักฐานครบ และก่อนอนุญาตให้แก้ไฟล์ใด ๆ เสมอ ประโยคสุดท้ายที่ห้ามแก้ไฟล์คือหัวใจของ prompt นี้',en:'Use it right after collecting evidence and always before allowing any file change. The final line forbidding edits is the heart of this prompt.'},
          prompt:{th:`ช่วยวิเคราะห์ปัญหานี้ก่อน ยังไม่ต้องแก้ไขอะไรทั้งสิ้น

อาการที่พบ
[อธิบายเป็นภาษาคน เช่น กดปุ่มค้นหาแล้วหน้าจอค้างที่ Loading]

หลักฐานจาก Terminal
[วางข้อความ error]

หลักฐานจาก Console ของเบราว์เซอร์
[วาง หรือระบุว่าไม่มี]

หลักฐานจาก Network
[ระบุ status เช่น 500 หรือระบุว่าไม่มี request เกิดขึ้น]

ตอบตามหัวข้อนี้
1. อะไรทำงานล้มเหลว
2. หลักฐานข้อไหนที่สนับสนุนข้อสรุปนั้น
3. สาเหตุที่แท้จริงคืออะไร ไม่ใช่แค่อาการ
4. เกี่ยวข้องกับไฟล์ไหนบ้าง
5. วิธีแก้ที่เล็กและปลอดภัยที่สุดคืออะไร
6. จะยืนยันได้อย่างไรว่าแก้แล้วหายจริง

ย้ำอีกครั้ง: ห้ามแก้ไขไฟล์ในรอบนี้`,en:`Analyse this problem first. Do not change anything yet.

Symptom:
[describe in plain language, e.g. clicking Search leaves the screen stuck on Loading]

Evidence from the terminal:
[paste the error]

Evidence from the browser console:
[paste, or state that there is none]

Evidence from the Network tab:
[state the status, e.g. 500, or that no request was made]

Answer these points:
1. What failed?
2. Which piece of evidence supports that conclusion?
3. What is the actual root cause, not just the symptom?
4. Which files are involved?
5. What is the smallest, safest fix?
6. How will we confirm the fix really worked?

Again: do not modify any files in this round.`},
          example:{th:`ช่วยวิเคราะห์ปัญหานี้ก่อน ยังไม่ต้องแก้ไขอะไรทั้งสิ้น

อาการที่พบ
ในฟอร์ม Check-in กดปุ่ม Confirm แล้วหน้าค้างที่ Loading ไม่ไปต่อหน้า Preview และไม่มีข้อความ error ขึ้นบนหน้าจอ

หลักฐานจาก Terminal
ไม่มี — Terminal ของ Next.js แสดงแค่ log ปกติ ไม่มี error

หลักฐานจาก Console ของเบราว์เซอร์
TypeError: Cannot read properties of undefined (reading 'hn')
    at CheckInForm (CheckInForm.tsx:42:35)

หลักฐานจาก Network
ไม่มี request เกิดขึ้น — กดปุ่มแล้วไม่มี call ออกไปที่ network เลย

ตอบตามหัวข้อนี้
1. อะไรทำงานล้มเหลว
2. หลักฐานข้อไหนที่สนับสนุนข้อสรุปนั้น
3. สาเหตุที่แท้จริงคืออะไร ไม่ใช่แค่อาการ
4. เกี่ยวข้องกับไฟล์ไหนบ้าง
5. วิธีแก้ที่เล็กและปลอดภัยที่สุดคืออะไร
6. จะยืนยันได้อย่างไรว่าแก้แล้วหายจริง

ย้ำอีกครั้ง: ห้ามแก้ไขไฟล์ในรอบนี้`,en:`Analyse this problem first. Do not change anything yet.

Symptom:
On the check-in form I press Confirm. The page stays stuck on Loading, never reaches Preview, and no error banner appears.

Evidence from the terminal:
None — the Next.js dev terminal shows only its usual request logs, no error.

Evidence from the browser console:
TypeError: Cannot read properties of undefined (reading 'hn')
    at CheckInForm (CheckInForm.tsx:42:35)

Evidence from the Network tab:
No request was made — clicking the button never triggers a network call.

Answer these points:
1. What failed?
2. Which piece of evidence supports that conclusion?
3. What is the actual root cause, not just the symptom?
4. Which files are involved?
5. What is the smallest, safest fix?
6. How will we confirm the fix really worked?

Again: do not modify any files in this round.`},
          after:{th:['อ่านข้อ 3 แล้วถามตัวเองว่าเข้าใจไหม ถ้าไม่เข้าใจ ให้ขอให้อธิบายใหม่แบบไม่ใช้ศัพท์เทคนิค','ถ้าคำตอบข้อ 5 บอกว่าต้องแก้หลายไฟล์ ให้สงสัยไว้ก่อนว่าอาจวิเคราะห์ผิด','อนุญาตให้แก้ได้ทีละข้อเท่านั้น อย่าให้แก้ทุกอย่างในรอบเดียว'],en:['Read point 3 and ask whether you understood it; if not, ask for a jargon-free explanation','If point 5 requires changes across many files, suspect the analysis is off','Approve one fix at a time; never let it change everything in one round']}},
        {type:'prompt',title:{th:'Verify Prompt — หลังแก้เสร็จ',en:'Verify Prompt — after the fix'},
          when:{th:'ใช้หลัง Agent แก้เสร็จ เพื่อไม่ให้จบด้วยคำว่า “แก้แล้วครับ” โดยไม่มีหลักฐาน คุณควรทดสอบเองด้วย ไม่ใช่แค่เชื่อรายงาน',en:'Use it after the agent fixes something, so the episode does not end with an unevidenced “fixed!”. You should also test yourself rather than trusting the report.'},
          prompt:{th:`สรุปการแก้ไขที่เพิ่งทำ

1. แก้ไฟล์อะไรบ้าง และแต่ละไฟล์เปลี่ยนอะไร
2. การแก้นี้ตรงกับ root cause ที่วิเคราะห์ไว้อย่างไร
3. มีส่วนอื่นของระบบที่อาจได้รับผลกระทบหรือไม่
4. ฉันควรทดสอบอะไรด้วยตัวเองเพื่อยืนยันว่าหายจริง ระบุเป็นขั้นตอนที่ทำตามได้

ห้ามแก้ไขไฟล์เพิ่มในรอบนี้`,en:`Summarize the fix you just made.

1. Which files changed, and what changed in each?
2. How does this fix address the root cause you identified?
3. Could any other part of the system be affected?
4. What should I test myself to confirm it is really fixed? Give steps I can follow.

Do not modify any further files in this round.`},
          after:{th:['ทำตามขั้นตอนในข้อ 4 ด้วยตัวเองจริง ๆ','ทำซ้ำเคสที่เคยพังก่อนหน้านี้ ไม่ใช่แค่เคสใหม่','รัน `git diff` ดูว่าการแก้ครั้งนี้เล็กอย่างที่บอกจริงหรือไม่'],en:['Actually follow the steps in point 4 yourself','Reproduce the case that failed before, not only a new one','Run `git diff` to see whether the fix is as small as claimed']}},
        {type:'two',title:{th:'Intentional errors ใน workshop',en:'Intentional workshop errors'},left:{title:{th:'ตัวอย่าง',en:'Examples'},items:{th:['TypeScript property error','Mock error scenario','Port 3000 in use','Missing UI state'],en:['TypeScript property error','Mock error scenario','Port 3000 in use','Missing UI state']}},right:{title:{th:'สิ่งที่ฝึก',en:'What it trains'},items:{th:['อ่าน terminal','แยก expected error state จาก bug','เข้าใจหลาย worktree/process','ย้อนกลับไป requirement/state inventory'],en:['Read terminal evidence','Separate expected error state from bugs','Understand multiple worktrees/processes','Return to requirement/state inventory']}}},
        {type:'callout',tone:'warning',title:{th:'Port 3000 ถูกใช้อยู่ — error ที่ไม่ใช่ bug',en:'Port 3000 is already in use — an error that is not a bug'},text:{th:'ถ้าเห็นข้อความนี้ แปลว่ามีแอปอื่นรันอยู่ที่ port เดิมแล้ว ซึ่งมักเกิดตอนเปิดหลาย worktree พร้อมกัน วิธีแก้ไม่ใช่การให้ Agent แก้โค้ด แต่คือปิด process เก่า หรือรันด้วย port อื่น เช่น `npm run dev -- -p 3001`',en:'This message means another app already occupies that port — common when several worktrees run at once. The fix is not code: stop the old process, or run on another port with `npm run dev -- -p 3001`.'}},
        {type:'commands',title:{th:'Commit checkpoint 4 · บั๊กที่แก้จบพร้อมหลักฐาน',en:'Commit checkpoint 4 · a bug fixed with evidence'},
          lead:{th:'สามคำสั่งนี้ **คุณเป็นคนรันเอง** ไม่ใช่ Agent (prompt ทุกอันในคอร์สห้าม Agent commit) และรันจากในโฟลเดอร์ worktree `wt-us001-patient-checkin` ทำหลังจากใช้ Verify Prompt แล้ว reproduce เคสเดิมซ้ำจนแน่ใจว่าหายจริง ไม่ใช่แค่ Agent บอกว่าแก้แล้ว',en:'You run these three yourself — not the agent (every prompt in this course forbids the agent from committing) — from inside the `wt-us001-patient-checkin` worktree, after the Verify Prompt and after you reproduced the original case yourself — not merely because the agent said it fixed it.'},
          steps:[
            {title:{th:'ดูว่ามีอะไรเปลี่ยนไปบ้าง และอยู่ branch ถูกหรือเปล่า',en:'See what changed, and confirm the branch'},what:{th:'บรรทัดแรกต้องเป็น `On branch feature/us001-patient-checkin` ถ้าไม่ใช่ ให้หยุดแล้วย้อนไปดูบทที่ 04 ก่อน จากนั้นอ่านรายชื่อไฟล์ว่าตรงกับงานที่เพิ่ง review หรือไม่',en:'The first line must read `On branch feature/us001-patient-checkin`. If not, stop and revisit lesson 04. Then read the file list and check it matches the work you just reviewed.'},cmd:`git status`,expect:{th:'ชื่อ branch ถูกต้อง และรายชื่อไฟล์ไม่มีอะไรที่คุณอธิบายไม่ได้',en:'The right branch name, and no file you cannot explain.'}},
            {title:{th:'เลือกเฉพาะไฟล์ของงานนี้',en:'Stage only this task’s files'},what:{th:'แก้บั๊กหนึ่งตัวควรกระทบไฟล์ไม่กี่ไฟล์ ถ้า `git status` แสดงไฟล์เยอะผิดปกติ แปลว่า Agent แก้เกินขอบเขต ให้ย้อนกลับไปถามก่อน อย่าเพิ่ง add เปลี่ยน path ด้านขวาให้ตรงกับไฟล์ที่แก้จริงในเคสของคุณ',en:'One bug fix should touch few files. If `git status` shows an unusual number, the agent went beyond scope — ask before staging. Adjust the path to match the files your own case actually changed.'},cmd:`git add src/features/patient-search`,expect:{th:'เห็นเฉพาะไฟล์ที่เกี่ยวกับการแก้บั๊กอยู่ใต้ `Changes to be committed`',en:'Only the files involved in the fix appear under `Changes to be committed`.'}},
            {title:{th:'บันทึกพร้อมเหตุผลและเลข Issue',en:'Record it with a reason and the issue number'},what:{th:'commit ของการแก้บั๊กควรตอบสองอย่างเสมอ คือ **อาการที่หายไป** และ **ยืนยันอย่างไร** เพราะคนที่มา review ทีหลังจะถามสองข้อนี้เป็นอันดับแรก',en:'A bug-fix commit should always answer two things: **which symptom is gone** and **how it was verified** — the first two questions any later reviewer asks.'},cmd:`git commit -m "fix(us001): keep the selected patient after a failed submit" -m "Reproduced from docs/workshop-errors.md and verified by re-walking the failing case. Refs #12"`,expect:{th:'สรุปจำนวนไฟล์และบรรทัดที่ถูกบันทึก และ `git status` สะอาดขึ้นกว่าเดิม',en:'A summary of files and lines recorded, and a cleaner `git status` than before.'}}
          ],
          outro:{th:'สังเกตว่าเราแยก commit การแก้บั๊กออกจาก commit ที่สร้างฟีเจอร์ ถ้าวันหลังต้องถอยการแก้นี้ออก คุณถอยได้เฉพาะส่วนนี้โดยไม่กระทบงานที่เหลือ',en:'Notice the fix is its own commit, separate from the feature commits. If it ever has to be rolled back, only this part goes — the rest of the work stays.'}},
        {type:'practice',title:{th:'ลงมือทำ: Diagnose ก่อน Fix',en:'Practice: diagnose before fixing'},steps:{th:['เลือก intentional error จาก `docs/workshop-errors.md`','เก็บหลักฐานครบทั้ง 4 แหล่งตามขั้นตอนด้านบน','ส่ง Root-cause Prompt ให้ Agent','อธิบาย root cause ด้วยคำของตัวเองให้เพื่อนฟังก่อนอนุญาตให้แก้','หลังแก้ ใช้ Verify Prompt แล้ว reproduce เคสเดิมด้วยตัวเอง'],en:['Choose an intentional error from `docs/workshop-errors.md`','Collect evidence from all four sources using the steps above','Send the Root-cause Prompt','Explain the root cause in your own words to a peer before approving a fix','After the fix, use the Verify Prompt and reproduce the original case yourself']},expected:{th:'สามารถบอกได้ว่าอะไรเสีย, หลักฐานอยู่ที่ไหน, root cause คืออะไร และ fix ถูก verify อย่างไร',en:'You can state what failed, where the evidence is, the root cause, and how the fix was verified.'}}
      ],
      quiz:{q:{th:'เมื่อ Agent แก้ error แล้วเกิด error ใหม่ สิ่งที่ควรทำที่สุดคือ?',en:'When an agent fixes one error and creates another, what should you do?'},options:{th:['พิมพ์ “fix” ซ้ำไปเรื่อยๆ','กลับไปเก็บ evidence และเข้าใจ root cause ก่อนแก้อีกครั้ง','ลบ tests'],en:['Keep typing “fix”','Collect evidence again and understand root cause before another change','Delete the tests']},answer:1,why:{th:'Debugging ที่ดีเป็น loop ที่มี evidence และ verification ไม่ใช่การสุ่มเปลี่ยน code',en:'Good debugging is an evidence-and-verification loop, not random code changes.'}},
      wrap:{th:['อ่าน evidence ก่อนถาม AI','ขอ root cause ก่อน fix','verify ด้วย case ที่เคยพัง'],en:['Read evidence before asking AI','Ask for root cause before a fix','Verify using the case that previously failed']}
    },
    {
      id:'diff-quality', group:'day3', no:'13', duration:'60 min',
      title:{th:'Git Diff, Scope Review & Quality Gates',en:'Git Diff, Scope Review & Quality Gates'},
      intro:{th:'ก่อนเชื่อว่า Agent ทำงานเสร็จ ตรวจสิ่งที่เปลี่ยนจริงและให้เครื่องมือพื้นฐานช่วยจับปัญหา',en:'Before trusting that the agent is finished, inspect the actual changes and run basic quality gates.'},
      outcomes:{th:['ใช้ status/diff เพื่อจับ scope creep','ให้ Agent อธิบาย changed files ทีละไฟล์','รัน lint/test/build','รู้สัญญาณ red flag แม้อ่าน code ไม่ลึก'],en:['Use status/diff to catch scope creep','Ask the agent to explain changed files one by one','Run lint/test/build','Recognize red flags without deep code-reading']},
      blocks:[
        {type:'prose',title:{th:'ตรวจงาน AI โดยไม่ต้องอ่านโค้ดทุกบรรทัด',en:'Reviewing AI work without reading every line'},body:{th:[
          'คำถามที่ได้ยินบ่อยที่สุดในบทนี้คือ “ถ้าอ่านโค้ดไม่เป็น จะ review ได้อย่างไร” คำตอบคือ คุณไม่ได้ review ว่าโค้ดเขียนดีหรือไม่ — นั่นเป็นงานของ Developer ตอน Merge Request สิ่งที่คุณ review คือ **ขอบเขต** และ **ความสอดคล้องกับ requirement**',
          'เทคนิคที่ได้ผลที่สุดและใช้ได้ทันทีคือ **ทายก่อนดู** ก่อนเปิด diff ให้เดาในใจว่างานชิ้นนี้ควรแตะกี่ไฟล์ และควรเป็นไฟล์ประเภทไหน เช่น “เพิ่ม Empty state ให้ PatientSearch น่าจะแตะ 2 ไฟล์ คือ component กับ Storybook story ของมัน”',
          'จากนั้นค่อยเปิดดูของจริง ถ้าตรงกับที่เดา แปลว่าคุณเข้าใจงานและ Agent ทำตรงขอบเขต ถ้าไม่ตรง — เช่น เดาไว้ 2 ไฟล์ แต่เปลี่ยนจริง 21 ไฟล์ — คุณไม่จำเป็นต้องรู้ว่าโค้ดข้างในเขียนอะไร ก็รู้แล้วว่าต้องถาม',
          'ชั้นถัดมาคือ **quality gate** ซึ่งเป็นคำสั่งอัตโนมัติสามตัวที่ให้เครื่องตรวจแทนคน มันจับคนละอย่างกัน และไม่มีตัวไหนตรวจว่า “ตรงตาม requirement หรือไม่” ได้ — ข้อนั้นยังเป็นงานของคุณเสมอ'
        ],en:[
          'The most common question in this lesson is “how can I review if I cannot read code?” The answer: you are not reviewing whether the code is well written — that is the developer’s job at merge review. You are reviewing **scope** and **fit with the requirement**.',
          'The most effective technique, usable immediately, is **predict before you look**. Before opening the diff, guess how many files this work should touch and of what kind: “adding an Empty state to PatientSearch should touch two files — the component and its Storybook story.”',
          'Then look. If reality matches your guess, you understand the work and the agent stayed in scope. If it does not — you guessed two files and see twenty-one — you do not need to understand the code to know it is time to ask.',
          'The next layer is the **quality gates**: three automated commands that let the machine check for you. Each catches something different, and none of them checks “does this match the requirement?” — that part stays yours.'
        ]}},
        {type:'diagram',title:{th:'ชั้นการตรวจ 4 ชั้น ก่อนบอกว่าเสร็จ',en:'Four review layers before calling it done'},
          lead:{th:'แต่ละชั้นจับปัญหาคนละแบบ และไม่มีชั้นไหนแทนที่ชั้นอื่นได้ ชั้นที่คนมักข้ามคือชั้นแรกและชั้นสุดท้าย ซึ่งเป็นสองชั้นที่ต้องใช้คน',en:'Each layer catches a different kind of problem and none replaces another. The layers people skip are the first and the last — the two that need a human.'},
          diagram:`flowchart TD\nA[Agent บอกว่าเสร็จ / Agent says done] --> B[1. Scope review\\ngit status + git diff --stat\\nคน / human]\nB --> C[2. Automated checks\\nlint → test → build\\nเครื่อง / machine]\nC --> D[3. Storybook review\\nแต่ละ state ถูกต้องไหม\\nคน / human]\nD --> E[4. Flow walkthrough\\nเดินจริงบนหน้าเว็บ\\nคน / human]\nE --> F[พร้อม commit / Ready to commit]\nB -->|ไฟล์นอก scope| G[ถาม Agent ก่อน / Ask first]\nC -->|fail| G\nD -->|state ผิด| G\nE -->|พฤติกรรมผิด| G`,
          notes:{th:['ชั้นที่ 1 ใช้เวลาไม่ถึงนาที แต่จับ scope creep ได้มากที่สุด','ชั้นที่ 2 เป็นชั้นเดียวที่เครื่องทำแทนได้ทั้งหมด','ชั้นที่ 3 และ 4 คือสิ่งที่ไม่มีเครื่องมือไหนทำแทนคนได้ เพราะต้องรู้ว่าธุรกิจต้องการอะไร','ทุกเส้นที่วิ่งออกไป “ถาม Agent ก่อน” หมายถึงหยุดก่อน อย่าเพิ่ง commit'],en:['Layer 1 takes under a minute and catches the most scope creep','Layer 2 is the only one a machine can do entirely for you','Layers 3 and 4 cannot be delegated to any tool, because they require knowing what the business wants','Every arrow leading to “ask first” means stop — do not commit yet']}},
        {type:'commands',title:{th:'ตรวจ scope ทีละขั้น',en:'Check the scope, step by step'},
          lead:{th:'ทำตามลำดับนี้ทุกครั้งหลัง Agent บอกว่าเสร็จ อย่าข้ามไปรัน build เลย เพราะ build ผ่านไม่ได้แปลว่าอยู่ใน scope',en:'Follow this order every time the agent says it is done. Do not jump straight to build — a passing build says nothing about scope.'},
          steps:[
            {title:{th:'ดูภาพรวมว่ามีไฟล์อะไรเปลี่ยนบ้าง',en:'See which files changed at all'},what:{th:'`git status` แสดงรายชื่อไฟล์ที่ถูกแก้ ไฟล์ที่เพิ่มใหม่ และไฟล์ที่ถูกลบ ให้กวาดตาดูรายชื่อก่อน อย่าเพิ่งลงรายละเอียด สิ่งที่มองหาคือชื่อไฟล์ที่ “ไม่น่าจะเกี่ยว”',en:'`git status` lists modified, new, and deleted files. Skim the names first without diving into detail. You are looking for names that “should not be involved”.'},cmd:`git status`,expect:{th:'รายชื่อไฟล์ที่เปลี่ยน ส่วนใหญ่ควรอยู่ในโฟลเดอร์ของฟีเจอร์ที่ทำอยู่',en:'A list of changed files, most of them inside the folder of the feature you are working on.'}},
            {title:{th:'ดูว่าทั้ง branch นี้มี commit อะไรบ้าง',en:'See every commit on this branch'},what:{th:'`main..HEAD` แปลว่า “สิ่งที่มีใน branch ของฉันแต่ยังไม่มีใน main” คำสั่งนี้คือสรุปงานทั้ง branch ในไม่กี่บรรทัด ถ้าอ่านแล้วเล่าเรื่องไม่รู้เรื่อง แปลว่าข้อความ commit ระหว่างทางยังไม่ดีพอ',en:'`main..HEAD` means “what exists on my branch but not on main”. It summarizes the whole branch in a few lines. If it does not read as a coherent narrative, your checkpoint messages were not good enough.'},cmd:`git log --oneline main..HEAD`,expect:{th:'เห็น commit ของ checkpoint ที่ทำไว้ในบทที่ 08, 09, 11 และ 12 เรียงจากใหม่ไปเก่า',en:'The checkpoint commits from lessons 08, 09, 11, and 12, newest first.'}},
            {title:{th:'ดูภาพรวมของทั้ง branch ไม่ใช่แค่ที่ยังไม่ commit',en:'Review the whole branch, not just uncommitted work'},what:{th:'`git diff` เปล่า ๆ แสดงเฉพาะสิ่งที่ยังไม่ commit ซึ่งตอนนี้แทบไม่เหลือแล้ว เพราะเรา commit เป็นระยะ คำสั่งนี้ต่างออกไป คือเทียบทั้ง branch กับ main นี่คือสิ่งที่ Developer จะเห็นตอนเปิด Merge Request',en:'A bare `git diff` shows only uncommitted work — which is nearly nothing now that you commit at checkpoints. This one compares the whole branch against main, which is exactly what a developer sees in the Merge Request.'},cmd:`git diff main...HEAD --stat`,expect:{th:'รายชื่อไฟล์ทั้งหมดของงานนี้พร้อมจำนวนบรรทัด และบรรทัดสรุปท้ายสุด',en:'Every file in this task with its line counts, plus a summary line at the end.'}},
            {title:{th:'นับจำนวนบรรทัดที่เปลี่ยนต่อไฟล์',en:'Count changed lines per file'},what:{th:'`--stat` ย่อ diff ให้เหลือสรุปว่าแต่ละไฟล์เปลี่ยนกี่บรรทัด ตัวเลขบอกได้ทันทีว่ามีไฟล์ไหนถูกแก้หนักผิดปกติ ข้อควรรู้คือคำสั่งนี้ดูเฉพาะงานที่ **ยังไม่ได้ commit** ถ้าคุณ commit ตาม checkpoint มาตลอด ตรงนี้อาจว่างเปล่า ซึ่งเป็นสัญญาณที่ดี เพราะภาพรวมของทั้ง branch ดูไปแล้วในสองคำสั่งก่อนหน้า',en:'`--stat` compresses the diff into a per-file line count, and the numbers immediately show which file was rewritten more heavily than expected. Note that it only covers work that is **not yet committed** — if you committed at every checkpoint this may be empty, which is a good sign, since the two commands above already covered the whole branch.'},cmd:`git diff --stat`,expect:{th:'ตารางสรุป เช่น `PatientSearch.tsx | 24 ++++--` ท้ายตารางบอกจำนวนไฟล์ทั้งหมด',en:'A summary table such as `PatientSearch.tsx | 24 ++++--`, with a total file count at the bottom.'}},
            {title:{th:'เปิดดูเฉพาะไฟล์ที่น่าสงสัย',en:'Open only the suspicious files'},what:{th:'ไม่ต้องอ่านทุกไฟล์ ให้เลือกเปิดเฉพาะไฟล์ที่คุณไม่ได้คาดคิดว่าจะเปลี่ยน แม้อ่านโค้ดไม่ออก คุณก็ดูได้ว่ามันแตะเรื่องอะไร เช่น ถ้าเห็นคำว่า `auth` หรือ `login` ในงานที่ควรเป็นแค่หน้า check-in นั่นคือสัญญาณ',en:'You do not need to read every file. Open only the ones you did not expect. Even without reading code you can see what area it touches: seeing `auth` or `login` in what should be a check-in page is a signal.'},cmd:`git diff main...HEAD -- src/app/layout.tsx`,expect:{th:'เห็นเนื้อหาที่เปลี่ยนในไฟล์นั้นตลอดทั้ง branch กด `q` เพื่อออก (เปลี่ยน path หลัง `--` ให้ตรงกับไฟล์ที่สงสัย)',en:'The changes in that file. Press `q` to exit. Replace the path with the file you suspect.'}},
            {title:{th:'ตรวจว่ามี dependency ใหม่แอบเข้ามาหรือไม่',en:'Check whether a new dependency slipped in'},what:{th:'ถ้า `package.json` อยู่ในรายการไฟล์ที่เปลี่ยน แปลว่ามีการเพิ่มหรือลบ library ซึ่งเป็นเรื่องใหญ่กว่าที่คนส่วนใหญ่คิด เพราะกระทบทั้งโปรเจกต์และต้องมีเหตุผลรองรับ',en:'If `package.json` appears in the changed list, a library was added or removed. That is bigger than most people assume — it affects the whole project and needs justification.'},cmd:`git diff main...HEAD -- package.json`,expect:{th:'ถ้าไม่มีอะไรแสดง แปลว่าไม่มี dependency ใหม่ ซึ่งเป็นสิ่งที่ดีสำหรับงานขนาดนี้',en:'No output means no new dependency — which is what you want for work of this size.'}}
          ],
          outro:{th:'สรุปสั้น ๆ ของบทนี้: ถ้าคุณอธิบายไม่ได้ว่าทำไมไฟล์หนึ่งต้องเปลี่ยน แปลว่ายังไม่พร้อม commit',en:'The short version of this lesson: if you cannot explain why a file changed, it is not ready to commit.'}},
        {type:'callout',tone:'danger',title:{th:'Red flag',en:'Red flag'},text:{th:'Issue ขอแก้ Patient Search แต่ git diff แสดง 21 files รวม auth, package.json และ global layout — อย่า commit ก่อนเข้าใจว่าทำไมทุกไฟล์จำเป็น',en:'The issue asks for Patient Search, but git diff shows 21 files including auth, package.json, and global layout — do not commit until you understand why every file is necessary.'}},
        {type:'callout',tone:'danger',title:{th:'ไฟล์ที่ห้ามหลุดเข้า commit',en:'Files that must never enter a commit'},text:{th:'ก่อน stage ให้กวาดตา `git status` หาสี่อย่างนี้: ไฟล์ `.env` หรืออะไรก็ตามที่มี key/token/รหัสผ่าน, ไฟล์ข้อมูลผู้ป่วยจริงที่เผลอวางไว้ในโปรเจกต์, ผลลัพธ์ของการ build เช่น `.next/` หรือ `storybook-static/` และไฟล์ทดลองที่ Agent สร้างทิ้งไว้ เช่น `test.js` หรือ `temp-notes.md` — สามอย่างแรกลบออกจาก commit ให้หมด ส่วนอย่างสุดท้ายให้ถาม Agent ก่อนว่ายังจำเป็นหรือไม่ ถ้าไฟล์พวกนี้ถูก push ขึ้นไปแล้ว การลบทีหลังไม่ได้ลบออกจากประวัติ และถ้าเป็นไฟล์ประเภทที่ไม่ควรเข้ามาตั้งแต่แรก ให้เพิ่มลงใน `.gitignore` (บทที่ 03) แทนการคอยระวังเองทุกรอบ',en:'Before staging, scan `git status` for four things: a `.env` or anything holding a key, token, or password; real patient data accidentally dropped into the project; build output such as `.next/` or `storybook-static/`; and scratch files the agent left behind like `test.js` or `temp-notes.md`. Remove the first three from the commit entirely and ask the agent whether the last is still needed. Once such a file is pushed, deleting it later does not remove it from history. For a kind of file that should never arrive at all, add it to `.gitignore` (lesson 03) instead of watching for it every round.'}},
        {type:'prompt',title:{th:'Diff Review Prompt — ให้ Agent อธิบายงานตัวเอง',en:'Diff Review Prompt — make the agent explain its own work'},
          when:{th:'ใช้หลังดู `--stat` แล้วพบไฟล์ที่ไม่คาดคิด หรือใช้เป็นขั้นตอนมาตรฐานก่อน commit ทุกครั้ง ข้อดีคือคุณได้คำอธิบายเป็นภาษาคน ที่เอาไปใช้เขียน MR ต่อได้เลย',en:'Use it after `--stat` reveals unexpected files, or as a standard pre-commit step. The bonus: you get a plain-language explanation you can reuse in the MR.'},
          prompt:{th:`ตรวจสอบ git diff ปัจจุบัน ห้ามแก้ไขไฟล์ใด ๆ

รายงานตามหัวข้อนี้
1. สรุปการเปลี่ยนแปลงทั้งหมดเป็นภาษาธุรกิจ ไม่ใช่ศัพท์เทคนิค
2. ไล่ทีละไฟล์ว่าแต่ละไฟล์เปลี่ยนอะไร และจำเป็นต่อ US-001 อย่างไร
3. มีไฟล์ไหนที่เปลี่ยนโดยไม่เกี่ยวกับ US-001 หรือเปลี่ยนโดยไม่ตั้งใจหรือไม่
4. มีการเพิ่ม dependency ใหม่ หรือแก้ไฟล์ตั้งค่าส่วนกลางหรือไม่
5. มีการเปลี่ยนแปลงใดที่เสี่ยงกระทบส่วนอื่นของระบบ
6. สิ่งที่คุณทดสอบไปแล้วมีอะไรบ้าง และผลเป็นอย่างไร

ถ้ามีไฟล์ที่อธิบายความจำเป็นไม่ได้ ให้บอกตรง ๆ`,en:`Review the current git diff. Do not modify any files.

Report on:
1. Summarize all changes in business language, not technical jargon
2. Go file by file: what changed, and why US-001 needs it
3. Are any files changed that are unrelated to US-001, or changed by accident?
4. Were any dependencies added or shared config files modified?
5. Are any changes risky for other parts of the system?
6. What did you already test, and what were the results?

If you cannot justify a file, say so plainly.`},
          after:{th:['เทียบคำตอบข้อ 2 กับผลของ `git diff --stat` ว่าจำนวนไฟล์ตรงกันหรือไม่','ถ้ามันตอบข้อ 3 ว่า “ไม่มี” ทั้งที่คุณเห็นไฟล์แปลก ๆ ให้ถามเจาะจงไฟล์นั้นโดยตรง','เก็บคำตอบข้อ 1 ไว้ใช้เขียน Merge Request ในบทถัดไป'],en:['Compare answer 2 against `git diff --stat` and check the file counts agree','If it answers “none” to point 3 while you can see an odd file, ask about that file by name','Keep answer 1 — you will reuse it when writing the Merge Request']}},
        {type:'commands',title:{th:'Quality gate 3 ชั้น',en:'The three quality gates'},
          lead:{th:'รันทีละคำสั่งและอ่านผลให้จบก่อนไปตัวถัดไป ถ้าตัวแรกไม่ผ่าน มักไม่มีประโยชน์ที่จะรันตัวถัดไป',en:'Run one at a time and read each result fully before the next. If the first fails, running the next is usually pointless.'},
          steps:[
            {title:{th:'ตรวจความสม่ำเสมอของโค้ด',en:'Check code consistency'},what:{th:'`lint` ตรวจว่าโค้ดเขียนตามมาตรฐานที่ทีมตั้งไว้หรือไม่ เช่น มีตัวแปรที่ประกาศแล้วไม่ได้ใช้ ซึ่งมักเป็นร่องรอยของโค้ดที่ Agent เขียนทิ้งไว้ตอนลองผิดลองถูก',en:'`lint` checks the code against the team’s standards — for example variables declared and never used, which is often a trace of the agent’s trial and error.'},cmd:`npm run lint`,expect:{th:'ไม่มี error ส่วน warning พออนุโลมได้ แต่ควรถามว่าคืออะไร',en:'No errors. Warnings are tolerable but worth asking about.'}},
            {title:{th:'รันชุดทดสอบอัตโนมัติ',en:'Run the automated tests'},what:{th:'`test` รัน test ทั้งหมดรวมถึง interaction test ที่เราให้ Agent สร้างในบทที่ 09 นี่คือจุดที่จะจับได้ว่าการแก้ครั้งล่าสุดไปทำให้ของเดิมพังหรือไม่',en:'`test` runs everything, including the interaction tests the agent wrote in lesson 09. This is where you catch the latest change breaking something that used to work.'},cmd:`npm run test`,expect:{th:'ทุก test ผ่าน ถ้ามี test ที่ fail ห้ามให้ Agent ลบ test ทิ้งเพื่อให้ผ่าน',en:'All tests pass. If one fails, never let the agent delete the test to make it pass.'}},
            {title:{th:'ตรวจว่าระบบ build ขึ้นจริง',en:'Confirm the system actually builds'},what:{th:'`build` จำลองการเตรียมโค้ดเพื่อนำขึ้นใช้งานจริง มันจับ error บางประเภทที่ไม่ปรากฏตอนรัน dev เช่น type ไม่ตรงกัน คำสั่งนี้ช้าที่สุด จึงรันเป็นตัวสุดท้าย',en:'`build` simulates preparing the code for real use. It catches errors that never appear in dev mode, such as type mismatches. It is the slowest, so it runs last.'},cmd:`npm run build`,expect:{th:'จบด้วยสถานะสำเร็จ ไม่มี error',en:'It finishes successfully with no errors.'}}
          ],
          outro:{th:'จำไว้ว่าทั้งสามคำสั่งนี้ตรวจได้แค่ว่า “โค้ดทำงานได้” ไม่ได้ตรวจว่า “ทำในสิ่งที่ธุรกิจต้องการ” ข้อหลังยังต้องใช้คนเปิดดู Storybook และเดิน flow เองอยู่ดี',en:'Remember: these three only check that the code works, not that it does what the business asked. That still requires a human opening Storybook and walking the flow.'}},
        {type:'practice',title:{th:'ลงมือทำ: Scope audit',en:'Practice: scope audit'},steps:{th:['ก่อนเปิด diff ให้เขียนลงกระดาษว่าคาดว่าจะเปลี่ยนกี่ไฟล์ และไฟล์อะไร','รัน `git status` และ `git diff main...HEAD --stat` แล้วเทียบกับที่เดาไว้','รัน `git log --oneline main..HEAD` แล้วอ่านออกเสียงว่า branch นี้ทำอะไรมาบ้าง','เปิด diff ของไฟล์ที่ไม่ได้คาดคิด','กวาดตาหาไฟล์ที่ห้าม commit ตาม callout ด้านบน','ส่ง Diff Review Prompt ให้ Agent','รัน lint → test → build ทีละตัว แล้วบันทึกผล'],en:['Before opening the diff, write down how many files and which files you expect','Run `git status` and `git diff main...HEAD --stat`, then compare with your prediction','Run `git log --oneline main..HEAD` and say out loud what this branch did','Open the diff for any file you did not expect','Scan for the files in the callout above that must never be committed','Send the Diff Review Prompt','Run lint → test → build one at a time and record the results']},expected:{th:'สามารถอธิบาย changed-file set ได้ ไม่มีไฟล์นอก scope ที่อธิบายไม่ได้ และ quality checks ผ่าน',en:'You can explain the changed-file set, no unexplained out-of-scope files remain, and quality checks pass.'}}
      ],
      quiz:{q:{th:'“npm run build ผ่าน” แปลว่างานเสร็จหรือไม่?',en:'Does “npm run build passes” mean the work is complete?'},options:{th:['เสร็จแน่นอน','ไม่เสมอ ต้องตรวจ requirement, UI states, interaction และ diff ด้วย','เสร็จถ้า AI บอกว่าเสร็จ'],en:['Definitely','Not necessarily; requirements, UI states, interaction, and diff still need review','Yes if the AI says so']},answer:1,why:{th:'Build ตรวจความสามารถในการ build ไม่ได้ยืนยันว่าพฤติกรรมและ scope ถูกต้อง',en:'A build checks buildability, not product behavior or scope correctness.'}},
      wrap:{th:['Diff เป็นเครื่องมือตรวจ AI ที่สำคัญที่สุดตัวหนึ่ง','Quality gate หลายชั้นดีกว่า “AI said done”','Scope ต้องอธิบายได้ทุกไฟล์'],en:['Diff is one of the most important AI-review tools','Layered quality gates beat “AI said done”','Every changed file should be explainable']}
    },
    {
      id:'delivery', group:'day3', no:'14', duration:'45 min',
      title:{th:'Commit, Push & Merge Request',en:'Commit, Push & Merge Request'},
      intro:{th:'ส่งงานให้ Developer review ด้วย MR ที่บอก intent, scope, states และ evidence ชัดเจน',en:'Deliver work for developer review with an MR that clearly communicates intent, scope, states, and evidence.'},
      outcomes:{th:['ปิดงานที่เหลือและ sync กับ main ก่อนส่ง','push feature branch โดยไม่แตะ main','เขียน MR ที่ review ง่าย และผูกกลับไปที่ Issue','รับ feedback จาก review แก้ แล้วส่งซ้ำจนถึง merge','เก็บกวาด branch และ worktree หลังงานจบ'],en:['Finish leftover work and sync with main before delivery','Push a feature branch without touching main','Write an easy-to-review MR that closes its issue','Take review feedback, fix, and re-deliver through to merge','Clean up the branch and worktree once the work is done']},
      blocks:[
        {type:'prose',title:{th:'Merge Request คือการสื่อสาร ไม่ใช่พิธีกรรม',en:'A Merge Request is communication, not ceremony'},body:{th:[
          'หลายคนมอง MR เป็นขั้นตอนทางเทคนิคที่ต้องทำให้จบ ๆ ไป แต่ถ้ามองจากฝั่งคนที่ต้อง review งานของคุณ MR คือ **เอกสารชิ้นเดียวที่เขาจะใช้ตัดสินใจ** ว่างานนี้ปลอดภัยพอที่จะรวมเข้าระบบหลักหรือยัง',
          'Developer ที่มา review มักไม่ได้อยู่ในห้องตอนคุณคุยกับ Agent เขาไม่รู้ว่าคุณเจอปัญหาอะไรมา ทดสอบอะไรไปแล้วบ้าง และทำไมไฟล์นี้ถึงต้องเปลี่ยน ถ้า MR ไม่บอก เขาจะต้องเดาหรือถามกลับ ซึ่งทั้งสองอย่างทำให้งานช้า',
          'MR ที่ดีสำหรับงานที่ AI ช่วยเขียนต้องตอบ 4 คำถามเสมอ คือ **ทำอะไร** (intent), **ครอบคลุมแค่ไหน** (scope), **สถานะอะไรบ้างที่รองรับ** (states) และ **ตรวจแล้วอย่างไร** (evidence) ข้อสุดท้ายสำคัญเป็นพิเศษ เพราะเป็นสิ่งที่บอกว่าคุณไม่ได้แค่เชื่อ AI',
          'สังเกตว่าเราไม่ได้เขียนว่า “AI เขียนโค้ดให้กี่บรรทัด” เพราะไม่มีใครสนใจ สิ่งที่คนสนใจคือคุณเข้าใจงานที่ส่งมาแค่ไหน'
        ],en:[
          'Many people treat the MR as a technical step to get through. From the perspective of whoever reviews your work, it is **the single document they use to decide** whether this is safe to fold into the main system.',
          'The reviewing developer was not in the room while you talked to the agent. They do not know what went wrong, what you tested, or why a particular file had to change. If the MR does not say, they must guess or ask — both of which slow things down.',
          'A good MR for AI-assisted work always answers four questions: **what** (intent), **how far it reaches** (scope), **which states are covered** (states), and **how it was checked** (evidence). The last one matters most, because it shows you did not simply trust the AI.',
          'Notice we never write “the AI generated N lines”. Nobody cares. What people care about is how well you understand what you are handing over.'
        ]}},
        {type:'diagram',title:{th:'งานของคุณเดินทางไปถึง main อย่างไร',en:'How your work travels to main'},
          lead:{th:'สังเกตว่าไม่มีลูกศรไหนวิ่งจากเครื่องคุณเข้า main โดยตรง ทุกเส้นทางต้องผ่าน Merge Request ที่มีคนตรวจ',en:'Notice that no arrow runs from your machine straight into main. Every path goes through a reviewed Merge Request.'},
          diagram:`flowchart LR\nW[Working files\\nในเครื่องคุณ] -->|git add| ST[Staged\\nเลือกแล้วว่าจะบันทึก]\nST -->|git commit| L[Local commit\\nบันทึกพร้อมเหตุผล]\nL -->|git push| R[Remote feature branch\\nบน GitHub / GitLab]\nR --> MR[Merge Request\\nWhat · Scope · States · Evidence]\nMR --> D{Developer review}\nD -->|ขอแก้ / changes requested| W\nD -->|approve| M[main]`,
          notes:{th:['`git add` คือการเลือก ไม่ใช่การบันทึก — ยังยกเลิกได้','`git commit` บันทึกลงเครื่องคุณเท่านั้น คนอื่นยังไม่เห็น','`git push` คือจุดที่งานของคุณเริ่มเป็นสาธารณะในทีม','Merge Request คือเอกสารที่ Developer ใช้ตัดสินใจ ไม่ใช่ขั้นตอนทางเทคนิค','เส้น “ขอแก้” วิ่งกลับมาที่จุดเริ่ม เป็นเรื่องปกติ ไม่ใช่ความล้มเหลว'],en:['`git add` selects, it does not save — you can still back out','`git commit` records only on your machine; nobody else sees it yet','`git push` is where your work becomes visible to the team','The Merge Request is the document a developer decides from, not a technical formality','The “changes requested” arrow loops back to the start; that is normal, not failure']}},
        {type:'commands',title:{th:'ส่งงานทีละขั้น',en:'Deliver the work, step by step'},
          lead:{th:'ทำตามลำดับนี้เท่านั้น และทำหลังจากผ่าน quality gate ในบทที่แล้วแล้วเท่านั้น อย่ารวบขั้นตอน',en:'Follow this order only, and only after the quality gates from the previous lesson have passed. Do not compress the steps.'},
          steps:[
            {title:{th:'ยืนยันว่าอยู่ถูก branch',en:'Confirm you are on the right branch'},what:{th:'ขั้นนี้ป้องกันอุบัติเหตุที่แก้ยากที่สุด คือ commit ลง main โดยไม่ตั้งใจ ถ้าบรรทัดแรกขึ้นว่า `On branch main` ให้หยุดทันทีและย้ายไป feature branch ก่อน',en:'This prevents the hardest accident to undo: committing to main. If the first line says `On branch main`, stop and move to your feature branch first.'},cmd:`git status`,expect:{th:'`On branch feature/us001-patient-checkin` พร้อมรายการไฟล์ที่จะ commit',en:'`On branch feature/us001-patient-checkin` with the list of files to commit.'}},
            {title:{th:'อ่าน diff ของทั้ง branch เป็นรอบสุดท้าย',en:'Read the whole branch diff one last time'},what:{th:'`main...HEAD` คือทุกอย่างที่ branch นี้เพิ่มเข้ามาเทียบกับ main ซึ่งรวม commit ทุก checkpoint ที่ทำไว้ตั้งแต่บทที่ 08 นี่คือภาพเดียวกับที่ Developer จะเห็นในหน้า Merge Request ใช้เวลาสองนาทีก็พอ แต่อย่าข้าม',en:'`main...HEAD` is everything this branch adds on top of main, including every checkpoint commit since lesson 08. It is the same picture the developer sees on the Merge Request page. Two minutes is enough, but do not skip it.'},cmd:`git diff main...HEAD`,expect:{th:'ไม่มีไฟล์ที่อธิบายความจำเป็นไม่ได้ กด `q` เพื่อออก',en:'No file you cannot justify. Press `q` to exit.'}},
            {title:{th:'เก็บงานที่ยังค้างให้จบ',en:'Close out whatever is still pending'},what:{th:'ถ้าคุณ commit ตาม checkpoint ในบทที่ 08, 09, 11 และ 12 มาครบ ตรงนี้มักจะไม่เหลืออะไรแล้ว — ถ้า `git status` สะอาด ให้ข้ามขั้นนี้ไปเลย ถ้ายังเหลือ ให้ระบุ path ของไฟล์ที่เกี่ยวข้องแทนการใช้ `git add .` เพราะจุดเดียวจะกวาดไฟล์ที่ Agent เผลอสร้างทิ้งไว้เข้ามาด้วย',en:'If you committed at the checkpoints in lessons 08, 09, 11, and 12, there is usually nothing left here — if `git status` is clean, skip this step. If something remains, name the paths instead of using `git add .`, because the dot also sweeps in whatever the agent left behind.'},cmd:`git add src/features src/app/opd/check-in\ngit status`,expect:{th:'ไฟล์ที่ต้องการอยู่ใต้ `Changes to be committed` และไม่มีไฟล์แปลกปลอมปนมา',en:'The intended files sit under `Changes to be committed`, with nothing foreign among them.'}},
            {title:{th:'บันทึกเศษที่เหลือพร้อมเหตุผล',en:'Commit the remainder with a reason'},what:{th:'ใช้โครงเดิมจากบทที่ 03 คือ `type(scope): subject` แล้วปิดท้ายด้วยเลข Issue ของคุณ commit นี้มักเป็นงานเก็บตก จึงใช้ `chore` หรือ `docs` มากกว่า `feat` เพราะฟีเจอร์จริงถูกบันทึกไปแล้วตาม checkpoint',en:'Use the shape from lesson 03 — `type(scope): subject` — and end with your issue number. This commit is usually tidy-up work, so `chore` or `docs` fits better than `feat`: the real features were recorded at the checkpoints.'},cmd:`git commit -m "chore(us001): tidy up remaining check-in files" -m "Refs #12"`,expect:{th:'สรุปจำนวนไฟล์และบรรทัดที่ถูกบันทึก และ `git status` กลับมาสะอาด',en:'A summary of files and lines recorded, and a clean `git status`.'}},
            {title:{th:'ดึงงานล่าสุดของ main มารวมก่อนส่ง',en:'Bring main up to date before delivering'},what:{th:'ระหว่างที่คุณทำงานสองวัน main อาจขยับไปแล้วจากงานของคนอื่น `git fetch` ดึงข้อมูลล่าสุดลงมาโดยยังไม่แตะไฟล์ของคุณ ส่วน `git merge origin/main` คือการเอางานของทีมมารวมกับของคุณ ทำตรงนี้ดีกว่าไปเจอปัญหาในหน้า MR เพราะคุณยังมีเครื่องมือและ Agent อยู่ตรงหน้า',en:'While you worked for two days, main may have moved. `git fetch` downloads the latest without touching your files; `git merge origin/main` folds the team’s work into yours. Doing it here beats discovering a problem on the MR page, because your tools and your agent are still right in front of you.'},cmd:`git fetch origin\ngit merge origin/main`,expect:{th:'`Already up to date.` หรือข้อความ merge สำเร็จ ถ้าขึ้นคำว่า CONFLICT ให้อ่าน callout ถัดไป',en:'`Already up to date.` or a successful merge message. If you see CONFLICT, read the callout below.'}},
            {title:{th:'ส่งขึ้น server',en:'Push to the server'},what:{th:'`push` ส่ง commit ในเครื่องขึ้นไปบน remote ส่วน `-u origin` เป็นการผูก branch ในเครื่องเข้ากับ branch บน server ใช้ครั้งแรกครั้งเดียว ครั้งต่อไปพิมพ์แค่ `git push` ก็พอ',en:'`push` sends your local commits to the remote. `-u origin` links your local branch to the server branch; you need it only the first time, after which plain `git push` is enough.'},cmd:`git push -u origin feature/us001-patient-checkin`,expect:{th:'ข้อความสำเร็จ พร้อมลิงก์สำหรับสร้าง Merge Request',en:'A success message with a link to create the Merge Request.'}}
          ],
          outro:{th:'สังเกตว่าไม่มีขั้นตอนไหนแตะ main เลย การรวมเข้า main จะเกิดขึ้นผ่าน Merge Request ที่มีคน review เท่านั้น',en:'Notice no step touches main. Merging into main happens only through a reviewed Merge Request.'}},
        {type:'callout',tone:'warning',title:{th:'ถ้าเจอคำว่า CONFLICT',en:'If you hit the word CONFLICT'},text:{th:'Conflict ไม่ใช่ความผิดพลาดของใคร มันแค่แปลว่าคุณกับเพื่อนแก้บรรทัดเดียวกัน Git จึงไม่กล้าเลือกให้เอง สิ่งที่ต้องทำคืออย่าเพิ่งตกใจและอย่ากด force อะไรทั้งนั้น ให้รัน `git status` ดูว่าไฟล์ไหนชนกัน แล้วสั่ง Agent ว่า “อธิบายว่าสองฝั่งนี้ต่างกันอย่างไรในเชิงพฤติกรรม ห้ามแก้ไฟล์” จากนั้น **คุณ** เป็นคนตัดสินว่าจะเก็บแบบไหน เพราะเป็นการตัดสินใจเชิงธุรกิจ ไม่ใช่เชิงเทคนิค ถ้าไม่มั่นใจจริง ๆ ให้ `git merge --abort` เพื่อกลับไปจุดก่อนหน้า แล้วขอ Developer ช่วยดู',en:'A conflict is nobody’s mistake — it only means you and a teammate edited the same lines, so Git refuses to choose. Do not panic and do not force anything. Run `git status` to see which files collide, then tell the agent: “explain how these two sides differ in behaviour; do not modify files.” Then **you** decide which to keep, because it is a business decision, not a technical one. If you are genuinely unsure, `git merge --abort` returns you to where you were, and you can ask a developer to look with you.'}},
        {type:'prompt',title:{th:'Prompt: ให้ Agent ร่างเนื้อหา MR จาก diff จริง',en:'Prompt: have the agent draft the MR from the real diff'},
          when:{th:'ใช้หลัง commit และ push แล้ว เพื่อร่างคำอธิบาย MR จากสิ่งที่เปลี่ยนจริง ไม่ใช่จากความจำ แต่คุณต้องเป็นคนตรวจและแก้ก่อนโพสต์เสมอ เพราะคุณคือคนที่รับผิดชอบเนื้อหานี้',en:'Use it after committing and pushing, to draft the MR description from what actually changed rather than from memory. You must review and edit it before posting — the content is your responsibility.'},
          prompt:{th:`ช่วยร่างคำอธิบาย Merge Request จาก commit ของ branch นี้ ห้ามแก้ไขไฟล์และห้ามสร้าง MR เอง

ใช้โครงสร้างนี้
## What
อธิบายสั้น ๆ ว่างานนี้ทำอะไร ในภาษาที่คนไม่ได้อยู่ในทีมก็เข้าใจ

## Requirement
อ้างอิง US-001 และ acceptance criteria ที่เกี่ยวข้อง

## Implemented
รายการสิ่งที่ทำจริง อ้างอิงจาก diff ไม่ใช่จากการคาดเดา

## UI States
ระบุสถานะที่รองรับ เช่น Loading, Empty, Error, Validation, Success

## Verification
สิ่งที่ตรวจไปแล้ว และวิธีที่ reviewer จะตรวจซ้ำได้

## Out of scope
สิ่งที่จงใจไม่ทำในรอบนี้

## Data
ระบุว่าใช้ข้อมูลสมมติเท่านั้น ไม่มีข้อมูลผู้ป่วยจริง

เขียนให้สั้น กระชับ และห้ามใส่สิ่งที่ยังไม่ได้ทำจริง`,en:`Draft a Merge Request description from this branch’s commits. Do not modify files and do not create the MR yourself.

Use this structure:
## What
A short description anyone outside the team can understand

## Requirement
Reference US-001 and the relevant acceptance criteria

## Implemented
What was actually done, based on the diff rather than assumption

## UI States
Which states are covered: Loading, Empty, Error, Validation, Success

## Verification
What has been checked, and how a reviewer can repeat it

## Out of scope
What was deliberately left out this round

## Data
State that only synthetic data is used and no real patient data

Keep it short and never include anything that was not actually done.`},
          after:{th:['อ่านทุกบรรทัดแล้วลบสิ่งที่คุณยังไม่ได้ทดสอบจริงออก — การอ้างว่าตรวจแล้วทั้งที่ยังไม่ได้ตรวจ ทำลายความน่าเชื่อถือเร็วที่สุด','เติมสิ่งที่ Agent ไม่รู้ด้วยตัวเอง เช่น ผลการเดิน flow ด้วยมือ และประเด็นที่ยังค้างอยู่','ถ้ามี screenshot จาก Storybook ให้แนบไปด้วย ช่วย reviewer ได้มาก'],en:['Read every line and delete anything you did not actually test — claiming verification you did not do destroys trust fastest','Add what the agent cannot know: your manual walkthrough results and any open questions','Attach Storybook screenshots if you have them; they help reviewers a lot']}},
        {type:'code',title:{th:'MR Template ที่ใช้ได้ทันที',en:'A ready-to-use MR template'},
          lead:{th:'ถ้าไม่อยากใช้ Agent ร่างให้ ใช้แม่แบบนี้เขียนเองก็ได้ เติมเฉพาะสิ่งที่ทำจริง',en:'If you would rather not have the agent draft it, fill this in yourself — with only what you actually did.'},
          label:'MR template',code:`## What\nImplement OPD Patient Check-in (US-001).\n\nCloses #12\n\n## Implemented\n- Patient search and selection\n- Loading / Empty / Error states\n- Clinic validation\n- Preview / Confirm / Success\n\n## Verification\n- Storybook reviewed (5 states)\n- Interaction test passes\n- Manual flow walkthrough: happy path, validation, empty, error\n- npm run lint\n- npm run test\n- npm run build\n- git diff reviewed\n\n## Out of scope\n- Real backend integration\n- Authentication\n\n## Data\nSynthetic/mock data only. No production data.`,
          note:{th:'หัวข้อ Out of scope มักถูกลืม แต่มีค่ามาก เพราะช่วยกัน reviewer เข้าใจผิดว่าคุณลืมทำ ทั้งที่จงใจไม่ทำ',en:'The “Out of scope” section is often forgotten but very valuable: it stops reviewers assuming you forgot something you left out on purpose.'}},
        {type:'commands',title:{th:'หลังเปิด MR แล้ว งานยังไม่จบ',en:'Opening the MR is not the end'},
          lead:{th:'ส่วนนี้คือสิ่งที่หายไปจากคอร์สส่วนใหญ่ แต่เป็นสิ่งที่กินเวลาจริงในงานประจำ คือรอบของการรับ feedback แก้ แล้วส่งใหม่ จนกว่าจะถูก merge',en:'This part is missing from most courses, yet it is where real working time goes: the loop of feedback, fixes, and re-delivery until the work is merged.'},
          steps:[
            {title:{th:'อ่าน comment ของ reviewer แล้วตอบทีละข้อ',en:'Read each reviewer comment and answer it'},what:{th:'อย่าเพิ่งรีบแก้ ให้แยกก่อนว่า comment ไหนคือ “ขอข้อมูลเพิ่ม” ซึ่งตอบด้วยคำอธิบายได้เลย และ comment ไหนคือ “ขอให้แก้” ซึ่งต้องเปลี่ยนโค้ด การตอบทุกข้อสำคัญ เพราะ reviewer จะรู้ว่าคุณไม่ได้ข้ามข้อไหนไป',en:'Do not rush to edit. First split the comments into “needs an explanation”, which you answer in words, and “needs a change”, which needs code. Answer every one, so the reviewer knows nothing was skipped.'},expect:{th:'ทุก comment มีคำตอบ และคุณรู้ว่าเหลือกี่ข้อที่ต้องแก้จริง',en:'Every comment has a reply, and you know how many actually require changes.'}},
            {title:{th:'แก้บน branch เดิม ไม่ใช่ branch ใหม่',en:'Fix on the same branch, not a new one'},what:{th:'กลับเข้า worktree เดิมแล้วแก้บน branch เดิม ทุก commit ใหม่ที่ push ขึ้นไปจะไปโผล่ใน MR เดิมโดยอัตโนมัติ ไม่ต้องเปิด MR ใหม่ ถ้าให้ Agent ช่วยแก้ ให้ระบุ comment ของ reviewer เป็นข้อ ๆ และย้ำว่าห้ามแตะเรื่องอื่น',en:'Return to the same worktree and fix on the same branch. Every new commit you push lands in the existing MR automatically — no second MR needed. If the agent helps, quote the reviewer comments as a list and insist it touches nothing else.'},cmd:`git status\ngit add src/features\ngit commit -m "fix(us001): address review on empty-state wording" -m "Refs #12"`,expect:{th:'commit ใหม่หนึ่งอันที่บอกได้ว่าแก้ตาม review ข้อไหน',en:'One new commit that names which review point it addresses.'}},
            {title:{th:'ส่งขึ้นไปอีกครั้ง',en:'Push again'},what:{th:'ครั้งนี้ไม่ต้องใส่ `-u` แล้ว เพราะ branch ผูกกับ remote ไว้ตั้งแต่ push ครั้งแรก พิมพ์ `git push` เปล่า ๆ ก็พอ',en:'No `-u` this time — the branch was linked to the remote on the first push. Plain `git push` is enough.'},cmd:`git push`,expect:{th:'หน้า MR อัปเดตเอง และแสดง commit ใหม่ที่เพิ่งส่งไป',en:'The MR page updates itself and shows the commit you just sent.'}},
            {title:{th:'ให้ reviewer กด merge แล้วเปลี่ยน Draft เป็นพร้อม review',en:'Mark it ready, and let the reviewer merge'},what:{th:'เมื่อแก้ครบแล้วให้กดเปลี่ยนจาก Draft เป็นพร้อม review และ **ไม่ต้องกด merge เอง** การ merge เข้า main เป็นสิทธิ์ของผู้ review ตามกติกาที่เราตั้งไว้ตั้งแต่บทที่ 01 ว่าไม่มีใครเดินเข้า main ตรง ๆ',en:'Once the fixes are in, switch it from Draft to ready for review and **do not press merge yourself**. Merging into main belongs to the reviewer, following the rule from lesson 01 that nobody walks into main directly.'},expect:{th:'MR ถูก merge โดยผู้ review และ Issue #12 ถูกปิดอัตโนมัติจากบรรทัด `Closes #12`',en:'The reviewer merges the MR, and issue #12 closes automatically thanks to the `Closes #12` line.'}},
            {title:{th:'เก็บกวาดพื้นที่ทำงาน',en:'Clean up your workspace'},what:{th:'หลัง merge แล้วเท่านั้นจึงเก็บกวาด กลับไปที่ repo หลัก ดึง main ที่มีงานของคุณรวมอยู่แล้วลงมา จากนั้นลบ worktree และ branch ที่ไม่ใช้แล้ว (คำสั่ง worktree อธิบายไว้ในบทที่ 04) ถ้า `git branch -d` เตือนว่ายังไม่ merge แปลว่า MR ยังไม่ถูก merge จริง อย่าเปลี่ยนไปใช้ `-D` เพื่อบังคับลบ',en:'Only after the merge. Go back to the main repo, pull the main that now contains your work, then remove the worktree and the branch you no longer need (the worktree command is explained in lesson 04). If `git branch -d` warns that the branch is unmerged, the MR was not actually merged — do not switch to `-D` to force it.'},cmd:`cd ../his-ai-opd-checkin-starter\ngit switch main\ngit pull\ngit worktree remove ../wt-us001-patient-checkin\ngit branch -d feature/us001-patient-checkin`,expect:{th:'`git worktree list` เหลือรายการเดียว และ `git log --oneline -5` บน main แสดงงานของคุณอยู่ในนั้น',en:'`git worktree list` shows one entry again, and `git log --oneline -5` on main includes your work.'}}
          ],
          outro:{th:'จบรอบแล้ว รอบถัดไปเริ่มจาก Issue ใบใหม่ ไม่ใช่ branch เดิม — วงจรนี้คือสิ่งที่คุณจะทำซ้ำในงานจริงทุกสัปดาห์',en:'That closes the loop. The next round starts from a new issue, not the old branch — and this is the cycle you repeat every week in real work.'}},
        {type:'callout',title:{th:'ใช้กับ GitLab self-hosted ได้เหมือนกัน',en:'The same workflow works with self-hosted GitLab'},text:{th:'ถ้าคุณเลือกแท็บ GitLab ตั้งแต่บทที่ 00 ก็อยู่บน GitLab อยู่แล้ว ไม่ต้องทำอะไรเพิ่ม ส่วนคนที่ fork บน GitHub ไว้ ถ้าวันหนึ่งต้องย้ายงานเข้า GitLab ของบริษัท ให้เปลี่ยนปลายทางของ `origin` ตามสามคำสั่งด้านล่าง คำว่า Merge Request ของ GitLab กับ Pull Request ของ GitHub คือสิ่งเดียวกัน',en:'If you picked the GitLab tab back in lesson 00 you are already there — nothing to do. If you forked on GitHub and later need the work on a company GitLab, repoint `origin` with the three commands below. GitLab’s Merge Request and GitHub’s Pull Request are the same thing.'}},
        {type:'commands',title:{th:'ย้ายไปใช้ GitLab ของบริษัท',en:'Point the work at your company GitLab'},
          lead:{th:'ทำเมื่อต้องการฝึกด้วย workflow จริงของทีม ขั้นตอนนี้ไม่กระทบประวัติการทำงาน เปลี่ยนแค่ปลายทางที่จะส่งขึ้นไป',en:'Do this when you want to practise on the team’s real workflow. It does not affect your history — it only changes where work is sent.'},
          steps:[
            {title:{th:'ดูว่าตอนนี้ส่งขึ้นไปที่ไหน',en:'See where it currently points'},what:{th:'`remote -v` แสดงที่อยู่ปลายทางปัจจุบัน คำว่า `origin` คือชื่อเล่นของ server หลัก ส่วน `fetch` กับ `push` คือทิศทางดึงลงและส่งขึ้น',en:'`remote -v` shows the current destination. `origin` is the nickname for the main server; `fetch` and `push` are the download and upload directions.'},cmd:`git remote -v`,expect:{th:'เห็น URL ของ GitHub ซึ่งเป็นที่ที่ clone มาตอนแรก',en:'The GitHub URL you originally cloned from.'}},
            {title:{th:'เปลี่ยนปลายทางเป็น GitLab',en:'Switch the destination to GitLab'},what:{th:'`set-url` เปลี่ยนที่อยู่ของ `origin` ให้ชี้ไปยัง project ใน GitLab ของบริษัท ต้องสร้าง project เปล่าไว้ก่อน และเปลี่ยน URL ในตัวอย่างให้ตรงกับของจริง',en:'`set-url` repoints `origin` at your company GitLab project. Create the empty project there first, and replace the example URL with your real one.'},cmd:`git remote set-url origin git@gitlab.company.local:training/your-project.git`,expect:{th:'ไม่มีข้อความตอบกลับ ให้รัน `git remote -v` ซ้ำเพื่อยืนยันว่าเปลี่ยนแล้ว',en:'No output. Run `git remote -v` again to confirm it changed.'}},
            {title:{th:'ส่ง feature branch ขึ้น GitLab',en:'Push the feature branch to GitLab'},what:{th:'ส่งเฉพาะ feature branch ของคุณ ไม่ต้องส่ง main ขึ้นไปทับ หลัง push สำเร็จ GitLab จะให้ลิงก์สำหรับเปิด Merge Request มาในผลลัพธ์',en:'Push only your feature branch; do not push main over anything. After a successful push, GitLab returns a link for opening the Merge Request.'},cmd:`git push -u origin feature/us001-patient-checkin`,expect:{th:'สำเร็จ และได้ลิงก์สร้าง Merge Request ใน GitLab',en:'Success, plus a link to create the Merge Request in GitLab.'}}
          ]},
        {type:'practice',title:{th:'ลงมือทำ: Draft MR',en:'Practice: draft an MR'},steps:{th:['ตรวจให้แน่ใจว่า quality gate ในบทที่ 13 ผ่านครบก่อน','เก็บงานค้างให้จบ แล้ว `git fetch` + `git merge origin/main`','push feature branch ด้วย `-u` เป็นครั้งแรก','ใช้ Prompt ร่าง MR แล้วแก้ให้ตรงกับสิ่งที่ทดสอบจริง','ใส่ `Closes #<เลข Issue ของคุณ>` ใน MR','สร้าง Draft MR แล้วให้เพื่อนอ่านและตอบว่าเข้าใจ scope หรือไม่','รับ comment อย่างน้อย 1 ข้อจากเพื่อน แล้วแก้ commit push ซ้ำให้ครบรอบ'],en:['Make sure the lesson 13 quality gates pass first','Finish any leftover work, then `git fetch` + `git merge origin/main`','Push the feature branch with `-u` for the first time','Use the MR draft prompt and edit it to match what you actually tested','Add `Closes #<your issue number>` to the MR','Open a Draft MR and ask a peer whether the scope is clear','Take at least one comment from that peer and complete a fix → commit → push round']},expected:{th:'มี Draft MR ที่ Developer สามารถเริ่ม review ได้โดยไม่ต้องถามว่า “ทำอะไรมา?”',en:'A Draft MR that a developer can start reviewing without first asking “What did you change?”'}}
      ],
      quiz:{q:{th:'MR ที่ดีควรเน้นอะไร?',en:'What should a good MR emphasize?'},options:{th:['จำนวนบรรทัดที่ AI เขียน','Intent + scope + verification evidence','ชื่อ model ที่ใช้'],en:['Lines of code produced by AI','Intent + scope + verification evidence','The model name used']},answer:1,why:{th:'Reviewer ต้องเข้าใจว่าทำไมเปลี่ยน, เปลี่ยนอะไร และตรวจแล้วอย่างไร',en:'Reviewers need to know why it changed, what changed, and how it was verified.'}},
      wrap:{th:['Feature branch → sync main → MR → review → merge → cleanup','MR คือ handoff artifact ที่ผูกกลับไปหา Issue ด้วย `Closes`','รอบแก้ตาม review คืองานปกติ ไม่ใช่ความล้มเหลว','merge เข้า main เป็นสิทธิ์ของผู้ review เสมอ'],en:['Feature branch → sync main → MR → review → merge → cleanup','The MR is the handoff artifact, tied back to the issue with `Closes`','A review-fix round is normal work, not failure','Merging into main is always the reviewer’s call']}
    },
    {
      id:'agent-skills', group:'day3', no:'15', duration:'45 min',
      title:{th:'ทำให้ทำซ้ำได้: Skill สำหรับสร้าง Issue และ MR',en:'Make It Repeatable: Skills for Issues and MRs'},
      intro:{th:'คุณเขียน Issue เองมาแล้วหนึ่งใบ และร่าง MR เองมาแล้วหนึ่งใบ รอบนี้เราจะเก็บสองอย่างนั้นเป็น template ของทีม แล้วห่อเป็น skill ให้ Agent ทำซ้ำได้ในมาตรฐานเดียวกันทุกครั้ง',en:'You have written one issue by hand and drafted one MR by hand. Now we turn both into team templates and wrap them in skills, so the agent repeats them to the same standard every time.'},
      outcomes:{th:['บอกได้ว่างานแบบไหนควรทำเป็น skill และแบบไหนไม่ควร','เก็บ template และ skill ของทีมไว้ในโปรเจกต์ที่ `.agents/skills` ให้ทุกเครื่องมืออ่านได้','สร้าง skill สำหรับสร้าง Issue และร่าง MR ตาม template และลิงก์เข้ากับเครื่องมือที่ใช้','ตั้งเส้นความปลอดภัย: Agent ร่างและเสนอคำสั่ง คนเป็นผู้อนุมัติ'],en:['Tell which work belongs in a skill and which does not','Keep the team templates and skills in the project under `.agents/skills`, readable by every tool','Build skills for filing issues and drafting MRs, and link them into the tool you use','Set the safety line: the agent drafts and proposes, a human approves']},
      blocks:[
        {type:'prose',title:{th:'ทำเองก่อน แล้วค่อยทำให้เป็นระบบ',en:'By hand first, automated second'},body:{th:[
          'ลำดับของสองวันที่ผ่านมาไม่ใช่เรื่องบังเอิญ เราให้คุณ **เขียน Issue เองในบทที่ 02** และ **ตรวจกับแก้ร่าง MR เองในบทที่ 14** ก่อน เพราะถ้าคุณไม่เคยเขียนเอง คุณจะไม่มีเกณฑ์ในหัวไว้ตรวจของที่ Agent ร่างมา และจะลงเอยด้วยการกด approve ทุกอย่างที่มันเสนอ',
          'ตอนนี้คุณมีเกณฑ์นั้นแล้ว จึงถึงเวลาที่ควรเลิกพิมพ์โครงเดิมซ้ำทุกครั้ง หลักที่ใช้ตัดสินง่าย ๆ คือ **งานที่ทำซ้ำ มีรูปแบบตายตัว และตรวจผลได้ง่าย** ควรทำเป็น skill ส่วน **งานที่เป็นการตัดสินใจ** ไม่ควร',
          'ยกตัวอย่างให้ชัด การจัดรูปแบบ Issue ให้ครบทุกหัวข้อคือรูปแบบตายตัว ทำเป็น skill ได้ แต่การตัดสินว่า “Chief Complaint ควรบังคับกรอกหรือไม่” คือการตัดสินใจทางธุรกิจ ซึ่งไม่ควรอยู่ใน skill และไม่ควรอยู่กับ Agent',
          'สิ่งที่เราจะสร้างในบทนี้จึงเป็น skill ที่ทำงานสองอย่างเท่านั้น คือ **กรอกแบบฟอร์มให้ครบ** และ **เสนอคำสั่งที่จะยิงออกไป** ส่วนการกดยิงยังเป็นของคุณ'
        ],en:[
          'The order of the last two days was deliberate. You **wrote the issue by hand in lesson 02** and **reviewed and edited the MR draft yourself in lesson 14**, because without having written one you would have no standard in your head to judge the agent’s draft against — and would end up approving whatever it proposed.',
          'You have that standard now, so it is time to stop retyping the same skeleton. The test is simple: **work that repeats, has a fixed shape, and is easy to verify** belongs in a skill. **Work that is a decision** does not.',
          'Concretely: formatting an issue so every section is present is a fixed shape and makes a fine skill. Deciding whether chief complaint should be mandatory is a business decision — it does not belong in a skill and it does not belong to the agent.',
          'So the skills we build here do exactly two things: **fill in the form completely** and **propose the command that would send it**. Pressing send stays with you.'
        ]}},
        {type:'diagram',title:{th:'skill ทำถึงไหน และคนเข้ามาตรงไหน',en:'Where the skill stops and the human starts'},
          lead:{th:'สังเกตว่ามีประตูของคนคั่นอยู่หนึ่งบานเสมอ ก่อนที่อะไรจะออกไปนอกเครื่องของคุณ',en:'Notice the one human gate that always sits between the draft and anything leaving your machine.'},
          diagram:`flowchart LR\nT[Template in repo] --> S[Skill file]\nS --> A[Agent fills the body\\ninto a temp file]\nA --> H{Human review}\nH -->|แก้ / edit| A\nH -->|อนุมัติ / approve| C[gh or glab command]\nC --> R[Issue or MR created]\nR --> N[เลข Issue / MR number]`,
          notes:{th:['Agent ไม่ได้สร้าง Issue เอง มันเขียนเนื้อหาลงไฟล์ชั่วคราวแล้วเสนอคำสั่งให้คุณอนุมัติ','ใน Claude Desktop ที่ตั้งโหมด Manual ไว้ตั้งแต่บทที่ 00 ทุกคำสั่งจะเด้งขึ้นมาให้กดยืนยันอยู่แล้ว','ถ้าไม่ได้ติดตั้ง `gh` หรือ `glab` ก็ยังใช้ skill ได้ เพียงแต่ขั้นสุดท้ายเปลี่ยนเป็นคัดลอกเนื้อหาไปวางในหน้าเว็บเอง','ประตูของคนคือสิ่งที่ทำให้ skill นี้ปลอดภัยพอจะใช้กับ repo จริงของทีม'],en:['The agent does not create the issue; it writes the body to a temp file and proposes a command for you to approve','In Claude Desktop with the Manual mode you set in lesson 00, every command already stops for your confirmation','Without `gh` or `glab` the skill still works — the last step becomes copying the body into the web form yourself','That human gate is what makes this safe enough to point at a real team repository']}},
        {type:'commands',title:{th:'เปิดพื้นที่ทำงานสำหรับงานตั้งค่านี้',en:'Open a workspace for this setup task'},
          lead:{th:'งานรอบนี้เป็นงานสั้นที่ไม่มี Agent รันค้างอยู่ก่อน ตามกฎในบทที่ 04 จึงใช้ `git switch -c` ธรรมดาได้ ไม่ต้องสร้าง worktree ใหม่ และอย่าลืมกลับมาที่ repo หลักก่อน',en:'This is a short task with no agent session already running, so by the rule from lesson 04 a plain `git switch -c` is enough — no new worktree needed. Start from the main repo folder.'},
          steps:[
            {title:{th:'กลับมาที่ repo หลักแล้วดึง main ล่าสุด',en:'Return to the main repo and pull the latest main'},what:{th:'อย่าสร้าง branch นี้จากใน worktree ของ US-001 เพราะงานคนละเรื่องกัน การเริ่มจาก main ที่ใหม่ล่าสุดทำให้ diff ของ branch นี้มีแต่เรื่อง template และ skill เท่านั้น',en:'Do not branch this off inside the US-001 worktree — it is unrelated work. Starting from an up-to-date main keeps this branch’s diff about templates and skills only.'},cmd:`cd ../his-ai-opd-checkin-starter\ngit switch main\ngit pull`,expect:{th:'`On branch main` และ `Already up to date.` หรือรายการไฟล์ที่เพิ่งดึงมา',en:'`On branch main` and either `Already up to date.` or a list of freshly pulled files.'}},
            {title:{th:'สร้าง branch สำหรับงานตั้งค่า',en:'Create a branch for the setup work'},what:{th:'ใช้คำนำหน้า `chore/` เพราะงานนี้ไม่ใช่ฟีเจอร์ที่ผู้ใช้เห็น เป็นการวางเครื่องมือให้ทีม ชื่อ branch ควรสอดคล้องกับชนิดของ commit ที่จะเกิดขึ้นบนมัน',en:'Use the `chore/` prefix: this is not a user-visible feature but tooling for the team. The branch name should match the kind of commits that will live on it.'},cmd:`git switch -c chore/agent-skills`,expect:{th:'`Switched to a new branch “chore/agent-skills”`',en:'`Switched to a new branch “chore/agent-skills”`'}}
          ],
          outro:{th:'งานที่เหลือในบทนี้เกิดบน branch นี้ทั้งหมด และจะจบด้วย MR เล็ก ๆ หนึ่งใบเหมือนงานปกติ',en:'Everything else in this lesson happens on this branch and ends with one small MR, like any other work.'}},
        {type:'code',title:{th:'ไฟล์ที่จะได้เมื่อจบบทนี้',en:'The files you will have by the end'},
          lead:{th:'ทั้ง template และ skill เก็บไว้ในโปรเจกต์และ commit เข้า Git ทั้งคู่ เพราะเป็นมาตรฐานของทีม ไม่ใช่การตั้งค่าส่วนตัว จุดที่ต้องเข้าใจคือ skill อยู่ที่ `.agents/skills/` ที่เดียว ส่วน `.claude/skills` เป็นแค่ทางลัด (symlink) ที่ชี้กลับมาที่นั่น',en:'Both the templates and the skills live in the project and go into Git, because they are a team standard rather than personal configuration. The key point: the skills live in exactly one place, `.agents/skills/`, and `.claude/skills` is only a shortcut (a symlink) pointing back at it.'},
          label:'project layout',code:`docs/
  templates/
    issue-template.md      <- โครงจากบทที่ 02 / the shape from lesson 02
    mr-template.md         <- โครงจากบทที่ 14 / the shape from lesson 14
.agents/
  skills/                  <- ของจริง อยู่ใน Git / the real files, tracked in Git
    create-issue/SKILL.md
    create-mr/SKILL.md
.claude/
  skills -> ../.agents/skills   <- symlink ต่อเครื่อง / per-checkout link
AGENTS.md                  <- กติกาที่ใช้ร่วมกันทุกเครื่องมือ / shared rules
.gitignore                 <- .tmp/ และ .claude/skills`,
          note:{th:'เหตุผลที่แยกสองที่: `.agents/skills/` เป็นกลางและใช้ได้กับทุกเครื่องมือ ส่วน `.claude/skills` เป็นตำแหน่งเฉพาะของ Claude Code ซึ่งเป็นของแต่ละเครื่อง จึงใส่ไว้ใน `.gitignore` ไม่ commit ขึ้นไป เพราะ symlink ที่สร้างบน mac กับบน Windows ไม่เหมือนกัน ส่วน `.tmp/` คือที่พักของเนื้อหาที่ Agent ร่างก่อนส่ง เป็นไฟล์ชั่วคราวจึง ignore เช่นกัน',en:'Why two places: `.agents/skills/` is tool-neutral and works for everyone, while `.claude/skills` is Claude Code’s own location and belongs to each checkout — so it goes in `.gitignore` rather than into Git, because the link is created differently on macOS and on Windows. `.tmp/` is scratch space for bodies the agent drafts before sending, temporary and likewise ignored.'}},
        {type:'code',title:{th:'ตัวอย่าง SKILL.md สำหรับสร้าง Issue',en:'Example SKILL.md for filing an issue'},
          lead:{th:'อ่านให้ออกว่าทุกบรรทัดกำลังทำอะไร: ส่วนหัวบอกว่า skill นี้ชื่ออะไรและใช้ตอนไหน ส่วนเนื้อหาคือขั้นตอนที่ Agent ต้องเดินตาม และท้ายสุดคือข้อห้าม',en:'Read what each part does: the header says what this skill is and when to use it, the body is the sequence the agent must follow, and the end is the list of prohibitions.'},
          label:'.agents/skills/create-issue/SKILL.md',code:`---
name: create-issue
description: Draft an issue from docs/templates/issue-template.md and propose the
  command that files it. Use when the user asks to open or create an issue.
---

# Create issue

1. Read docs/templates/issue-template.md and the requirement file the user names.
2. Fill every section of the template. Use only what the requirement states.
3. If the template needs something the requirement does not answer, ask the user.
   Never invent acceptance criteria and never guess what is out of scope.
4. Write the result to .tmp/issue-<slug>.md. Do not modify any other file.
5. Show the body in the chat and stop. Wait for the user to approve or edit.
6. After approval, propose exactly one command and let the user run or approve it:
   GitHub: gh issue create --title "<title>" --body-file .tmp/issue-<slug>.md
   GitLab: glab issue create --title "<title>" --description .tmp/issue-<slug>.md
7. Report the issue number that comes back, so it can be used in the branch name.

## Never
- Never create, close, edit, or comment on any other issue.
- Never commit, push, or touch main.
- Never put real patient data, tokens, or .env values into the body.`,
          note:{th:'ข้อ 3 คือหัวใจของ skill นี้ เพราะมันเปลี่ยนพฤติกรรมเริ่มต้นของ Agent จาก “เดาให้จบ” เป็น “ถามกลับ” ซึ่งเป็นสิ่งเดียวกับที่คุณฝึกทำเองในบทที่ 02',en:'Step 3 is the heart of it: it flips the agent’s default from “guess and finish” to “ask back” — the same move you practised by hand in lesson 02.'}},
        {type:'code',title:{th:'ตัวอย่าง SKILL.md สำหรับร่าง MR',en:'Example SKILL.md for drafting an MR'},
          lead:{th:'skill ตัวนี้ต่างจากตัวแรกตรงที่มันต้องอ่านหลักฐานจาก Git จริง ไม่ใช่จากความจำของบทสนทนา และต้องไม่แต่งเรื่องการทดสอบที่ยังไม่เกิดขึ้น',en:'This one differs in that it must read real evidence from Git rather than from the conversation’s memory — and must never invent testing that did not happen.'},
          label:'.agents/skills/create-mr/SKILL.md',code:`---
name: create-mr
description: Draft a merge request from docs/templates/mr-template.md using the real
  branch diff, then propose the command that opens it as a draft.
---

# Create merge request

1. Run these read-only commands and use their output as the source of truth:
   git log --oneline main..HEAD
   git diff main...HEAD --stat
2. Read docs/templates/mr-template.md and fill every section from that output.
3. For the verification section, list only what the user confirms they actually did.
   Ask: "which of these did you verify yourself?" Never claim a check that did not run.
4. Include "Closes #<issue number>" when the user gives the issue number.
5. Write the body to .tmp/mr-<branch>.md and show it. Stop and wait for approval.
6. After approval, propose exactly one command:
   GitHub: gh pr create --draft --title "<title>" --body-file .tmp/mr-<branch>.md
   GitLab: glab mr create --draft --title "<title>" --description .tmp/mr-<branch>.md

## Never
- Never merge, never approve, never push to main.
- Never mark the MR ready for review; the human does that.
- Never edit source files while drafting.`,
          note:{th:'ข้อ 3 คือข้อที่ป้องกันปัญหาที่พบบ่อยที่สุดของ MR ที่ AI ร่าง คือมันเขียนว่า “ทดสอบครบทุกกรณีแล้ว” ทั้งที่ไม่มีใครเปิดดู ซึ่งทำให้ reviewer เชื่อผิด ๆ',en:'Step 3 prevents the most common failure of AI-drafted MRs: a confident “all cases tested” that nobody actually checked, which misleads the reviewer.'}},
        {type:'agent-setup',title:{th:'ติดตั้ง skill ในเครื่องมือที่คุณใช้',en:'Install the skills in the tool you use'},
          lead:{th:'สองเครื่องมือเก็บ “คำสั่งที่ใช้ซ้ำ” คนละที่ แต่แนวคิดเดียวกัน คือเขียนขั้นตอนไว้เป็นไฟล์ในโปรเจกต์ แล้วให้เครื่องมืออ่าน เลือกแท็บของเครื่องมือที่คุณใช้ ตัวเลือกนี้เป็นตัวเดียวกับที่เลือกไว้ในบทที่ 00 ถ้าเปลี่ยนที่นี่ บทที่ 00 ก็จะเปลี่ยนตาม',en:'The two tools keep “reusable instructions” in different places but with the same idea: write the steps into a file in the project and let the tool read it. Pick the tab for the tool you use. It is the same choice you made in lesson 00 — change it here and lesson 00 follows.'},
          tools:[
            {id:'chatgpt',name:{th:'ChatGPT Desktop App',en:'ChatGPT Desktop App'},steps:[
              {title:{th:'เก็บ template ไว้ใน docs/templates',en:'Put the templates in docs/templates'},what:{th:'สร้างสองไฟล์ตามโครงในบทที่ 02 และ 14 ให้เป็นไฟล์เปล่าที่มีแต่หัวข้อ ไม่ต้องใส่เนื้อหาของ US-001 ลงไป เพราะ template ต้องใช้กับงานถัดไปได้ด้วย',en:'Create the two files using the shapes from lessons 02 and 14, as blank forms with headings only. Do not bake US-001 content into them — a template has to fit the next task too.'},expect:{th:'`docs/templates/issue-template.md` และ `docs/templates/mr-template.md` มีอยู่จริงในโปรเจกต์',en:'`docs/templates/issue-template.md` and `docs/templates/mr-template.md` exist in the project.'}},
              {title:{th:'เขียนไฟล์ skill ไว้ที่ .agents/skills',en:'Write the skill files under .agents/skills'},what:{th:'ใช้ตำแหน่งเดียวกับฝั่ง Claude คือ `.agents/skills/create-issue/SKILL.md` และ `.agents/skills/create-mr/SKILL.md` โดยคัดลอกเนื้อหาจากสองบล็อกตัวอย่างด้านบน ประโยชน์ของการใช้ที่เดียวกันคือทีมมีขั้นตอนชุดเดียว ไม่ว่าใครจะใช้เครื่องมือตัวไหน',en:'Use the same location as the Claude side: `.agents/skills/create-issue/SKILL.md` and `.agents/skills/create-mr/SKILL.md`, pasting the content from the two example blocks above. The point of sharing the location is that the team has one set of steps regardless of which tool each person uses.'},cmd:`mkdir -p .agents/skills/create-issue .agents/skills/create-mr`,expect:{th:'ไฟล์ SKILL.md ทั้งสองอยู่ใน `.agents/skills/` และพร้อม commit',en:'Both SKILL.md files sit under `.agents/skills/`, ready to commit.'}},
              {title:{th:'ชี้ทางใน AGENTS.md',en:'Point to them from AGENTS.md'},what:{th:'Codex อ่าน `AGENTS.md` ของโปรเจกต์อยู่แล้วตั้งแต่บทที่ 05 จึงไม่ต้องทำ symlink แบบฝั่ง Claude เพิ่มหัวข้อใหม่ว่า เมื่อผู้ใช้ขอให้สร้าง Issue ให้ทำตาม `.agents/skills/create-issue/SKILL.md` และเมื่อขอให้ร่าง MR ให้ทำตาม `.agents/skills/create-mr/SKILL.md` พร้อมย้ำว่าเขียนผลลง `.tmp/` และห้ามยิงคำสั่งเองโดยไม่ได้รับอนุมัติ',en:'Codex already reads the project `AGENTS.md`, as of lesson 05, so no symlink is needed on this side. Add a section saying that a request to create an issue follows `.agents/skills/create-issue/SKILL.md`, a request to draft an MR follows `.agents/skills/create-mr/SKILL.md`, results go into `.tmp/`, and no command is fired without approval.'},expect:{th:'`AGENTS.md` มีหัวข้อใหม่ที่ชี้ไปยังไฟล์ skill ทั้งสอง',en:'`AGENTS.md` has a new section pointing at both skill files.'}},
              {title:{th:'ใส่ .tmp/ ลงใน .gitignore',en:'Add .tmp/ to .gitignore'},what:{th:'ไฟล์ที่ Agent ร่างก่อนส่งเป็นของชั่วคราว ไม่ควรอยู่ในประวัติ ฝั่งนี้ไม่ต้อง ignore `.claude/skills` เพราะไม่ได้สร้างลิงก์ แต่ถ้าในทีมมีคนใช้ Claude ด้วย ใส่ไว้ทั้งสองบรรทัดเลยจะง่ายกว่า',en:'Bodies drafted before sending are temporary and do not belong in history. You do not need to ignore `.claude/skills` on this side because there is no link — but if anyone on the team uses Claude, adding both lines is simpler.'},cmd:`printf '.tmp/\\n.claude/skills\\n' >> .gitignore`,expect:{th:'`git status` ไม่แสดงไฟล์ใน `.tmp/` อีกต่อไป',en:'`git status` no longer lists anything under `.tmp/`.'}},
              {title:{th:'ทดสอบกับงานจริงหนึ่งใบ',en:'Test it on one real piece of work'},what:{th:'วาง prompt แล้วสั่งให้ร่าง Issue จาก requirement ใบถัดไป ดูว่ามันถามกลับในจุดที่ requirement ไม่ได้ตอบหรือไม่ ถ้ามันเดาแทนที่จะถาม แปลว่าข้อความในไฟล์ยังไม่หนักแน่นพอ ให้เติมคำว่า “ห้ามเดา ให้ถามกลับ” เข้าไป',en:'Paste the prompt and ask it to draft an issue for the next requirement. Watch whether it asks back where the requirement is silent. If it guesses instead, the wording is not firm enough — add an explicit “do not guess; ask me”.'},expect:{th:'ได้ไฟล์ร่างใน `.tmp/` พร้อมคำถามกลับ และยังไม่มีอะไรถูกสร้างบนเว็บ',en:'A draft file in `.tmp/`, a question or two back, and nothing created online yet.'}}
            ]},
            {id:'claude',name:{th:'Claude Desktop App',en:'Claude Desktop App'},steps:[
              {title:{th:'เก็บ template ไว้ใน docs/templates',en:'Put the templates in docs/templates'},what:{th:'สร้างสองไฟล์ตามโครงในบทที่ 02 และ 14 ให้เป็นไฟล์เปล่าที่มีแต่หัวข้อ ไม่ต้องใส่เนื้อหาของ US-001 ลงไป เพราะ template ต้องใช้กับงานถัดไปได้ด้วย',en:'Create the two files using the shapes from lessons 02 and 14, as blank forms with headings only. Do not bake US-001 content into them — a template has to fit the next task too.'},expect:{th:'`docs/templates/issue-template.md` และ `docs/templates/mr-template.md` มีอยู่จริงในโปรเจกต์',en:'`docs/templates/issue-template.md` and `docs/templates/mr-template.md` exist in the project.'}},
              {title:{th:'สร้างโฟลเดอร์ skill ใน .agents/skills',en:'Create the skill folders under .agents/skills'},what:{th:'หนึ่ง skill คือหนึ่งโฟลเดอร์ที่มีไฟล์ชื่อ `SKILL.md` อยู่ข้างใน เราเก็บไว้ที่ `.agents/skills/` เพราะเป็นตำแหน่งกลางที่ไม่ผูกกับเครื่องมือตัวใดตัวหนึ่ง และเป็นไฟล์ที่ commit ขึ้น Git จริง ทุกคนในทีมที่ clone ไปจึงได้ skill ชุดเดียวกัน',en:'One skill is one folder containing a `SKILL.md`. We keep them under `.agents/skills/` because that location is not tied to any single tool, and these files really do go into Git — so everyone who clones the repo gets the same set.'},cmd:`mkdir -p .agents/skills/create-issue .agents/skills/create-mr`,expect:{th:'มีสองโฟลเดอร์ว่างรอไฟล์ `SKILL.md`',en:'Two empty folders waiting for their `SKILL.md`.'}},
              {title:{th:'เขียนไฟล์ SKILL.md ทั้งสองตัว',en:'Write both SKILL.md files'},what:{th:'คัดลอกเนื้อหาจากสองบล็อกตัวอย่างด้านบนมาวาง แล้วแก้ชื่อไฟล์ template ให้ตรงกับของจริงในโปรเจกต์ ส่วนหัวที่คั่นด้วย `---` สำคัญมาก เพราะเป็นที่ที่เครื่องมืออ่านชื่อและคำอธิบายว่าจะหยิบ skill นี้มาใช้ตอนไหน',en:'Paste the content from the two example blocks above and correct the template filenames to match the project. The `---` header matters: it is where the tool reads the name and the description that decide when this skill gets picked up.'},expect:{th:'`.agents/skills/create-issue/SKILL.md` และ `.agents/skills/create-mr/SKILL.md` มีเนื้อหาครบ',en:'Both `.agents/skills/create-issue/SKILL.md` and `.agents/skills/create-mr/SKILL.md` are complete.'}},
              {title:{th:'ลิงก์ .claude/skills ให้ชี้ไปที่ .agents/skills',en:'Link .claude/skills to .agents/skills'},what:{th:'Claude Code มองหา skill ที่ `.claude/skills` เท่านั้น เราจึงสร้าง **symlink** คือทางลัดที่ชี้ไปยังโฟลเดอร์จริง แทนที่จะคัดลอกไฟล์ไปไว้สองที่ (ซึ่งจะเริ่มไม่ตรงกันในสัปดาห์ถัดไป) ลิงก์นี้เป็นของแต่ละเครื่อง ต้องสร้างใหม่ทุกครั้งที่ clone และ Git จะไม่เก็บมันเพราะเราใส่ `.claude/skills` ไว้ใน `.gitignore` — บน Windows ให้เปิด Developer Mode หรือรัน Command Prompt แบบ Administrator แล้วใช้คำสั่ง `mklink` แทนบรรทัดล่าง',en:'Claude Code only looks in `.claude/skills`, so we create a **symlink** — a shortcut pointing at the real folder — instead of copying the files into two places, which start drifting apart by the following week. The link belongs to each checkout, has to be recreated after every clone, and Git never stores it because `.claude/skills` is in `.gitignore`. On Windows, enable Developer Mode or open Command Prompt as Administrator and use `mklink` instead of the line below.'},cmd:`mkdir -p .claude && ln -s ../.agents/skills .claude/skills`,label:'macOS / Linux',expect:{th:'`ls .claude/skills` แสดงโฟลเดอร์ `create-issue` และ `create-mr` ที่มาจาก `.agents/skills`',en:'`ls .claude/skills` lists `create-issue` and `create-mr`, served from `.agents/skills`.'}},
              {title:{th:'บน Windows ใช้ mklink แทน',en:'On Windows, use mklink instead'},what:{th:'คำสั่งนี้รันใน Command Prompt (ไม่ใช่ PowerShell) โดยเปิดแบบ Run as Administrator หรือเปิด Developer Mode ไว้ก่อน `/D` แปลว่าลิงก์นี้ชี้ไปยังโฟลเดอร์ ถ้าข้ามขั้นนี้ Claude Code จะไม่เห็น skill เลย และคุณจะนึกว่าเขียนไฟล์ผิด ทั้งที่ไฟล์ถูกอยู่แล้ว',en:'Run this in Command Prompt (not PowerShell), started as Administrator or with Developer Mode enabled. `/D` means the link points to a directory. Skip this and Claude Code simply will not see the skills, and you will suspect the files are wrong when they are fine.'},cmd:`mklink /D ".claude\\skills" "..\\.agents\\skills"`,label:'Windows',expect:{th:'ข้อความยืนยันว่าสร้าง symbolic link แล้ว และเปิด `.claude\\skills` แล้วเห็นไฟล์เดียวกับใน `.agents\\skills`',en:'A confirmation that the symbolic link was created, and `.claude\\skills` shows the same files as `.agents\\skills`.'}},
              {title:{th:'บอก Git ให้ข้ามลิงก์นี้',en:'Tell Git to skip the link'},what:{th:'เพิ่มสองบรรทัดลงใน `.gitignore` คือ `.tmp/` และ `.claude/skills` บรรทัดหลังสำคัญ เพราะ symlink ที่สร้างบน mac ใช้กับ Windows ไม่ได้ ถ้าเผลอ commit ไป เพื่อนร่วมทีมที่ใช้อีกระบบจะได้ไฟล์เสีย ส่วนตัว skill จริงยังถูก commit ตามปกติ เพราะอยู่ที่ `.agents/skills`',en:'Add two lines to `.gitignore`: `.tmp/` and `.claude/skills`. The second matters because a symlink made on macOS does not work on Windows, and committing it hands a broken file to teammates on the other system. The real skills are still committed as usual, because they live in `.agents/skills`.'},cmd:`printf '.tmp/\\n.claude/skills\\n' >> .gitignore\ngit status --short`,expect:{th:'`git status` แสดง `.gitignore` กับ `.agents/` เป็นไฟล์ที่เปลี่ยน และไม่มี `.claude/` โผล่มาในรายการ',en:'`git status` shows `.gitignore` and `.agents/` as changed, with no `.claude/` in the list.'}},
              {title:{th:'ทดสอบเรียกใช้',en:'Try calling it'},what:{th:'ปิดแล้วเปิดโปรเจกต์ใหม่ใน Claude Desktop หนึ่งครั้งเพื่อให้มันอ่าน skill จากลิงก์ที่เพิ่งสร้าง แล้วพิมพ์ `/create-issue` ในช่องแชท หรือบอกเป็นภาษาคนว่า “ช่วยร่าง Issue จาก requirement ใบถัดไปให้หน่อย” ถ้า skill ถูกอ่านแล้ว Agent จะเดินตามลำดับในไฟล์ คือถามกลับก่อน แล้วค่อยเขียนลง `.tmp/` และหยุดรอการอนุมัติ ถ้ามันไม่รู้จัก `/create-issue` เลย ให้กลับไปตรวจว่าลิงก์ชี้ถูกที่หรือยังด้วย `ls .claude/skills`',en:'Reopen the project in Claude Desktop once so it reads the skills through the new link, then type `/create-issue` in the chat, or simply say “draft an issue for the next requirement”. If the skill was picked up, the agent follows the file’s sequence: ask back first, write into `.tmp/`, then stop for approval. If it does not recognise `/create-issue` at all, check the link with `ls .claude/skills` before suspecting the file.'},expect:{th:'Agent ถามกลับในจุดที่ requirement ไม่ได้ตอบ และยังไม่มีคำสั่งไหนถูกรันโดยไม่ผ่านการกดยืนยัน',en:'The agent asks back where the requirement is silent, and no command runs without your confirmation.'}}
            ]}
          ],
          outro:{th:'ถ้า Agent ข้ามขั้นตอนในไฟล์ อย่าไปแก้ที่แชท ให้กลับไปแก้ที่ไฟล์ skill เพราะแชทหายไปพรุ่งนี้ แต่ไฟล์อยู่กับทีมต่อไป',en:'If the agent skips a step, do not patch it in the chat — fix the skill file. The chat is gone tomorrow; the file stays with the team.'}},
        {type:'callout',tone:'danger',title:{th:'เส้นที่ skill ห้ามข้าม',en:'Lines a skill must not cross'},text:{th:'skill ทำให้ Agent ทำงานที่ “ออกไปนอกเครื่องคุณ” ได้ จึงต้องเขียนข้อห้ามไว้ในไฟล์ให้ชัดทุกครั้ง ได้แก่ ห้าม merge, ห้าม push ขึ้น main, ห้ามเปลี่ยน MR จาก Draft เป็นพร้อม review, ห้ามแตะ Issue หรือ MR ของคนอื่น และห้ามใส่ข้อมูลผู้ป่วยจริงหรือค่าใน `.env` ลงในเนื้อหา — เก็บโหมด Manual ไว้เหมือนที่ตั้งในบทที่ 00 เพื่อให้ทุกคำสั่งต้องผ่านการกดยืนยันของคุณก่อนเสมอ',en:'A skill lets the agent do things that leave your machine, so spell out the prohibitions in the file every time: never merge, never push to main, never flip an MR from draft to ready, never touch anyone else’s issue or MR, and never place real patient data or `.env` values in the body. Keep the Manual mode you set in lesson 00 so every command still stops for your confirmation.'}},
        {type:'prompt',title:{th:'Prompt: ให้ Agent เขียนไฟล์ skill ให้จาก template ของคุณ',en:'Prompt: have the agent write the skill file from your template'},
          when:{th:'ใช้เมื่อ template สองไฟล์อยู่ในโปรเจกต์แล้ว แต่ยังไม่อยากพิมพ์ SKILL.md เอง จุดสำคัญคือให้มันอ่าน template จริงก่อน ไม่ใช่แต่งโครงขึ้นมาใหม่',en:'Use it once both templates are in the project and you would rather not type the SKILL.md by hand. The key is making it read the real templates instead of inventing a shape.'},
          prompt:{th:`อ่านไฟล์ docs/templates/issue-template.md และ AGENTS.md ก่อน

แล้วสร้างไฟล์ .agents/skills/create-issue/SKILL.md ตามเงื่อนไขนี้
1. ส่วนหัวมี name และ description ที่บอกว่าใช้ skill นี้ตอนไหน
2. ขั้นตอนต้องบังคับให้ถามกลับเมื่อ template มีหัวข้อที่ requirement ไม่ได้ตอบ ห้ามเดา
3. เขียนผลลัพธ์ลง .tmp/ เท่านั้น ห้ามแก้ไฟล์อื่นในโปรเจกต์
4. ต้องหยุดรอการอนุมัติของฉันก่อนเสนอคำสั่ง gh หรือ glab
5. มีหัวข้อ Never ที่ห้าม merge, ห้าม push main, ห้ามแตะ Issue ของคนอื่น และห้ามใส่ข้อมูลจริง

สร้างแค่ไฟล์เดียวนี้ ห้ามรันคำสั่งใด ๆ แล้วแสดงเนื้อหาให้ฉันอ่านก่อน`,en:`First read docs/templates/issue-template.md and AGENTS.md.

Then create .agents/skills/create-issue/SKILL.md under these conditions:
1. A header with a name and a description saying when this skill applies
2. Steps that force you to ask me whenever the template needs something the requirement does not answer — no guessing
3. Output written only into .tmp/; no other project file may change
4. You must stop for my approval before proposing any gh or glab command
5. A Never section: never merge, never push to main, never touch anyone else's issue, never include real data

Create only this one file, run no commands, and show me the content first.`},
          after:{th:['อ่านไฟล์ที่ได้ทีละบรรทัดเหมือนอ่าน Issue ถ้าบรรทัดไหนกำกวม Agent จะตีความเอง','ทดสอบทันทีด้วยงานจริงหนึ่งใบ อย่าเพิ่งเชื่อว่าไฟล์ถูกเพราะอ่านแล้วดูดี','ทำซ้ำอีกรอบสำหรับ `create-mr` โดยเปลี่ยน template และเพิ่มเงื่อนไขว่าต้องอ่าน `git log main..HEAD` เป็นหลักฐาน'],en:['Read the result line by line as you would an issue — any vague line is a line the agent will interpret for itself','Test it on one real task immediately; do not trust it because it reads well','Repeat for `create-mr`, swapping the template and adding the requirement to read `git log main..HEAD` as evidence']}},
        {type:'practice',title:{th:'ลงมือทำ: ใช้ skill กับงานใบที่สอง',en:'Practice: use the skill on a second piece of work'},steps:{th:['สร้าง `docs/templates/issue-template.md` และ `docs/templates/mr-template.md` จากโครงในบทที่ 02 และ 14','สร้าง skill ไว้ที่ `.agents/skills/` ตามแท็บเครื่องมือของคุณ และถ้าใช้ Claude ให้ทำ symlink `.claude/skills` ด้วย','เพิ่ม `.tmp/` และ `.claude/skills` ลงใน `.gitignore`','ใช้ skill ร่าง Issue ใบที่สอง เช่น US-002 Queue Board แล้วนับว่ามันถามกลับกี่ข้อ','เทียบร่างที่ได้กับเช็กลิสต์ในบทที่ 02 ว่าข้อไหนยังขาด แล้วแก้ที่ **ไฟล์ skill** ไม่ใช่แก้ที่ร่าง','commit งานนี้: `git add docs .agents .gitignore` แล้ว `git commit -m "docs: add issue and MR templates with agent skills"` — สังเกตว่า `.claude/skills` ไม่โผล่ในรายการ เพราะถูก ignore ไว้','push แล้วเปิด MR เล็ก ๆ ใบนี้ให้เพื่อน review ว่าข้อห้ามใน skill รัดกุมพอหรือยัง'],en:['Create `docs/templates/issue-template.md` and `docs/templates/mr-template.md` from the shapes in lessons 02 and 14','Create the skills under `.agents/skills/` following your tool’s tab, adding the `.claude/skills` symlink if you use Claude','Add `.tmp/` and `.claude/skills` to `.gitignore`','Use it to draft a second issue, e.g. US-002 Queue Board, and count how many questions it asks back','Compare the draft against the lesson 02 checklist, then fix what is missing in the **skill file**, not in the draft','Commit the work: `git add docs .agents .gitignore` then `git commit -m "docs: add issue and MR templates with agent skills"` — note that `.claude/skills` never appears, because it is ignored','Push and open this small MR for a peer to review whether the prohibitions are tight enough']},expected:{th:'Issue ใบที่สองใช้เวลาน้อยกว่าใบแรกมาก แต่ยังมีหัวข้อครบเท่ากัน และคุณยังเป็นคนตอบคำถามเรื่องขอบเขตกับ AC เองทุกข้อ',en:'The second issue takes far less time than the first while covering the same sections — and you still answer every scope and AC question yourself.'}}
      ],
      quiz:{q:{th:'ข้อใดไม่ควรอยู่ใน skill สร้าง Issue?',en:'Which of these does not belong in an issue-filing skill?'},options:{th:['ลำดับขั้นตอนการกรอกทุกหัวข้อของ template','การตัดสินว่าฟีเจอร์ไหนอยู่นอกขอบเขตของรอบนี้','ข้อห้ามไม่ให้ merge หรือ push main'],en:['The sequence for filling every template section','Deciding which features are out of scope this round','The prohibition on merging or pushing to main']},answer:1,why:{th:'การตัดสินขอบเขตเป็นการตัดสินใจทางธุรกิจที่ต้องมาจากคน skill ทำได้แค่บังคับให้ถามกลับเมื่อข้อมูลไม่พอ',en:'Scope is a business decision that must come from a person. The skill’s job is only to force a question when information is missing.'}},
      wrap:{th:['ทำเองก่อนจนมีเกณฑ์ แล้วค่อยทำให้ทำซ้ำได้','template และ skill อยู่ในโปรเจกต์เพราะเป็นของทีม ส่วนลิงก์เข้าเครื่องมือเป็นของแต่ละเครื่อง','skill กรอกฟอร์มและเสนอคำสั่ง ส่วนการกดส่งยังเป็นของคน','แก้พฤติกรรมที่ไฟล์ ไม่ใช่ที่แชท'],en:['Do it by hand until you have a standard, then make it repeatable','Templates and skills live in the project because they belong to the team; the link into a tool belongs to each checkout','The skill fills the form and proposes the command; pressing send stays human','Fix behaviour in the file, not in the chat']}
    },
    {
      id:'capstone', group:'capstone', no:'16', duration:'90 min', kind:'capstone',
      title:{th:'Capstone · OPD Patient Check-in Lite',en:'Capstone · OPD Patient Check-in Lite'},
      intro:{th:'ทำ flow เดิมให้ครบด้วยตัวเองตั้งแต่ Issue จนถึง Draft MR โดยมี Guided Mode แบบเปิดทีละขั้นเมื่อจำเป็น — ไม่โชว์เฉลยทั้งหมดตั้งแต่แรก',en:'Complete the same flow independently from Issue to Draft MR, with a progressive Guided Mode you reveal only when needed — not a full solution upfront.'},
      outcomes:{th:['รวมทุกทักษะในสถานการณ์ HIS เดียว','รู้ว่าเมื่อไรควรขอ hint และเมื่อไรควรให้ Agent ทำต่อ','สร้าง reviewable evidence ครบทั้ง Storybook, app, checks และ diff','เดินวงจร Git ครบรอบตั้งแต่ Issue จนถึง merge และเก็บกวาด','ประเมินความพร้อมก่อนเข้า course หลัก'],en:['Combine all skills in one HIS scenario','Know when to use a hint and when to let the agent continue','Produce reviewable evidence across Storybook, app, checks, and diff','Walk the full Git cycle from issue to merge and cleanup','Assess readiness for the main course']},
      blocks:[
        {type:'prose',title:{th:'วิธีใช้บทนี้ให้ได้ผลจริง',en:'How to get real value from this lesson'},body:{th:[
          'บทนี้ไม่มีเนื้อหาใหม่ ทุกอย่างที่ต้องใช้ผ่านมาหมดแล้วในบทที่ 00–15 สิ่งที่เปลี่ยนไปคือ **ไม่มีใครบอกลำดับให้คุณอีกแล้ว** คุณต้องเป็นคนตัดสินใจเองว่าขั้นถัดไปคืออะไร',
          'ข้อแนะนำสำคัญคือ อย่าเพิ่งเปิด Hint ทันทีที่ติด ให้ลองด้วยตัวเองอย่างน้อย 10 นาทีก่อน เพราะช่วงเวลาที่รู้สึกติดนี่แหละคือช่วงที่เกิดการเรียนรู้จริง การเปิดเฉลยเร็วเกินไปทำให้คุณจำได้แค่ขั้นตอน แต่ไม่ได้เข้าใจเหตุผล',
          'ถ้าเปิด Hint แล้วยังไปต่อไม่ได้ ค่อยเปิด Step-by-step ซึ่งจะบอกลำดับที่ชัดเจนขึ้น และถ้ายังติดอีก ให้ใช้วิธีที่เราสอนมาตลอดคอร์ส คือถาม Agent ให้อธิบายสถานการณ์ปัจจุบัน ไม่ใช่ให้มันทำแทน',
          'ตัววัดความสำเร็จของบทนี้ไม่ใช่ “ทำเสร็จเร็วแค่ไหน” แต่คือ **คุณอธิบายทุกขั้นที่ทำไปได้หรือไม่** ถ้ามีขั้นไหนที่คุณทำตามแล้วอธิบายไม่ได้ ให้ย้อนกลับไปทบทวนบทนั้น'
        ],en:[
          'There is no new material here. Everything you need appeared in lessons 00–15. What changes is that **nobody tells you the order any more** — you decide what comes next.',
          'One important tip: do not open the hint the moment you get stuck. Try for at least ten minutes first, because the stuck feeling is where the learning actually happens. Revealing too early leaves you remembering steps without understanding reasons.',
          'If the hint is not enough, open the step-by-step guide. If you are still stuck, use what we practised all course: ask the agent to explain the current situation rather than to do it for you.',
          'The success measure here is not speed. It is **whether you can explain every step you took**. Any step you followed but cannot explain is a signal to revisit that lesson.'
        ]}},
        {type:'callout',title:{th:'ทำไม Capstone มี Guideline',en:'Why the Capstone includes a guideline'},text:{th:'มีได้และควรมีสำหรับกลุ่มผู้เริ่มต้น แต่ใช้แบบ Progressive Disclosure: ลองเองก่อน → เปิด Hint → เปิด Step-by-step เฉพาะเมื่อค้าง เพื่อไม่ให้กลายเป็นการ copy solution',en:'It should exist for beginners, but use progressive disclosure: try first → reveal a hint → reveal step-by-step only when stuck, so it does not become solution copying.'}},
        {type:'diagram',title:{th:'Target flow',en:'Target flow'},
          lead:{th:'นี่คือผลลัพธ์ที่ต้องได้เมื่อจบบทนี้ ใช้เป็นแผนที่ระหว่างทำ และใช้เป็น checklist ตอนตรวจงานตัวเอง',en:'This is the result you are aiming for. Use it as a map while working and as a self-review checklist at the end.'},
          diagram:`flowchart TD\nS[Search patient] --> R{Response}\nR -->|loading| L[Loading]\nR -->|empty| E[Empty]\nR -->|error| X[Error]\nR -->|results| P[Select patient]\nP --> F[Clinic + Chief Complaint]\nF --> V{Clinic selected?}\nV -->|No| M[Validation]\nV -->|Yes| C[Preview & Confirm]\nC --> O[Success + Queue A012]`,
          notes:{th:['ทุกเส้นทางในภาพต้องเดินได้จริงบนแอป ไม่ใช่แค่มี Storybook story','จุดตัดสินใจสองจุด (R และ V) คือที่ที่มักมีปัญหามากที่สุด','หมายเลขคิวเป็นข้อมูลสมมติ ไม่ต้องเชื่อมกับระบบคิวจริง'],en:['Every path must actually work in the app, not merely exist as a Storybook story','The two decision points (R and V) are where most problems hide','The queue number is synthetic — do not connect it to a real queue system']}},
        {type:'list',title:{th:'Definition of Done',en:'Definition of Done'},items:{th:['Issue ถูกเปิดจริง พร้อม AC แยกสถานะกับพฤติกรรม','Search ด้วย HN หรือชื่อ','Loading / Empty / Error / WithResults','เลือกผู้ป่วยและแสดงข้อมูล','Clinic required; Chief Complaint optional','Preview/Confirm ก่อน final action','Success พร้อม synthetic queue number','Meaningful Storybook stories','อย่างน้อย 1 interaction scenario','lint/test/build ผ่าน','commit เป็นระยะตาม checkpoint ไม่ใช่ก้อนเดียว และทุก commit อ้าง `Refs #<เลข Issue>`','git diff reviewed, MR ระบุ `Closes #<เลข Issue>` และถูก merge แล้ว','branch กับ worktree ถูกเก็บกวาดหลัง merge'],en:['The issue is actually filed, with ACs split into states and behaviours','Search by HN or name','Loading / Empty / Error / WithResults','Select and display a patient','Clinic required; Chief Complaint optional','Preview/Confirm before final action','Success with a synthetic queue number','Meaningful Storybook stories','At least one interaction scenario','lint/test/build pass','Committed at checkpoints rather than in one lump, every commit carrying `Refs #<issue>`','git diff reviewed, the MR says `Closes #<issue>`, and it is merged','Branch and worktree cleaned up after the merge']}},
        {type:'capstone',steps:[
          {title:{th:'1 · เขียน Issue และ Acceptance Criteria',en:'1 · Write the issue and acceptance criteria'},hint:{th:'อย่าเพิ่งเปิด branch จนกว่า AC ทุกข้อจะตอบได้ว่า ผ่าน หรือ ไม่ผ่าน',en:'Do not open a branch until every AC answers pass or fail'},guide:{th:['อ่าน `docs/requirements/US-001-opd-checkin.md` ให้จบก่อน','ร่าง Issue ตาม template ในบทที่ 02 ให้ครบทั้ง Context, In/Out of scope, AC และ Definition of Done','แยก AC เป็นสองกอง คือสถานะ (Loading/Empty/Error/Validation/Success) และพฤติกรรม (Given/When/Then)','ใช้ค่าตายตัวจาก mock data ใน AC ที่เป็นพฤติกรรม เช่น HN 65000123','ส่ง Prompt ตรวจช่องว่างจากบทที่ 02 แล้วแก้ Issue ตามรายการ “สิ่งที่ Agent จะเดา”','เปิด Issue จริงใน repository ของคุณเอง (จากบทที่ 00) แล้วจดเลข Issue ไว้ใช้ทั้งในชื่อ branch, ใน commit และใน MR'],en:['Read `docs/requirements/US-001-opd-checkin.md` all the way through','Draft the issue with the lesson 02 template: context, in/out of scope, ACs, definition of done','Split the ACs into states (Loading/Empty/Error/Validation/Success) and behaviours (Given/When/Then)','Use fixed mock-data values in behaviour ACs, e.g. HN 65000123','Send the gap-check prompt from lesson 02 and fix everything the agent said it would guess','File the real issue in your own repository (from lesson 00) and note its number — you will use it in the branch name, the commits, and the MR']}},
          {title:{th:'2 · ตั้ง Workspace',en:'2 · Set up the workspace'},hint:{th:'เริ่มจาก main ที่ clean แล้วใช้ worktree แยก task',en:'Start from clean main and isolate the task with a worktree'},guide:{th:['อยู่ในโฟลเดอร์ repo หลัก ไม่ใช่ worktree เก่า','รัน `git switch main` แล้ว `git status`','รัน `git pull`','รัน `git worktree add ../wt-us001-capstone -b feature/us001-capstone main`','`cd` เข้า worktree ที่สร้างใหม่','รัน `git status` ยืนยันว่าอยู่ branch ใหม่','รัน `npm install` (ดูรายละเอียดในบทที่ 04)'],en:['Work from the main repo folder, not an old worktree','Run `git switch main`, then `git status`','Run `git pull`','Run `git worktree add ../wt-us001-capstone -b feature/us001-capstone main`','`cd` into the new worktree','Run `git status` to confirm the new branch','Run `npm install` (details in lesson 04)']}},
          {title:{th:'3 · Explore & Plan',en:'3 · Explore & Plan'},hint:{th:'ยังไม่ให้ Agent แก้ไฟล์ ให้มันอ่าน AGENTS.md + requirement และรายงาน component/state/file scope',en:'Do not allow edits yet. Ask it to read AGENTS.md + the requirement and report component/state/file scope'},guide:{th:['ใช้ Explore Prompt จากบทที่ 05','รัน `git status` ยืนยันว่ายังไม่มีไฟล์ถูกแก้','review ว่าครบ Loading/Empty/Error/Validation/Success และ file scope แคบพอ','ถ้าไม่ครบ ใช้ Refine Prompt วนอีกรอบ'],en:['Use the Explore Prompt from lesson 05','Run `git status` to confirm nothing changed','Review Loading/Empty/Error/Validation/Success coverage and that file scope is narrow','If gaps remain, loop with the Refine Prompt']}},
          {title:{th:'4 · Component + State Map',en:'4 · Component + State Map'},hint:{th:'อย่าเริ่มจากหน้าใหญ่ก้อนเดียว และเขียนรายการของตัวเองก่อนถาม Agent',en:'Do not start with one giant page component, and write your own list before asking the agent'},guide:{th:['เขียน state map ตามลำดับ PatientSearch → PatientResults → SelectedPatient → CheckInForm → Confirmation → Success','กำหนด meaningful states เฉพาะที่แต่ละ component ต้องรับผิดชอบ','ใช้ Prompt วิจารณ์จากบทที่ 07'],en:['Draft the state map in order: PatientSearch → PatientResults → SelectedPatient → CheckInForm → Confirmation → Success','Define only the meaningful states each component owns','Use the critique prompt from lesson 07']}},
          {title:{th:'5 · Storybook First',en:'5 · Storybook First'},hint:{th:'สร้าง component + Storybook story คู่กัน และใช้ mock deterministic',en:'Create component + Storybook story pairs with deterministic mocks'},guide:{th:['ให้ Agent ทำ PatientSearch ก่อน พร้อม Default/Loading/Empty/WithResults/Error (ใช้ Prompt จากบทที่ 08)','เปิด Storybook แล้ว review ทีละ Storybook story','ส่ง feedback เป็นภาษา product','ผ่านแล้วค่อยทำ component ถัดไป','**Commit checkpoint 1** — เมื่อ component แรกผ่าน review: `git add <path ของ component>` แล้ว `git commit -m "feat(us001): ..." -m "Refs #<เลข Issue>"`'],en:['Have the agent build PatientSearch first with Default/Loading/Empty/WithResults/Error (prompt in lesson 08)','Open Storybook and review one Storybook story at a time','Send product-language feedback','Only then move to the next component','**Commit checkpoint 1** — once the first component passes review: `git add <component path>` then `git commit -m "feat(us001): ..." -m "Refs #<issue>"`']}},
          {title:{th:'6 · Interaction',en:'6 · Interaction'},hint:{th:'เลือก behavior สำคัญ 1 flow เขียน Given/When/Then',en:'Choose one important behavior and write Given/When/Then'},guide:{th:['เขียน Given/When/Then เช่น Given หน้าค้นหาแสดงอยู่ / When กรอก HN 65000123 แล้วกดค้นหา / Then แสดง Somchai Jaidee','ส่ง Prompt จากบทที่ 09','เปิดดู interaction ทีละขั้นใน Storybook','**Commit checkpoint 2** — เมื่อ test ผ่าน: `git commit -m "test(us001): ..." -m "Refs #<เลข Issue>"`'],en:['Write Given/When/Then, e.g. Given the search screen is displayed / When HN 65000123 is entered and Search clicked / Then Somchai Jaidee appears','Send the prompt from lesson 09','Watch the interaction step by step in Storybook','**Commit checkpoint 2** — once the test passes: `git commit -m "test(us001): ..." -m "Refs #<issue>"`']}},
          {title:{th:'7 · Integrate Page',en:'7 · Integrate the page'},hint:{th:'ประกอบเฉพาะ component ที่ review แล้ว และ reuse mock service',en:'Assemble only reviewed components and reuse the mock service'},guide:{th:['ใช้ Integration Prompt จากบทที่ 11','เปิด `/opd/check-in`','เดินครบทั้ง 5 รอบ (happy path, ไม่เลือกคลินิก, empty, error, ย้อนกลับ/เริ่มใหม่)','จดปัญหาเป็นพฤติกรรม แล้วส่งแก้ทีละข้อ','**Commit checkpoint 3** — เมื่อเดินครบ 5 รอบแล้วผ่าน: commit พร้อมเขียนใน body ว่าเดินอะไรมาบ้าง'],en:['Use the integration prompt from lesson 11','Open `/opd/check-in`','Walk all five rounds (happy path, no clinic, empty, error, back/restart)','Note issues as behaviour and send them one at a time','**Commit checkpoint 3** — once all five rounds pass: commit, and write in the body which rounds you walked']}},
          {title:{th:'8 · Diagnose Intentional Error',en:'8 · Diagnose an intentional error'},hint:{th:'อ่าน error ก่อน fix และขอ root cause',en:'Read the error before fixing and ask for root cause'},guide:{th:['เลือก error จาก `docs/workshop-errors.md`','เก็บหลักฐานครบ 4 แหล่ง (Terminal, UI, Console, Network)','ใช้ Root-cause Prompt จากบทที่ 12','อธิบายด้วยคำตัวเองก่อนอนุญาตให้แก้','ใช้ Verify Prompt แล้ว reproduce เคสเดิม','**Commit checkpoint 4** — เมื่อยืนยันว่าหายจริง: `git commit -m "fix(us001): ..." -m "อาการที่หาย และยืนยันอย่างไร. Refs #<เลข Issue>"`'],en:['Pick an error from `docs/workshop-errors.md`','Collect evidence from all four sources (terminal, UI, console, network)','Use the Root-cause Prompt from lesson 12','Explain it in your own words before approving a fix','Use the Verify Prompt and reproduce the original case','**Commit checkpoint 4** — once you confirmed it is gone: `git commit -m "fix(us001): ..." -m "Symptom gone, and how it was verified. Refs #<issue>"`']}},
          {title:{th:'9 · Diff & Quality Gates',en:'9 · Diff & Quality Gates'},hint:{th:'คาดการณ์ changed files ก่อนดูจริง',en:'Predict the changed files before reviewing them'},guide:{th:['เขียนคาดการณ์ changed files ก่อน','รัน `git status`','รัน `git log --oneline main..HEAD` อ่านว่า branch นี้เล่าเรื่องอะไร','รัน `git diff main...HEAD --stat`','เปิด diff ของไฟล์ที่ไม่คาดคิด','กวาดหาไฟล์ที่ห้าม commit เช่น `.env` หรือไฟล์ทดลองของ Agent','ใช้ Diff Review Prompt จากบทที่ 13','รัน `npm run lint`','รัน `npm run test`','รัน `npm run build`'],en:['Write your prediction first','Run `git status`','Run `git log --oneline main..HEAD` and read what this branch says it did','Run `git diff main...HEAD --stat`','Open diffs of unexpected files','Scan for files that must never be committed, such as `.env` or agent scratch files','Use the Diff Review Prompt from lesson 13','Run `npm run lint`','Run `npm run test`','Run `npm run build`']}},
          {title:{th:'10 · Draft MR',en:'10 · Draft MR'},hint:{th:'MR ต้องเล่า intent, scope, states และ evidence',en:'The MR should tell intent, scope, states, and evidence'},guide:{th:['รัน `git status` ยืนยัน branch และดูว่าเหลืออะไรค้าง','ถ้าเหลือ ให้ `git add <path>` เฉพาะที่เกี่ยว แล้ว commit ปิดท้าย (ไม่ใช้ `git add .`)','รัน `git fetch origin` แล้ว `git merge origin/main`','รัน `git push -u origin feature/us001-capstone`','ใช้ Prompt ร่าง MR จากบทที่ 14 หรือ skill `create-mr` จากบทที่ 15','ตัดสิ่งที่ยังไม่ได้ทดสอบจริงออก','ใส่ `Closes #<เลข Issue>` ลงใน MR','เปิด Draft MR แล้วให้เพื่อน review ความชัดเจน'],en:['Run `git status` to confirm the branch and see what is left','If anything is left, `git add <path>` only what belongs and commit it (never `git add .`)','Run `git fetch origin`, then `git merge origin/main`','Run `git push -u origin feature/us001-capstone`','Use the MR draft prompt from lesson 14 or the `create-mr` skill from lesson 15','Remove anything you did not actually test','Add `Closes #<issue number>` to the MR','Open a Draft MR and have a peer review its clarity']}},
          {title:{th:'11 · ปิดรอบให้จบ',en:'11 · Close the loop'},hint:{th:'งานยังไม่จบที่ Draft MR — จบเมื่อถูก merge และเก็บกวาดเรียบร้อย',en:'A draft MR is not the end — the end is merged and cleaned up'},guide:{th:['ขอให้เพื่อนหรือผู้สอน review แล้วให้ comment อย่างน้อย 1 ข้อ','แก้บน branch เดิม แล้ว commit ด้วยข้อความที่บอกว่าแก้ตาม review ข้อไหน','รัน `git push` เปล่า ๆ (ไม่ต้องใส่ `-u` อีก) แล้วดูว่า MR อัปเดตเอง','เปลี่ยน Draft เป็นพร้อม review แล้วให้ผู้ review เป็นคนกด merge','หลัง merge: `git switch main`, `git pull`, `git worktree remove ../wt-us001-capstone`, `git branch -d feature/us001-capstone`','ยืนยันว่า Issue ถูกปิดอัตโนมัติจาก `Closes #<เลข Issue>`'],en:['Ask a peer or the instructor to review and leave at least one comment','Fix on the same branch and commit with a message naming the review point','Run plain `git push` (no `-u` this time) and watch the MR update itself','Switch it from draft to ready and let the reviewer press merge','After the merge: `git switch main`, `git pull`, `git worktree remove ../wt-us001-capstone`, `git branch -d feature/us001-capstone`','Confirm the issue closed itself thanks to `Closes #<issue number>`']}}
        ]},
        {type:'prompt',title:{th:'Prompt สำรอง: เมื่อหลงทางระหว่างทำ Capstone',en:'Fallback prompt: when you lose your place mid-Capstone'},
          when:{th:'ใช้เมื่อทำไปหลายขั้นแล้วจำไม่ได้ว่าอยู่ตรงไหน หรือไม่แน่ใจว่าสิ่งที่ทำไปแล้วถูกต้องหรือยัง prompt นี้ให้ Agent ช่วย “ตั้งหลัก” ไม่ใช่ทำงานแทน',en:'Use it when you have done several steps and lost track, or you are unsure whether what you did so far is right. This asks the agent to help you re-orient, not to take over.'},
          prompt:{th:`ช่วยสรุปสถานะปัจจุบันของงานนี้ให้ฉัน ห้ามแก้ไขไฟล์

1. ตอนนี้อยู่ branch ไหน และมีไฟล์อะไรเปลี่ยนไปแล้วบ้าง
2. จากไฟล์ที่เปลี่ยน ทำอะไรไปแล้วบ้างเทียบกับ US-001
3. acceptance criteria ข้อไหนที่ยังไม่มีหลักฐานว่าทำแล้ว
4. มี component ไหนที่ยังไม่มี Storybook story คู่กันหรือไม่
5. ขั้นตอนถัดไปที่เหมาะสมที่สุดคืออะไร และเพราะอะไร

ตอบสั้น ๆ เป็นข้อ ๆ และอย่าลงมือทำจนกว่าฉันจะสั่ง`,en:`Summarize the current state of this work for me. Do not modify any files.

1. Which branch am I on, and which files have changed?
2. Based on those changes, what has been done so far relative to US-001?
3. Which acceptance criteria still have no evidence of being done?
4. Are there components without a matching Storybook story?
5. What is the most sensible next step, and why?

Answer briefly as a numbered list, and do not act until I tell you to.`},
          after:{th:['ใช้คำตอบข้อ 3 เป็น to-do list ที่เหลือของคุณ','ถ้าคำตอบข้อ 5 ไม่ตรงกับที่คุณคิด ให้เทียบเหตุผลทั้งสองฝั่งแล้วตัดสินใจเอง — คุณคือคนตัดสิน'],en:['Use answer 3 as your remaining to-do list','If answer 5 disagrees with your own plan, compare the reasoning and decide yourself — the call is yours']}},
        {type:'practice',title:{th:'ผลลัพธ์ที่คาดหวังจาก Capstone',en:'Expected Capstone result'},steps:{th:['Storybook แสดง meaningful states ของ OPD Check-in','`/opd/check-in` เดิน flow ได้ด้วย mock data','ผู้เรียนอธิบาย error หนึ่งกรณีและวิธี verify fix ได้','Diff อยู่ใน scope และ quality checks ผ่าน','Draft MR พร้อม evidence สำหรับ Developer review','ประวัติ commit ที่อ่านแล้วเล่าเรื่องงานได้โดยไม่ต้องเปิดโค้ด'],en:['Storybook shows meaningful OPD Check-in states','`/opd/check-in` runs end-to-end on mock data','You can explain one error and how the fix was verified','Diff stays in scope and quality checks pass','Draft MR contains evidence for developer review','A commit history that explains the work without opening any code']},expected:{th:'ไม่ต้องได้ “โค้ดที่สมบูรณ์แบบ” เป้าหมายคือ workflow ที่ควบคุมได้ ตรวจสอบได้ และ handoff ได้',en:'The goal is not “perfect code”; it is a controllable, verifiable workflow that can be handed off.'}}
      ],
      quiz:{q:{th:'ตัวชี้วัดความสำเร็จของ Capstone ที่สำคัญที่สุดคืออะไร?',en:'What is the most important Capstone success signal?'},options:{th:['จำนวนโค้ดที่ Agent สร้าง','สามารถอธิบายและตรวจทุกขั้นจาก requirement ถึง MR ได้','UI มี animation เยอะที่สุด'],en:['Amount of generated code','You can explain and verify every step from requirement to MR','The UI has the most animations']},answer:1,why:{th:'หลักสูตรนี้วัดความสามารถในการกำกับ AI-assisted development ไม่ใช่ความเร็วในการสร้าง code',en:'This course measures the ability to supervise AI-assisted development, not raw code-generation speed.'}},
      wrap:{th:['ทำ end-to-end workflow ได้ด้วยโจทย์ HIS เดียว','ใช้ hints แบบช่วยคิด ไม่ใช่ copy solution','พร้อมเข้าสู่การเรียนกับอาจารย์โดยมี common workflow เดียวกัน'],en:['Complete an end-to-end workflow on one HIS scenario','Use hints to unblock thinking rather than copy a solution','Enter the main class with a shared working workflow']}
    }
  ],
  final: {
    title:{th:'สิ่งที่คุณทำได้หลังจบเส้นทางนี้',en:'What you can do after this journey'},
    intro:{th:'คุณไม่จำเป็นต้องเรียกตัวเองว่า Developer แต่ควรสามารถรับ Requirement หนึ่งเรื่องและกำกับ AI Agent จนกลายเป็นงาน Frontend ที่ตรวจสอบและส่งต่อได้',en:'You do not need to call yourself a developer. You should be able to take one requirement and supervise an AI agent until it becomes verifiable frontend work ready for handoff.'},
    skills:{th:['Requirement → Issue + AC','Requirement → Component/State','Git branch + worktree','Agent Explore/Plan','Storybook review','Mock states','Browser/Terminal debugging','git diff + quality gates','Commit checkpoints → MR → Merge','Reusable agent skills'],en:['Requirement → Issue + AC','Requirement → Component/State','Git branch + worktree','Agent Explore/Plan','Storybook review','Mock states','Browser/Terminal debugging','git diff + quality gates','Commit checkpoints → MR → Merge','Reusable agent skills']}
  },
  glossary: {
    categories: [
      {
        id:'git', name:{th:'Git & การจัดการเวอร์ชัน',en:'Git & Version Control'}, terms:[
          {term:'Repository',alias:'Repo',th:'คลังเก็บไฟล์และประวัติการเปลี่ยนแปลงทั้งหมดของโปรเจกต์ หนึ่งโปรเจกต์มี repository หลักบน server (เช่น GitHub หรือ GitLab) และสำเนาในเครื่องของเรา',en:'The project folder plus its full change history. One main repository lives on a server such as GitHub or GitLab, and each person clones a copy to their machine.'},
          {term:'Issue',th:'ใบงานหนึ่งชิ้นบน GitLab หรือ GitHub ที่บอกว่าจะทำอะไร แค่ไหนถึงพอ และจะรู้ได้อย่างไรว่าเสร็จ หนึ่ง Issue ควรจบได้ใน 1 branch',en:'One unit of work in GitLab or GitHub stating what to build, where it stops, and how it will be judged done. One issue should fit in one branch.'},
          {term:'Clone',th:'คำสั่งคัดลอก repository จาก server มาไว้ในเครื่อง พร้อมประวัติการเปลี่ยนแปลงทั้งหมด ไม่ใช่แค่ไฟล์ล่าสุด',en:'The command that copies a repository from the server to your machine, including its full change history — not just the latest files.'},
          {term:'Fork',th:'การสร้างสำเนา repository ของคนอื่นไว้ใต้บัญชีของเรา ต่างจาก clone ตรงที่ fork ให้สิทธิ์เราเปิด Issue, push branch และเปิด Pull Request ได้เอง',en:'A copy of someone else’s repository placed under your own account. Unlike a plain clone, a fork lets you file issues, push branches, and open pull requests yourself.'},
          {term:'Staging Area',alias:'git add',th:'พื้นที่พักก่อน commit ที่เราเลือกว่าจะบันทึกไฟล์ไหนบ้าง `git add <path>` คือการหยิบเข้าพื้นที่นี้ การเลือกทีละ path ปลอดภัยกว่า `git add .` เพราะไม่กวาดไฟล์ที่ AI เผลอสร้างทิ้งไว้',en:'The holding area where you choose what goes into the next commit. `git add <path>` puts files there; naming paths is safer than `git add .`, which also sweeps in whatever the AI left behind.'},
          {term:'Conventional Commits',th:'ธรรมเนียมการเขียนข้อความ commit เป็น `type(scope): subject` เช่น `feat(us001): add clinic validation` ชนิดที่ใช้บ่อยคือ feat, fix, test, docs, refactor และ chore',en:'A convention for commit messages shaped as `type(scope): subject`, e.g. `feat(us001): add clinic validation`. Common types are feat, fix, test, docs, refactor, and chore.'},
          {term:'Commit',th:'การบันทึกการเปลี่ยนแปลงหนึ่งชุดพร้อมข้อความอธิบาย เปรียบเหมือน “จุดเซฟ” ที่ย้อนกลับมาดูได้',en:'A saved set of changes with a short message describing it — like a save point you can look back on.'},
          {term:'Branch',th:'สายงานย่อยที่แยกออกจาก main เพื่อทำงานเรื่องเดียวโดยไม่กระทบงานหลัก สร้างใหม่ด้วยคำสั่ง `git switch -c` ตามด้วยชื่อ branch',en:'A separate line of work branched off main so one task never disturbs the main line. Create one with `git switch -c` followed by a branch name.'},
          {term:'main',th:'branch สายหลักของโปรเจกต์ที่ถือว่าพร้อมใช้งานเสมอ กติกาของทีมคือไม่แก้งานบน main โดยตรง แต่ส่งงานเข้ามาผ่าน Merge Request',en:'The main branch of the project, always considered ready. Team rule: never edit main directly — work arrives through a Merge Request.'},
          {term:'Worktree',th:'โฟลเดอร์ทำงานเพิ่มเติมที่ผูกกับ branch อื่นจาก repository เดียวกัน ทำให้เปิดหลายงานพร้อมกันได้โดยไม่ต้องสลับ branch ไปมา',en:'An extra working folder tied to another branch of the same repository, so several tasks can stay open at once without switching branches.'},
          {term:'git status',th:'คำสั่งดูว่าตอนนี้มีไฟล์ไหนถูกแก้และไฟล์ไหนรอ commit ใช้ตรวจว่า AI Agent แตะไฟล์อะไรไปบ้าง',en:'The command that lists which files changed and which are waiting to be committed. Use it to see exactly which files the AI agent touched.'},
          {term:'git diff',th:'คำสั่งเทียบโค้ดก่อนกับหลังว่าเปลี่ยนกี่บรรทัด ตรงไหน เป็นหลักฐานชิ้นสำคัญในการตรวจงานที่ AI ทำ',en:'The command that shows the before and after of every changed line. It is the key piece of evidence when reviewing AI work.'},
          {term:'Push',th:'คำสั่งส่ง commit จากเครื่องเราขึ้นไปเก็บบน server เพื่อให้ทีมเห็นงานและนำไป merge ต่อได้',en:'The command that uploads your commits from your machine to the server so the team can see the work and merge it.'},
          {term:'Merge Request',alias:'MR · Pull Request (PR)',th:'คำขอรวมงานจาก branch ของเราเข้า main โดยต้องเปิดให้ทีมหรือ developer review ก่อน GitLab เรียกว่า Merge Request ส่วน GitHub เรียกว่า Pull Request',en:'A request to merge your branch into main, opened for teammates or developers to review first. GitLab calls it a Merge Request; GitHub calls it a Pull Request.'},
          {term:'.gitignore',th:'ไฟล์ที่บอก Git ว่าอะไรบ้างที่ไม่ต้องติดตาม เช่น `node_modules/`, ผลลัพธ์ของการ build และ `.env` มีผลเฉพาะกับไฟล์ที่ยังไม่เคยถูก commit ถ้าเผลอ commit ไปแล้วต้องแก้ที่ประวัติ ไม่ใช่แค่เพิ่มบรรทัด',en:'A file telling Git what not to track — `node_modules/`, build output, `.env`. It only affects files that were never committed; once something is in history, adding a line does not undo it.'},
          {term:'Conflict',th:'สถานการณ์ที่สอง branch แก้บรรทัดเดียวกัน ทำให้รวมงานอัตโนมัติไม่ได้ ต้องมีคนเปรียบเทียบและเลือกว่าจะเก็บแบบไหน',en:'When two branches edited the same lines, Git cannot merge automatically — a person must compare and choose which change to keep.'}
        ]
      },
      {
        id:'agent', name:{th:'AI Agent & Prompt',en:'AI Agent & Prompting'}, terms:[
          {term:'AI Agent',th:'AI ที่ต่อกับโฟลเดอร์โปรเจกต์ของเราได้ อ่านไฟล์ เสนอแผน แก้โค้ด และรันคำสั่งได้ แต่การตัดสินใจว่างานถูกต้องยังเป็นของคน',en:'An AI connected to your project folder that can read files, propose plans, edit code, and run commands — while the human still decides what is correct.'},
          {term:'Prompt',th:'ข้อความสั่งงานหรือคำถามที่เราให้ AI ยิ่งระบุบริบท ขอบเขต และผลลัพธ์ที่ต้องการชัดเท่าไร งานที่ได้ก็ตรงเท่านั้น',en:'The instruction or question you give the AI. The clearer the context, scope, and expected result, the closer the output lands.'},
          {term:'Context',th:'ข้อมูลชุดที่ AI มองเห็นในขณะทำงาน เช่น ไฟล์ที่เปิดและประวัติการคุย ถ้าบริบทน้อย AI จะเดาเองมากขึ้น',en:'What the AI can see while working — open files, conversation history, project rules. The less context it has, the more it guesses.'},
          {term:'Explore',th:'ขั้นแรกของการสั่งงาน ให้ Agent อ่านโครงสร้างโปรเจกต์และไฟล์ที่เกี่ยวข้องก่อน โดยยังไม่ให้แก้ไฟล์ใด ๆ',en:'The first step of any task: have the agent read the project structure and related files before it is allowed to change anything.'},
          {term:'Plan',th:'ขั้นให้ Agent เสนอขั้นตอนที่จะทำเป็นรายการก่อนลงมือ เราอนุมัติหรือแก้แผนได้ก่อนที่ไฟล์จะถูกแตะ',en:'The step where the agent proposes its steps as a list before starting. You approve or adjust the plan before any file is touched.'},
          {term:'AGENTS.md',th:'ไฟล์คู่มือประจำโปรเจกต์ที่ AI Agent อ่านก่อนทำงาน ใช้เขียนกติกาของทีม เช่น ห้ามแก้ main และห้ามใช้ข้อมูลผู้ป่วยจริง',en:'A per-project instruction file the AI agent reads before working. Team rules live here, such as never touching main and never using real patient data.'},
          {term:'Agent Skill',th:'ไฟล์คำสั่งที่เก็บไว้ในโปรเจกต์เพื่อให้ Agent ทำงานที่ทำซ้ำบ่อยตามขั้นตอนเดียวกันทุกครั้ง เช่น การร่าง Issue หรือ MR ตาม template ของทีม เหมาะกับงานที่มีรูปแบบตายตัว ไม่เหมาะกับงานที่ต้องตัดสินใจ',en:'An instruction file kept in the project so the agent performs a repeated task the same way every time — drafting an issue or an MR from the team template, for instance. Good for fixed shapes, wrong for decisions.'},
          {term:'Hallucination',th:'อาการที่ AI ตอบอย่างมั่นใจแต่ไม่ตรงความจริง เช่น อ้างฟังก์ชันหรือไฟล์ที่ไม่มีอยู่ในโปรเจกต์ ทางแก้คือตรวจด้วยหลักฐานเสมอ',en:'When the AI states something confidently but wrongly, such as citing a function or file that does not exist. The cure is verifying with evidence.'}
        ]
      },
      {
        id:'tools', name:{th:'เครื่องมือพื้นฐาน',en:'Essential Tools'}, terms:[
          {term:'Node.js',th:'โปรแกรมที่ทำให้รัน JavaScript บนเครื่องเราได้โดยไม่ต้องผ่าน browser เป็นตัวรันทั้ง Next.js และ Storybook',en:'The program that runs JavaScript on your machine without a browser. It powers both Next.js and Storybook.'},
          {term:'npm',th:'เครื่องมือที่มาพร้อม Node.js ใช้ติดตั้ง library และรันคำสั่งของโปรเจกต์ เช่น `npm install` และ `npm run dev`',en:'The tool bundled with Node.js. It installs libraries and runs project commands such as `npm install` and `npm run dev`.'},
          {term:'Dependency',th:'library ของคนอื่นที่โปรเจกต์นำมาใช้ ติดตั้งครั้งแรกด้วย `npm install` ตามรายการใน `package.json`',en:'Third-party libraries the project builds on, installed with `npm install` according to the list in `package.json`.'},
          {term:'package.json',th:'ไฟล์บัตรประจำตัวของโปรเจกต์ บอกชื่อโปรเจกต์ รายการ dependency และคำสั่ง run ทั้งหมด เช่น dev และ storybook',en:'The project ID card: its name, its dependency list, and every run script such as dev and storybook.'},
          {term:'Terminal',th:'หน้าต่างสำหรับพิมพ์คำสั่งลงเครื่องโดยตรง เช่น คำสั่ง git และ npm ที่ใช้ตลอดคอร์สนี้',en:'The window where you type commands directly, such as the git and npm commands used throughout this course.'},
          {term:'localhost & Port',alias:'localhost · port',th:'localhost คือเครื่องของเราเอง ส่วน port คือเลข “ประตู” ของแต่ละโปรแกรม เช่น Next.js อยู่ port 3000 และ Storybook อยู่ port 6006',en:'localhost means this machine; a port is the numbered “door” of each program — Next.js uses 3000 and Storybook uses 6006.'},
          {term:'Dev Server',th:'server สำหรับช่วงพัฒนาที่รันค้างไว้และรีเฟรชหน้าเว็บอัตโนมัติเมื่อไฟล์เปลี่ยน เปิดด้วยคำสั่ง `npm run dev`',en:'A development server that keeps running and refreshes the page automatically when files change. Start it with `npm run dev`.'},
          {term:'DevTools',th:'เครื่องมือของนักพัฒนาใน browser (กด F12) ใช้ดู error ในแท็บ Console และตรวจหน้าจอได้ทีละส่วน',en:'The developer tools inside the browser (F12). The Console tab shows errors; the inspector examines each part of the page.'},
          {term:'Environment Variable',alias:'.env',th:'ค่า config ของระบบ เช่น รหัสเชื่อมต่อฐานข้อมูล มักเก็บในไฟล์ `.env` ห้าม commit ขึ้น Git และห้ามนำไปใส่ใน prompt เด็ดขาด',en:'System configuration values such as database credentials, usually kept in a `.env` file. Never commit them to Git and never paste them into a prompt.'}
        ]
      },
      {
        id:'ui', name:{th:'Next.js, Component & Storybook',en:'Next.js, Components & Storybook'}, terms:[
          {term:'Next.js',th:'framework สร้างเว็บแอปพลิเคชันบนฐาน React เป็นตัวรันหน้าเว็บจริงของโปรเจกต์นี้ที่ localhost:3000',en:'A React-based web app framework. It runs the real page of this project at localhost:3000.'},
          {term:'React',th:'library สร้างหน้าจอโดยแบ่งเป็นชิ้นย่อยที่ใช้ซ้ำได้ (component) เป็นฐานที่ Next.js สร้างทับอีกชั้น',en:'A UI library built around reusable pieces (components). It is the foundation Next.js sits on.'},
          {term:'Component',th:'ชิ้นส่วนหน้าจอที่สร้างครั้งเดียวใช้ซ้ำได้ เช่น ปุ่ม ช่องค้นหา หรือการ์ดข้อมูลผู้ป่วย แล้วนำมาประกอบเป็นหน้าเว็บ',en:'A reusable screen part — a button, a search box, a patient card — that gets assembled into full pages.'},
          {term:'Props',th:'ข้อมูลที่ส่งเข้าไปใน component เพื่อให้แสดงผลต่างกันได้ เช่น ปุ่มแบบเดียวกันแต่ข้อความและสีต่างกัน',en:'Data passed into a component so the same component can render differently — one button, different labels and colors.'},
          {term:'State',th:'ข้อมูลภายใน component ที่เปลี่ยนค่าได้ระหว่างการใช้งาน เช่น กำลังโหลด มีรายการผลลัพธ์ หรือไม่พบข้อมูล',en:'Data inside a component that changes while it is used — loading, showing results, or showing nothing found.'},
          {term:'Page / Route',th:'หน้าเว็บหนึ่งหน้าที่เข้าถึงผ่าน URL ใน Next.js หน้าหนึ่งสร้างขึ้นจากการนำ component หลายชิ้นมาประกอบกัน',en:'One web page reached through a URL. In Next.js a page is assembled from several components.'},
          {term:'Storybook',th:'เครื่องมือที่เปิดดู component แยกทีละชิ้นที่ localhost:6006 ใช้ review หน้าตาและสถานะต่าง ๆ โดยไม่ต้องเปิดหน้าเว็บจริง',en:'A tool at localhost:6006 that shows components one at a time, so you review appearance and states without opening the real page.'},
          {term:'Storybook Story',th:'ไฟล์ที่บอกว่า Storybook จะแสดง component หนึ่งชิ้นในแต่ละสถานะอย่างไร ระวังสับสน: Storybook story ไม่ใช่ user story ในงาน BA',en:'A file that tells Storybook how to display one component in each of its states. Careful: a Storybook story is not a BA user story.'},
          {term:'Mock Data',th:'ข้อมูลสมมติที่สร้างขึ้นเพื่อให้หน้าเว็บแสดงผลได้โดยไม่ต้องต่อระบบจริง ทุกตัวอย่างในคอร์สนี้ใช้ mock data เท่านั้น',en:'Fake sample data that lets pages render without a real system. Every example in this course uses mock data only.'},
          {term:'Mock API',th:'การจำลอง API ด้วยข้อมูลปลอม เพื่อให้ฝั่งหน้าเว็บพัฒนาต่อได้ทันทีโดยไม่ต้องรอ backend เสร็จ',en:'A stand-in API returning fake data, so the frontend keeps moving without waiting for the backend.'},
          {term:'UI States',th:'สถานะหน้าจอที่ต้องออกแบบให้ครบก่อนถือว่างานเสร็จ เช่น ปกติ กำลังโหลด (loading) ไม่มีข้อมูล (empty) และเกิดข้อผิดพลาด (error)',en:'The screen conditions a finished design must cover: normal, loading, empty, and error.'}
        ]
      },
      {
        id:'quality', name:{th:'คุณภาพ & การส่งมอบ',en:'Quality & Delivery'}, terms:[
          {term:'Debugging',th:'กระบวนการไล่หาสาเหตุว่าทำไมระบบทำงานผิด เริ่มจากอ่าน error และหลักฐานก่อนเสมอ แล้วจึงให้ AI ช่วยวิเคราะห์หรือแก้',en:'The process of finding why the system misbehaves. Always read the error and evidence first, then let the AI help analyze or fix.'},
          {term:'Error & Log',th:'error คือข้อความบอกว่าอะไรพังและอยู่ไฟล์ไหน ส่วน log คือบันทึกการทำงานที่ช่วยไล่ลำดับเหตุการณ์ก่อนเกิดปัญหา',en:'An error says what broke and where; a log is the running record that helps you trace events leading up to it.'},
          {term:'Evidence',th:'หลักฐานยืนยันผลงาน เช่น ภาพหน้าจอ git diff หรือผลจาก terminal ใช้ตัดสินว่างานเสร็จจริง ไม่ใช่เชื่อคำสรุปของ AI',en:'Proof of the result — screenshots, git diff, terminal output. Decisions are made on evidence, not on the AI’s summary.'},
          {term:'Quality Gate',th:'จุดตรวจคุณภาพที่ต้องผ่านก่อนส่งงาน เช่น build สำเร็จ ไม่มี lint error และ Storybook แสดงผลครบทุกสถานะ',en:'Checks that must pass before handoff: build succeeds, no lint errors, and Storybook renders every state.'},
          {term:'Lint',th:'เครื่องมือตรวจคุณภาพโค้ดอัตโนมัติ เช่น จับตัวแปรที่ประกาศแล้วไม่ใช้ หรือรูปแบบโค้ดที่ไม่ตรงมาตรฐานของทีม',en:'An automated code checker that catches issues such as unused variables or style that breaks team standards.'},
          {term:'Scope',th:'ขอบเขตของงานหนึ่งชิ้น เวลาสั่ง AI ควรจำกัด scope ให้แคบ เช่น แก้ไฟล์เดียวหรือฟีเจอร์เดียว เพื่อให้ตรวจงานได้ง่าย',en:'The boundary of one task. When directing the AI, keep the scope narrow — one file or one feature — so review stays easy.'},
          {term:'Acceptance Criteria',th:'เงื่อนไขที่ต้องเป็นจริงก่อนถือว่างานผ่าน ใช้เป็นเช็กลิสต์ตรวจงาน AI และแนบไว้ใน Merge Request',en:'The conditions that must be true for work to count as done. Use them as the checklist for reviewing AI work and attach them to the Merge Request.'},
          {term:'User Story',th:'วิธีเขียน requirement จากมุมผู้ใช้ในรูป “ในฐานะ… ฉันต้องการ… เพื่อ…” ใช้เล่าเจตนา ส่วน Issue คือหน่วยงานที่ตัดมาจาก user story อีกที',en:'A requirement written from the user’s point of view — “as a…, I want…, so that…”. It carries intent; an issue is the unit of work cut from it.'},
          {term:'Definition of Done',alias:'DoD',th:'ข้อตกลงว่างานจะถือว่าเสร็จเมื่อมีหลักฐานอะไรครบบ้าง เช่น มี Storybook story ครบทุกสถานะ, lint/test/build ผ่าน และ review git diff แล้ว ต่างจาก AC ตรงที่ AC ผูกกับฟีเจอร์ แต่ DoD ใช้กับทุกงาน',en:'The team agreement on what evidence must exist before work counts as done — Storybook stories for every state, lint/test/build passing, git diff reviewed. ACs are per feature; the DoD applies to every task.'},
          {term:'UAT',alias:'User Acceptance Test',th:'การทดสอบโดยผู้ใช้งานจริงหรือเจ้าของงานก่อนขึ้นระบบจริง ยิ่งตรวจจุดผิดพลาดได้เร็วใน Storybook ยิ่งไม่ต้องแก้กันตอน UAT',en:'Testing by real users or the product owner before go-live. Catching issues early in Storybook means far less pain at UAT.'}
        ]
      }
    ]
  }
};
