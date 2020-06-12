var name = document.location.host;

if(name == "eamspoker.github.io"){
  var timer = document.getElementById('timer');
  var saved = document.getElementById('saved');
  var startTime;
  var updatedTime;
  var difference;
  var tInterval;
  var savedTime = chrome.storage.sync.get(['time_spent'], function(value) {
    return value.time_spent;
  });;




    function startTimer(){
      startTime = new Date().getTime();
      tInterval = setInterval(getShowTime, 1);
  }

  function getShowTime(){
    updatedTime = new Date().getTime();
    if (savedTime){
      difference = (updatedTime - startTime) + savedTime;
    } else {
      difference =  updatedTime - startTime;
    }
    // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    timer.textContent = hours + ':' + minutes + ':' + seconds;

    chrome.storage.sync.set({time_spent: difference}, function() {
      console.log("time is set");
    });


  }


  startTimer();


}
