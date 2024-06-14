
 


const questions = [{
    question: "Which of the following part of larynx has no lymphatics?",
    answers: [
      {Text: "Supraglottic region"},
      {Text: "Vestibular area"},
      {Text: "Ventricles"},
      {Text: "Vocal cords", correct: true},
      {Text: "Epiglottis"}
    ]
  },
  {
    question: "Which of the following is unpaired cartilage of larynx?",
    answers: [
      {Text: "Thyroid cartilage", correct: true},
      {Text: "Arytenoid cartilage"},
      {Text: "Corniculate cartilage"},
      {Text: "Cuniform cartilage"},
      {Text: "Septal cartilage"}
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
    question: "The goose foot is used for branches of?",
    answers: [
      {Text: "Vagus nerve"},
      {Text: "External carotid artery"},
      {Text: "Facial nerve", correct: true},
      {Text: "Hypoglossal nerve"},
      {Text: "Brachial plexus"}
    ]
  },
  {
    question: "A 70 year old, diabetic lady presents with severe right otalgia along with right facial weakness. On examination, seropurulent discharge is present in the right external canal. After cleaning, granulation at the floor is revealed. Which of the above conditions is she most likely suffering from?",
    answers: [
      {Text: "Bell's palsy"},
      {Text: "Aural Polyp"},
      {Text: "Boil external auditory canal"},
      {Text: "Diffuse otitis externa"},
      {Text: "Malignant otitis externa", correct: true}
    ]
  },
  {
    question: "Facial nerve paralysis is liable to occur due to?",
    answers: [
      {Text: "Upper motor neuron lesion"},
      {Text: "Motor neuron lesion"},
      {Text: "Ischaemia of facial canal"},
      {Text: "Erosion of bony canal by cholesteatoma"},
      {Text: "All of above", correct: true}
    ]
  },
  {
    question: "Common site of impaction of coin in oesophagus is?",
    answers: [
      {Text: "Crico-pharynx", correct: true},
      {Text: "At the level of aortic arch"},
      {Text: "At the level of bifurcation of trachea"},
      {Text: "At cardiac end"},
      {Text: "All of above"}
    ]
  },
  {
    question: "Paralysis of vocal cord is due to injury of which nerve?",
    answers: [
      {Text: "External laryngeal"},
      {Text: "Recurrent laryngeal", correct: true},
      {Text: "Superior laryngeal"},
      {Text: "All of above"},
      {Text: "None of above"}
    ]
  },
  {
    question: "Name the structures which is not seen on I.D.L?",
    answers: [
      {Text: "Vocal cords"},
      {Text: "Arytenoid"},
      {Text: "Acute Epiglottis"},
      {Text: "Epiglottis"},
      {Text: "Tubal tonsil", correct: true}
    ]
  },
  {
    question: "30 years old man attending ENT OPD having complaint of excessive watery discharge, which increases with forward binding position. His nasal endoscopic surgery was done a few weeks ago. Which of the following test is specific for this diagnosis?",
    answers: [
      {Text: "Serum IGE level"},
      {Text: "Nasal swab for cytology"},
      {Text: "Handkerchief test"},
      {Text: "B2 transferrin", correct: true},
      {Text: "Oxidases peroxidase paper strip test"}
    ]
  },
  {
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
    question: "The most common etiological factor involved in having Ludwing's angina?",
    answers: [
      {Text: "Sub-mandibular sialadenitis"},
      {Text: "Trauma to oral mucosa"},
      {Text: "Fracture of mandible"},
      {Text: "Dental infections", correct: true},
      {Text: "Sub-mental sialadenitis"}
    ]
  },
  {
    question: "Five years old mentally retarded boy develops persistent right side pneumonia which does not clear in spite of adequate antibiotic treatment. The boy has no past history of pulmonary disease. Which of the above conditions do you suspect with this clinical?",
    answers: [
      {Text: "Bronchiectasis"},
      {Text: "Foreign body bronchus", correct: true},
      {Text: "Pleural Effusion"},
      {Text: "Pneumothorax"},
      {Text: "Pulmonary oedema"}
    ]
  },
  {
    question: "A young girl of 10 years came in ENT OPD c/o nasal obstruction on left side with foul smell. She also gives history of bleeding, pain from same side for about 3 months. On examination, there was a grayish mass seen in nose which started bleeding on touch. The likely diagnosis is?",
    answers: [
      {Text: "Angiofibroma"},
      {Text: "Antrochoanal polyp"},
      {Text: "Fungal granuloma"},
      {Text: "Rhinolith", correct: true},
      {Text: "Rhinosporodiosis"}
    ]
  },
  {
    question: "A newborn baby having severe respiratory distress just after birth. On examination, he was having mucoid secretions in the nose. When a small bore catheter was tried it did not pass from both nostrils. Emergency treatment of the patient is?",
    answers: [
      {Text: "Tracheostomy"},
      {Text: "Cricothyrotomy"},
      {Text: "Pass an endotrachial tube"},
      {Text: "Put an airway in mouth", correct: true},
      {Text: "Clean the discharge from nose"}
    ]
  },
  {
    question: "Regarding otosclerosis, all are correct except?",
    answers: [
      {Text: "Most common Caucasian races"},
      {Text: "Female to male ratio 2:1"},
      {Text: "Hormonal influences disease rapidly"},
      {Text: "Disease generally starts in teens"},
      {Text: "Most commonly occurs under the age of 5 years", correct: true}
    ]
  },
  {
    question: "All of the below etiologies are related in nasopharyngeal carcinoma, except?",
    answers: [
      {Text: "EBV capsid antigen"},
      {Text: "Polycyclic hydrocarbons from smoke of intense and wood"},
      {Text: "HLA - A2"},
      {Text: "Betel nut chewing", correct: true},
      {Text: "Nitrosamines"}
    ]
  },
  {
    question: "All are the congenital abnormality of larynx except?",
    answers: [
      {Text: "Laryngomalacia"},
      {Text: "Laryngeal web"},
      {Text: "Laryngo - esophageal fistula"},
      {Text: "Reinke's oedema", correct: true},
      {Text: "Subglotic stenosis"}
    ]
  },
  {
    question: "Bronchoscopy is the procedure for all except?",
    answers: [
      {Text: "Removal of foreign body"},
      {Text: "Biopsy from bronchus"},
      {Text: "To take secretion of culture"},
      {Text: "To investigate the cause of haemoptysis"},
      {Text: "To visualize the mediastinum", correct: true}
    ]
  },
  {
    question: "Regarding Meniere's disease, all are correct except?",
    answers: [
      {Text: "Also called endolymphatic hydrops"},
      {Text: "Affecting the scala vestibule", correct: true},
      {Text: "Males are more affected"},
      {Text: "Episodic vertigo is cardinal symptoms"},
      {Text: "Labyrinthectomy is a treatment option"}
    ]
  },
  {
    question: "All are the features of adenoids facies except?",
    answers: [
      {Text: "Open mouth"},
      {Text: "High arched palate"},
      {Text: "Narrow upper alveolus"},
      {Text: "Crowded teeth"},
      {Text: "Hyper plastic maxilla", correct: true}
    ]
  },
  {
    question: "All are the pathological stages of acute tonsillitis except?",
    answers: [
      {Text: "Acute cattarhal tonsillitis"},
      {Text: "Acute fibrotic tonsillitis", correct: true},
      {Text: "Acute follicular tonsillitis"},
      {Text: "Acute membranous tonsillitis"},
      {Text: "Acute parenchymatous tonsillitis"}
    ]
  },
  {
    question: "All are the theories of cholesteatoma formation except?",
    answers: [
      {Text: "Polysaccharides alteration theory", correct: true},
      {Text: "Epithelial migration theory"},
      {Text: "Retraction pocket theory"},
      {Text: "Congenital cell rest theory"},
      {Text: "Epithelial metaplasia theory"}
    ]
  },
  {
    question: "All of the below are related to the etiology of submandibular glands duct sialolithiasis except?",
    answers: [
      {Text: "Longer and Larger caliber duct"},
      {Text: "Antigravity flow"},
      {Text: "Slower flow rate"},
      {Text: "More acidic pH", correct: true},
      {Text: "Higher mucia and calcium content of saliva"}
    ]
  },
  {
    question: "All are the causes of recurrent laryngeal nerve except?",
    answers: [
      {Text: "Thyroid surgery"},
      {Text: "Carcinoma of esophagus"},
      {Text: "Carcinoma of oropharynx", correct: true},
      {Text: "Neck trauma"},
      {Text: "Metastatic cervical lymphadenopathy"}
    ]
  },
  {
    question: "Regarding glomus tumors all are true except?",
    answers: [
      {Text: "It originate from the glomus bodies"},
      {Text: "Sun arising sign is characteristic feature"},
      {Text: "Female are affected more common"},
      {Text: "It is a benign neoplasm of inner ear", correct: true},
      {Text: "Surgical removal is a treatment option"}
    ]
  },
  {
    question: "Wax in auditory canal is removed by?",
    answers: [
      {Text: "Antibiotics"},
      {Text: "Anti Allergics"},
      {Text: "Antihistamines"},
      {Text: "Syringing", correct: true},
      {Text: "Surgical excision"}
    ]
  },
  {
    question: "The only structure not found in inner ear?",
    answers: [
      {Text: "Cochlear nuclei", correct: true},
      {Text: "Semi-circular canals"},
      {Text: "Organs of Corti"},
      {Text: "Basilar membrane"},
      {Text: "Endolymphatic duct"}
    ]
  },
  {
    question: "Which of the drug causes rhinitis medica mentosa?",
    answers: [
      {Text: "Intra nasal steroids"},
      {Text: "Mast cell stabilizers"},
      {Text: "Anti histamines"},
      {Text: "Lignocaine spray"},
      {Text: "Xylometazoline", correct: true}
    ]
  },
  {
    question: "Which of the following is indication of tracheostomy?",
    answers: [
      {Text: "Vocal nodule"},
      {Text: "Impacted foreign body in bronchus"},
      {Text: "Carcinoma of bronchus"},
      {Text: "Laryngeal diphtheria", correct: true},
      {Text: "Quinsy"}
    ]
  },
  
  {
    question: "Radiologically, maxillary sinus is best seen in?",
    answers: [
      {Text: "Lateral view"},
      {Text: "Oblique view"},
      {Text: "Occipito - frontal view", correct: true},
      {Text: "Town's view"},
      {Text: "Anterior view"}
    ]
  },
  {
    question: "Which of the following is common benign tumor of Larynx?",
    answers: [
      {Text: "Fibroma"},
      {Text: "Vocal polyp"},
      {Text: "Subglottic haemangioma"},
      {Text: "Laryngeal papilloma", correct: true},
      {Text: "Chondroma"}
    ]
  },
  {
    question: "Allergic rhinitis is classified in?",
    answers: [
      {Text: "Acute and Chronic"},
      {Text: "Mild and moderate"},
      {Text: "Moderate and severe"},
      {Text: "Intermittent and persistent", correct: true},
      {Text: "Superficial and Deep"}
    ]
  },
  {
    question: "Following is not the function of larynx?",
    answers: [
      {Text: "Protection of lower respiratory airways"},
      {Text: "Phonation"},
      {Text: "Respiratory conduit"},
      {Text: "Fixation of chest"},
      {Text: "Decrease the dead space", correct: true}
    ]
  },
  {
    question: "Treatment of inverted papilloma of nose is?",
    answers: [
      {Text: "Antibiotics only"},
      {Text: "Steroids only"},
      {Text: "Combined antibiotics and steroids"},
      {Text: "Wide excision along part of maxilla", correct: true},
      {Text: "Simple excision of nasal mass"}
    ]
  },
  {
    question: "Risk of metastasis is high in cancer of?",
    answers: [
      {Text: "Oropharynx"},
      {Text: "Nasopharynx"},
      {Text: "Buccal mucosa"},
      {Text: "Larynx"},
      {Text: "Hypopharynx", correct: true}
    ]
  },
  {
    question: "Relative lymphocytosis, raised serum amylase and raised S & V antibodies titer, are related to?",
    answers: [
      {Text: "Vincent angina"},
      {Text: "Infectious mononucleosis"},
      {Text: "Acute viral parotitis", correct: true},
      {Text: "Pharyngeal diphtheria"},
      {Text: "Acute Lymphocytic leukemia"}
    ]
  },
  {
    question: "Which of the following is exceptional regarding angio-fibroma?",
    answers: [
      {Text: "Arises from sphenopalatine foramen"},
      {Text: "Seen in puberty"},
      {Text: "Males are more affected"},
      {Text: "Is a Malignant tumor", correct: true},
      {Text: "Surgical excision is the treatment of choice"}
    ]
  },
  {
    question: "Laryngeal diphtheria is caused by?",
    answers: [
      {Text: "Epstein-Barr virus"},
      {Text: "Haemophilus influenza"},
      {Text: "Klebs-Loeffler bacillus", correct: true},
      {Text: "Moraxella catarrhalis"}
    ]
  },
  {
    question: "Common site for squamous cell carcinoma of nasopharynx is?",
    answers: [
      {Text: "Roof"},
      {Text: "Posterior wall"},
      {Text: "Opening of the eustachian tube"},
      {Text: "Fossa of rosenmullar", correct: true},
      {Text: "Tubal tonsil"}
    ]
    }]
 
  
      
  
  
  


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

