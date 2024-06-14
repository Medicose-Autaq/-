
 


const questions = [{
  question : 'A 50 years old has a tumor of tongue having size of 3 cm in its greaterdimesion along with an palpable singleipsilateral lymph node having size of 2.5cm in greatest dimension. There is noevidence of metastasis. Which TNM staging would be labeled to this patient ?',
    
    answers: [ {Text:'T1NoMo',correct:true},
    {Text: 'T2N1Mo'},
    {Text: 'T2N2aMo'},
    {Text: 'T3N1Mo'},
    {Text: 'T4N1Mo'}

  ]

},
{
  question : `A young boy starter earache decrease hearing, on
examination Brown black wax is seen in the external auditory
meatus, which is hard in consistency, adherent with surrounding
walls, the following is not use to soften it ?`,
  answers: [{Text: "Liquid paraffin"},
    {Text: 'Abtibiotics drops'},
    {Text: 'Soda glycerin',correct:true},
    {Text: 'Soap water'},
    {Text: 'Olive oil'}
  ]

},
{
  question : `A 07 years old came in emergency department with high
  grade fever, dyspnoea and stridor. The symptoms are rapidly
  progressive. X - ray neck lateral view shows thumb sign. What is the
  causative organism for this condition ?`,
  answers: [ {Text: 'Hemophilus influenza type A'},
    {Text: 'Haemophilus influenza Type B', correct:true},
    {Text: 'Para influenza virus type 1 & type II'},
    {Text: 'Staph. Aureus'},
    {Text: 'Cornybacterium diphtheria'}
    
  ]
},
{
  question : `A 30 years school teacher came in ENT OPD with complain of
  change of voice for last 03 weeks. On examination there nodules
  present at junction of anterior 1/3 and posterior 2/3 of both vocal
  cords. What is the best treatment option for this patient ?`,
  answers: [ {Text: 'Voice rest only' },
    {Text: 'Antibiotic only'},
    {Text: 'Antibiotic, Analgesic and anti - histamine'},
    {Text:`Excision via microlaryngoscopy`,correct:true},
    {Text: 'Total laryngectomy'}


  ]

},
{
  question : `07 years old child presents with absolute dysphagia and
dribbling of saliva just after intake of coin. Which is the most
common site of impaction of foreign body via oesophagus ?`,
  answers: [ {Text: 'where oesophagus is crossed by arch of aorta' },
    {Text: 'where oesophagus is crossed by left bronchus'},
    {Text: 'where oesophagus crossed the diaphragm'},
    {Text: 'At cricopharyngeal junction',correct:true},
    {Text: 'At gastroesophageal junction'}


  ]

},
{
  question : `A 10 years old girl with history of severe earache along with
decreased hearing from one ear. On examination tympamic
membrane is congested with marked vascularity in the center,
Rinnes test is -ve. She is suffering with ?`,
  answers: [ {Text: 'Perichondiritis' },
    {Text: 'Boil'},
    {Text: 'Acute otitis media',correct:true},
    {Text: 'Otomycosis'},
    {Text: 'Serous otitis media'}


  ]

},
{
  question : `A 06 years old child suffering from haemophilia has frequent
attacks of tonsillitis which have handicapped his routine life.
Otolayrngologist decides to perform tonsillectomy on him. Which
would be the most suitable method for tonsillectomy in this case ?`,
  answers: [ {Text: 'Guillotine tonsillectomy' },
    {Text: 'Dissection and snare tonsillectomy',correct:true},
    {Text: 'Micro debrider intra capsular tonsillectomy'},
    {Text: 'Cryo surgical tonsillectomy'},
    {Text: 'Radio frequency cobalation tonsillectomy'}


  ]

},
{
  question : `Young girl attended ENT OPD with complains of persistent
nasal discharge, recurrent nose bleeds, along with anosmia. On
examination, nasal cavity widened with green dry crust, she is case
of ?`,
  answers: [ {Text: 'Chronic hypertrophic rhinitis' },
    {Text: 'Lupus vulgaris'},
    {Text: 'Atrophic rhinitis',correct:true},
    {Text: 'Nasal myiasis'},
    {Text: 'Mucormycosis'}


  ]

},
{
  question : `Sodium chromogycate is helpful in allergic rhinits because it
cause ?`,
  answers: [ 
    {Text: 'Disensitization' },
    {Text: 'Decongestion of nasal mucosa'},
    {Text: 'Mast cell stabilization',correct:true},
    {Text: 'Vasodilatation'},
    {Text: 'Vasoconstriction'}


  ]

},
{
  question : `A 06 years old girl presented with desquamation and peeling
from palm and around the finger about 04 days after a febrile
attack of sore throat and rashes over her body. To which disease
these features relate to ?`,
  answers: [ {Text: 'Vincent angina' },
    {Text: 'Scarlet fever',correct:true},
    {Text: 'Infectious mononucleosis'},
    {Text: 'Pharyngeal diphtheria'},
    {Text: 'Agranulocytosis'}


  ]

},
{question : '"cheiloschisis" is the medical term used for ',
   
    answers: [ {Text:'Cleft Lip' ,correct:true},
    {Text: 'Cleft palate'},
    {Text: 'Tongue Tie'},
    {Text: 'Iron Deficiency Anemia'},
    {Text: 'Bifid Uvula'}]}

,
{question : 'Which of the following is true about functional aphonia ?',

    answers: [{Text: 'Usually occurs in old age'},
      {Text: 'Occurs after laryngeal infection'},
    {Text: 'Both vocal cords are in mid line'},
    {Text: 'Does not meet on coughing'},
    {Text: 'Does not approximate on phonation' ,correct:true}]}

,
{question : 'Malignant otitis externa is common in ?',
    
    answers: [ {Text:'New born babies'},
    {Text: 'Hypertensive patients'},
    {Text: 'Diabetic patients' ,correct:true},
    { Text: `Patient with meniere's disease`},
    {Text: 'Patient with otomycosis'}]}

,
{question : 'Which of the following is related with nasopharyngeal Angiofibroma ?',
   
    answers: [ {Text:'Common in females'},
    {Text: 'Encapsulated'},
    {Text: 'Does not cause bone erosion'},
    {Text: 'Benign tumor' ,correct:true},
    {Text: 'Metastasis occur in cervical lymph nodes'}]}

,
{question : 'Positive laryngeal crepitos is observed during neck examination in ?',
    
    answers: [ {Text:'Laryngeal oedema'},
    {Text: 'Post cricoid carcinoma'},
    {Text: 'Normal person' ,correct:true},
    {Text: 'Prevertebral abscess'},
    {Text: 'Retropharyngeal abscess'}]}

,
{question : 'Cart wheel appearance of tympanic membrane is seen in ?',
    
    answers: [ {Text:'Otitis media with effusion'},
    {Text: 'Attico antral type of chronic supprative otitis media'},
    {Text: 'Acute supprative otitis media' ,correct:true},
    {Text: 'Tubo tympanic type of chronic supprative otitis media'},
    {Text: 'Aero otitis'}]}

,
{question : ' Surgical treatment of glue ear is ?',
    
    answers: [ {Text:'Myringoplasty'},
    {Text: 'Myringotomy' ,correct:true},
    {Text: 'Cortical mastoidectomy'},
    {Text: 'Radical mastoidectomy'},
    {Text: 'Modified radical mastoidectomy'}]}

,
{question : ' Common complication of nasal polypectomy is ?',
    
    answers: [ {Text:'Infection',correct:true},
    {Text: 'Septal perforation'},
    {Text: 'Adhesion formation'},
    {Text: 'Septal abscess'},
    {Text: 'Septal haematoma'}]}

,
{question : 'Most appropriate test for allergic rhinitis is ?',
    
    answers: [ {Text:'skin prick test'},
    {Text: 'Radio alergosorbent test'},
    {Text: 'Serum IgE level'},
    {Text: 'Eosinophil count in blood'},
    {Text: 'Eosinophil count in nasal smear' ,correct:true}]}

,
{question : 'Which carcinoma of larynx has low tendency to lymphatic spread ?',
    
    answers: [ {Text:'Arytenoids'},
    {Text: 'vocal cords' ,correct:true},
    {Text: 'Vestibular folds'},
    {Text: 'Pyriform fossa'},
    {Text: 'Epiglottis'}]}

,
{question : 'Which of the following drugs causes rhinitis medica mentosa ?',
    
    answers: [ {Text:'Intra nasal steroids'},
    {Text: 'Antihistamine'},
    {Text: 'Mast cell Stabilizers'},
    {Text: 'Lignocaine spray'},
    {Text: 'Xylometazoline' ,correct:true}]}

,
{question : 'Most common features of vocal cord nodule is ?',
    
    answers: [ {Text:'Respiratory distress'},
    {Text: ' Hoarsness of voice' ,correct:true},
    {Text: ' Stridor'},
    {Text: ' Pain in neck'},
    {Text: 'Dysphagia'}]}

,
{question : 'Young girl attends to ENT ward with complaint of persistent nasal discharge, recurrent nose bleeds, along with nose anosmia. On examination nasal cavity is widened with green dry crust. She is a case of one of the following ?',
    
    answers: [ {Text:'Chronic hypertrophic rhinitis'},
    {Text: 'Lupus valgaris'},
    {Text: 'Atrophic rhinitis' ,correct:true},
    {Text: 'Nasal myiasis'},
    {Text: 'Mucormycosis'}]}

,
{question : 'Regarding external auditory canal which one is correct ?',
    
    answers: [ {Text:'outer one third is cartilagenous' ,correct:true},
    {Text: 'Outer one third is bony'},
    {Text: 'Inner two third is cartilagenous'},
    {Text: 'Hair follicles are present in both part '},
    {Text: 'Hair follicles are present in bony part'}]}

,
{question : 'Granulation tissue in external auditory canal is seen in ?',
    
    answers: [ {Text:'Diffuse otitis externa'},
    {Text: 'Acute supprative otitis media'},
    {Text: 'Atticoantral type of chronic supprative otitis media' ,correct:true},
    {Text: 'Tubo tympanic type of chronic supprative otitis media'},
    {Text: 'Serous otitis media'}]}

,
{question : 'Ideally tracheotectomy incision is given at ?',
    
    answers: [ {Text:'Above 1st tracheal ring'},
    {Text: 'Between 1st & 2nd tracheal ring'},
    {Text: 'Between 2nd & 4th tracheal ring ' ,correct:true},
    {Text: 'Between 4th & 5th tracheal ring'},
    {Text: 'Below 5th tracheal ring'}]}

,
{question : 'Cholesteastoma is a feature of ?',
    
    answers: [ {Text:'Secondary otitis media'},
    {Text: 'Malignant otitis externa'},
    {Text: 'Tubo tympanic type of chronic supprative otitis media'},
    {Text: 'Atticoantral type of chronic supprative otitis media' ,correct:true},
    {Text: 'Aero otitis'}]}

,
{question : 'Common site of foreign body impaction in oesophagus is ?',
    
    answers: [ {Text:'where oesophagus is crossed by left bronchus'},
    {Text: 'Where oesophagus is crossed by arch of aorta '},
    {Text: 'Cricopharynx' ,correct:true},
    {Text: 'where oesophagus pierces the diaphragm'},
    {Text: 'Gastro oesophageal junction'}]}

,
{question : 'The microorganism causing fruncle of external auditory canal ?',
    
    answers: [ {Text:'Streptococcus pyogens'},
    {Text: 'Staphylococcus epidermis'},
    {Text: 'Staphylococcus aureus' ,correct:true},
    {Text: 'Beta A hemolyticus streptococci'},
    {Text: 'Pseudomonas'}]}

,
{question : 'Promontary is present in ?',
    
    answers: [ {Text:'Anterior wall of middle ear'},
    {Text: 'Posterior wall of middle ear'},
    {Text: 'Lateral wall of middle ear'},
    {Text: 'Medial wall of middle ear' ,correct:true},
    {Text: 'Floor of the middle ear'}]}


]

