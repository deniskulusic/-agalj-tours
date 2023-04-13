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


var count=0;
num1.innerHTML = count+1;
num2.innerHTML = elems.length;
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

const upit=document.querySelector(".upit");
const upitup=document.querySelector(".upit-up");
upitup.onclick = function() {
    upit.classList.toggle("up-upit");
};

//Success popup

const success=document.querySelector(".success");
const upitbutton=document.getElementsByClassName("upit-button");
for(j=0;j<upitbutton.length;j++){
    upitbutton[j].addEventListener('click',function(){
        success.classList.toggle("active-upit");
        upit.classList.remove("up-upit");
    });
    
}

//Menu dropdown

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
for(j=0;j<lngpopbutton.length;j++){
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


