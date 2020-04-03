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
