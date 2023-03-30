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