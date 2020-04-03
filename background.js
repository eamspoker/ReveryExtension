chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({reliabilty: 'unset'}, function() {
    console.log("reliabilty is high");
  });

  chrome.storage.sync.set({color: '#ffffff'}, function() {
    console.log("Color is white!");
  });

  chrome.storage.sync.set({points: 0}, function() {
    console.log("Points are zero!");
  });

  chrome.storage.sync.set({description: ""}, function() {
    console.log("Description is blank!");
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
