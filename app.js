// ============================================================
// VU ATTENDANCE — App Data Layer & State
// ============================================================

const ICONS = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  records: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  chevR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M9 18l6-6-6-6"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="17" height="17"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  trend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 5v14M5 12h14"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="17" height="17"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M17.94 17.94A10.94 10.94 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><path d="M1 1l22 22"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="64" height="64"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>`,
  inbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="40" height="40"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>`,
  schedule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><circle cx="8" cy="15" r="1"/><circle cx="12" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>`,
  qrcode: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01"/></svg>`,
  keypad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="1.5"/><circle cx="12" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/><circle cx="6" cy="18" r="1.5"/><circle cx="12" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>`,
  flag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V15"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
  fileSpreadsheet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 13v4"/></svg>`,
  alertTriangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 005 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 005 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 5a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09A1.65 1.65 0 0015 5a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09A1.65 1.65 0 0019.4 15z"/></svg>`,
  graduation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
};

// ---------- MOCK DATA ----------

const STUDENTS = [
  { id:1, name:"Aisha Nakamya", reg:"VU-CSF-2401-0001-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 2", pct:97, trend:"up" },
  { id:2, name:"Brian Ssemwanga", reg:"VU-CSF-2401-0002-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 2", pct:98, trend:"up" },
  { id:3, name:"Christine Namboozo", reg:"VU-CSF-2401-0003-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 1", pct:100, trend:"up" },
  { id:4, name:"David Kiggundu", reg:"VU-CSF-2401-0004-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 1", pct:55, trend:"down" },
  { id:5, name:"Esther Nalubega", reg:"VU-CSF-2401-0005-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 3", pct:91, trend:"up" },
  { id:6, name:"Fred Kibirige", reg:"VU-CSF-2401-0006-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 2", pct:8, trend:"down" },
  { id:7, name:"Grace Nakirya", reg:"VU-CSF-2401-0007-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 1", pct:100, trend:"up" },
  { id:8, name:"Hassan Mbazira", reg:"VU-CSF-2401-0008-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 2", pct:100, trend:"up" },
  { id:9, name:"Irene Namukasa", reg:"VU-CSF-2401-0009-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 3", pct:100, trend:"up" },
  { id:10, name:"Joseph Ssebuliba", reg:"VU-CSF-2401-0010-DAY", dept:"Computer Science", deptKey:"cs", year:"Year 1", pct:97, trend:"up" },
  { id:11, name:"Kampire Sarah", reg:"VU-BAF-2401-0011-DAY", dept:"Business Administration", deptKey:"biz", year:"Year 2", pct:100, trend:"up" },
  { id:12, name:"Lwanga Moses", reg:"VU-BAF-2401-0012-DAY", dept:"Business Administration", deptKey:"biz", year:"Year 1", pct:100, trend:"up" },
  { id:13, name:"Mary Tendo", reg:"VU-BAF-2401-0013-DAY", dept:"Business Administration", deptKey:"biz", year:"Year 3", pct:100, trend:"up" },
  { id:14, name:"Nabaale Annet", reg:"VU-BAF-2401-0014-DAY", dept:"Business Administration", deptKey:"biz", year:"Year 1", pct:100, trend:"up" },
  { id:15, name:"Opio Emmanuel", reg:"VU-BAF-2401-0015-DAY", dept:"Business Administration", deptKey:"biz", year:"Year 2", pct:8, trend:"down" },
  { id:16, name:"Prossy Namutebi", reg:"VU-BAF-2401-0016-DAY", dept:"Business Administration", deptKey:"biz", year:"Year 2", pct:100, trend:"up" },
  { id:17, name:"Ronald Ssali", reg:"VU-ENG-2401-0017-DAY", dept:"Engineering", deptKey:"eng", year:"Year 1", pct:null, trend:null },
  { id:18, name:"Sarah Nabukyeyo", reg:"VU-ENG-2401-0018-DAY", dept:"Engineering", deptKey:"eng", year:"Year 1", pct:null, trend:null },
  { id:19, name:"Timothy Wabwa", reg:"VU-ENG-2401-0019-DAY", dept:"Engineering", deptKey:"eng", year:"Year 2", pct:null, trend:null },
  { id:20, name:"Winnie Nakaddwa", reg:"VU-ENG-2401-0020-DAY", dept:"Engineering", deptKey:"eng", year:"Year 1", pct:null, trend:null },
];

const DEPT_COUNTS = [
  { key:"cs", label:"Computer Science", count:10 },
  { key:"biz", label:"Business Administration", count:6 },
  { key:"eng", label:"Engineering", count:4 },
];

const SCHEDULE = [
  { day:"Monday", isToday:false, lectures:[
    { code:"CSC3101", name:"Data Structures & Algorithms", dept:"Computer Science", lecturer:"Dr. Patrick Mukasa", room:"LT1 - Main Building", time:"08:00 – 10:00" },
    { code:"CSC3102", name:"Database Systems", dept:"Computer Science", lecturer:"Prof. Sarah Akwango", room:"LT3 - Main Building", time:"10:30 – 12:30" },
  ]},
  { day:"Tuesday", isToday:false, lectures:[
    { code:"BAR4301", name:"Financial Accounting", dept:"Business Administration", lecturer:"Mr. Alex Otim", room:"LT2 - Business Block", time:"07:00 – 11:00" },
    { code:"BAR4302", name:"Engineering Mathematics", dept:"Engineering", lecturer:"Dr. Grace Atim", room:"LT5 - Engineering Block", time:"14:00 – 16:00" },
  ]},
  { day:"Wednesday", isToday:true, lectures:[
    { code:"CSC3103", name:"Software Engineering", dept:"Computer Science", lecturer:"Dr. Patrick Mukasa", room:"LT1 - Main Building", time:"08:00 – 10:00", status:"pending" },
    { code:"BAR4303", name:"Marketing Management", dept:"Business Administration", lecturer:"Ms. Joy Tumwesigye", room:"LT2 - Business Block", time:"11:00 – 13:00" },
  ]},
  { day:"Thursday", isToday:false, lectures:[
    { code:"CSC3104", name:"Computer Networks", dept:"Computer Science", lecturer:"Prof. Sarah Akwango", room:"LT3 - Main Building", time:"14:00 – 16:00" },
    { code:"BAR4304", name:"Entrepreneurship", dept:"Business Administration", lecturer:"Mr. Alex Otim", room:"LT2 - Business Block", time:"08:00 – 11:00" },
    { code:"ENG4101", name:"Mechanics", dept:"Engineering", lecturer:"Dr. Grace Atim", room:"LT5 - Engineering Block", time:"13:00 – 15:00" },
  ]},
  { day:"Friday", isToday:false, lectures:[
    { code:"CSC3105", name:"Operating Systems", dept:"Computer Science", lecturer:"Mr. Ivan Tumwesigye", room:"LT1 - Main Building", time:"09:00 – 11:00" },
    { code:"BAR4305", name:"Business Statistics", dept:"Business Administration", lecturer:"Ms. Joy Tumwesigye", room:"LT2 - Business Block", time:"08:00 – 10:00" },
  ]},
];

const RECORDS = [
  { date:"2026-06-23", reg:"VU-CSF-2401-0001-DAY", name:"Aisha Nakamya", prog:"Computer Science", code:"CSC3101", course:"Data Structures & Algorithms", venue:"LT1 - Main Building", status:"present" },
  { date:"2026-06-23", reg:"VU-CSF-2401-0002-DAY", name:"Brian Ssemwanga", prog:"Computer Science", code:"CSC3101", course:"Data Structures & Algorithms", venue:"LT1 - Main Building", status:"present" },
  { date:"2026-06-23", reg:"VU-CSF-2401-0003-DAY", name:"Christine Namboozo", prog:"Computer Science", code:"CSC3101", course:"Data Structures & Algorithms", venue:"LT1 - Main Building", status:"present" },
  { date:"2026-06-23", reg:"VU-CSF-2401-0004-DAY", name:"David Kiggundu", prog:"Computer Science", code:"CSC3102", course:"Database Systems", venue:"LT3 - Main Building", status:"late" },
  { date:"2026-06-23", reg:"VU-CSF-2401-0006-DAY", name:"Fred Kibirige", prog:"Computer Science", code:"CSC3102", course:"Database Systems", venue:"LT3 - Main Building", status:"absent" },
  { date:"2026-06-22", reg:"VU-CSF-2401-0007-DAY", name:"Grace Nakirya", prog:"Computer Science", code:"CSC3101", course:"Data Structures & Algorithms", venue:"LT1 - Main Building", status:"present" },
  { date:"2026-06-22", reg:"VU-BAF-2401-0015-DAY", name:"Opio Emmanuel", prog:"Business Administration", code:"BAR4301", course:"Financial Accounting", venue:"LT2 - Business Block", status:"absent" },
  { date:"2026-06-22", reg:"VU-BAF-2401-0016-DAY", name:"Prossy Namutebi", prog:"Business Administration", code:"BAR4301", course:"Financial Accounting", venue:"LT2 - Business Block", status:"present" },
  { date:"2026-06-21", reg:"VU-BAF-2401-0013-DAY", name:"Mary Tendo", prog:"Business Administration", code:"BAR4301", course:"Financial Accounting", venue:"LT2 - Business Block", status:"present" },
  { date:"2026-06-21", reg:"VU-BAF-2401-0012-DAY", name:"Lwanga Moses", prog:"Business Administration", code:"BAR4301", course:"Financial Accounting", venue:"LT2 - Business Block", status:"present" },
];

