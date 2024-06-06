
let ent = document.querySelector('.btns')
let btn2 = document.getElementById('bt2')
let btn3 = document.getElementById('bt3')
let btn4 = document.getElementById('bt4')
let btn5 = document.getElementById('bt5')
let btn6 = document.getElementById('bt6')
let btn7 = document.getElementById('bt7')
let btn8 = document.getElementById('bt8')
let btn9 = document.getElementById('bt9')
let btn10 = document.getElementById('bt10')
let btn11 = document.getElementById('bt11')
let btn12 = document.getElementById('bt12')
let btn13 = document.getElementById('bt13')


let newbtn = document.querySelectorAll('.bt1')
let wards = document.querySelector('.wards')


let bt2 = document.querySelectorAll('.bt2')
let bt3 = document.querySelectorAll('.bt3')
let bt4 = document.querySelectorAll('.bt4')
let bt5 = document.querySelectorAll('.bt5')
let bt6 = document.querySelectorAll('.bt6')
let bt7 = document.querySelectorAll('.bt7')
let bt8 = document.querySelectorAll('.bt8')
let bt9 = document.querySelectorAll('.bt9')
let bt10 = document.querySelectorAll('.bt10')
let bt11 = document.querySelectorAll('.bt11')
let bt12 = document.querySelectorAll('.bt12')
let bt13 = document.querySelectorAll('.bt13')




const more = document.querySelector('.more')
more.addEventListener('click',()=>{
  
let hide = document.querySelector('.hide')
let hide1 = hide.style
  if(hide1.display === 'none'
){hide1.display = 'block', more.innerHTML = 'less...'
  
}else{
  hide1.display = 'none';
  more.innerHTML = 'More...'}
} )

ent.addEventListener('click', en1)
function en1 (){
  
    newbtn.forEach((newbtn)=>{
      let style = newbtn.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}
function hi(bro){
  bro.forEach((bro)=>{
    let style = bro.style
    if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
  })
}
btn2.addEventListener('click', en2)
function en2 (){
  
    bt2.forEach((bt2)=>{
      let style = bt2.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}
btn3.addEventListener('click', en3)
function en3(){
  
    bt3.forEach((bt3)=>{
      let style = bt3.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}
btn4.addEventListener('click', en4)
function en4(){
  
    bt4.forEach((bt4)=>{
      let style = bt4.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}
btn5.addEventListener('click', en5)
function en5(){
  
    bt5.forEach((bt5)=>{
      let style = bt5.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}
btn6.addEventListener('click', en6)
function en6(){
  
    bt6.forEach((bt6)=>{
      let style = bt6.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}
btn7.addEventListener('click', en7)
function en7(){
  
    bt7.forEach((bt7)=>{
      let style = bt7.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}
btn8.addEventListener('click', en8)
function en8(){
  
    bt8.forEach((bt8)=>{
      let style = bt8.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}btn9.addEventListener('click', en9)
function en9(){
  
    bt9.forEach((bt9)=>{
      let style = bt9.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}btn10.addEventListener('click', en10)
function en10(){
  
    bt10.forEach((bt10)=>{
      let style = bt10.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}btn11.addEventListener('click', en11)
function en11(){
  
    bt11.forEach((bt11)=>{
      let style = bt11.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}
btn12.addEventListener('click', en12)
function en12(){
  
    bt12.forEach((bt12)=>{
      let style = bt12.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}btn13.addEventListener('click', en13)
function en13(){
  
    bt13.forEach((bt13)=>{
      let style = bt13.style
      if(style.display === 'none'){style.display = 'block'}else{style.display = 'none'}
    })
}

en1(),en2(),  en3(), en4(), en5(), en6(), en7(),en8(),en9(),en10(),en11(),en12(),en13()



