'use strict';
(()=>{
const $=s=>document.querySelector(s),art=window.StudyArt;
const examples={
Car:{noun:'αυτοκινήτου',art:art.car,refs:['car1','car2'],field:'speed',type:'int',method:'setSpeed',values:[30,70],next:50,colors:['#df654b','#4c96a4'],colorNames:['red','blue'],unit:'km/h'},
Book:{noun:'βιβλίου',art:art.book,refs:['book1','book2'],field:'pages',type:'int',method:'setPages',values:[120,260],next:200,colors:['#d69343','#557bb6'],colorNames:['orange','blue'],unit:'σελίδες'},
Robot:{noun:'ρομπότ',art:art.robot,refs:['robot1','robot2'],field:'battery',type:'int',method:'setBattery',values:[70,40],next:100,colors:['#42978d','#9476b5'],colorNames:['green','purple'],unit:'%'}
};
const visit=window.JavaOOPPageState.get('visual-scene',{current:'Car',changed:false,selected:0});
window.JavaOOPPageState.set('visual-scene',visit);
let current=visit.current,changed=visit.changed,fullCode='';
function scene(){visit.current=current;visit.changed=changed;const a=examples[current],v=changed?a.next:a.values[0];$('#scene').innerHTML=`<div class="scene-grid"><div class="scene-card blueprint"><div class="scene-label"><b>ΚΛΑΣΗ</b><span>κοινή δομή</span></div>${a.art(a.colors[0],a.values[0],true)}<h3>class ${current}</h3><div class="scene-fields">String color;<br>${a.type} ${a.field};</div></div><div class="scene-arrow" aria-hidden="true">→</div>${a.values.map((value,i)=>`<div class="scene-card ${changed&&i===0?'updated':''}"><div class="scene-label"><b>ΑΝΤΙΚΕΙΜΕΝΟ ${i+1}</b><span>${i===0&&changed?'άλλαξε':'ξεχωριστές τιμές'}</span></div>${a.art(a.colors[i],i===0?v:value)}<h3>${a.refs[i]} → ${current}</h3><div class="scene-fields">color = "${a.colorNames[i]}"<br>${a.field} = <b>${i===0?v:value}</b> <small>${a.unit}</small></div></div>`).join('')}</div>`;
const init=a.refs.map((r,i)=>`${current} ${r} = new ${current}("${a.colorNames[i]}", ${a.values[i]});`).join('\n');
$('#scene-code').textContent=init+(changed?`\n${a.refs[0]}.${a.method}(${a.next}); // αλλάζει μόνο το πρώτο αντικείμενο`:'');
fullCode=`class ${current} {\n    private String color;\n    private int ${a.field};\n\n    public ${current}(String color, int ${a.field}) {\n        this.color = color;\n        this.${a.field} = ${a.field};\n    }\n\n    public void ${a.method}(int ${a.field}) {\n        this.${a.field} = ${a.field};\n    }\n\n    public String toString() {\n        return color + ": " + ${a.field};\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n${init.split('\n').map(l=>'        '+l).join('\n')}${changed?`\n        ${a.refs[0]}.${a.method}(${a.next});`:''}\n        System.out.println(${a.refs[0]});\n        System.out.println(${a.refs[1]});\n    }\n}`;
$('#scene-source').textContent=fullCode;
$('#change-object').textContent=`Εφάρμοσε ${a.refs[0]}.${a.method}(${a.next})`;
$('#change-object').disabled=changed;
$('#scene-result').textContent=changed?`Το ${a.field} του πρώτου ${a.noun} έγινε ${a.next}. Το δεύτερο παραμένει ${a.values[1]}. Η κλάση είναι κοινή, οι τιμές ανήκουν σε κάθε αντικείμενο.`:'Δύο new, δύο ξεχωριστά αντικείμενα. Οι εικόνες δείχνουν τις δικές τους τιμές.';
document.querySelectorAll('[data-example]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.example===current));
}
document.querySelectorAll('[data-example]').forEach(b=>b.addEventListener('click',()=>{current=b.dataset.example;changed=false;scene()}));
$('#change-object').addEventListener('click',()=>{changed=true;scene()});$('#scene-reset').addEventListener('click',()=>{changed=false;scene()});
window.openJavaExercise=(title,code)=>{if(window.parent!==window)window.parent.postMessage({type:'java-lab-run',title,code},location.origin);else{navigator.clipboard?.writeText(code).catch(()=>{});window.open('https://onecompiler.com/java','_blank','noopener');}};
$('#run-scene').addEventListener('click',()=>window.openJavaExercise(`Παράδειγμα ${current}`,fullCode));
const activities=[
{id:'wordsearch',title:'Κρυπτόλεξο κώδικα',type:'Βρίσκω τη λέξη',goal:'Να αναγνωρίζεις ποια λέξη συμπληρώνει κάθε εντολή Java.'},
{id:'puzzle',title:'Παζλ κώδικα',type:'Βάζω στη σειρά',goal:'Να δημιουργείς το αντικείμενο, να αλλάζεις την τιμή του και μετά να την εμφανίζεις.'},
{id:'debug',title:'Βρες το λάθος',type:'Διορθώνω την εντολή',goal:'Να χρησιμοποιείς τη new για τη δημιουργία αντικειμένου.'},
{id:'assemble',title:'Φτιάξε την κλάση',type:'Αντιστοιχίζω κάρτες',goal:'Να διακρίνεις πεδίο, κατασκευαστή και μέθοδο στην ίδια κλάση.'},
{id:'change',title:'Ποιο αντικείμενο αλλάζει;',type:'Επιλέγω στην εικόνα',goal:'Να συνδέεις την αναφορά πριν από την τελεία με το αντικείμενο που αλλάζει.'},
{id:'output',title:'Πρόβλεψε την έξοδο',type:'Διαβάζω & προβλέπω',goal:'Να υπολογίζεις την τιμή που εμφανίζεται μετά την αλλαγή ενός πεδίου.'},
{id:'robot',title:'Οδήγησε το ρομπότ',type:'Γράφω διαδρομή',goal:'Να επιλέγεις τα ορίσματα της move(dx, dy) για να φτάσει το ρομπότ στον στόχο.'},
{id:'order',title:'Φτιάξε την παραγγελία',type:'Συνδέω αντικείμενα',goal:'Να συνδέεις τα Product με την Order και να παρατηρείς το συνολικό κόστος.'},
{id:'method',title:'Γράψε μια μέθοδο',type:'Γράφω & ελέγχω',goal:'Να γράφεις την area() και να ελέγχεις το αποτέλεσμά της με διαφορετικές διαστάσεις.'},
{id:'access',title:'Άνοιξε την πρόσβαση',type:'Δοκιμάζω public / private',goal:'Να ελέγχεις αν επιτρέπεται η πρόσβαση σε πεδίο από άλλη κλάση.'}
];
let selected=visit.selected;
$('#activity-gallery').innerHTML=activities.map((a,i)=>`<button class="activity-tile" data-activity="${i}" aria-pressed="${i===0}" aria-controls="activity-stage">${art.previews[a.id]}<strong>${String(i+1).padStart(2,'0')} · ${a.title}</strong><span>${a.type}</span></button>`).join('');
function selectActivity(i,scroll=false){selected=i;visit.selected=i;const a=activities[i];window.VisualLab.cleanup();$('#activity-number').textContent=String(i+1).padStart(2,'0');$('#activity-type').textContent=a.type.toUpperCase();$('#activity-title').textContent=a.title;$('#activity-goal').textContent='Στόχος: '+a.goal;$('#cg-root').dataset.game=a.id;window.VisualLab.mount('challenge-'+a.id);document.querySelectorAll('[data-activity]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.activity)===i));$('#previous-activity').disabled=i===0;$('#next-activity').disabled=i===activities.length-1;if(scroll){$('#activity-stage').focus({preventScroll:true});scrollToElement($('#activity-stage'));}}
function scrollToElement(el){if(window.parent!==window)window.parent.postMessage({type:'java-lab-scroll',offset:el.getBoundingClientRect().top+window.scrollY},location.origin);else el.scrollIntoView({behavior:'smooth',block:'start'});}
document.querySelectorAll('[data-activity]').forEach(b=>b.addEventListener('click',()=>selectActivity(Number(b.dataset.activity),true)));
$('#previous-activity').addEventListener('click',()=>{if(selected>0)selectActivity(selected-1,true)});$('#next-activity').addEventListener('click',()=>{if(selected<activities.length-1)selectActivity(selected+1,true)});
$('.unit-jump').addEventListener('click',e=>{e.preventDefault();scrollToElement($('#activities'))});
scene();selectActivity(selected);
if(window.parent!==window){let lastHeight=0;const reportHeight=()=>{const height=Math.ceil($('.unit-shell').getBoundingClientRect().height);if(Math.abs(height-lastHeight)>2){lastHeight=height;window.parent.postMessage({type:'java-lab-height',height},location.origin)}};new ResizeObserver(reportHeight).observe($('.unit-shell'));reportHeight();}
})();