const RECENT_SUBMISSIONS = [
  { name:"Prossy Namutebi", code:"BAR4301", date:"2026-06-23", status:"present" },
  { name:"Opio Emmanuel", code:"BAR4301", date:"2026-06-23", status:"absent" },
  { name:"Nabaale Annet", code:"BAR4301", date:"2026-06-22", status:"late" },
  { name:"Mary Tendo", code:"BAR4301", date:"2026-06-22", status:"present" },
  { name:"Lwanga Moses", code:"BAR4301", date:"2026-06-21", status:"present" },
];

const USERS = {
  "VU-CC-2401": { name:"Robert Kiggundu", role:"coordinator", dept:"Computer Science", password:"coord2026" },
  "VU-REG-001": { name:"Denis Okwir", role:"registrar", dept:null, password:"reg2026" },
  "VU-CSF-2401-0001-DAY": { name:"Aisha Nakamya", role:"student", dept:"Computer Science", year:"Year 2", reg:"VU-CSF-2401-0001-DAY", password:"student2026" },
};

// Courses the demo student is enrolled in
const STUDENT_COURSES = [
  { code:"CSC3101", name:"Data Structures & Algorithms", lecturer:"Dr. Patrick Mukasa", color:"#3b82f6" },
  { code:"CSC3102", name:"Database Systems", lecturer:"Prof. Sarah Akwango", color:"#8b5cf6" },
  { code:"CSC3103", name:"Software Engineering", lecturer:"Dr. Patrick Mukasa", color:"#0f766e" },
  { code:"CSC3104", name:"Computer Networks", lecturer:"Prof. Sarah Akwango", color:"#d97706" },
  { code:"CSC3105", name:"Operating Systems", lecturer:"Mr. Ivan Tumwesigye", color:"#dc2626" },
];

const STUDENT_ATTENDANCE_SUMMARY = { rate: 97, present: 28, late: 2, absent: 1, totalSessions: 31 };

// Live session — what the coordinator is currently broadcasting for students to check into.
// In a real backend this token rotates server-side; here we simulate rotation client-side.
let LIVE_SESSION = {
  active: true,
  courseCode:"CSC3103",
  courseName:"Software Engineering",
  room:"LT1 - Main Building",
  startedAt: Date.now(),
  windowSeconds: 600, // session stays open 10 min
  pin: "482917".slice(0,6),
  tokenRotateSeconds: 30,
  token: "QR-" + Math.random().toString(36).slice(2,10).toUpperCase(),
};

function regenerateSessionToken(){
  LIVE_SESSION.token = "QR-" + Math.random().toString(36).slice(2,10).toUpperCase();
}

const SUSPICION_LOG = [
  { id:1, student:"David Kiggundu", reason:"Same device used for 2 students within 4 minutes", severity:"high", course:"CSC3102", date:"2026-06-23 08:14", deviceId:"DVC-7F3A91" },
  { id:2, student:"Fred Kibirige", reason:"Check-in attempted after session window closed", severity:"medium", course:"CSC3102", date:"2026-06-23 08:42", deviceId:"DVC-2C88B0" },
  { id:3, student:"Opio Emmanuel", reason:"PIN entered matched but device fingerprint mismatch from enrollment", severity:"high", course:"BAR4301", date:"2026-06-22 07:21", deviceId:"DVC-91AAC4" },
];

// ---------- STATE ----------
const State = {
  role: null,
  user: null,
  attendanceDraft: {}, // studentId -> 'p'|'l'|'a'
  hasCheckedInToday: false,
  pinEntry: "",
};

function initials(name){
  return name.split(" ").map(p=>p[0]).slice(0,2).join("").toUpperCase();
}

function showToast(msg, icon){
  const t = document.getElementById('toast');
  t.innerHTML = (icon ? `<span style="display:flex">${icon}</span>` : '') + `<span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove('show'), 2200);
}

function openSheet(id){
  document.getElementById('sheetOverlay').classList.add('show');
  document.getElementById(id).classList.add('show');
}
function closeSheet(id){
  document.getElementById('sheetOverlay').classList.remove('show');
  document.getElementById(id).classList.remove('show');
}

// ============================================================
// LOGIN SCREEN
// ============================================================

function renderLogin(){
  return `
  <div class="login-screen" id="loginScreen">
    <div class="login-hero">
      <div class="login-logo">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      </div>
      <div class="login-uni-name">VICTORIA UNIVERSITY</div>
      <div class="login-uni-sub">Attendance Portal</div>
    </div>
    <div class="login-form-area">
      <div class="login-card">
        <h1>Welcome back</h1>
        <p class="sub">Sign in to the Attendance Portal</p>
        <form id="loginForm" onsubmit="return handleLogin(event)">
          <div class="field" style="margin-bottom:14px;">
            <label>Staff ID</label>
            <div class="search-wrap">
              ${ICONS.user}
              <input class="input" style="padding-left:38px;" id="staffId" placeholder="VU-CC-2401 or VU-REG-001" autocomplete="username" required />
            </div>
          </div>
          <div class="field">
            <label>Password</label>
            <div class="password-wrap">
              <input class="input" type="password" id="password" placeholder="Your password" autocomplete="current-password" required />
              <button type="button" class="eye-btn" onclick="togglePw()" id="eyeBtn">${ICONS.eye}</button>
            </div>
          </div>
          <div style="margin-top:20px;">
            <button class="btn btn-primary" type="submit">Sign In</button>
          </div>
        </form>
        <div class="demo-box">
          <div class="t">DEMO CREDENTIALS</div>
          <div class="demo-row" onclick="fillDemo('VU-CC-2401','coord2026')"><span>Class Coordinator:</span> <b>VU-CC-2401 / coord2026</b></div>
          <div class="demo-row" onclick="fillDemo('VU-REG-001','reg2026')"><span>Registrar:</span> <b>VU-REG-001 / reg2026</b></div>
          <div class="demo-row" onclick="fillDemo('VU-CSF-2401-0001-DAY','student2026')"><span>Student:</span> <b>VU-CSF-...-0001 / student2026</b></div>
        </div>
      </div>
      <div class="login-footer">Version 1.0 · Attendance Management System</div>
    </div>
  </div>`;
}

function togglePw(){
  const pw = document.getElementById('password');
  const btn = document.getElementById('eyeBtn');
  if(pw.type === 'password'){ pw.type='text'; btn.innerHTML = ICONS.eyeOff; }
  else { pw.type='password'; btn.innerHTML = ICONS.eye; }
}

function fillDemo(id, pw){
  document.getElementById('staffId').value = id;
  document.getElementById('password').value = pw;
}

function handleLogin(e){
  e.preventDefault();
  const id = document.getElementById('staffId').value.trim();
  const pw = document.getElementById('password').value;
  const user = USERS[id];
  if(!user || user.password !== pw){
    showToast("Invalid Staff ID or password");
    return false;
  }
  State.role = user.role;
  State.user = user;
  document.getElementById('app').setAttribute('data-role', user.role);
  boot();
  return false;
}

function logout(){
  State.role = null;
  State.user = null;
  State.attendanceDraft = {};
  renderApp();
}

// ============================================================
// COORDINATOR: DASHBOARD
// ============================================================

function renderCoordDashboard(){
  const today = SCHEDULE.find(d=>d.isToday);
  const todayLecture = today ? today.lectures[0] : null;
  return `
  <div class="app-header">
    <div class="brand-row">
      <div class="brand-id">
        <div class="brand-mark">VU</div>
        <div class="brand-text">
          <div class="name">Victoria University</div>
          <div class="sub">Class Coordinator Portal</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" onclick="showToast('No new notifications')">${ICONS.bell}</button>
        <button class="avatar-chip" onclick="logout()" title="Sign out">${initials(State.user.name)}</button>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="greeting-card">
      <h2>Good evening, ${State.user.name.split(' ')[0]}</h2>
      <p>Your all-in-one platform for managing class attendance.</p>
      <div class="greeting-tags">
        <span class="tag-pill">${State.user.id || 'VU-CC-2401'}</span>
        <span class="tag-pill">Wednesday</span>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-tile">
        <div class="top"><span class="label">My Lectures</span>
          <span class="stat-icon" style="background:#dbeafe; color:#1d4ed8;">${ICONS.book}</span></div>
        <div class="value">5</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Attendance Rate</span>
          <span class="stat-icon" style="background:#dcfce7; color:#16a34a;">${ICONS.trend}</span></div>
        <div class="value">87%</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Today's Classes</span>
          <span class="stat-icon" style="background:#ffedd5; color:#c2410c;">${ICONS.clock}</span></div>
        <div class="value">1</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Records Today</span>
          <span class="stat-icon" style="background:#f3e8ff; color:#9333ea;">${ICONS.check}</span></div>
        <div class="value">0</div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.chart} Attendance Overview</div>
      ${donutChart([
        {label:'Present', value:10, color:'#16a34a'},
        {label:'Late', value:3, color:'#d97706'},
        {label:'Absent', value:2, color:'#dc2626'},
      ])}
    </div>

    <div class="card section-card">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.clock} Today's Lectures</div>
      </div>
      ${todayLecture ? `
      <div class="lecture-row">
        <div>
          <div class="lecture-code">${todayLecture.code}</div>
          <div class="lecture-name">${todayLecture.name}</div>
          <div class="lecture-meta">${ICONS.clock}${todayLecture.time} · ${todayLecture.room}</div>
        </div>
        <span class="badge pending">Pending</span>
      </div>` : `<div class="empty-state"><div class="t">No lectures today</div></div>`}
    </div>

    <a class="quick-action solid" onclick="startSession()">
      <div class="qa-icon">${ICONS.qrcode}</div>
      <div class="qa-text"><div class="t">Start Live Session</div><div class="s">Broadcast QR & PIN for student check-in</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('markAttendance')">
      <div class="qa-icon">${ICONS.check}</div>
      <div class="qa-text"><div class="t">Mark Attendance</div><div class="s">Record today's attendance manually</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('schedule')">
      <div class="qa-icon">${ICONS.calendar}</div>
      <div class="qa-text"><div class="t">Lecture Schedule</div><div class="s">View all scheduled lectures</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
  </div>`;
}

function donutChart(segments){
  const total = segments.reduce((s,x)=>s+x.value,0);
  let cumulative = 0;
  const r = 54, cx=64, cy=64, sw=18;
  const circumference = 2*Math.PI*r;
  const arcs = segments.map(seg=>{
    const frac = seg.value/total;
    const dash = frac*circumference;
    const gap = circumference - dash;
    const offset = circumference*0.25 - (cumulative*circumference); // start at top
    cumulative += frac;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${seg.color}" stroke-width="${sw}"
      stroke-dasharray="${dash} ${gap}" stroke-dashoffset="${offset}" stroke-linecap="butt" transform="rotate(-90 ${cx} ${cy})" />`;
  }).join('');
  const legend = segments.map(seg=>`<div><span class="legend-dot" style="background:${seg.color}"></span>${seg.label} (${seg.value})</div>`).join('');
  return `
  <div class="donut-wrap">
    <svg width="128" height="128" viewBox="0 0 128 128">${arcs}</svg>
    <div class="donut-legend">${legend}</div>
  </div>`;
}

