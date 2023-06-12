
(()=>{
    
  "use strict";
  class e{
      constructor(e,t,f){
          this.name=e.value,
          this.email=t.value
          this.text1=f.value
      }
      validateData(){
          return{
              "name-ok":""!=this.name,
              "email-ok":(e=this.email,!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)),
              "text1-ok":!0
            };
          var e
      }
      sendEmail(){
          var e=new FormData;
          e.append("action","send_email"),
          e.append("name",this.name),
          e.append("email",this.email),
          e.append("text1",this.text1);
          var t=new XMLHttpRequest;
          t.onreadystatechange=function(){
              4==this.readyState&&200==this.status&&("success"==JSON.parse(this.response).status?alert("Inquiry succesfully sent!"):alert("There was problem with sending inquiry!"))},
              t.open("POST",config.ajaxurl,!0),
              t.setRequestHeader("enctype","multipart/form-data"),
              t.send(e)
          }
          
          
          
          }
  function a(t){
      const a=t.currentTarget.parentElement;
      let n=[a.querySelector("#name"),"name-ok"],
      r=[a.querySelector("#email"),"email-ok"],
      f=[a.querySelector("#text1"),"text1-ok"],
      c=[n,r,f];
      const d=new e(n[0],r[0],f[0]),
      u=d.validateData();
      let m=true;
      const success=document.querySelector(".success");
      for(let e of c)
      u[e[1]]?e[0].parentElement.removeAttribute("error"):(e[0].parentElement.setAttribute("error",""),m=false);
      if(m){
        success.classList.toggle("active-upit");
        d.sendEmail();
        r[0].value="";
        n[0].value="";
        f[0].value="";
        c[0].value="";
      }
  }
  document.addEventListener("DOMContentLoaded",(
      function(){
        const upitbutton=document.querySelector(".upit-button");
        upitbutton.addEventListener("click",a);
        const success=document.querySelector(".success");
        const upitbuttonclose=document.querySelectorAll(".upit-button-close , .background-s");
        for( var j=0;j<upitbuttonclose.length;j++){
            upitbuttonclose[j].addEventListener('click',function(){
                success.classList.toggle("active-upit");
            });
            
        }
        
        //Menu
        
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
        //Language
        
        const lngpopup=document.querySelector(".lng-popup");
        const lngpopbutton=document.querySelectorAll(".lng-desktop , .close-lng , .background, .buttons button");
        for(j=0;j<lngpopbutton.length;j++){
          lngpopbutton[j].addEventListener('click',function(){
              lngpopup.classList.toggle("active-lng");
          });
          
        }
        const lngbutton=document.querySelectorAll(".buttons button , .lng-mobile-button");
        lngbutton[1].setAttribute('disabled', 'true');
        lngbutton[3].setAttribute('disabled', 'true');
        for(var i=0;i<lngbutton.length;i++){
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
     }))})();




