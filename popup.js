var goButton = document.getElementById('goButton');
var thermometer = document.getElementById('thermometer');
var awayButton = document.getElementById('awayButton');
var pointDisplay = document.getElementById("pointDisplay");
var points = document.getElementById("points");
var descriptionElem = document.getElementById("description");
var counter = 0;
var claimed = false;

function getThermometer(){
  chrome.storage.sync.get(['reliabilty'], function(value) {
          thermometer.textContent = "Reliability: " + value.reliabilty;
          if(!claimed && value.reliabilty == "Very High"){
            incrementPoints();
            claimed = true;
          }
        });

}

function getDescription(){
  chrome.storage.sync.get(['description'], function(value) {
          descriptionElem.textContent = value.description;
        });

}

function getColor(){
  chrome.storage.sync.get(['color'], function(value) {
          thermometer.style.backgroundColor = value.color;
          thermometer.style.color = "white";
        });

}

function getPoints(){
  chrome.storage.sync.get(['points'], function(value) {
          pointDisplay.textContent = "Points: " + value.points;
        });
}

function incrementPoints(){
  chrome.storage.sync.get(['points'], function(value) {
        var newPoints = value.points + 1;
        chrome.storage.sync.set({['points']: newPoints}, function() {
                  console.log('Value is set');
              });
        });
}


goButton.onclick = function(element) {
  if(counter == 0){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
         tabs[0].id,
         {file: "content.js"});
   });
   thermometer.textContent = "Reliability: ";
   goButton.textContent = "Show Results";
   counter += 1;
} else{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
         tabs[0].id,
         {file: "content.js"});
   });

   getDescription();
   getThermometer();
   getColor();

   goButton.textContent = "Check Page";
   counter = 0;
}



 };

 awayButton.onclick = function(element) {
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     chrome.tabs.executeScript(
          tabs[0].id,
          {file: "navigate.js"});
    });
};

window.onload = getPoints();