// ============================================================
// COORDINATOR: MARK ATTENDANCE
// ============================================================

const LECTURE_OPTIONS = [
  { id:'csc3101', label:'CSC3101 – Data Structures & Algorithms (Monday 08:00)', courseCode:'CSC3101', courseName:'Data Structures & Algorithms', lecturer:'Dr. Patrick Mukasa', room:'LT1 - Main Building', dayTime:'Monday · 08:00 – 10:00' },
  { id:'csc3103', label:'CSC3103 – Software Engineering (Wednesday 08:00)', courseCode:'CSC3103', courseName:'Software Engineering', lecturer:'Dr. Patrick Mukasa', room:'LT1 - Main Building', dayTime:'Wednesday · 08:00 – 10:00' },
];

let currentLectureId = 'csc3103';

function getCoordStudents(){
  return STUDENTS.filter(s=>s.deptKey==='cs').slice(0,10);
}

function renderMarkAttendance(){
  const lec = LECTURE_OPTIONS.find(l=>l.id===currentLectureId);
  const students = getCoordStudents();
  const counts = {p:0,l:0,a:0};
  students.forEach(s=>{ const v = State.attendanceDraft[s.id]; if(v) counts[v]++; });
  const unmarked = students.length - counts.p - counts.l - counts.a;

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div>
        <div class="page-title" style="font-size:18px;">Mark Attendance</div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="card card-pad">
      <div class="field" style="margin-bottom:14px;">
        <label>Select Lecture</label>
        <select class="select" onchange="changeLecture(this.value)">
          ${LECTURE_OPTIONS.map(l=>`<option value="${l.id}" ${l.id===currentLectureId?'selected':''}>${l.label}</option>`).join('')}
        </select>
      </div>
      <div class="field" style="margin-bottom:14px;">
        <label>Session Date</label>
        <input class="input" type="text" value="24-Jun-2026" readonly />
      </div>
      <div class="info-box">
        <div class="k">${lec.courseCode} — ${lec.courseName}</div>
        <div class="v" style="font-size:12px;">${lec.lecturer} · ${lec.room}</div>
        <div style="font-size:11px;color:var(--ink-faint);margin-top:3px;">${lec.dayTime}</div>
      </div>
    </div>

    <div class="status-chip-grid">
      <div class="status-chip present"><div class="n">${counts.p}</div><div class="l">Present</div></div>
      <div class="status-chip late"><div class="n">${counts.l}</div><div class="l">Late</div></div>
      <div class="status-chip absent"><div class="n">${counts.a}</div><div class="l">Absent</div></div>
      <div class="status-chip unmarked"><div class="n">${unmarked}</div><div class="l">Unmarked</div></div>
    </div>

    <div class="card card-pad">
      <div class="search-wrap" style="margin-bottom:12px;">
        ${ICONS.search}
        <input class="input" id="studentSearch" placeholder="Search student name or ID..." oninput="filterAttendanceList(this.value)" />
      </div>
      <div style="font-size:11px;font-weight:700;color:var(--ink-faint);margin-bottom:8px;">MARK ALL AS</div>
      <div class="markall-row">
        <button class="markall-btn present" onclick="markAll('p')">Present</button>
        <button class="markall-btn late" onclick="markAll('l')">Late</button>
        <button class="markall-btn absent" onclick="markAll('a')">Absent</button>
      </div>
      <div id="attendanceList" style="margin-top:8px;">
        ${students.map(s=>studentAttendanceRow(s)).join('')}
      </div>
    </div>
  </div>
  <div class="sticky-footer">
    <div class="sticky-footer-inner">
      ${unmarked>0 ? `<div style="font-size:11.5px;color:var(--late);font-weight:600;margin-bottom:10px;text-align:center;">⚠ ${unmarked} student${unmarked>1?'s':''} not yet marked</div>` : ''}
      <button class="btn btn-primary" onclick="submitAttendance()">${ICONS.check} Submit Attendance</button>
    </div>
  </div>`;
}

function studentAttendanceRow(s){
  const v = State.attendanceDraft[s.id];
  return `
  <div class="student-row" data-student-row data-name="${s.name.toLowerCase()}" data-reg="${s.reg.toLowerCase()}">
    <div class="avatar">${initials(s.name)}</div>
    <div class="student-info">
      <div class="student-name">${s.name}</div>
      <div class="student-meta">${s.reg}</div>
    </div>
    <div class="pla-toggle">
      <button class="pla-btn p ${v==='p'?'on':''}" onclick="setAttendance(${s.id},'p')">P</button>
      <button class="pla-btn l ${v==='l'?'on':''}" onclick="setAttendance(${s.id},'l')">L</button>
      <button class="pla-btn a ${v==='a'?'on':''}" onclick="setAttendance(${s.id},'a')">A</button>
    </div>
  </div>`;
}

function setAttendance(id, val){
  if(State.attendanceDraft[id] === val){
    delete State.attendanceDraft[id];
  } else {
    State.attendanceDraft[id] = val;
  }
  rerenderCurrentScreen();
}

function markAll(val){
  getCoordStudents().forEach(s=>{ State.attendanceDraft[s.id] = val; });
  rerenderCurrentScreen();
  showToast(`All students marked ${val==='p'?'Present':val==='l'?'Late':'Absent'}`);
}

function changeLecture(id){
  currentLectureId = id;
  State.attendanceDraft = {};
  rerenderCurrentScreen();
}

function toggleNoResultsState(containerId, visibleCount, message){
  let el = document.getElementById(containerId + 'NoResults');
  const container = document.getElementById(containerId);
  if(!container) return;
  if(visibleCount === 0){
    if(!el){
      el = document.createElement('div');
      el.id = containerId + 'NoResults';
      el.className = 'empty-state';
      el.style.padding = '24px 10px';
      el.innerHTML = `${ICONS.search.replace(/width="\d+" height="\d+"/,'width="32" height="32"')}<div class="t">No matches found</div><div class="s">${message || 'Try a different search term'}</div>`;
      container.appendChild(el);
    }
    el.style.display = 'block';
  } else if(el){
    el.style.display = 'none';
  }
}

function filterAttendanceList(q){
  q = q.toLowerCase();
  let visible = 0;
  document.querySelectorAll('[data-student-row]').forEach(row=>{
    const match = row.dataset.name.includes(q) || row.dataset.reg.includes(q);
    row.style.display = match ? 'flex' : 'none';
    if(match) visible++;
  });
  toggleNoResultsState('attendanceList', visible, 'Try searching a different name or ID');
}

function submitAttendance(){
  const students = getCoordStudents();
  const marked = students.filter(s=>State.attendanceDraft[s.id]).length;
  if(marked === 0){
    showToast("Mark at least one student before submitting");
    return;
  }
  showToast(`Attendance submitted for ${marked} of ${students.length} students`, ICONS.checkCircle.replace('width="64" height="64"','width="16" height="16"'));
  setTimeout(()=>{ State.attendanceDraft = {}; navigate('dashboard'); }, 900);
}

// ============================================================
// COORDINATOR: LECTURE SCHEDULE  (also reused for Registrar "All Schedules")
// ============================================================

function renderSchedule(opts){
  opts = opts || {};
  const title = opts.title || "My Lecture Schedule";
  const subtitle = opts.subtitle || "Weekly timetable overview";
  const showDeptFilter = !!opts.showDeptFilter;
  const backTarget = opts.backTarget || 'dashboard';

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('${backTarget}')">${ICONS.back}</button>
      <div>
        <div class="page-title" style="font-size:18px;">${title}</div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="search-wrap">
      ${ICONS.search}
      <input class="input" placeholder="Search course, lecturer or venue..." oninput="filterSchedule(this.value)" id="scheduleSearch" />
    </div>
    <div class="field-row">
      <div class="field">
        <select class="select" id="dayFilter" onchange="filterSchedule()">
          <option value="">All Days</option>
          ${SCHEDULE.map(d=>`<option value="${d.day}">${d.day}</option>`).join('')}
        </select>
      </div>
      ${showDeptFilter ? `
      <div class="field">
        <select class="select" id="deptFilter" onchange="filterSchedule()">
          <option value="">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Engineering">Engineering</option>
        </select>
      </div>` : ''}
    </div>
    <div id="scheduleList">
      ${SCHEDULE.map(d=>scheduleDayGroup(d, showDeptFilter)).join('')}
    </div>
  </div>`;
}

