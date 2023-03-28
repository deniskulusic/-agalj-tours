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
const button = document.querySelector(".checkbox");
const buttonPressed = (e) => {
  e.target.classList.toggle("active");
}
button.addEventListener("click", buttonPressed);

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