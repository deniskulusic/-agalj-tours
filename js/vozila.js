const vozilopopup=document.querySelector(".vozila-popup");
const vozilopopbutton=document.querySelectorAll(".back-vozilo , .background-v , .close-lng-v");
const tipvozila=document.querySelector(".tip-vozila");
for(j=0;j<vozilopopbutton.length;j++){
  
  if(j==3){
    vozilopopbutton[j].addEventListener('click',function(){
      vozilopopup.classList.toggle("active-vozila");
      tipvozila.value="Mazda 3";
  });
  }
  else if(j==4){
    vozilopopbutton[j].addEventListener('click',function(){
      vozilopopup.classList.toggle("active-vozila");
      tipvozila.value="Citroen Jumper";
  });
  }
  else if(j==5){
    vozilopopbutton[j].addEventListener('click',function(){
      vozilopopup.classList.toggle("active-vozila");
      tipvozila.value="Setra 411";
  });
  }
  else{
    vozilopopbutton[j].addEventListener('click',function(){
      vozilopopup.classList.toggle("active-vozila");
      
  });
  }
}


const success=document.querySelector(".success");
const upitbutton=document.querySelectorAll(".upit-button , .background-s");

for(j=0;j<upitbutton.length;j++){
    upitbutton[j].addEventListener('click',function(){
        success.classList.toggle("active-upit");
    });
    
}



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
navbar.style.backgroundColor="transparent";
function scroll() {
  if(window.pageYOffset>0){
    navbar.style.backgroundColor="#FFFFFF";
    
  }
  else{
    navbar.style.backgroundColor="transparent";
  }
}
window.onscroll = scroll;
const lngpopup=document.querySelector(".lng-popup");
const lngpopbutton=document.querySelectorAll(".lng-desktop , .close-lng , .background");
for(j=0;j<lngpopbutton.length;j++){
  lngpopbutton[j].addEventListener('click',function(){
      lngpopup.classList.toggle("active-lng");
  });
  
}
const lngpopupmobile=document.querySelector(".menu-mobile");
const lngpopbuttonmobile=document.querySelectorAll(".lng-mobile-text , .lng");
for(j=0;j<lngpopbuttonmobile.length;j++){
  lngpopbuttonmobile[j].addEventListener('click',function(){
      lngpopupmobile.classList.toggle("lng-mobile-active");
      
  });
  
}


const lngbutton=document.querySelectorAll(".buttons button , .lng-mobile-button");
lngbutton[1].setAttribute('disabled', 'true');
lngbutton[3].setAttribute('disabled', 'true');
for(i=0;i<lngbutton.length;i++){
  lngbutton[i].addEventListener('click',function(){
[].forEach.call(lngbutton, function(el) {
  el.removeAttribute('disabled');
});
      this.setAttribute('disabled', 'true');
  })
}