function scheduleDayGroup(d, showDept){
  return `
  <div class="day-group" data-day-group data-day="${d.day}">
    <div class="day-header ${d.isToday?'today-day':''}">
      <span>${ICONS.calendar.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="14" height="14" style="margin-right:6px;vertical-align:-2px;"')}${d.day} ${d.isToday?'<span class="badge today" style="margin-left:6px;">Today</span>':''}</span>
      <span class="day-count">${d.lectures.length} lecture${d.lectures.length>1?'s':''}</span>
    </div>
    <div class="card card-pad" style="display:flex;flex-direction:column;gap:10px;">
      ${d.lectures.map(l=>`
      <div class="lecture-row" data-lecture-row data-dept="${l.dept}" data-search="${(l.code+' '+l.name+' '+l.lecturer+' '+l.room).toLowerCase()}">
        <div>
          <div class="lecture-code">${l.code} <span class="badge dept ${l.dept.includes('Business')?'biz':l.dept.includes('Engineering')?'eng':''}" style="margin-left:4px;">${l.dept.split(' ')[0]}</span></div>
          <div class="lecture-name">${l.name}</div>
          <div class="lecture-meta">${ICONS.user} ${l.lecturer}</div>
          <div class="lecture-meta">${ICONS.pin} ${l.room}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;">
          <div class="lecture-meta" style="margin-top:0;font-weight:700;color:var(--ink-soft);">${l.time}</div>
          ${l.status==='pending' ? '<span class="badge pending" style="margin-top:8px;display:inline-block;">Pending</span>' : ''}
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function filterSchedule(){
  const q = (document.getElementById('scheduleSearch')?.value || '').toLowerCase();
  const day = document.getElementById('dayFilter')?.value || '';
  const dept = document.getElementById('deptFilter')?.value || '';

  let anyGroupVisible = false;
  document.querySelectorAll('[data-day-group]').forEach(group=>{
    const dayMatch = !day || group.dataset.day === day;
    let anyVisible = false;
    group.querySelectorAll('[data-lecture-row]').forEach(row=>{
      const textMatch = !q || row.dataset.search.includes(q);
      const deptMatch = !dept || row.dataset.dept === dept;
      const visible = textMatch && deptMatch;
      row.style.display = visible ? 'flex' : 'none';
      if(visible) anyVisible = true;
    });
    const groupVisible = dayMatch && anyVisible;
    group.style.display = groupVisible ? 'block' : 'none';
    if(groupVisible) anyGroupVisible = true;
  });
  toggleNoResultsState('scheduleList', anyGroupVisible ? 1 : 0, 'Try a different search, day, or department');
}

// ============================================================
// SHARED: STUDENT REGISTER
// ============================================================

let regNoCounter = 21;

function renderStudents(opts){
  opts = opts || {};
  const backTarget = opts.backTarget || 'dashboard';
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('${backTarget}')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Student Register</div>
    </div>
  </div>
  <div class="content">
    <div class="dept-chip-row">
      ${DEPT_COUNTS.map(d=>`
      <div class="dept-chip ${d.key}">
        <div class="n">${d.count}</div>
        <div class="l">${d.label}</div>
      </div>`).join('')}
    </div>

    <div class="search-wrap">
      ${ICONS.search}
      <input class="input" placeholder="Search by name or registration number..." oninput="filterStudents()" id="studentRegSearch" />
    </div>
    <div class="field-row">
      <div class="field">
        <select class="select" id="studentDeptFilter" onchange="filterStudents()">
          <option value="">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Engineering">Engineering</option>
        </select>
      </div>
      <div class="field">
        <select class="select" id="studentYearFilter" onchange="filterStudents()">
          <option value="">All Years</option>
          <option value="Year 1">Year 1</option>
          <option value="Year 2">Year 2</option>
          <option value="Year 3">Year 3</option>
        </select>
      </div>
    </div>

    <div class="card card-pad">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.users} Students</div>
        <span style="font-size:11px;color:var(--ink-faint);font-weight:600;">${STUDENTS.length} enrolled</span>
      </div>
      <div id="studentList">
        ${STUDENTS.map(s=>studentRegisterRow(s)).join('')}
      </div>
    </div>
  </div>
  <div class="sticky-footer">
    <div class="sticky-footer-inner" style="padding:8px;">
      <button class="btn btn-primary" onclick="openEnrollSheet()">${ICONS.plus} Enroll Student</button>
    </div>
  </div>

  <div class="sheet" id="enrollSheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">
      <span>Enroll New Student</span>
      <button onclick="closeSheet('enrollSheet')">${ICONS.close}</button>
    </div>
    <div style="font-size:12px;color:var(--ink-soft);margin:-8px 0 16px;">Fill in the student details below</div>
    <form id="enrollForm" onsubmit="return handleEnroll(event)" style="display:flex;flex-direction:column;gap:14px;">
      <div class="info-box">
        <div class="k">Registration No. (auto-generated)</div>
        <div class="v" id="regNoPreview">VU-CSF-2601-${String(regNoCounter).padStart(4,'0')}-DAY</div>
      </div>
      <div class="field">
        <label>Full Name <span class="req">*</span></label>
        <input class="input" id="enrollName" placeholder="e.g. Aisha Nakamya" required />
      </div>
      <div class="field">
        <label>Email Address <span class="req">*</span></label>
        <input class="input" type="email" id="enrollEmail" placeholder="e.g. a.nakamya@vu.ac.ug" required />
      </div>
      <div class="field">
        <label>Department / Programme <span class="req">*</span></label>
        <select class="select" id="enrollDept" onchange="updateRegPreview()">
          <option value="cs">Computer Science</option>
          <option value="biz">Business Administration</option>
          <option value="eng">Engineering</option>
        </select>
      </div>
      <div class="field-row">
        <div class="field">
          <label>Year of Study <span class="req">*</span></label>
          <select class="select" id="enrollYear">
            <option>Year 1</option><option>Year 2</option><option>Year 3</option>
          </select>
        </div>
        <div class="field">
          <label>Study Mode <span class="req">*</span></label>
          <select class="select" id="enrollMode" onchange="updateRegPreview()">
            <option value="DAY">DAY</option><option value="EVE">EVENING</option>
          </select>
        </div>
      </div>
      <div class="btn-row" style="margin-top:6px;">
        <button type="button" class="btn btn-ghost" onclick="closeSheet('enrollSheet')">Cancel</button>
        <button type="submit" class="btn btn-primary">${ICONS.check} Enroll Student</button>
      </div>
    </form>
  </div>`;
}

function studentRegisterRow(s){
  const hasPct = s.pct !== null;
  const cls = hasPct ? (s.pct >= 75 ? 'good' : 'bad') : '';
  const deptBadgeCls = s.deptKey==='biz' ? 'biz' : s.deptKey==='eng' ? 'eng' : '';
  return `
  <div class="student-card-row" data-student-card data-name="${s.name.toLowerCase()}" data-reg="${s.reg.toLowerCase()}" data-dept="${s.dept}" data-year="${s.year}">
    <div class="avatar">${initials(s.name)}</div>
    <div class="student-info">
      <div class="student-name">${s.name}</div>
      <div class="student-meta">${s.reg} · ${s.year}</div>
      <span class="badge dept ${deptBadgeCls}" style="margin-top:4px;display:inline-block;">${s.dept}</span>
    </div>
    ${hasPct ? `
    <div class="attendance-pct ${cls}">${s.trend==='up'?'↑':'↓'} ${s.pct}%<span class="lbl">attendance</span></div>
    ` : `<div class="attendance-pct" style="color:var(--ink-faint);font-weight:600;font-size:11px;">no records</div>`}
  </div>`;
}

function filterStudents(){
  const q = (document.getElementById('studentRegSearch')?.value || '').toLowerCase();
  const dept = document.getElementById('studentDeptFilter')?.value || '';
  const year = document.getElementById('studentYearFilter')?.value || '';
  let visibleCount = 0;
  document.querySelectorAll('[data-student-card]').forEach(row=>{
    const textMatch = !q || row.dataset.name.includes(q) || row.dataset.reg.includes(q);
    const deptMatch = !dept || row.dataset.dept === dept;
    const yearMatch = !year || row.dataset.year === year;
    const visible = textMatch && deptMatch && yearMatch;
    row.style.display = visible ? 'flex' : 'none';
    if(visible) visibleCount++;
  });
  toggleNoResultsState('studentList', visibleCount, 'Try adjusting your search or filters');
}

function openEnrollSheet(){
  updateRegPreview();
  openSheet('enrollSheet');
}

function updateRegPreview(){
  const deptMap = {cs:'CSF', biz:'BAF', eng:'ENG'};
  const dept = document.getElementById('enrollDept')?.value || 'cs';
  const mode = document.getElementById('enrollMode')?.value || 'DAY';
  const preview = document.getElementById('regNoPreview');
  if(preview) preview.textContent = `VU-${deptMap[dept]}-2601-${String(regNoCounter).padStart(4,'0')}-${mode}`;
}

function handleEnroll(e){
  e.preventDefault();
  const name = document.getElementById('enrollName').value.trim();
  if(!name){ return false; }
  regNoCounter++;
  closeSheet('enrollSheet');
  showToast(`${name} enrolled successfully`, ICONS.check.replace(/width="\d+" height="\d+"/,'width="15" height="15"'));
  document.getElementById('enrollForm').reset();
  return false;
}

// ============================================================
// STUDENT: HOME
// ============================================================

function getStudentTodayLectures(){
  const today = SCHEDULE.find(d=>d.isToday);
  if(!today) return [];
  const myCourseCodes = STUDENT_COURSES.map(c=>c.code);
  return today.lectures.filter(l=>myCourseCodes.includes(l.code));
}

function renderStudentHome(){
  const u = State.user;
  const todayLectures = getStudentTodayLectures();
  const sessionOpenForMe = LIVE_SESSION.active && STUDENT_COURSES.some(c=>c.code===LIVE_SESSION.courseCode);

  return `
  <div class="app-header">
    <div class="brand-row">
      <div class="brand-id">
        <div class="brand-mark">VU</div>
        <div class="brand-text">
          <div class="name">Victoria University</div>
          <div class="sub">Student Portal</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" onclick="showToast('No new notifications')">${ICONS.bell}</button>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="profile-card">
      <div class="profile-avatar-lg">${initials(u.name)}</div>
      <div class="profile-name">${u.name}</div>
      <div class="profile-reg">${u.reg}</div>
      <div class="profile-meta-row">
        <span class="tag-pill">${u.dept}</span>
        <span class="tag-pill">${u.year}</span>
      </div>
    </div>

    ${sessionOpenForMe ? (State.hasCheckedInToday ? `
    <button class="checkin-cta" onclick="navigate('checkin')" style="background:linear-gradient(135deg, var(--present), #0d8a3e);">
      <div class="ci-icon">${ICONS.checkCircle.replace(/width="\d+" height="\d+"/,'width="26" height="26"')}</div>
      <div class="ci-title">You're checked in</div>
      <div class="ci-sub">${LIVE_SESSION.courseName} · marked Present</div>
    </button>` : `
    <button class="checkin-cta" onclick="navigate('checkin')">
      <div class="ci-icon">${ICONS.qrcode}</div>
      <div class="ci-title"><span class="live-pulse"></span>${LIVE_SESSION.courseName} session is live</div>
      <div class="ci-sub">Tap to check in now · ${LIVE_SESSION.room}</div>
    </button>`) : `
    <div class="card card-pad" style="text-align:center;">
      <div class="empty-state" style="padding:18px 10px;">
        ${ICONS.inbox}
        <div class="t">No active session right now</div>
        <div class="s">Check-in opens when your lecturer starts a session</div>
      </div>
    </div>`}

    <div class="stat-grid">
      <div class="stat-tile">
        <div class="top"><span class="label">Attendance Rate</span>
          <span class="stat-icon" style="background:#ccfbf1; color:#0f766e;">${ICONS.trend}</span></div>
        <div class="value">${STUDENT_ATTENDANCE_SUMMARY.rate}%</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Courses Enrolled</span>
          <span class="stat-icon" style="background:#dbeafe; color:#1d4ed8;">${ICONS.book}</span></div>
        <div class="value">${STUDENT_COURSES.length}</div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.clock} Today's Classes</div>
      </div>
      ${todayLectures.length ? todayLectures.map(l=>`
        <div class="lecture-row" style="margin-bottom:8px;">
          <div>
            <div class="lecture-code">${l.code}</div>
            <div class="lecture-name">${l.name}</div>
            <div class="lecture-meta">${ICONS.clock}${l.time} · ${l.room}</div>
          </div>
          ${l.code===LIVE_SESSION.courseCode && LIVE_SESSION.active ? '<span class="badge today">Live</span>' : ''}
        </div>`).join('') : `<div class="empty-state" style="padding:14px;"><div class="t" style="font-size:12.5px;">No classes scheduled today</div></div>`}
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.book} My Courses</div>
      ${STUDENT_COURSES.map(c=>`
        <div class="course-pill-row">
          <span class="course-dot" style="background:${c.color};"></span>
          <div class="ctext">
            <div class="ccode">${c.code} — ${c.name}</div>
            <div class="cname">${c.lecturer}</div>
          </div>
        </div>`).join('')}
    </div>

    <a class="quick-action" onclick="navigate('timetable')">
      <div class="qa-icon">${ICONS.calendar}</div>
      <div class="qa-text"><div class="t">My Timetable</div><div class="s">View your full weekly schedule</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('profile')">
      <div class="qa-icon">${ICONS.user}</div>
      <div class="qa-text"><div class="t">Profile & Settings</div><div class="s">View ID, contact info, preferences</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
  </div>`;
}

// ============================================================
// STUDENT: TIMETABLE (reuses schedule rendering, filtered to enrolled courses)
// ============================================================

function renderStudentTimetable(){
  const myCourseCodes = STUDENT_COURSES.map(c=>c.code);
  const filteredSchedule = SCHEDULE.map(d=>({
    ...d,
    lectures: d.lectures.filter(l=>myCourseCodes.includes(l.code))
  })).filter(d=>d.lectures.length>0);

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">My Timetable</div>
    </div>
  </div>
  <div class="content">
    ${filteredSchedule.map(d=>scheduleDayGroup(d, false)).join('')}
  </div>`;
}

