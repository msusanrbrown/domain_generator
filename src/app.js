/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "your", "his"];
  let adj = ["great", "big", "stylish", "silly"];
  let noun = ["jogger", "cat", "car", "city"];
  let ext = [".com", ".net", ".us", ".io"];
  let finalName = "";
  let ul = document.getElementById("list");
  for (let i = 0; i < pronoun.length; i++) {
    let str1 = pronoun[i];
    for (let x = 0; x < adj.length; x++) {
      let str2 = adj[x];
      for (let y = 0; y < noun.length; y++) {
        let str3 = noun[y];
        for (let z = 0; z < ext.length; z++) {
          let str4 = ext[z];

          finalName = str1 + str2 + str3 + str4;
          let li = document.createElement("li");
          li.innerHTML = finalName;
          ul.appendChild(li);
          console.log(finalName);
        }
      }
    }
  }
};
