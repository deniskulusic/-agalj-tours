const button = document.querySelector(".menu");
const navbar=document.querySelector("nav");
const buttonPressed = (e) => {
  navbar.classList.toggle("menu-active");
  
}
button.addEventListener("click", buttonPressed);

const wrap=document.querySelector(".wrapper");
const dark=document.querySelector(".dark");
var pageyoff=wrap.scrollTop;
var darkfromtop=pageyoff + dark.getBoundingClientRect().top;
var darkheight=dark.offsetHeight;
function scroll() {
    if(wrap.scrollTop>(darkfromtop + darkheight)){
        navbar.classList.remove("inverted");
        
    }
    else if((wrap.scrollTop>darkfromtop)){
        navbar.classList.add("inverted");
    }
    
    else{
        navbar.classList.remove("inverted");
    }
    if(wrap.scrollTop>wrap.offsetHeight){
      navbar.classList.remove("transparent");
    }
    else{
        navbar.classList.add("transparent");
    }
  }
  wrap.onscroll = scroll;
function reportWindowSize() {
  if(window.innerWidth>950){
      navbar.classList.remove("menu-active");
  }
  pageyoff=wrap.scrollTop;
  darkfromtop=pageyoff + dark.getBoundingClientRect().top;
  darkheight=dark.offsetHeight;
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