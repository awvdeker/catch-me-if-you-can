window.addEventListener("load",textChange);

var el=document.getElementById("doge");

el.addEventListener("mouseenter",littleIcon);


function textChange(){
    el.innerHTML="Woof!";
  }




function littleIcon(){
    el.innerHTML="";
    el.style.backgroundImage= "url('doggy.jpeg')";
    el.style.backgroundRepeat= "no-repeat";
    el.style.backgroundPosition= "50% 0%";
    el.style.backgroundSize= "contain";
  }


console.log()
//zo kan je kijken in console in chrome of firefox wat het geeft !!
//belangrijk!!!


//oplossing

//document.getElementById("doge").addEventListener("mouseover",function())
