var name = document.location.host;
var timer = document.getElementById('timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;


function getShowTime(){

  updatedTime = new Date().getTime();
  difference = (updatedTime - startTime) + savedTime;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  timer.textContent = days + ':' + hours + ':' + minutes + ':' + seconds;
  chrome.storage.sync.set({['time_spent']: difference}, function() {
  });


}


if(name == "eamspoker.github.io"){
  chrome.storage.sync.get(['time_spent'], function(value) {
    savedTime = value.time_spent;
  });

    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);


} else {
  chrome.storage.sync.get(['time_spent'], function(value) {
    savedTime = value.time_spent;
  });
  clearInterval(tInterval);
}