// ============================================================
// STUDENT: PROFILE & SETTINGS
// ============================================================

function renderStudentProfile(){
  const u = State.user;
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Profile & Settings</div>
    </div>
  </div>
  <div class="content">
    <div class="profile-card">
      <div class="profile-avatar-lg">${initials(u.name)}</div>
      <div class="profile-name">${u.name}</div>
      <div class="profile-reg">${u.reg}</div>
    </div>

    <div class="card card-pad">
      <div class="section-title">${ICONS.graduation} Academic Information</div>
      <div class="info-list">
        <div class="info-list-row"><span class="k">${ICONS.user} Full Name</span><span class="v">${u.name}</span></div>
        <div class="info-list-row"><span class="k">${ICONS.pin} Registration No.</span><span class="v">${u.reg}</span></div>
        <div class="info-list-row"><span class="k">${ICONS.book} Programme</span><span class="v">${u.dept}</span></div>
        <div class="info-list-row"><span class="k">${ICONS.calendar} Year of Study</span><span class="v">${u.year}</span></div>
        <div class="info-list-row"><span class="k">${ICONS.mail} Email</span><span class="v" style="font-size:11.5px;">a.nakamya@vu.ac.ug</span></div>
      </div>
    </div>

    <div class="card card-pad">
      <div class="section-title">${ICONS.settings} Preferences</div>
      <div class="info-list-row">
        <span class="k">${ICONS.bell} Push Notifications</span>
        <label style="position:relative; display:inline-block; width:42px; height:24px;">
          <input type="checkbox" checked style="opacity:0;width:0;height:0;" onchange="showToast(this.checked ? 'Notifications enabled' : 'Notifications disabled')">
          <span style="position:absolute;inset:0;background:var(--theme-primary);border-radius:999px;"></span>
          <span style="position:absolute;top:3px;right:3px;width:18px;height:18px;background:#fff;border-radius:50%;"></span>
        </label>
      </div>
    </div>

    <button class="btn btn-ghost" onclick="logout()" style="color:var(--absent); border-color:#fecaca;">${ICONS.logout} Sign Out</button>
  </div>`;
}

// ============================================================
// STUDENT: CHECK-IN (QR scan + PIN entry)
// ============================================================

let checkinMethod = 'qr';

function renderCheckIn(){
  const sessionOpen = LIVE_SESSION.active && STUDENT_COURSES.some(c=>c.code===LIVE_SESSION.courseCode);
  if(!sessionOpen){
    return `
    <div class="app-header">
      <div class="header-back">
        <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
        <div class="page-title" style="font-size:18px;">Check In</div>
      </div>
    </div>
    <div class="content">
      <div class="error-state">
        <div class="err-icon">${ICONS.alertTriangle}</div>
        <div class="t">No active session</div>
        <div class="s">There's no live check-in session for your courses right now.</div>
        <button class="btn btn-primary" onclick="navigate('home')" style="max-width:200px;margin:0 auto;">Back to Home</button>
      </div>
    </div>`;
  }

  if(State.hasCheckedInToday){
    return `
    <div class="app-header">
      <div class="header-back">
        <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
        <div class="page-title" style="font-size:18px;">Check In</div>
      </div>
    </div>
    <div class="content">
      <div class="empty-state" style="padding:50px 20px;">
        ${ICONS.checkCircle}
        <div class="t" style="margin-top:14px;">You're checked in</div>
        <div class="s">${LIVE_SESSION.courseName} · marked Present</div>
      </div>
    </div>`;
  }

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('home')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Check In</div>
    </div>
  </div>
  <div class="content">
    <div class="info-box" style="text-align:center;">
      <div class="k">${LIVE_SESSION.courseCode} — ${LIVE_SESSION.courseName}</div>
      <div class="v" style="font-size:13px;">${LIVE_SESSION.room}</div>
    </div>

    <div class="method-tabs">
      <button class="method-tab ${checkinMethod==='qr'?'active':''}" onclick="setCheckinMethod('qr')">${ICONS.qrcode} Scan QR</button>
      <button class="method-tab ${checkinMethod==='pin'?'active':''}" onclick="setCheckinMethod('pin')">${ICONS.keypad} Enter PIN</button>
    </div>

    <div id="checkinMethodArea">
      ${checkinMethod === 'qr' ? renderQrScanArea() : renderPinEntryArea()}
    </div>

    <div class="card card-pad" style="background:#f0fdfa; border-color:#ccfbf1;">
      <div class="section-title" style="margin-bottom:8px; color:#0f766e;">${ICONS.shield} Anti-fraud protection</div>
      <div style="font-size:11.5px; color:var(--ink-soft); line-height:1.5;">Each check-in is tied to this device and a one-time session code. Checking in for someone else, or from a shared/duplicate device, will be flagged for review.</div>
    </div>
  </div>`;
}

