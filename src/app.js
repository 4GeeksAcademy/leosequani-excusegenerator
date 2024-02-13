/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function makeTheExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "the bike"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let strWho = who[Math.floor(Math.random() * 3)];
  let strAction = action[Math.floor(Math.random() * 3)];
  let strWhat = what[Math.floor(Math.random() * 3)];
  let strWhen = when[Math.floor(Math.random() * 3)];
  let excuse = `${strWho} ${strAction} ${strWhat} ${strWhen}`;
  document.getElementById("excuse").innerHTML = excuse;
}
window.onload = function() {
  makeTheExcuse();
};
