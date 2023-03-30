const button = document.querySelector(".menu");
const navbar=document.querySelector("nav");
const buttonPressed = (e) => {
  navbar.classList.toggle("menu-active");
  console.log("yo");
}
button.addEventListener("click", buttonPressed);

function reportWindowSize() {
  if(window.innerWidth>950){
      navbar.classList.remove("menu-active");
  }
}

window.onresize = reportWindowSize;