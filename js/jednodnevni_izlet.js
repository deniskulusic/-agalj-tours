//Accordation

const acordation=document.getElementsByClassName('faq');
for(i=0;i<acordation.length;i++){
  
    acordation[i].addEventListener('click',function(){
    var faqa=this.classList.contains("active");
        var elems = document.querySelectorAll(".faq.active");
[].forEach.call(elems, function(el) {
    el.classList.remove("active");
});

if(faqa) {
  this.classList.remove("active");
        }
        else{
          this.classList.add("active");
        }
    })
}
const galerybutton=document.querySelectorAll(".galery-open , .background-gal");
const galerypopup=document.querySelector(".galerija-fullscreen");

for(i=0;i<galerybutton.length;i++){
  galerybutton[i].addEventListener('click',function(){
    galerypopup.classList.toggle("active-gal");
  })
}


const main =document.querySelector(".main");
const left = document.querySelector(".button-left");
const right = document.querySelector(".button-right");
const elems= document.querySelectorAll(".main img");
const num1=document.querySelector(".num1");
const num2=document.querySelector(".num2");
const footer=document.querySelector("footer");
var pageyoff=window.scrollY;
var footerftomtop =pageyoff + footer.getBoundingClientRect().top;
const upit=document.querySelector(".upit");
const upitup=document.querySelector(".upit-up");
const upitback=document.querySelector(".upit-background");
function reportWindowSize() {
  if(window.innerWidth>950){
      navbar.classList.remove("menu-active");
  }
  pageyoff=window.scrollY;
  footerftomtop =pageyoff + footer.getBoundingClientRect().top;
}

window.onresize = reportWindowSize;

var count=0;
num1.innerHTML = count+1;
num2.innerHTML = elems.length;
function scroll() {
  num1.innerHTML = Math.round(main.scrollLeft/main.offsetWidth)+1;
}
main.onscroll = scroll;
main.scrollTo(0,0);
const leftpress = (e) => {
    if(count!=0){count--}
  main.scrollTo(main.offsetWidth*count,0 );
  num1.innerHTML = count+1;
}
const rightpress = (e) => {
    if(count!=(elems.length-1)){count++}
    main.scrollTo(main.offsetWidth*count,0 );
    num1.innerHTML = count+1;

  }

right.addEventListener("click", rightpress);
left.addEventListener("click", leftpress);
//Mobile upit up/down
function scroll_body(){
  if(window.scrollY + window.innerHeight>footerftomtop+100){
    upit.classList.add("upit-footer");
  }
  else{
    upit.classList.remove("upit-footer");
  }
}

document.body.onscroll = scroll_body;
function upitupf() {
  upit.classList.toggle("up-upit");
    upitback.classList.toggle("up-upitb");
}
upitup.onclick=upitupf;
upitback.onclick=upitupf;
//Success popup

const success=document.querySelector(".success");
const upitbutton=document.querySelectorAll(".upit-button , .background-s");
for(j=0;j<upitbutton.length;j++){
    upitbutton[j].addEventListener('click',function(){
        success.classList.toggle("active-upit");
        upit.classList.remove("up-upit");
        upitback.classList.remove("up-upitb");
    });
    
}

//Menu dropdown

const button2 = document.querySelector(".menu");
const navbar=document.querySelector("nav");
const buttonPressed2 = (e) => {
  navbar.classList.toggle("menu-active");
}
button2.addEventListener("click", buttonPressed2);



//Language

const lngpopup=document.querySelector(".lng-popup");
const lngpopbutton=document.querySelectorAll(".lng-desktop , .close-lng , .background");
for(j=0;j<lngpopbutton.length;j++){
  lngpopbutton[j].addEventListener('click',function(){
      lngpopup.classList.toggle("active-lng");
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
const lngpopupmobile=document.querySelector(".menu-mobile");
const lngpopbuttonmobile=document.querySelectorAll(".lng-mobile-text , .lng");
for(j=0;j<lngpopbuttonmobile.length;j++){
  
  lngpopbuttonmobile[j].addEventListener('click',function(){
      lngpopupmobile.classList.toggle("lng-mobile-active");
  });
  
}




//Show more

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


