chrome.runtime.onInstalled.addListener(function() {

  chrome.storage.sync.set({time_spent: 0}, function() {
    console.log("time is zero");
  });






  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      console.log(document.location.host);
       chrome.declarativeContent.onPageChanged.addRules([{
         conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {},
          })
          ],
             actions: [new chrome.declarativeContent.ShowPageAction()]
       }]);
   });

});
