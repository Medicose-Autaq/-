
 


const questions = [{
    question: "Common cold is usually caused by?",
    answers: [
      {Text: "Adenovirus"},
      {Text: "Rhinovirus", correct: true},
      {Text: "Influenza virus"},
      {Text: "Rota virus"},
      {Text: "Picrona virus"}
    ]
  },
  {
    question: "Increased number of eosinophils in nasal smear is seen in?",
    answers: [
      {Text: "Atrophic rhinitis"},
      {Text: "Rhinitis medica mentosa"},
      {Text: "Non allergic eosinophilic rhinitis"},
      {Text: "Vasomotor rhinitis", correct: true},
      {Text: "Rhinitis sicca"}
    ]
  },
  {
    question: "Blood-stained foul-smelling nasal discharge is usually seen in patients having?",
    answers: [
      {Text: "D.N.S"},
      {Text: "Nasal Polyp"},
      {Text: "Rhinolith", correct: true},
      {Text: "Angiofibroma"},
      {Text: "Inverted papiloma"}
    ]
  },
  {
    question: "Inverted papilloma of the nose?",
    answers: [
      {Text: "Is a polypoidal mass in nasal cavity"},
      {Text: "Is a malignant lesion"},
      {Text: "Early distant metastasis is common"},
      {Text: "Usually affect adolescent male"},
      {Text: "Treatment is simple Excision of nasal mass", correct: true}
    ]
  },
  {
    question: "Infective type of nasal polyp usually arises from?",
    answers: [
      {Text: "Anterior ethmoidal sinuses"},
      {Text: "Frontal sinuses"},
      {Text: "Maxillary sinuses", correct: true},
      {Text: "Sphenoidal sinuses"},
      {Text: "Posterior ethmoidal sinuses"}
    ]
  },
  {
    question: "Which of the following artery belongs to internal carotid arterial system?",
    answers: [
      {Text: "Greater palatine"},
      {Text: "Lesser palatine"},
      {Text: "Sphenopalatine"},
      {Text: "Anterior ethmoidal", correct: true},
      {Text: "Nasopalatine"}
    ]
  },
  {
    question: "Foreign body bronchus is common in?",
    answers: [
      {Text: "Subglottic region of larynx"},
      {Text: "Trachea"},
      {Text: "Carina"},
      {Text: "Right bronchus", correct: true},
      {Text: "Left bronchus"}
    ]
  },
  {
    question: "Indication for SMR operation?",
    answers: [
      {Text: "Dislocated nasal septum"},
      {Text: "Deviated nasal septum", correct: true},
      {Text: "Recurrent epistaxis"},
      {Text: "As an approach to sphenoid sinus"},
      {Text: "All of the above"}
    ]
  },
  {
    question: "Regarding osteosclerosis, which one is correct?",
    answers: [
      {Text: "There is conductive deafness", correct: true},
      {Text: "Occurs in old age"},
      {Text: "Bilateral and symmetrical"},
      {Text: "It is a central lesion"},
      {Text: "There is soft tissue shadow in X-ray"}
    ]
  },{
    question: "Which of the following is an intracranial complication of chronic suppurative otitis media?",
    answers: [
      {Text: "Mastoiditis"},
      {Text: "Labrynthitis"},
      {Text: "Facial nerve paralysis"},
      {Text: "Sigmoid sinus thrombosis", correct: true},
      {Text: "Tympano-sclerosis"}
    ]
  },
  {
    question: "A diabetic old age person attends ENT OPD with complaints of recurrent earache along with low-grade temperature. On examination, pinnae is tender on touch, a localized swelling is seen in the outer portion of the external auditory canal, the swelling is red and tender with a smooth surface. He is diagnosed as a case of?",
    answers: [
      {Text: "Mastoiditis"},
      {Text: "Furunculosis", correct: true},
      {Text: "Diffuse otitis externa"},
      {Text: "Oto-mycosis"},
      {Text: "Exostosis"}
    ]
  },
  {
    question: "A young boy started having earache after swimming in the canal. On examination, brown-black wax is seen in the external auditory meatus, which is hard in consistency and adherent with surrounding walls. The following are used to soften it, except?",
    answers: [
      {Text: "Liquid paraffin"},
      {Text: "Antibiotic ointment", correct: true},
      {Text: "Soda glycerin"},
      {Text: "Soap water"},
      {Text: "Olive oil"}
    ]
  },
  {
    question: "A 10-year-old girl complains of severe earache along with difficulty in chewing and decreased hearing from one ear. On examination, the tympanic membrane is congested with marked vascularity in the center, Rinne's test is negative. She is suffering from?",
    answers: [
      {Text: "Perichondritis"},
      {Text: "Boil"},
      {Text: "Acute otitis media", correct: true},
      {Text: "Otomycosis"},
      {Text: "Serous otitis media"}
    ]
  },
  {
    question: "Which ossicle is attached to the tympanic membrane?",
    answers: [
      {Text: "Malleus", correct: true},
      {Text: "Incus"},
      {Text: "Malleus and Incus"},
      {Text: "Footplates of stapes"},
      {Text: "None of the above"}
    ]
  },
  {
    question: "The goose foot is used for the branches of?",
    answers: [
      {Text: "Vagus nerve"},
      {Text: "External carotid artery"},
      {Text: "Facial nerve", correct: true},
      {Text: "Hypoglossal nerve"},
      {Text: "Brachial plexus"}
    ]
  },
  {
    question: "Malleus and incus develop from?",
    answers: [
      {Text: "First arch", correct: true},
      {Text: "Second arch"},
      {Text: "First and second arch"},
      {Text: "Second and third arch"},
      {Text: "First and third arch"}
    ]
  },
  {
    question: "Nerve supply of upper half of lateral surface of pinna is by?",
    answers: [
      {Text: "Auricular branch of vagus nerve"},
      {Text: "Auriculotemporal nerve", correct: true},
      {Text: "Lesser occipital"},
      {Text: "Great auricular"},
      {Text: "Branch of glossopharyngeal nerve"}
    ]
  },
  {
    question: "Early feature of glottic cancer of larynx is?",
    answers: [
      {Text: "Difficulty in breathing"},
      {Text: "Difficulty in swallowing"},
      {Text: "Cough"},
      {Text: "Change of voice", correct: true},
      {Text: "Fever"}
    ]
  },
  {
    question: "Common site for tracheostomy is?",
    answers: [
      {Text: "Between 1st and 2nd tracheal rings"},
      {Text: "Between 5th and 6th tracheal rings"},
      {Text: "Between 3rd and 4th tracheal rings", correct: true},
      {Text: "Just above the 1st tracheal ring"},
      {Text: "Just below the cricoid cartilage"}
    ]
  },
  {
    question: "Which of the following is unpaired cartilage of larynx?",
    answers: [
      {Text: "Thyroid cartilage", correct: true},
      {Text: "Arytenoid cartilage"},
      {Text: "Corniculate cartilage"},
      {Text: "Cuneiform cartilage"},
      {Text: "Septal cartilage"}
    ]
  },
  {
    question: "Which part of the larynx has no lymphatics?",
    answers: [
      {Text: "Supra-glottic region"},
      {Text: "Vestibular area"},
      {Text: "Ventricles"},
      {Text: "Vocal cords", correct: true},
      {Text: "Epiglottis"}
    ]
  },
  {
    question: "Treatment of angiofibroma is?",
    answers: [
      {Text: "Chemotherapy"},
      {Text: "Radiotherapy"},
      {Text: "Surgery", correct: true},
      {Text: "Hormonal therapy"},
      {Text: "I/V antibiotics"}
    ]
  },
  {
    question: "Increased number of eosinophils in nasal smear is seen in?",
    answers: [
      {Text: "Atrophic rhinitis"},
      {Text: "Rhinitis medicamentosa"},
      {Text: "Allergic rhinitis", correct: true},
      {Text: "Vasomotor rhinitis"},
      {Text: "Rhinitis Sicca"}
    ]
  },
  {
    question: "Common site for squamous cell carcinoma of nasopharynx is?",
    answers: [
      {Text: "Roof"},
      {Text: "Posterior wall"},
      {Text: "Opening of Eustachian tube"},
      {Text: "Fossa of Rosenmüller", correct: true},
      {Text: "Tubal tonsil"}
    ]
  },
  {
    question: "Infective type of nasal polyp usually arises from?",
    answers: [
      {Text: "Anterior ethmoidal sinuses"},
      {Text: "Frontal sinuses"},
      {Text: "Maxillary sinuses", correct: true},
      {Text: "Sphenoidal sinuses"},
      {Text: "Posterior ethmoidal sinuses"}
    ]
  },
  {
    question: "The lymphatic drainage of tonsil is to?",
    answers: [
      {Text: "Retropharyngeal lymph node"},
      {Text: "Paratracheal lymph node"},
      {Text: "Submental lymph node"},
      {Text: "Parapharyngeal lymph node"},
      {Text: "Jugulodigastric lymph node", correct: true}
    ]
  },
  {
    question: "Paul Bunnel test is the confirmatory test of?",
    answers: [
      {Text: "Vincent's angina"},
      {Text: "Diphtheria"},
      {Text: "Ludwig's angina"},
      {Text: "Thrush"},
      {Text: "Infectious mononucleosis", correct: true}
    ]
  },
  {
    question: "The narrowest constriction of esophagus is at?",
    answers: [
      {Text: "Crossing of left main bronchus"},
      {Text: "Crossing of arch of aorta"},
      {Text: "Cricopharyngeus", correct: true},
      {Text: "Diaphragmatic opening"},
      {Text: "Gastro-esophageal junction"}
    ]
  },
  {
    question: "Causative organism of infectious mononucleosis is?",
    answers: [
      {Text: "Diphtheroid"},
      {Text: "Corynebacterium diphtheriae"},
      {Text: "Streptococcus"},
      {Text: "Epstein-Barr virus", correct: true},
      {Text: "Fusiform bacillus"}
    ]
  },
  {
    question: "Which site is most common for lodgment of foreign body in lower respiratory tract?",
    answers: [
      {Text: "Larynx"},
      {Text: "Trachea"},
      {Text: "Carina"},
      {Text: "Right bronchus", correct: true},
      {Text: "Left bronchus"}
    ]
  },
  {
    question: "Unilateral blood-stained foul-smelling nasal discharge is usually the feature of?",
    answers: [
      {Text: "Deviated nasal septum (DNS)"},
      {Text: "Nasal polyp"},
      {Text: "Rhinolith", correct: true},
      {Text: "Angiofibroma"},
      {Text: "Inverted papilloma"}
    ]
  },
  {
    question: "Common complication of nasal polypectomy is?",
    answers: [
      {Text: "Infection"},
      {Text: "Septal perforation"},
      {Text: "Adhesion formation"},
      {Text: "Septal abscess", correct: true},
      {Text: "Septal hematoma"}
    ]
  },
  {
    question: "How many pairs or groups of paranasal sinuses are normally present?",
    answers: [
      {Text: "One"},
      {Text: "Two"},
      {Text: "Three"},
      {Text: "Four", correct: true},
      {Text: "Five"}
    ]
  },
  {
    question: "Nasal fracture is confirmed by?",
    answers: [
      {Text: "Inspection"},
      {Text: "Palpation"},
      {Text: "Anterior rhinoscopy"},
      {Text: "Posterior rhinoscopy"},
      {Text: "X-ray of nasal bone and paranasal sinuses", correct: true}
    ]
  },
  {
    question: "Name the structure which is not seen on indirect laryngoscopy (IDL)?",
    answers: [
      {Text: "Vocal cords"},
      {Text: "Arytenoids", correct: true},
      {Text: "Acute epiglottitis"},
      {Text: "Epiglottis"},
      {Text: "Tubal tonsils"}
    ]
  },
  {
    question: "Inverted papilloma of nose?",
    answers: [
      {Text: "Is a polypoidal mass in nasal cavity", correct: true},
      {Text: "Is a malignant lesion"},
      {Text: "Early distant metastasis is common"},
      {Text: "Usually affects adolescent male"},
      {Text: "Treatment is simple excision of nasal mass"}
    ]
  },
  {
    question: "Which of the following artery belongs to the internal carotid arterial system?",
    answers: [
      {Text: "Greater palatine"},
      {Text: "Lesser palatine"},
      {Text: "Sphenopalatine"},
      {Text: "Anterior ethmoidal", correct: true},
      {Text: "Nasopalatine"}
    ]
  },
  {
    question: "Foreign body bronchus is common in?",
    answers: [
      {Text: "Subglottic region of larynx"},
      {Text: "Trachea"},
      {Text: "Carina"},
      {Text: "Right bronchus", correct: true},
      {Text: "Left bronchus"}
    ]
  },
  {
    question: "Young male presented with sore throat, high-grade fever, malaise with muffled speech, and trismus. On examination, the right tonsil was swollen and congested and shifting the uvula to the opposite side. What is the probable diagnosis?",
    answers: [
      {Text: "Ludwig's angina"},
      {Text: "Quinsy", correct: true},
      {Text: "Parapharyngeal abscess"},
      {Text: "Peritonsillitis"},
      {Text: "Acute tonsillitis"}
    ]
  },
  {
    question: "An 8-year-old girl presented with high-grade fever, sore throat, difficulty in swallowing for 5 days. On examination, both tonsils are swollen, red, and covered with a membrane that was easily removable. What is the likely diagnosis?",
    answers: [
      {Text: "Acute catarrhal tonsillitis"},
      {Text: "Acute follicular tonsillitis"},
      {Text: "Acute membranous tonsillitis", correct: true},
      {Text: "Diphtheria"}
    ]
  },
  {
    question: "Malignant otitis externa is common in?",
    answers: [
      {Text: "Newborn babies"},
      {Text: "Hypertensive patients"},
      {Text: "Diabetic patients", correct: true}
    ]
  },
  {
    question: "In case of hoarseness of voice, the site of the lesion is?",
    answers: [
      {Text: "Base of tongue"},
      {Text: "Vallecula"},
      {Text: "Vocal cord", correct: true},
      {Text: "Pyriform fossa"},
      {Text: "Aryepiglottic folds"}
    ]
  }
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

