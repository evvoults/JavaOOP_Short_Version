'use strict';
const lessons = window.COURSE;
const byId = Object.fromEntries(lessons.map(l => [l.id, l]));
const $ = selector => document.querySelector(selector);
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = name => {
  const paths = {arrow:'<path d="M4 10h12m-5-5 5 5-5 5"/>',back:'<path d="M16 10H4m5-5-5 5 5 5"/>',play:'<path d="m7 4 9 6-9 6Z"/>',copy:'<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>',home:'<path d="m3 9 7-6 7 6v8H3Z"/><path d="M8 17v-6h4v6"/>',book:'<path d="M10 5c-3-2-5-2-8-1v12c3-1 5-1 8 1 3-2 5-2 8-1V4c-3-1-5-1-8 1Zm0 0v12"/>',check:'<path d="m4 10 4 4 8-8"/>',link:'<path d="m7 12 6-6M6 8 4 10a4 4 0 0 0 6 6l2-2M8 6l2-2a4 4 0 0 1 6 6l-2 2"/>',search:'<circle cx="8.5" cy="8.5" r="5.5"/><path d="m13 13 4 4"/>',code:'<path d="m7 5-5 5 5 5m6-10 5 5-5 5m-3-12-2 14"/>'};
  return `<svg viewBox="0 0 20 20" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};
const storage = {
 get(key, fallback) { return window.JavaOOPPageState.get('course:' + key, fallback); },
 set(key, value) { return window.JavaOOPPageState.set('course:' + key, value); }
};
let completed = storage.get('completed', []);
if (!Array.isArray(completed)) completed = [];
completed = completed.filter(id => byId[id]);
let current = 'home';
let lastFocus = null;
let runnerState = null;
let compilerFrame = null;
let runnerTimers = [];
let toastTimer;
const hasDone = id => completed.includes(id);
const groups = [
 {id:'foundation',name:'01 · ΤΑ ΘΕΜΕΛΙΑ',title:'Χτίζουμε τα θεμέλια',subtitle:'Από τη μεταβλητή στην πρώτη ολοκληρωμένη κλάση.'},
 {id:'connections',name:'02 · ΣΥΝΔΕΟΥΜΕ ΤΙΣ ΕΝΝΟΙΕΣ',title:'Συνδέουμε τις έννοιες',subtitle:'Από τις αναφορές στα αντικείμενα που συνεργάζονται.'},
 {id:'labs',name:'03 · ΕΡΓΑΣΤΗΡΙΑΚΕΣ ΑΣΚΗΣΕΙΣ',title:'Ώρα για τις εργαστηριακές',subtitle:'Εφάρμοσε όσα έμαθες στις ασκήσεις του τμήματός σου.'}
];

function toast(message) {
  $('#toast').textContent = message;
  $('#toast').classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 3100);
}
async function copy(text) {
  try { await navigator.clipboard.writeText(text); toast('Αντιγράφηκε στο πρόχειρο.'); }
  catch {
    const temp = document.createElement('textarea');
    temp.value = text; temp.style.position = 'fixed'; temp.style.opacity = '0';
    document.body.appendChild(temp); temp.select();
    const ok = document.execCommand('copy'); temp.remove();
    toast(ok ? 'Αντιγράφηκε στο πρόχειρο.' : 'Η αντιγραφή δεν επιτράπηκε. Επίλεξε το κείμενο και αντέγραψέ το.');
  }
}
function highlight(source) {
  const re = /(\/\/[^\n]*|"(?:\\.|[^"\\])*"|\b(?:public|private|protected|class|static|void|int|double|boolean|return|new|this|if|else|true|false|null|import|instanceof|final)\b|\b\d+(?:\.\d+)?\b)/g;
  let last = 0, html = '', m;
  while ((m = re.exec(source))) {
    html += esc(source.slice(last, m.index));
    const cls = m[0].startsWith('//') ? 'comment' : m[0].startsWith('"') ? 'string' : /^\d/.test(m[0]) ? 'number' : 'keyword';
    html += `<span class="token-${cls}">${esc(m[0])}</span>`;
    last = re.lastIndex;
  }
  return html + esc(source.slice(last));
}
function codePanel(l, kind = 'example') {
  const source = kind === 'solution' ? l.solution : l.code;
  return `<div class="code-panel"><div class="code-bar"><span class="code-name"><span class="code-dots"><i></i><i></i><i></i></span>Main.java</span><button class="copy-code" data-action="copy-code" data-id="${l.id}" data-kind="${kind}">${icon('copy')} Αντιγραφή</button></div><pre><code>${highlight(source)}</code></pre></div><div class="code-actions"><button class="button" data-action="run" data-id="${l.id}" data-kind="${kind}">${icon('play')} Δοκίμασέ το online</button><span class="helper">Τροποποίησε τον κώδικα και πάτησε Run.</span></div>`;
}
function footer() {
  return `<footer class="page-footer"><span>JavaOOP · Υποστηρικτικό υλικό Τ1–Τ4</span><a href="#guide">Οδηγίες · Πηγές · Πρόοδος</a></footer>`;
}
function renderNav(query = '') {
  const needle = query.trim().toLocaleLowerCase('el');
  const nav = groups.map(g => {
    const items = lessons.filter(l => l.group === g.id && (!needle || `${l.title} ${l.short} ${l.number} ${l.description}`.toLocaleLowerCase('el').includes(needle)));
    return items.length ? `<div class="nav-group"><div class="nav-title">${g.name}</div>${items.map(l => `<a href="#${l.id}" class="nav-item ${current === l.id ? 'active' : ''}" ${current === l.id ? 'aria-current="page"' : ''}><span class="nav-number ${hasDone(l.id) ? 'done' : ''}">${hasDone(l.id) ? '✓' : l.number}</span><span>${l.short}</span></a>`).join('')}</div>` : '';
  }).join('');
  const body = `${nav || '<p class="local-note">Δεν βρέθηκε ενότητα. Δοκίμασε άλλη λέξη.</p>'}`;
  if ($('#nav-groups')) { $('#nav-groups').innerHTML = body; return; }
  $('#sidebar').innerHTML = `<a class="sidebar-home ${current === 'home' ? 'active' : ''}" href="#home">${icon('home')} Επισκόπηση</a><a href="#exercise-bank" class="nav-item ${current==='exercise-bank'||current.startsWith('exercise-')?'active':''}"><span class="nav-number">16</span><span>Αποστολές εφαρμογής<br><small>4 επίπεδα · νέα είδη ασκήσεων</small></span></a><div class="search-wrap">${icon('search')}<input id="lesson-search" type="search" aria-label="Αναζήτηση μαθήματος" placeholder="Αναζήτηση μαθήματος…"></div><nav id="nav-groups" aria-label="Μαθήματα">${body}</nav><div class="sidebar-progress"><div class="progress-caption"><span>Η πρόοδός σου στα μαθήματα</span><strong>${completed.length} / ${lessons.length}</strong></div><div class="progress-track" role="progressbar" aria-label="Ολοκληρωμένες ενότητες" aria-valuenow="${completed.length}" aria-valuemin="0" aria-valuemax="${lessons.length}"><div class="progress-fill" style="width:${completed.length / lessons.length * 100}%"></div></div><p class="local-note">Η πρόοδος διατηρείται όσο η σελίδα μένει ανοιχτή. Με ανανέωση ή νέο άνοιγμα ξεκινάς από την αρχή. Δεν αποτελεί βαθμολογία.</p></div>`;
}
function refreshNav() { $('#sidebar').innerHTML = ''; renderNav(); }
function nextLesson() { return lessons.find(l => !hasDone(l.id)) || lessons[0]; }
function home() {
  const next = nextLesson();
  return `<div class="page"><section class="hero"><div><span class="eyebrow">JAVA · ΕΡΓΑΣΤΗΡΙΑΚΑ ΤΜΗΜΑΤΑ Τ1–Τ4</span><h1>16 βήματα.<br><em>Μία ενιαία διαδρομή.</em></h1><p class="lead">Καταλαβαίνουμε τη Java από την αρχή και συνδέουμε όσα χρειάζονται για τις εργαστηριακές ασκήσεις. Σε κάθε ενότητα: οπτικό παράδειγμα, πειραματισμός, κρυπτόλεξο, παζλ κώδικα και διόρθωση λαθών. Επιπλέον, 16 διαφορετικές αποστολές σε τέσσερα επίπεδα σε οδηγούν σταδιακά στη δική σου υλοποίηση.</p><div class="hero-actions"><a class="button" href="#${next.id}">${completed.length ? 'Συνέχισε τη διαδρομή' : 'Ξεκίνα από την αρχή'} ${icon('arrow')}</a><a class="button ghost" href="#lab-player">Πήγαινε στις ασκήσεις</a></div><div class="hero-meta"><span>${icon('book')} 16 βήματα μάθησης</span><span>${icon('code')} Πραγματική Java online</span></div></div><div class="hero-visual" aria-label="Παράδειγμα αναφοράς σε αντικείμενο Student"><div class="visual-top"><span>ΑΠΟ ΤΗ ΓΡΑΜΜΗ ΣΤΟ ΑΝΤΙΚΕΙΜΕΝΟ</span><span><i class="live-dot"></i>Java</span></div><div class="visual-code"><span class="token-type">Student</span> s1 = <span class="token-keyword">new</span> Student(<span class="token-number">1</span>,<br>    <span class="token-string">"Νίκος"</span>, <span class="token-string">"Σταύρου"</span>);</div><div class="object-model"><div class="model-ref">s1<span style="display:block;font:10px var(--sans);color:#8293b1;margin-top:6px">μια αναφορά</span></div><div class="model-arrow">→</div><div class="model-object"><strong>Student</strong>id: 1<br>firstName: "Νίκος"<br>lastName: "Σταύρου"<br>semester: 1</div></div><p class="visual-caption">Το new δημιουργεί το αντικείμενο.<br>Η s1 κρατά την αναφορά που μας επιτρέπει να το χρησιμοποιούμε.</p></div></section><div class="overview-strip"><div><strong>13</strong><span>μαθήματα</span></div><div><strong>03</strong><span>εργαστηριακές</span></div><div><strong>${String(completed.length).padStart(2,'0')}</strong><span>ολοκληρωμένες ενότητες</span></div><span class="strip-right">${icon('check')} Με τον δικό σου ρυθμό</span></div>${groups.map(g => `<section aria-labelledby="group-${g.id}"><div class="section-heading"><h2 id="group-${g.id}">${g.title}</h2><p>${g.subtitle}</p></div><div class="${g.id === 'labs' ? 'lab-list' : 'lesson-grid'}">${lessons.filter(l => l.group === g.id).map(l => g.id === 'labs' ? `<a class="lab-card" href="#${l.id}"><span class="tag">${l.tag}</span>${window.LearnKit?.thumbnail(l) || ""}<h3>${l.title.replace('Εργαστήριο ','')}</h3><p>${l.description}</p><span class="text-link">Άνοιγμα άσκησης ${icon('arrow')}</span></a>` : `<a href="#${l.id}" class="lesson-card"><div class="card-top"><span class="lesson-index">ΜΑΘΗΜΑ ${l.number}</span><span class="tag ${hasDone(l.id) ? 'green' : ''}">${hasDone(l.id) ? '✓ Ολοκληρώθηκε' : l.tag}</span></div>${window.LearnKit?.thumbnail(l) || ""}<h3 class="card-title">${l.title}</h3><p class="card-description">${l.description}</p><div class="card-bottom"><span>Εικόνα · Κρυπτόλεξο · Κώδικας</span>${icon('arrow')}</div></a>`).join('')}</div></section>`).join('')}${footer()}</div>`;
}
function referenceDemo() {
 return `<div class="reference-demo" id="reference-demo"><div class="demo-title">Δύο μεταβλητές, πόσα αντικείμενα;</div><p class="demo-subtitle">Επίλεξε τον τρόπο δημιουργίας του b και μετά άλλαξε το x μέσω του b.</p><div class="demo-controls"><button data-action="reference-mode" data-mode="shared" aria-pressed="true">b = a</button><button data-action="reference-mode" data-mode="copy" aria-pressed="false">b = new Vector2D(a)</button></div><div class="memory-layout"><div class="memory-cell"><span class="memory-name">a</span><span id="a-object">→ αντικείμενο Α</span><strong class="memory-value" id="a-value">(2.0, 3.0)</strong></div><div class="memory-cell"><span class="memory-name">b</span><span id="b-object">→ αντικείμενο Α</span><strong class="memory-value" id="b-value">(2.0, 3.0)</strong></div></div><button class="button small" data-action="change-reference">Εκτέλεσε b.setX(9)</button><button class="button small ghost" data-action="reset-reference">Επαναφορά</button><p class="demo-explanation" id="demo-explanation" aria-live="polite">Οι a και b αναφέρονται στο ίδιο αντικείμενο. Ακόμα δεν έχει γίνει αλλαγή.</p><p class="local-note">Οπτική αναπαράσταση των συγκεκριμένων εντολών. Για εκτέλεση πραγματικής Java χρησιμοποίησε το παράδειγμα παρακάτω.</p></div>`;
}
function vectorDemo() {
 return `<div class="reference-demo"><div class="vector-board"><div class="vector-grid" role="img" aria-label="Θέση παίκτη σε επίπεδο με αρχή κάτω αριστερά"><div class="vector-dot" id="vector-dot" style="left:40%;bottom:60%"></div></div><div><div class="demo-title">Μια θέση στο επίπεδο</div><p class="demo-subtitle">x προς τα δεξιά, y προς τα πάνω. Οι τιμές εδώ είναι συντεταγμένες θέσης, όχι εντολές κίνησης.</p><p class="vector-values" id="vector-values">position = (2, 3)</p><div class="vector-controls"><label>x<input id="vector-x" type="number" min="0" max="5" value="2" step="1"></label><label>y<input id="vector-y" type="number" min="0" max="5" value="3" step="1"></label></div></div></div><p class="local-note">Το μικρό διάγραμμα δείχνει μόνο το τμήμα 0–5. Η Vector2D μπορεί να αποθηκεύει και αρνητικές συντεταγμένες.</p></div>`;
}
function lessonPage(l) {
  const lab = l.group === 'labs';
  const index = lessons.indexOf(l);
  const previous = lessons[index - 1];
  const next = lessons[index + 1];
  const draft = storage.get('draft:' + l.id, l.starter);
  const prediction = storage.get('prediction:' + l.id, '');
  const note = storage.get('note:' + l.id, '');
  const prerequisites = l.prerequisites ? `<p class="source-note">Πριν ξεκινήσεις: ${l.prerequisites.map(id=>`<a class="text-link" href="#${id}">${byId[id].short}</a>`).join(' · ')}</p>` : '';
  return `<div class="page"><div class="breadcrumb"><a href="#home">Επισκόπηση</a><span>/</span><span>${lab ? l.tag : 'Μάθημα ' + l.number}</span></div><header class="lesson-header"><span class="eyebrow">${lab ? 'ΕΦΑΡΜΟΖΟΥΜΕ ΟΣΑ ΜΑΘΑΜΕ' : (l.group === 'foundation' ? 'ΧΤΙΖΟΥΜΕ ΤΑ ΘΕΜΕΛΙΑ' : 'ΣΥΝΔΕΟΥΜΕ ΤΙΣ ΕΝΝΟΙΕΣ')}</span><h1>${l.title}</h1><p class="lead">${l.description}</p><div class="lesson-header-meta"><div class="lesson-meta"><span class="module-badge">${lab ? l.number : l.number + ' / 16'}</span><span class="tag ${hasDone(l.id) ? 'green' : ''}">${hasDone(l.id) ? '✓ Ολοκληρώθηκε' : l.tag}</span></div><button class="button small secondary" data-action="share">${icon('link')} Σύνδεσμος ενότητας</button></div>${prerequisites}</header>${window.LearnKit?.block(l) || ""}<div class="lesson-layout"><article class="lesson-body"><div class="objectives"><span class="eyebrow">ΣΤΟ ΤΕΛΟΣ ΘΑ ΜΠΟΡΩ ΝΑ</span><ul>${l.objectives.map(o=>`<li>${o}</li>`).join('')}</ul></div><section class="body-section" id="theory"><h2>${lab ? 'Τι χρειάζεται να υλοποιήσεις' : 'Ας το καταλάβουμε'}</h2>${l.theory.map(t=>`<div class="theory-block"><h3>${t.title}</h3><div class="theory-text">${t.text}</div></div>`).join('')}${l.visual === 'references' ? referenceDemo() : l.visual === 'vector' ? vectorDemo() : ''}</section><section class="body-section" id="prediction"><div class="predict"><h3>Πριν πατήσεις Run</h3><p>${l.predict}</p><label for="prediction-input">Η δική σου πρόβλεψη</label><textarea id="prediction-input" data-save="prediction" data-id="${l.id}" placeholder="Γράψε την πρόβλεψή σου και αιτιολόγησέ την…">${esc(prediction)}</textarea><details class="reveal"><summary>Έλεγξε τη σκέψη σου</summary><div class="reveal-inner">${esc(l.answer)}</div></details></div></section><section class="body-section" id="example"><h2>${lab ? 'Πώς θα ελέγξεις το αποτέλεσμα' : 'Ένα παράδειγμα που τρέχει'}</h2>${lab ? '<p class="task-text">Γράψε πρώτα τη δική σου υλοποίηση στην εξάσκηση. Σύγκρινε την έξοδό σου με την παρακάτω και εξήγησε κάθε αλλαγή τιμής.</p>' : codePanel(l)}<details class="reveal"><summary>Αναμενόμενη έξοδος</summary><div class="reveal-inner"><pre class="output">${esc(l.expected)}</pre></div></details>${!lab ? `<div class="explain-lines">${l.notes.map((n,i)=>`<div class="explain-row"><span class="explain-number">${String(i+1).padStart(2,'0')}</span><div><strong><code>${esc(n[0])}</code></strong>${esc(n[1])}</div></div>`).join('')}</div>` : ''}</section><section class="body-section" id="practice"><span class="task-label">${icon('code')} Η ΣΕΙΡΑ ΣΟΥ</span><h2>${lab ? 'Γράψε τη δική σου υλοποίηση' : 'Δοκίμασε μια αλλαγή'}</h2><div class="task-text">${l.task}</div><div class="editor-shell"><div class="editor-header"><span>Main.java</span><span>Ο κώδικάς σου</span></div><textarea id="practice-editor" class="practice-editor" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="Κώδικας Java δραστηριότητας" data-save="draft" data-id="${l.id}">${esc(typeof draft === 'string' ? draft : l.starter)}</textarea><div class="editor-footer"><span id="draft-status">Διατήρηση μέχρι την ανανέωση ή το κλείσιμο της σελίδας</span><button data-action="reset-draft" data-id="${l.id}">Επαναφορά αρχικού κώδικα</button></div></div><div class="code-actions"><button class="button" data-action="run" data-id="${l.id}" data-kind="practice">${icon('play')} Εκτέλεση του κώδικά μου</button><button class="button small secondary" data-action="download" data-id="${l.id}">${icon('code')} Λήψη Main.java</button></div><details class="reveal solution-details"><summary>Ενδεικτική λύση και έξοδος</summary><div class="reveal-inner"><p>Σύγκρινε τις γραμμές που άλλαξες και εξήγησε γιατί λειτουργούν. Η εμφάνιση της λύσης δεν ολοκληρώνει αυτόματα το μάθημα.</p>${codePanel(l,'solution')}<pre class="output">${esc(l.taskExpected)}</pre></div></details><p class="mistake"><strong>Έλεγξε αυτό το σημείο.</strong> ${esc(l.mistake)}</p></section><section class="body-section notes-section" id="notes"><h2>Κράτησε μια σημείωση</h2><label class="notes-label" for="notes-input">Τι κατάλαβες; Ποιο σημείο θέλεις να ξαναδείς;</label><textarea id="notes-input" class="notes-input" data-save="note" data-id="${l.id}" placeholder="Οι σημειώσεις σου διατηρούνται μέχρι να κλείσεις ή να ανανεώσεις τη σελίδα…">${esc(note)}</textarea></section><div class="lesson-navigation">${previous ? `<a class="nav-prev" href="#${previous.id}">← Προηγούμενη ενότητα</a>` : '<a class="nav-prev" href="#home">← Επισκόπηση</a>'}<button class="button ${hasDone(l.id) ? 'complete' : ''}" data-action="complete" data-id="${l.id}">${icon('check')} ${hasDone(l.id) ? 'Ολοκληρώθηκε · Αναίρεση' : 'Ολοκλήρωσα την ενότητα'}</button>${next ? `<a class="nav-next" href="#${next.id}">Επόμενη ${icon('arrow')}</a>` : '<a class="nav-next" href="#home">Επισκόπηση →</a>'}</div></article><nav class="lesson-toc" aria-label="Σε αυτή την ενότητα"><span class="eyebrow">ΣΕ ΑΥΤΗ ΤΗΝ ΕΝΟΤΗΤΑ</span><a href="#" data-scroll="learning-kit">Εικόνα και μικρές ασκήσεις</a><a href="#" data-scroll="theory">${lab ? 'Απαιτήσεις' : 'Η εξήγηση'}</a><a href="#" data-scroll="prediction">Η πρόβλεψή σου</a><a href="#" data-scroll="example">${lab ? 'Έλεγχος εξόδου' : 'Το παράδειγμα'}</a><a href="#" data-scroll="practice">Η εξάσκηση</a><a href="#" data-scroll="notes">Οι σημειώσεις σου</a><div class="local-note" style="margin-top:24px">Διάβασε → Πρόβλεψε<br>Εκτέλεσε → Εξήγησε</div></nav></div>${footer()}</div>`;
}
function guide() {
 return `<div class="page guide-content"><div class="breadcrumb"><a href="#home">Επισκόπηση</a><span>/</span><span>Οδηγός χρήσης</span></div><span class="eyebrow">Ο ΔΙΚΟΣ ΣΟΥ ΡΥΘΜΟΣ</span><h1>Πώς δουλεύουμε εδώ</h1><p>Το υλικό προετοιμάζει για την 1η άσκηση των Τ3–Τ4 και τη 2η άσκηση των Τ1–Τ2. Δεν χρειάζεται να απομνημονεύσεις τον κώδικα. Στόχος είναι να μπορείς να εξηγήσεις κάθε βασική γραμμή και να προβλέψεις τι αλλάζει όταν την τροποποιείς.</p><h2>Μια μικρή διαδρομή σε κάθε μάθημα</h2><p>Κάθε ένα από τα 16 βήματα περιέχει οπτικό παράδειγμα, κρυπτόλεξο σχετικών εντολών, παζλ, τρία επίπεδα διόρθωσης πλήρους προγράμματος και πρόβλεψη εξόδου. Η ίδια έννοια εξασκείται με διαφορετικό στόχο σε κάθε δραστηριότητα.</p><ol><li>Διάβασε την εξήγηση και τους στόχους.</li><li>Γράψε την πρόβλεψή σου πριν δεις την έξοδο.</li><li>Άνοιξε το παράδειγμα στον online editor. Πάτησε Run και σύγκρινε.</li><li>Άλλαξε τον κώδικα της δραστηριότητας και εκτέλεσέ τον.</li><li>Άνοιξε την ενδεικτική λύση μετά την προσπάθειά σου.</li><li>Σημείωσε τι κατάλαβες και δήλωσε μόνος σου την ολοκλήρωση.</li></ol><h2>Ποια διαδρομή να ακολουθήσω</h2><p>Για Student και Employee ξεκίνα με τα βήματα 01–07. Για Vector2D και Player συνέχισε στα βήματα 08–13. Αν έχεις κενό σε προγενέστερη έννοια, γύρισε στο αντίστοιχο μάθημα. Όλες οι ενότητες είναι διαθέσιμες χωρίς κλείδωμα.</p><h2>Πώς εκτελείται η Java</h2><p>Το κουμπί εκτέλεσης ανοίγει ενσωματωμένο editor της υπηρεσίας <a href="https://onecompiler.com/java" target="_blank" rel="noopener noreferrer">OneCompiler</a>. Ο κώδικας στέλνεται σε αυτή την υπηρεσία για πραγματική μεταγλώττιση και εκτέλεση. Απαιτείται σύνδεση στο διαδίκτυο. Πάτησε Run μέσα στον editor για να δεις την έξοδο.</p><p>Αν ο editor δεν φορτωθεί ή εμφανίζει άλλο παράδειγμα, πάτησε «Φόρτωση κώδικα ξανά». Μπορείς επίσης να αντιγράψεις τον κώδικα και να τον επικολλήσεις στον εναλλακτικό editor. Η οπτική αναπαράσταση των αναφορών στο βήμα 08 είναι ξεχωριστή διδακτική δραστηριότητα με προκαθορισμένες εντολές.</p><h2>Πρόοδος και σημειώσεις</h2><p>Ο κώδικας, οι προβλέψεις, οι σημειώσεις και η πρόοδος διατηρούνται μόνο όσο η σελίδα παραμένει ανοιχτή. Μπορείς να αλλάζεις ενότητες χωρίς να χάνονται. Με ανανέωση, κλείσιμο ή νέο άνοιγμα του συνδέσμου ξεκινάς από την αρχή. Η ολοκλήρωση είναι προσωπική ένδειξη προόδου και δεν αποτελεί βαθμολογία. Για να κρατήσεις τον κώδικά σου σε αρχείο, χρησιμοποίησε «Λήψη Main.java».</p><p>Οι αλλαγές μέσα στον OneCompiler μεταφέρονται πίσω στο πεδίο της δραστηριότητας όταν ο editor παρέχει τα σχετικά μηνύματα αλλαγής. Πριν κλείσεις τον editor, βεβαιώσου ότι έχεις κρατήσει σημαντικές αλλαγές. Τα παραδείγματα και οι λύσεις φορτώνονται ξανά από την αρχή όταν τα ανοίγεις.</p><h2>Από τον online editor στο NetBeans</h2><p>Για να εκτελούνται με κοινό τρόπο online, τα παραδείγματα έχουν μία <code>public class Main</code> με τη main και τις υπόλοιπες κλάσεις ως μη public στο ίδιο αρχείο Main.java. Στην παράδοση ακολούθησε το αρχείο που ζητά η εκφώνηση: Student.java, Employee.java ή Player.java, με τη main μέσα στην αντίστοιχη public κλάση. Στην Player.java η Vector2D παραμένει μη public.</p><h2>Μικρό λεξιλόγιο</h2><table class="glossary"><thead><tr><th>Όρος</th><th>Τι σημαίνει εδώ</th></tr></thead><tbody><tr><td>Πεδίο</td><td>Δεδομένο που ανήκει στο αντικείμενο.</td></tr><tr><td>Παράμετρος</td><td>Μεταβλητή στη δήλωση μεθόδου ή constructor.</td></tr><tr><td>Όρισμα</td><td>Τιμή που δίνουμε σε μια συγκεκριμένη κλήση.</td></tr><tr><td>Αναφορά</td><td>Η τιμή μέσω της οποίας αναφερόμαστε σε αντικείμενο.</td></tr><tr><td>Κατασκευαστής (constructor)</td><td>Κώδικας αρχικοποίησης νέου αντικειμένου.</td></tr><tr><td>Override</td><td>Επαναορισμός μεθόδου που κληρονομείται από υπερκλάση.</td></tr><tr><td>Ισότητα</td><td>Σύγκριση με τον ορισμό που δίνει η equals της κλάσης.</td></tr></tbody></table><h2>Για τον διδάσκοντα</h2><p>Κάθε μάθημα και κάθε εργαστηριακή διαθέτει ξεχωριστό σύνδεσμο μέσω του κουμπιού «Σύνδεσμος ενότητας». Η πρόσβαση στον σύνδεσμο ακολουθεί τις ρυθμίσεις κοινής χρήσης της ιστοσελίδας. Μπορείς να χρησιμοποιήσεις πρώτα την πρόβλεψη ως συζήτηση στην τάξη και μετά να ζητήσεις μια μικρή αλλαγή στον κώδικα.</p><p>Τα παραδείγματα προσαρμόστηκαν από τις συνημμένες εκφωνήσεις Student Τ3, Employee Τ4 και Vector2D–Player Τ1–Τ2. Στο Employee ακολουθείται ο απαιτούμενος αρχικός μισθός 0.0 στον κατασκευαστή τριών παραμέτρων, διορθώνοντας την ασυμφωνία της ενδεικτικής εξόδου. Τα αρχικά αρχεία δεν τροποποιήθηκαν.</p><h2>Επίσημες πηγές για συνέχεια</h2><ul><li><a href="https://dev.java/learn/classes-objects/" target="_blank" rel="noopener noreferrer">dev.java · Classes and Objects</a></li><li><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html" target="_blank" rel="noopener noreferrer">Java API · Object, equals, hashCode, toString</a></li><li><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html" target="_blank" rel="noopener noreferrer">Java API · Double.compare και Double.hashCode</a></li><li><a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html" target="_blank" rel="noopener noreferrer">Java API · Objects.equals και Objects.hash</a></li><li><a href="https://onecompiler.com/apis/embed-editor" target="_blank" rel="noopener noreferrer">OneCompiler · Οδηγίες ενσωμάτωσης editor</a></li></ul><div class="hero-actions"><a class="button" href="#variables">Ξεκίνα το πρώτο μάθημα ${icon('arrow')}</a><button class="button secondary" data-action="print">Εκτύπωση οδηγού</button></div>${footer()}</div>`;
}
function render(options = {}) {
  const requested = decodeURIComponent(location.hash.slice(1)).split('?')[0] || 'home';
  const hash = ['visual-unit','challenge-debug'].includes(requested) ? 'objects' : requested;
  window.VisualLab?.cleanup();
  window.LearnKit?.cleanup();
  const visual = hash === 'challenges' || window.VisualLab?.hasRoute(hash);
  current = visual || hash === 'guide' || hash === 'home' || byId[hash] ? hash : 'home';
  $('#main').innerHTML = visual ? window.VisualLab.page(current) : current === 'home' ? home() : current === 'guide' ? guide() : lessonPage(byId[current]);
  document.title = visual ? `${window.VisualLab.title(current)} · JavaOOP` : current === 'home' ? 'JavaOOP — Βήμα προς βήμα' : `${current === 'guide' ? 'Πώς δουλεύει' : byId[current].title} · JavaOOP`;
  if(visual) window.VisualLab.mount(current);
  else if(byId[current]) window.LearnKit?.mount(byId[current],requested === "challenge-debug" ? "debug" : new URLSearchParams(location.hash.split("?")[1] || "").get("activity"));
  refreshNav();
  $('#sidebar').classList.remove('open');
  $('#menu-toggle').setAttribute('aria-expanded','false');
  if (!options.keepScroll) { window.scrollTo({top:0,behavior:'instant'}); $('#main').focus({preventScroll:true}); }
  referenceMode = 'shared'; referenceChanged = false;
}
function currentSource(id, kind) {
  const l = byId[id];
  if (kind === 'practice') return $('#practice-editor')?.value ?? storage.get('draft:' + id,l.starter);
  return kind === 'solution' ? l.solution : l.code;
}
function sendCode() {
  if (!compilerFrame?.contentWindow || !runnerState) return;
  compilerFrame.contentWindow.postMessage({eventType:'populateCode',language:'java',files:[{name:'Main.java',content:runnerState.code}]},'https://onecompiler.com');
  runnerState.sent = true;
  $('#runner-status').textContent = 'Ο κώδικας στάλθηκε στον editor. Πάτησε Run για εκτέλεση.';
}
function clearRunnerTimers() { runnerTimers.forEach(clearTimeout); runnerTimers = []; }
function openRunner(id, kind, customCode, customTitle) {
  lastFocus = document.activeElement;
  clearRunnerTimers();
  runnerState = {id,kind,code:typeof customCode === 'string' ? customCode : currentSource(id,kind),sent:false,ack:false};
  $('#runner-title').textContent = customTitle || byId[id].title;
  $('#runner-status').textContent = 'Φόρτωση editor…';
  $('#runner').showModal();
  if (!compilerFrame) {
    compilerFrame = document.createElement('iframe');
    compilerFrame.title = 'OneCompiler Java editor';
    compilerFrame.src = 'https://onecompiler.com/embed/java?listenToEvents=true&codeChangeEvent=true&hideLanguageSelection=true&hideNew=true&hideTitle=true&hideStdin=true&fontSize=14';
    compilerFrame.addEventListener('load', () => {
      sendCode();
      runnerTimers.push(setTimeout(() => { if (runnerState && !runnerState.ack) sendCode(); }, 1000));
      runnerTimers.push(setTimeout(() => { if (runnerState && !runnerState.ack) sendCode(); }, 2500));
    });
    $('#runner-frame-container').appendChild(compilerFrame);
  } else sendCode();
  runnerTimers.push(setTimeout(() => {
    if (runnerState && !runnerState.ack) $('#runner-status').textContent = 'Αν δεν εμφανίζεται ο κώδικάς σου, πάτησε «Φόρτωση κώδικα ξανά» ή χρησιμοποίησε τον εναλλακτικό editor.';
  }, 15000));
}
window.addEventListener('message', event => {
  if (event.origin !== 'https://onecompiler.com' || event.source !== compilerFrame?.contentWindow || !runnerState || !runnerState.sent) return;
  const data = event.data;
  if (!data || data.language !== 'java' || !Array.isArray(data.files)) return;
  const file = data.files.find(f => f.name === 'Main.java') || data.files[0];
  if (!file || typeof file.content !== 'string') return;
  if (!runnerState.ack && file.content.trim() !== runnerState.code.trim()) return;
  runnerState.ack = true;
  runnerState.code = file.content;
  clearRunnerTimers();
  $('#runner-status').textContent = 'Ο κώδικάς σου είναι έτοιμος. Πάτησε Run.';
  if (runnerState.kind === 'practice') {
    storage.set('draft:' + runnerState.id, file.content);
    const editor = $('#practice-editor');
    if (current === runnerState.id && editor) editor.value = file.content;
  }
});
$('#close-runner').addEventListener('click', () => $('#runner').close());
$('#runner').addEventListener('close', () => { clearRunnerTimers(); if(lastFocus?.isConnected) lastFocus.focus(); });
$('#reload-code').addEventListener('click', () => {
  if (!runnerState) return;
  runnerState.ack = false;
  sendCode();
});
$('#copy-runner').addEventListener('click', () => { if(runnerState) copy(runnerState.code); });

