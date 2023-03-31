const button = document.querySelector(".checkbox");
const buttonPressed = (e) => {
  e.target.classList.toggle("active");
}
button.addEventListener("click", buttonPressed);

const success=document.querySelector(".success");
const upitbutton=document.getElementsByClassName("upit-button");

for(j=0;j<upitbutton.length;j++){
    upitbutton[j].addEventListener('click',function(){
        success.classList.toggle("active-upit");
        upit.classList.remove("up-upit");
    });
    
}


const button2 = document.querySelector(".menu");
const navbar=document.querySelector("nav");
const buttonPressed2 = (e) => {
  navbar.classList.toggle("menu-active");
}
button2.addEventListener("click", buttonPressed2);



function reportWindowSize() {
  if(window.innerWidth>950){
      navbar.classList.remove("menu-active");
  }
}
window.onresize = reportWindowSize;


const lngpopup=document.querySelector(".lng-popup");
const lngpopbutton=document.querySelectorAll(".lng , .close-lng");
for(j=0;j<lngpopbutton.length;j++){
  lngpopbutton[j].addEventListener('click',function(){
      lngpopup.classList.toggle("active-lng");
  });
  
}


const lngbutton=document.querySelectorAll(".buttons button");
lngbutton[1].setAttribute('disabled', 'true');
for(i=0;i<lngbutton.length;i++){
  lngbutton[i].addEventListener('click',function(){
[].forEach.call(lngbutton, function(el) {
  el.removeAttribute('disabled');
});
      this.setAttribute('disabled', 'true');
  })
}