function setCheckinMethod(m){
  checkinMethod = m;
  State.pinEntry = "";
  rerenderCurrentScreen();
}

function renderQrScanArea(){
  return `
  <div class="card card-pad" style="background:#0b1320;">
    <div class="scan-frame-wrap">
      <div class="scan-frame-corner tl"></div>
      <div class="scan-frame-corner tr"></div>
      <div class="scan-frame-corner bl"></div>
      <div class="scan-frame-corner br"></div>
      <div class="scan-laser"></div>
      <div style="color:rgba(255,255,255,0.4);">${ICONS.camera.replace(/width="\d+" height="\d+"/,'width="42" height="42"')}</div>
    </div>
    <div class="scan-hint" style="margin-top:14px;">Point your camera at the lecturer's QR code</div>
  </div>
  <button class="btn btn-primary" onclick="simulateQrScan()">${ICONS.qrcode} Simulate Successful Scan</button>
  <div style="text-align:center; font-size:10.5px; color:var(--ink-faint);">Camera access required · simulated for this preview</div>`;
}

function renderPinEntryArea(){
  const digits = State.pinEntry.padEnd(6,' ').split('');
  return `
  <div class="card card-pad">
    <div style="text-align:center; font-size:12.5px; color:var(--ink-soft); font-weight:600;">Enter the 6-digit code shown on the lecturer's screen</div>
    <div class="pin-display">
      ${digits.map(d=>`<div class="pin-digit-box ${d.trim()?'filled':''}">${d.trim()}</div>`).join('')}
    </div>
    <div class="keypad">
      ${[1,2,3,4,5,6,7,8,9].map(n=>`<button class="keypad-btn" onclick="pinPress('${n}')">${n}</button>`).join('')}
      <button class="keypad-btn empty"></button>
      <button class="keypad-btn" onclick="pinPress('0')">0</button>
      <button class="keypad-btn" onclick="pinBackspace()">⌫</button>
    </div>
  </div>`;
}

function pinPress(digit){
  if(State.pinEntry.length >= 6) return;
  State.pinEntry += digit;
  if(State.pinEntry.length === 6){
    rerenderCurrentScreen();
    setTimeout(()=>verifyPin(), 250);
    return;
  }
  rerenderCurrentScreen();
}

function pinBackspace(){
  State.pinEntry = State.pinEntry.slice(0,-1);
  rerenderCurrentScreen();
}

function verifyPin(){
  if(State.pinEntry === LIVE_SESSION.pin){
    completeCheckIn();
  } else {
    showToast("Incorrect code — check with your lecturer");
    State.pinEntry = "";
    rerenderCurrentScreen();
  }
}

function simulateQrScan(){
  showToast("QR code recognized");
  setTimeout(()=>completeCheckIn(), 500);
}

function completeCheckIn(){
  State.hasCheckedInToday = true;
  rerenderCurrentScreen();
  showToast(`Checked in to ${LIVE_SESSION.courseName}`, ICONS.checkCircle.replace(/width="\d+" height="\d+"/,'width="16" height="16"'));
}

// ============================================================
// COORDINATOR: START SESSION (QR + PIN broadcast)
// ============================================================