const question = document.getElementById('question')
const answers = document.getElementById('container1')
const nest = document.getElementById('nestbtn')
const nestdiv = document.getElementById('nest')
const intro = document.getElementById('intro')
const inst = document.getElementById('inst')
const en = document.getElementById('pop')
const end = document.getElementById('give')
const main = document.getElementById('main')
const bot = document.getElementById('bot')
let [seconds, minutes, hours] = [0,0,0]
let dis = document.getElementById('time')
let int = ''
let res = document.getElementById('res')
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')


function stopw (){

   seconds--
   if(minutes == 0 && seconds == 0){
    clearInterval(int);
    finish()
    // minutes = 1
    // seconds = 2
  }else if(seconds == -1){
    seconds = 59;
    minutes--
 
  }
  let h = hours < 10? '0' + hours : hours;
  let m = minutes < 10? '0' + minutes : minutes;  
  let s = seconds < 10? '0' + seconds : seconds;
  dis.innerHTML =h + ':' + m+ ':' + s 

}
function start(){

  int = setInterval(stopw,1000)
  
}


let questionNO = 0
let score = 0

function startquiz(){
  if(option1.selected === true){
    minutes =15
    seconds = 0
    dis.innerHTML = '00:15:00'
  }else if(option2.selected === true){
    minutes = 30
    seconds = 0
    dis.innerHTML = '00:30:00'

  }else  {minutes = 45
    seconds = 0
    dis.innerHTML = '00:45:00'

  }



 
  questionNO = 0
  score = 0
  // nest.innerHTML = 'next'
  nestdiv.style.display = 'flex'
  showquestion()
  start()
  intro.style.display = 'none'
  inst.innerHTML = 'Note: Once an option is selected it can not be changed'
  inst.style.marginTop = '30px'
}
function showquestion(){
  
  let currentquestion = questions[questionNO]
  
   questionNO = questionNO  + 1
  // let ques = question.style
  // if(ques.height > '10vh'){
  //   ques.height = '15vh'
  // }
  question.innerHTML = questionNO + '. ' + currentquestion.question
  end.innerHTML = ''
  nest.innerHTML = 'Next'
  let options = ['A.','B.','C.','D.','E.' ]
  let i = -1
  currentquestion.answers.forEach(answer => {
   i++
    const button = document.createElement('button')
   
    button.innerHTML = `${options[i]} ${answer.Text}`
  answers.appendChild(button)
  button.classList.add('btns')
  
  button.dataset.correct =  answer.correct
  
 

  button.addEventListener('click',selectans)
  })
  
  }

