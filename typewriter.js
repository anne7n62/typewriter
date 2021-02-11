"use strict";

window.addEventListener("DOMContentLoaded", init);

  //get the text from somewhere
const readText = document.querySelector(".typewritten").textContent;
let n = 0;

function init() {
    console.log("init");

    // clear the HTML area
    document.querySelector(".typewritten").textContent = "" ;
   
    //start loop
    loop();
}

function loop() {
    console.log("loop");
    //show the N'th letter:
    //- set text content of 0 to N

    if (n < readText.length) {
        //replaces string
        document.querySelector(".typewritten").textContent += readText.charAt(n);
        // it adds a letter
        n++;
        //timeout, gentag loop
        setTimeout(loop, 150);
    }
}