function renderStartSession(){
  const elapsed = Math.floor((Date.now() - LIVE_SESSION.startedAt)/1000);
  const remaining = Math.max(0, LIVE_SESSION.windowSeconds - elapsed);
  const mins = Math.floor(remaining/60);
  const secs = remaining%60;

  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Live Session</div>
    </div>
  </div>
  <div class="content">
    <div class="info-box" style="text-align:center;">
      <div class="k">${LIVE_SESSION.courseCode} — ${LIVE_SESSION.courseName}</div>
      <div class="v" style="font-size:13px;">${LIVE_SESSION.room}</div>
    </div>

    <div class="card card-pad" style="align-items:center; display:flex; flex-direction:column; gap:14px;">
      <div class="qr-display-wrap">
        <div id="qrCanvasHolder" class="qr-code-box"></div>
      </div>
      <div style="display:flex; align-items:center; gap:8px; font-size:11.5px; color:var(--ink-faint); font-weight:600;">
        ${ICONS.refresh.replace(/<svg /,'<svg style="width:13px;height:13px;" ')} Refreshes every ${LIVE_SESSION.tokenRotateSeconds}s to prevent screenshots
      </div>
    </div>

    <div class="card card-pad" style="align-items:center; display:flex; flex-direction:column; gap:10px;">
      <div style="font-size:11.5px; font-weight:700; color:var(--ink-soft);">OR STUDENTS CAN ENTER THIS CODE</div>
      <div class="session-pin-display">
        ${LIVE_SESSION.pin.split('').map(d=>`<div class="session-pin-digit">${d}</div>`).join('')}
      </div>
    </div>

    <div class="status-chip-grid" style="grid-template-columns:repeat(2,1fr);">
      <div class="status-chip present"><div class="n">${remaining>0?`${mins}:${String(secs).padStart(2,'0')}`:'Closed'}</div><div class="l">Time Left</div></div>
      <div class="status-chip unmarked"><div class="n" id="liveCheckinCount">7</div><div class="l">Checked In</div></div>
    </div>

    <button class="btn btn-ghost" onclick="endSession()">${ICONS.close} End Session Now</button>
  </div>`;
}

function endSession(){
  LIVE_SESSION.active = false;
  showToast("Session ended");
  navigate('dashboard');
}

function startSession(){
  LIVE_SESSION.active = true;
  LIVE_SESSION.startedAt = Date.now();
  regenerateSessionToken();
  navigate('startSession');
}

function drawQrPlaceholder(){
  const holder = document.getElementById('qrCanvasHolder');
  if(!holder) return;
  // Deterministic pseudo-QR pattern generated from the current token, for visual purposes.
  const size = 21;
  const seed = LIVE_SESSION.token.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
  let cells = '';
  for(let y=0;y<size;y++){
    for(let x=0;x<size;x++){
      const isFinder = (x<4&&y<4)||(x>size-5&&y<4)||(x<4&&y>size-5);
      let on;
      if(isFinder){
        on = (x%3!==1 || y%3!==1);
      } else {
        on = ((x*31+y*17+seed) % 5) < 2;
      }
      if(on) cells += `<rect x="${x}" y="${y}" width="1" height="1" fill="#0b1320"/>`;
    }
  }
  holder.innerHTML = `<svg viewBox="0 0 ${size} ${size}" width="100%" height="100%">${cells}</svg>`;
}

// ============================================================
// REGISTRAR: DASHBOARD
// ============================================================

function renderRegistrarDashboard(){
  return `
  <div class="app-header">
    <div class="brand-row">
      <div class="brand-id">
        <div class="brand-mark">VU</div>
        <div class="brand-text">
          <div class="name">Victoria University</div>
          <div class="sub">Registrar's Office</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" onclick="showToast('No new notifications')">${ICONS.bell}</button>
        <button class="avatar-chip" onclick="logout()" title="Sign out">${initials(State.user.name)}</button>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="greeting-card">
      <h2>Good evening, ${State.user.name.split(' ')[0]}</h2>
      <p>Registrar's Attendance Management Dashboard</p>
      <div class="greeting-tags">
        <span class="tag-pill">${State.user.id || 'VU-REG-001'}</span>
        <span class="tag-pill">University-wide</span>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-tile">
        <div class="top"><span class="label">Total Students</span>
          <span class="stat-icon" style="background:#dbeafe; color:#1d4ed8;">${ICONS.users}</span></div>
        <div class="value">20</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Total Lectures</span>
          <span class="stat-icon" style="background:#dcfce7; color:#16a34a;">${ICONS.book}</span></div>
        <div class="value">11</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Attendance Rate</span>
          <span class="stat-icon" style="background:#fce7f3; color:#be185d;">${ICONS.trend}</span></div>
        <div class="value">86%</div>
      </div>
      <div class="stat-tile">
        <div class="top"><span class="label">Today's Records</span>
          <span class="stat-icon" style="background:#ffedd5; color:#c2410c;">${ICONS.clock}</span></div>
        <div class="value">0</div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.chart} Overall Attendance Breakdown</div>
      ${donutChart([
        {label:'Present', value:14, color:'#16a34a'},
        {label:'Late', value:4, color:'#d97706'},
        {label:'Absent', value:3, color:'#dc2626'},
      ])}
    </div>

    <div class="card section-card">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.bell} Recent Submissions</div>
        <button class="link-mini" onclick="navigate('records')">View All ${ICONS.chevR}</button>
      </div>
      ${RECENT_SUBMISSIONS.map(r=>`
      <div class="lecture-row" style="margin-bottom:8px;">
        <div>
          <div class="lecture-code" style="font-size:13px;">${r.name}</div>
          <div class="lecture-meta" style="margin-top:3px;">${r.code} · ${r.date}</div>
        </div>
        <span class="status-pill ${r.status}">${r.status[0].toUpperCase()+r.status.slice(1)}</span>
      </div>`).join('')}
    </div>

    <a class="quick-action solid" onclick="navigate('records')">
      <div class="qa-icon">${ICONS.records}</div>
      <div class="qa-text"><div class="t">Attendance Records</div><div class="s">View & export full report</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('reports')">
      <div class="qa-icon">${ICONS.fileText}</div>
      <div class="qa-text"><div class="t">Reports & Export</div><div class="s">Generate PDF / Excel reports</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('suspicionLog')">
      <div class="qa-icon" style="background:#dc2626;">${ICONS.flag}</div>
      <div class="qa-text"><div class="t">Suspicion Log</div><div class="s">${SUSPICION_LOG.length} flagged check-ins to review</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
    <a class="quick-action" onclick="navigate('students')">
      <div class="qa-icon">${ICONS.users}</div>
      <div class="qa-text"><div class="t">Student Register</div><div class="s">View all enrolled students</div></div>
      <div class="chev">${ICONS.chevR}</div>
    </a>
  </div>`;
}

// ============================================================
// REGISTRAR: ATTENDANCE RECORDS
// ============================================================

function renderRecords(){
  const counts = {
    total: RECORDS.length,
    present: RECORDS.filter(r=>r.status==='present').length,
    late: RECORDS.filter(r=>r.status==='late').length,
    absent: RECORDS.filter(r=>r.status==='absent').length,
  };
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Attendance Records</div>
    </div>
  </div>
  <div class="content">
    <div class="status-chip-grid">
      <div class="status-chip unmarked"><div class="n">${counts.total}</div><div class="l">Total</div></div>
      <div class="status-chip present"><div class="n">${counts.present}</div><div class="l">Present</div></div>
      <div class="status-chip late"><div class="n">${counts.late}</div><div class="l">Late</div></div>
      <div class="status-chip absent"><div class="n">${counts.absent}</div><div class="l">Absent</div></div>
    </div>

    <div class="row gap-sm">
      <div class="search-wrap grow">
        ${ICONS.search}
        <input class="input" placeholder="Search student name or ID..." oninput="filterRecords()" id="recordsSearch" />
      </div>
      <button class="icon-btn" style="background:var(--surface); border:1.5px solid var(--line); color:var(--theme-primary); width:46px; height:46px; border-radius:var(--radius-sm); flex-shrink:0;" onclick="openSheet('recordsFilterSheet')">${ICONS.filter}</button>
    </div>

    <div class="card card-pad">
      <div class="section-head-row">
        <div class="section-title" style="margin-bottom:0;">${ICONS.records} Attendance Sheet</div>
        <button class="link-mini" onclick="showToast('Report exported')">${ICONS.download} Export</button>
      </div>
      <div id="recordsList" style="display:flex; flex-direction:column; gap:10px;">
        ${RECORDS.map(r=>recordCard(r)).join('')}
      </div>
    </div>
  </div>

  <div class="sheet" id="recordsFilterSheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">
      <span>Filter Records</span>
      <button onclick="closeSheet('recordsFilterSheet')">${ICONS.close}</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:14px;">
      <div class="field">
        <label>Course</label>
        <select class="select" id="filterCourse">
          <option value="">All Courses</option>
          <option value="CSC3101">CSC3101 – Data Structures & Algorithms</option>
          <option value="CSC3102">CSC3102 – Database Systems</option>
          <option value="BAR4301">BAR4301 – Financial Accounting</option>
        </select>
      </div>
      <div class="field">
        <label>Status</label>
        <select class="select" id="filterStatus">
          <option value="">All Statuses</option>
          <option value="present">Present</option>
          <option value="late">Late</option>
          <option value="absent">Absent</option>
        </select>
      </div>
      <div class="field">
        <label>Date</label>
        <input class="input" type="date" id="filterDate" />
      </div>
      <div class="btn-row" style="margin-top:4px;">
        <button class="btn btn-ghost" onclick="clearRecordsFilter()">Clear</button>
        <button class="btn btn-primary" onclick="applyRecordsFilter()">Apply Filters</button>
      </div>
    </div>
  </div>`;
}

function recordCard(r){
  return `
  <div class="record-card" data-record-card data-search="${(r.name+' '+r.reg+' '+r.code+' '+r.course).toLowerCase()}" data-code="${r.code}" data-status="${r.status}" data-date="${r.date}">
    <div class="check"></div>
    <div class="record-main">
      <div class="record-top">
        <div class="record-name">${r.name}</div>
        <div class="record-date">${r.date}</div>
      </div>
      <div class="record-sub">${r.reg} · ${r.prog}</div>
      <div class="record-tags">
        <span class="tag-mini">${r.code}</span>
        <span class="tag-mini">${r.course}</span>
        <span class="tag-mini">${r.venue}</span>
      </div>
    </div>
    <span class="status-pill ${r.status}">${r.status[0].toUpperCase()+r.status.slice(1)}</span>
  </div>`;
}

function filterRecords(){
  const q = (document.getElementById('recordsSearch')?.value || '').toLowerCase();
  document.querySelectorAll('[data-record-card]').forEach(card=>{
    applyRecordCardVisibility(card, q);
  });
  recountRecordsVisible();
}

function applyRecordCardVisibility(card, q){
  const course = document.getElementById('filterCourse')?.value || '';
  const status = document.getElementById('filterStatus')?.value || '';
  const date = document.getElementById('filterDate')?.value || '';
  const textMatch = !q || card.dataset.search.includes(q);
  const courseMatch = !course || card.dataset.code === course;
  const statusMatch = !status || card.dataset.status === status;
  const dateMatch = !date || card.dataset.date === date;
  const visible = textMatch && courseMatch && statusMatch && dateMatch;
  card.style.display = visible ? 'flex' : 'none';
  return visible;
}

function recountRecordsVisible(){
  let visible = 0;
  document.querySelectorAll('[data-record-card]').forEach(card=>{
    if(card.style.display !== 'none') visible++;
  });
  toggleNoResultsState('recordsList', visible, 'Try adjusting your filters');
}

function applyRecordsFilter(){
  const q = (document.getElementById('recordsSearch')?.value || '').toLowerCase();
  document.querySelectorAll('[data-record-card]').forEach(card=>applyRecordCardVisibility(card, q));
  recountRecordsVisible();
  closeSheet('recordsFilterSheet');
  showToast('Filters applied');
}

function clearRecordsFilter(){
  document.getElementById('filterCourse').value = '';
  document.getElementById('filterStatus').value = '';
  document.getElementById('filterDate').value = '';
  filterRecords();
}

// ============================================================
// REGISTRAR: SUSPICION LOG
// ============================================================