function remove(){
  if(questionNO < questions.length){ while(answers.firstChild){
  answers.removeChild(answers.firstChild)
 
} showquestion()}else if(questionNO === questions.length){result()}

}
function finish (){
 
  while(answers.lastChild){
    answers.removeChild(answers.lastChild)}
  question.innerHTML = ''
  if(en.classList[1] !== 'open'){
    en.classList.add('open')
  }else if (en.classList[1] === 'open'){
    en.classList.remove('open')
  }
    console.log(en.classList[1])
  main.style.opacity = '0.2'
console.log(answers.lastChild)
res.innerHTML = 'Time is up'
  end.innerHTML = `
    Your score is = ${score}/${questions.length}`
}
function result (){
 
  while(answers.lastChild){
    answers.removeChild(answers.lastChild)}
  question.innerHTML = ''
  if(en.classList[1] !== 'open'){
    en.classList.add('open')
  }else if (en.classList[1] === 'open'){
    en.classList.remove('open')
  }
    console.log(en.classList[1])
  main.style.opacity = '0.2'
  end.innerHTML = `
    Your score is = ${score}/${questionNO}`
 
  questionNO = 0
  score = 0

  clearInterval(int);
  // minutes = 1
  // seconds = 2

}
function rem (){
 
  while(answers.lastChild){
    answers.removeChild(answers.lastChild)}
  question.innerHTML = ''
  nest.innerHTML = 'Try Again'
  if(en.classList[1] !== 'open'){
    en.classList.add('open')
  }else if (en.classList[1] === 'open'){
    en.classList.remove('open')
  }
    console.log(en.classList[1])
  end.innerHTML = `
    Your score is = ${score}/${questionNO}`
    main.style.opacity = '1'
 
  questionNO = 0
  score = 0
dis.innerHTML = ""
nestdiv.style.display = 'none'
intro.style.display = 'flex'
inst.innerHTML = `Note:
        <ul>
        <li>The questions of this quiz are form past papers so the key might not be correct</li>
          <li>key of this quiz can be accessed at the end of the test </li>
          <li>source file <a href=""></a></li>
        </ul>`
inst.style.marginTop = 0
  // startquiz()
}
nest.addEventListener('click', 
remove,
)
bot.addEventListener('click', 
rem,
)
  function selectans(e) {
    const tar = e.target 
    // console.log(tar)
  if(tar.dataset.correct === 'true'){
    tar.classList.add('select')
    score++
  }else{tar.classList.add('select')}

  Array.from(answers.children).forEach(button => {
  button.disabled = true
  });
 
}



// startquiz()
