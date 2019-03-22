window.addEventListener("load",textChange);

var el=document.getElementById("doge");

el.addEventListener("mouseenter",littleIcon);


function textChange(){
    el.innerHTML="Woof!";
  }




function littleIcon(){
    el.innerHTML="qsdf";
    el.style.backgroundImage= url("doggy.jpeg");
    el.style.backgroundRepeat= no-repeat;
    el.style.backgroundPosition= "50% 0%";
    el.style.backgroundSize= contain;
  }
