const menuButton = document.querySelector(".menu");
const navBar = document.querySelector (".nav");
const homeButton = document.querySelector(".radioHome");
const orange = document.querySelector(".radioOrange");
const green = document.querySelector (".radioGreen");
const blue = document.querySelector(".radioBlue"); 
const yellow = document.querySelector (".radioYellow");
const body = document.querySelector (".body");
const keyboard = document.querySelector (".keypress");

//addEventlistener
menuButton.addEventListener ("click", () => {
   if (navBar.style.display === "none"){
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
 });

homeButton.addEventListener ("click", () => {
  body.style.backgroundColor = "rgb(177, 171, 171)";
  if (navBar.style.display === "block"){
    navBar.style.display = "none";
    } else {
      navBar.style.display = "none";
    }
});

orange.addEventListener ("click", () =>{
   body.style.backgroundColor = "rgb(233, 172, 60)";
   if (navBar.style.display === "block"){
    navBar.style.display = "none";
    } else {
      navBar.style.display = "none";
    }
});

green.addEventListener ("click", () =>{	
  body.style.backgroundColor = "rgb(38, 146, 38)";
  if (navBar.style.display === "block"){
    navBar.style.display = "none";
    } else {
      navBar.style.display = "none";
    }
});

blue.addEventListener ("click", () =>{	
  body.style.backgroundColor = "rgb(22, 103, 209)";
  if (navBar.style.display === "block"){
    navBar.style.display = "none";
    } else {
      navBar.style.display = "none";
    }
});

yellow.addEventListener ("click", () =>{
    body.style.backgroundColor = "rgb(204, 204, 68)";
      if (navBar.style.display === "block"){
      navBar.style.display = "none";
      } else {
        navBar.style.display = "none";
      }
});


// keyboard changing color.

window.addEventListener ("keypress", checkKeyPress, false);
function checkKeyPress (key){
 if (key.keyCode == "49"){
    body.style.backgroundColor = "rgb(177, 171, 171)";
  }else if(key.keyCode == "50"){
    body.style.backgroundColor = "rgb(233, 172, 60)";
  }else if(key.keyCode == "51"){
    body.style.backgroundColor = "rgb(38, 146, 38)";  
  }else if(key.keyCode == "52"){
    body.style.backgroundColor = "rgb(22, 103, 209)";  
  }else if (key.keyCode == "53"){
    body.style.backgroundColor = "rgb(204, 204, 68)";
  }
};
