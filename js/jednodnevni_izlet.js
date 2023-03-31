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

const upit=document.querySelector(".upit");
const upitup=document.querySelector(".upit-up");
upitup.onclick = function() {
    upit.classList.toggle("up-upit");
};

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
  console.log("yo");
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

const more=document.querySelector(".more");
var showmore=document.querySelector(".text-underline");
const morepressed = (e) => {
 
  more.classList.toggle("show-more");
  if (showmore.innerHTML === "Prikaži više") {
    showmore.innerHTML = "Prikaži manje";
  } else {
    showmore.innerHTML = "Prikaži više";
  }
}
showmore.addEventListener("click", morepressed);