let referenceMode = 'shared';
let referenceChanged = false;
function updateReference() {
  const a = referenceChanged && referenceMode === 'shared' ? 9 : 2;
  const b = referenceChanged ? 9 : 2;
  $('#a-value').textContent = `(${a}.0, 3.0)`;
  $('#b-value').textContent = `(${b}.0, 3.0)`;
  $('#b-object').textContent = referenceMode === 'shared' ? '→ αντικείμενο Α' : '→ αντικείμενο Β';
  document.querySelectorAll('[data-action="reference-mode"]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.mode === referenceMode)));
  $('#demo-explanation').textContent = referenceMode === 'shared' ? (referenceChanged ? 'Το κοινό αντικείμενο άλλαξε. Και οι a και b εμφανίζουν (9.0, 3.0).' : 'Οι a και b αναφέρονται στο ίδιο αντικείμενο. Ακόμα δεν έχει γίνει αλλαγή.') : (referenceChanged ? 'Άλλαξε μόνο το αντικείμενο Β μέσω της b. Το αντικείμενο Α της a διατηρεί το x = 2.' : 'Η b αναφέρεται σε νέο αντικείμενο Β με ίδιες αρχικές τιμές. Τα αντικείμενα είναι ανεξάρτητα.');
}
document.addEventListener('click', async event => {
  const scroll = event.target.closest('[data-scroll]');
  if (scroll) { event.preventDefault(); document.getElementById(scroll.dataset.scroll)?.scrollIntoView({behavior:'smooth'}); return; }
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const {action,id,kind,mode} = target.dataset;
  if(action === 'run') openRunner(id,kind);
  if(action === 'copy-code') copy(currentSource(id,kind));
  if(action === 'share') copy(location.href);
  if(action === 'print') window.print();
  if(action === 'complete') {
    completed = hasDone(id) ? completed.filter(x=>x !== id) : [...completed,id];
    storage.set('completed',completed);
    render({keepScroll:true});
    toast(hasDone(id) ? 'Η ενότητα σημειώθηκε ως ολοκληρωμένη.' : 'Η ολοκλήρωση αναιρέθηκε.');
  }
  if(action === 'reset-draft') {
    $('#practice-editor').value = byId[id].starter;
    storage.set('draft:' + id,byId[id].starter);
    $('#draft-status').textContent = 'Επαναφέρθηκε ο αρχικός κώδικας.';
    toast('Επαναφέρθηκε ο αρχικός κώδικας της δραστηριότητας.');
  }
  if(action === 'download') {
    const source = currentSource(id,'practice');
    const url = URL.createObjectURL(new Blob([source],{type:'text/x-java-source;charset=utf-8'}));
    const link = document.createElement('a'); link.href = url; link.download = 'Main.java'; document.body.appendChild(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),2000);
  }
  if(action === 'reference-mode') { referenceMode = mode; referenceChanged = false; updateReference(); }
  if(action === 'change-reference') { referenceChanged = true; updateReference(); }
  if(action === 'reset-reference') { referenceChanged = false; updateReference(); }
});
document.addEventListener('input', event => {
  const target = event.target;
  if(target.id === 'lesson-search') renderNav(target.value);
  if(target.dataset.save) {
    storage.set(target.dataset.save + ':' + target.dataset.id,target.value);
    if(target.dataset.save === 'draft') {
      $('#draft-status').textContent = 'Ο κώδικας διατηρείται όσο η σελίδα μένει ανοιχτή.';
    }
  }
  if(target.id === 'vector-x' || target.id === 'vector-y') {
    const x = Math.min(5,Math.max(0,Number($('#vector-x').value)||0));
    const y = Math.min(5,Math.max(0,Number($('#vector-y').value)||0));
    $('#vector-dot').style.left = `${x*20}%`;
    $('#vector-dot').style.bottom = `${y*20}%`;
    $('#vector-values').textContent = `position = (${x}, ${y})`;
  }
});
document.addEventListener('keydown', event => {
  if(event.target.classList.contains('practice-editor') && event.key === 'Tab' && !event.shiftKey) {
    event.preventDefault();
    const el = event.target, start = el.selectionStart, end = el.selectionEnd;
    el.setRangeText('    ',start,end,'end');
    el.dispatchEvent(new Event('input',{bubbles:true}));
  }
});
$('#menu-toggle').addEventListener('click',()=>{
  const open = $('#sidebar').classList.toggle('open');
  $('#menu-toggle').setAttribute('aria-expanded',String(open));
});
document.addEventListener('click',event=>{
  if (window.innerWidth <= 700 && !event.target.closest('#sidebar') && !event.target.closest('#menu-toggle')) {
    $('#sidebar').classList.remove('open'); $('#menu-toggle').setAttribute('aria-expanded','false');
  }
});
window.addEventListener('hashchange',()=>render());
window.openJavaExercise = (title, source) => openRunner('visual-exercise','custom',source,title);
window.addEventListener('message',event=>{
  const frame = document.getElementById('visual-unit-frame');
  if(!frame || event.source !== frame.contentWindow || event.origin !== location.origin) return;
  if(event.data?.type === 'java-lab-height' && Number.isFinite(event.data.height)) frame.style.height = Math.max(550,Math.min(16000,event.data.height+8))+'px';
  if(event.data?.type === 'java-lab-scroll' && Number.isFinite(event.data.offset)) window.scrollTo({top:frame.getBoundingClientRect().top+window.scrollY+Math.max(0,event.data.offset)-90,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  if(event.data?.type === 'java-lab-step') frame.scrollIntoView({behavior:'instant',block:'start'});
  if(event.data?.type === 'java-lab-run' && typeof event.data.code === 'string' && event.data.code.length < 100000) window.openJavaExercise(event.data.title || 'Κλάση και αντικείμενο',event.data.code);
});
render();
