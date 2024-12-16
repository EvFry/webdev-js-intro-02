"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const year = 2025;
let resolution ="Get below 300 pounds";
let meet = true;


function updateYear() {
    // Update this function
yearElement.innerText = year;
}

function updateResolution() {
    // Update this function 
resolutionElement.innerText = resolution;
}

function updateWillMeetResolution() {
    // Update this function
willMeetResolutionElement.innerText = meet;
}

function render() {
    // Update this function
updateYear();
updateResolution();
updateWillMeetResolution();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
render();
})
