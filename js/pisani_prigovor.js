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