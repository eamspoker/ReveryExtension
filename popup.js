
var activate = document.getElementById('activate');
var name = document.location.host;

function setText(){
  text.innerHTML = document.location.host;
}





activate.onclick = function(element) {
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     chrome.tabs.executeScript(
          tabs[0].id,
          {file: "content.js"});
    });
};
