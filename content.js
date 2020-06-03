var elementsInsideBody = [...document.body.getElementsByTagName('*')];
var name = document.location.host;




function fakeCheck(){
    elementsInsideBody.forEach(element =>{
      element.childNodes.forEach(child =>{
        if(child.nodeType === 3){
          replaceText(child);
        }
      });

    });



}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/Website/gi, name);
  node.nodeValue = value;
}

fakeCheck();
