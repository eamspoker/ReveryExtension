var name = document.location.host;
if(name == "eamspoker.github.io"){
  var timer = document.getElementById('timer');
  var number = chrome.storage.sync.get(['time_spent'], function(value) {
    value.time_spent;
  });

  timer.textContent = "Welcome!";


  function changeText(){
      chrome.storage.sync.get(['time_spent'], function(value) {
                var zero = "0";
                var seconds = value.time_spent % 60;
                if(seconds < 10){
                  seconds = zero + seconds.toString();
                }

                var minutes = Math.floor(value.time_spent/60);

                if(minutes > 60){
                  minutes = minutes % 60;
                }

                if(minutes < 10){
                  minutes = zero + minutes.toString();
                }

                minutes += ":";

                var hours = Math.floor(minutes/60);

                if(isNaN(hours)){
                  hours = 0;
                }

                if(hours > 24){
                  hours = hours % 24;
                }

                if(hours < 10){
                  hours = zero + hours.toString();
                }

                hours += ":";

                var days = Math.floor(hours/24);

                if(isNaN(days)){
                  days = 0;
                }

                if(days < 10){
                  days = zero + days.toString();
                }

                days += ":";


                timer.textContent = days + hours + minutes + seconds;
                number = value.time_spent;
      });

      time();
  }

  function time(){
      setTimeout(update, 1000);
  }

  function update(){
    number += 1;
    chrome.storage.sync.set({time_spent: number}, function() {
      console.log("time is set");
    });
    changeText();
  }


  time();
}