function renderSuspicionLog(){
  const high = SUSPICION_LOG.filter(s=>s.severity==='high').length;
  const medium = SUSPICION_LOG.filter(s=>s.severity==='medium').length;
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Suspicion Log</div>
    </div>
  </div>
  <div class="content">
    <div class="status-chip-grid" style="grid-template-columns:repeat(3,1fr);">
      <div class="status-chip unmarked"><div class="n">${SUSPICION_LOG.length}</div><div class="l">Total Flags</div></div>
      <div class="status-chip absent"><div class="n">${high}</div><div class="l">High</div></div>
      <div class="status-chip late"><div class="n">${medium}</div><div class="l">Medium</div></div>
    </div>

    <div style="display:flex; flex-direction:column; gap:10px;">
      ${SUSPICION_LOG.map(s=>`
      <div class="suspicion-card">
        <div class="sic">${ICONS.flag.replace(/<svg /,'<svg style="width:17px;height:17px;" ')}</div>
        <div style="flex:1;">
          <div class="sname">${s.student}</div>
          <div class="sreason">${s.reason}</div>
          <div class="smeta">${s.course} · ${s.date} · ${s.deviceId}</div>
        </div>
        <span class="severity-pill ${s.severity}">${s.severity}</span>
      </div>`).join('')}
    </div>
  </div>`;
}

// ============================================================
// REGISTRAR: REPORTS & EXPORT
// ============================================================

function renderReports(){
  return `
  <div class="app-header">
    <div class="header-back">
      <button class="back-btn" onclick="navigate('dashboard')">${ICONS.back}</button>
      <div class="page-title" style="font-size:18px;">Reports & Export</div>
    </div>
  </div>
  <div class="content">
    <div class="field-row">
      <div class="field">
        <label>Course</label>
        <select class="select" id="reportCourse">
          <option value="">All Courses</option>
          <option value="CSC3101">CSC3101 – Data Structures</option>
          <option value="CSC3102">CSC3102 – Database Systems</option>
          <option value="BAR4301">BAR4301 – Financial Accounting</option>
        </select>
      </div>
      <div class="field">
        <label>Date Range</label>
        <select class="select" id="reportRange">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="term">This Term</option>
        </select>
      </div>
    </div>

    <div class="card card-pad">
      <div class="section-title">${ICONS.fileText} Export Format</div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div class="report-option" onclick="exportReport('pdf')">
          <div class="ro-icon" style="background:#fee2e2; color:#dc2626;">${ICONS.fileText}</div>
          <div class="ro-text"><div class="t">Export as PDF</div><div class="s">Formatted report, includes Programme field</div></div>
          <div class="chev">${ICONS.chevR}</div>
        </div>
        <div class="report-option" onclick="exportReport('excel')">
          <div class="ro-icon" style="background:#dcfce7; color:#16a34a;">${ICONS.fileSpreadsheet}</div>
          <div class="ro-text"><div class="t">Export as Excel</div><div class="s">Raw data sheet, includes Programme field</div></div>
          <div class="chev">${ICONS.chevR}</div>
        </div>
      </div>
    </div>

    <div class="card section-card">
      <div class="section-title">${ICONS.chart} Preview</div>
      <div style="font-size:11px; color:var(--ink-faint); margin-bottom:10px;">Showing first 3 rows — Programme column included for lecturer identification</div>
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:11px;">
          <thead><tr style="text-align:left; color:var(--ink-faint); border-bottom:1px solid var(--line);">
            <th style="padding:6px 8px;">Student</th><th style="padding:6px 8px;">Programme</th><th style="padding:6px 8px;">Status</th>
          </tr></thead>
          <tbody>
            ${RECORDS.slice(0,3).map(r=>`<tr style="border-bottom:1px solid var(--line);">
              <td style="padding:6px 8px; font-weight:600;">${r.name}</td>
              <td style="padding:6px 8px;">${r.prog}</td>
              <td style="padding:6px 8px;"><span class="status-pill ${r.status}">${r.status}</span></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

function exportReport(format){
  showToast(`${format.toUpperCase()} report generated`, ICONS.download.replace(/width="\d+" height="\d+"/,'width="15" height="15"'));
}

// ============================================================
// ROUTER / NAV / BOOT
// ============================================================

let currentScreen = 'dashboard';

const NAV_CONFIG = {
  coordinator: [
    { id:'dashboard', label:'Dashboard', icon:ICONS.dashboard },
    { id:'markAttendance', label:'Attendance', icon:ICONS.check },
    { id:'schedule', label:'Schedule', icon:ICONS.calendar },
    { id:'students', label:'Students', icon:ICONS.users },
  ],
  registrar: [
    { id:'dashboard', label:'Dashboard', icon:ICONS.dashboard },
    { id:'records', label:'Records', icon:ICONS.records },
    { id:'students', label:'Students', icon:ICONS.users },
    { id:'allSchedules', label:'Schedules', icon:ICONS.schedule },
  ],
  student: [
    { id:'home', label:'Home', icon:ICONS.dashboard },
    { id:'checkin', label:'Check In', icon:ICONS.qrcode },
    { id:'timetable', label:'Timetable', icon:ICONS.calendar },
    { id:'profile', label:'Profile', icon:ICONS.user },
  ],
};

const DEFAULT_SCREEN = { coordinator:'dashboard', registrar:'dashboard', student:'home' };

function getScreenHTML(screenId){
  if(State.role === 'coordinator'){
    switch(screenId){
      case 'dashboard': return renderCoordDashboard();
      case 'markAttendance': return renderMarkAttendance();
      case 'schedule': return renderSchedule({ title:'My Lecture Schedule', subtitle:'Weekly timetable overview', backTarget:'dashboard' });
      case 'students': return renderStudents({ backTarget:'dashboard' });
      case 'startSession': return renderStartSession();
    }
  } else if(State.role === 'registrar'){
    switch(screenId){
      case 'dashboard': return renderRegistrarDashboard();
      case 'records': return renderRecords();
      case 'students': return renderStudents({ backTarget:'dashboard' });
      case 'allSchedules': return renderSchedule({ title:'All Lecture Schedules', subtitle:'University-wide timetable', showDeptFilter:true, backTarget:'dashboard' });
      case 'suspicionLog': return renderSuspicionLog();
      case 'reports': return renderReports();
    }
  } else if(State.role === 'student'){
    switch(screenId){
      case 'home': return renderStudentHome();
      case 'checkin': return renderCheckIn();
      case 'timetable': return renderStudentTimetable();
      case 'profile': return renderStudentProfile();
    }
  }
  return '<div class="content"><div class="empty-state">Screen not found</div></div>';
}

function navigate(screenId){
  currentScreen = screenId;
  document.getElementById('screens').innerHTML = `<div class="screen active">${getScreenHTML(screenId)}</div>`;
  renderBottomNav();
  window.scrollTo(0,0);
  const scrollable = document.getElementById('screens').firstElementChild;
  if(scrollable) scrollable.scrollTop = 0;
  if(screenId === 'startSession') drawQrPlaceholder();
}

function rerenderCurrentScreen(){
  navigate(currentScreen);
}

function renderBottomNav(){
  const items = NAV_CONFIG[State.role] || [];
  const nav = document.getElementById('bottomNav');
  nav.innerHTML = items.map(item=>`
    <button class="nav-item ${currentScreen===item.id?'active':''}" onclick="navigate('${item.id}')">
      ${item.icon}
      <span>${item.label}</span>
    </button>`).join('');
}

function renderApp(){
  const app = document.getElementById('app');
  const screensEl = document.getElementById('screens');
  const navEl = document.getElementById('bottomNav');

  if(!State.role){
    app.removeAttribute('data-role');
    screensEl.innerHTML = renderLogin();
    navEl.innerHTML = '';
    navEl.style.display = 'none';
    return;
  }
  navEl.style.display = 'flex';
  app.setAttribute('data-role', State.role);
  currentScreen = DEFAULT_SCREEN[State.role] || 'dashboard';
  navigate(currentScreen);
}

function boot(){
  // attach a pseudo-id to user object for display purposes
  if(State.user && !State.user.id){
    const idKey = Object.keys(USERS).find(k=>USERS[k]===State.user);
    State.user.id = idKey;
  }
  renderApp();
  showToast(`Welcome, ${State.user.name.split(' ')[0]}`);
}

// close sheet on overlay tap
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('sheetOverlay').addEventListener('click', ()=>{
    document.querySelectorAll('.sheet.show').forEach(s=>s.classList.remove('show'));
    document.getElementById('sheetOverlay').classList.remove('show');
  });
  renderApp();
  registerServiceWorker();
  setupInstallPrompt();
});

// ============================================================
// PWA: SERVICE WORKER + INSTALL PROMPT
// ============================================================

function registerServiceWorker(){
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('sw.js').catch(()=>{ /* offline-safe no-op */ });
    });
  }
}

let deferredInstallPrompt = null;

function setupInstallPrompt(){
  window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    deferredInstallPrompt = e;
    const banner = document.getElementById('installBanner');
    if(banner) banner.classList.add('show');
  });
}

function triggerInstall(){
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.finally(()=>{
      deferredInstallPrompt = null;
      const banner = document.getElementById('installBanner');
      if(banner) banner.classList.remove('show');
    });
  }
}

function dismissInstallBanner(){
  const banner = document.getElementById('installBanner');
  if(banner) banner.classList.remove('show');
}
