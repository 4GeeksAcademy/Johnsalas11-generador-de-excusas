/* eslint-disable */
import "./style.css";

window.onload = function() {
  let who = [
    "Shrek",
    "Morty",
    "Peter griffin",
    "Marge Simpson",
    "Roger el alien"
  ];
  let action = ["se tragó", "me robó", "mancilló", "se hizo pis en", "pisó"];
  let what = ["mis proyectos", "mi peluca", "mi motivación", "mi dignidad"];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);

  document.querySelector("#excuse").innerHTML =
    who[randomWho] + " " + action[randomAction] + " " + what[randomWhat] + "! ";
};

//git add .
//git commit -m "generador de excusas"
//git push
//copiar link en el apartado de entrega
