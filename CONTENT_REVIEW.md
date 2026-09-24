# ทบทวนเนื้อหาคอร์สและ starter — 24 กันยายน 2026

## เป้าหมายการเรียน

ผู้เรียน PM, BA และ Product Design กำกับ AI coding agent ให้สร้าง **prototype ของ US-001 ที่กดใช้งานได้ด้วย mock data** ตรวจด้วยตนเอง และส่งต่อให้ Developer เปิดงาน ทำความเข้าใจ behavior และพัฒนาต่อจากฐานเดิมได้ คอร์สไม่สอนให้แก้โค้ดเองหรือเชื่อม HIS จริง

เส้นเรื่องหลัก: requirement → Issue/AC → branch/worktree → AI plan → design → component/state → Storybook → mock → working flow → debug → diff/checks → MR → developer handoff → Capstone เพิ่ม clinic availability ด้วย Issue/MR ใหม่และ regression evidence

จัดเป็น 3 วันหลักและ Capstone แยกอีก 3 ชั่วโมงหลัง US-001 merge แล้ว รวมประมาณ 20 ชั่วโมง เพื่อให้ branch ใหม่เริ่มจากฐานงานที่ผ่าน review จริง

## ตรวจทีละบท

| บท | จุดที่ต้องชัดสำหรับผู้เรียน | ผลหลังทบทวน |
| --- | --- | --- |
| 00 Prerequisites | เปิด starter และ Storybook ได้ก่อนเรียน; รู้ขอบเขตข้อมูล mock | ใช้ `npm ci` ที่ทำซ้ำได้และระบุ repo ของผู้เรียนเองเป็นที่ทำ Issue |
| 01 Mental Model | แยกหน้าที่คนกำหนด/ตรวจ กับ Agent ที่ลงมือ | ผลลัพธ์บทเป็นแผนที่ requirement → งานที่ตรวจได้ |
| 02 Requirement → Issue | Issue ต้องไม่หลุด AC ของ requirement จริง | ตัวอย่าง Issue ครบ AC 1–14 รวม Preview, Back, keyboard และ mobile; ใช้ DOB จาก mock แทนอายุจากภาพ |
| 03 Git Basics | อ่าน status/diff และ commit เฉพาะจุดที่ตรวจแล้ว | เชื่อมเลข Issue ไปยัง branch/commit/MR; ไม่แก้ `main` โดยตรง |
| 04 Worktree | งาน US-001 ใช้ branch/worktree เดียวตลอดคอร์ส | เลข `12` เป็นเพียงตัวอย่าง; กลับมาทำงานเดิมข้าม Agent session ได้ |
| 05 Explore → Plan | Agent ต้องอ่าน Issue และเสนอแผนก่อนแตะไฟล์ | คนตรวจ scope, state, file และวิธีพิสูจน์ก่อนอนุมัติ |
| 06 Next.js Literacy | อ่าน route, component, service, mock ได้โดยไม่ต้องเขียน React | ชี้ไฟล์จริงใน starter เพื่อเตรียมสั่งงานบทถัดไป |
| 07 Design System | ภาพอ้างอิงบอกภาพลักษณ์ ไม่ได้กำหนด behavior | `DESIGN.md` เก็บ token ใน YAML front matter, ระบุ Known Gaps, ตรวจ lint และให้คนเทียบกับภาพ |
| 08 Component & State | แปลง AC เป็นชิ้นส่วนและสถานะ UI | เพิ่มการตรวจ focus/keyboard และจอแคบในแผน |
| 09 Storybook | รีวิว component ทีละ state ก่อนประกอบหน้า | ใช้ mock คงที่และตรวจ state, focus, viewport |
| 10 Acceptance & Interaction | แยกภาพ state จากพฤติกรรมที่ต้องกด | โยง AC → story/interaction/manual step ที่รันซ้ำได้ |
| 11 Mock Data | จำลอง normal/slow/empty/error โดยไม่ต่อ backend | ยึดไฟล์ mock และ scenario ที่กำหนดซ้ำได้ |
| 12 Integration | ประกอบ flow บน `/opd/check-in` | เดิน Search → Select → Clinic → Preview/Back → Confirm/Success รวม keyboard/mobile |
| 13 Debugging | บอกอาการพร้อมหลักฐาน ไม่สั่ง Agent เดาสาเหตุ | ใช้ browser/terminal evidence แล้วตรวจผลแก้ |
| 14 Diff & Quality | ตรวจ scope ก่อนส่งออกนอกเครื่อง | ดู diff และ lint/test/build; ไม่มี secret, build output หรือไฟล์นอกงาน |
| 15 Delivery | MR ต้องมีหลักฐานและโยง Issue เดิม | sync main แล้วรัน checks ซ้ำ; MR มี Handoff และ `Closes #<เลขจริง>` |
| 16 Developer Handoff | คนที่ไม่ได้เข้าคอร์สต้องเปิดงานและทำต่อได้ | ใช้ AC → evidence, คำสั่งรัน, mock boundary และคำถามค้าง; Agent Skill เป็นทางเลือกภายหลัง |
| 17 Capstone | ประยุกต์ทักษะกับ behavior ใหม่บน prototype ที่ merge แล้ว | Issue/MR ใหม่เรื่องคลินิกไม่พร้อมรับ; mock GEN/ENT/Error, Storybook, interaction และ regression ของ US-001 |

ทุกบทมี intro, outcomes, learning content, practice พร้อม expected result ที่ซ่อนไว้, checkpoint, wrap-up และ “ผลลัพธ์ส่งต่อ” ภาษาไทย/อังกฤษ สไลด์ดึง outcome/diagram/output จาก `content.js` ชุดเดียวกับบทเรียน

## สิ่งที่แก้ให้ตรงกัน

- Landing page, สไลด์ และ glossary ใช้เป้าหมายเดียวกัน: prototype ที่ใช้งานได้และส่งต่อพร้อมหลักฐาน
- Starter ยังเป็นจุดตั้งต้นโดยตั้งใจ: หน้า check-in เป็น placeholder, Storybook มี TrainingNotice, มี mock search service; ผู้เรียนสร้าง component/flow ในบทเรียน
- Starter มี brief ของ Capstone ที่ `docs/capstone/clinic-availability.md` เป็นโจทย์ต่อยอด ไม่ใช่ implementation สำเร็จรูป
- Mock มี `Somchai Jaidee` และ `Somying Jaidee` เพื่อให้ค้น `Jaidee` ได้หลายผล; HN/DOB ใช้ค่าที่ตรวจซ้ำได้ ภาพหน้าจอเป็น visual reference และไม่มี Preview
- Lockfile รองรับ `npm ci`; ตัวอย่าง Git ใช้เลข Issue จริงแทน `12` ทุกตำแหน่ง
- หน้าเว็บซ่อนผลคาดหวังจนกดเปิด, ไม่สร้างปุ่มคัดลอกจาก inline code ที่เป็นเพียงคำอธิบาย, เก็บค่า progress ผิดรูปแบบได้โดยไม่พัง, และ skip link พา focus ไปเนื้อหาหลัก

## ขอบเขตการยืนยัน

ตรวจ syntax/โครงสร้างสองภาษาและ UI ใน browser ที่ render หน้า Issue จริง ตรวจ starter ด้วย `npm ci`, `npm run lint`, `npm run test`, `npm run build`, `npm run build-storybook` และ lint ตัวอย่าง DESIGN.md แล้ว งานฝึกที่ผู้เรียนจะให้ Agent สร้างจริงยังไม่อยู่ใน starter จึงต้องประเมิน prototype ของแต่ละคนจาก AC และหลักฐานระหว่างเรียน
