let ent = document.querySelector('.btns')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let wards = document.querySelector('.wards')

let bt1 = document.getElementById('bt1')
let bt2 = document.getElementById('bt2')
let bt3 = document.getElementById('bt3')
let bt4 = document.getElementById('bt4')
let bt5 = document.getElementById('bt5')
let bt6 = document.getElementById('bt6')
const btns=[
  'A1/A2','A7/A8','A3'
]


ent.addEventListener('click', ()=>{
  console.log(wards.lastChild)
  if(btn1.lastChild.innerHTML !== 'A3'){  for(i = 0; i < 3; i++) { button = document.createElement('button')
    button.innerHTML = btns[i]
 btn1.appendChild(button)
 button.classList.add('newbtn')
 button.classList.add('move')
 
  }
}else{
  for(i = 0; i<3; i++){
    btn1.removeChild(btn1.lastChild)
  }

}
})
bt2.addEventListener('click', ()=>{
  console.log(wards.lastChild)
  if(btn2.lastChild.innerHTML !== 'A3'){  for(i = 0; i < 3; i++) { button = document.createElement('button')
    button.innerHTML = btns[i]
 btn2.appendChild(button)
 button.classList.add('newbtn')
 button.classList.add('move')
 
  }
}else{
  for(i = 0; i<3; i++){
    btn2.removeChild(btn2.lastChild)
  }

}
})

