//Accordation

const acordation=document.getElementsByClassName('faq');
for(i=0;i<acordation.length;i++){
    acordation[i].addEventListener('click',function(){
        var elems = document.querySelectorAll(".faq.active");
[].forEach.call(elems, function(el) {
    el.classList.remove("active");
});
        this.classList.toggle('active');
    })
}

//Menu
const button = document.querySelector(".menu");
const navbar=document.querySelector("nav");
const buttonPressed = (e) => {
  navbar.classList.toggle("menu-active");
}
button.addEventListener("click", buttonPressed);


function reportWindowSize() {
    if(window.innerWidth>950){
        navbar.classList.remove("menu-active");
    }
  }
  
  window.onresize = reportWindowSize;

//Language

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