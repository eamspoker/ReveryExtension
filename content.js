var fakes = ["Americasfreedomfighters.com", "Rightwingtribune.com", "Americaslastlineofdefense.org", "worstpot.us", "nofakenewsonline.us", "Theamericanews.co", "Americanjournalreview.com", "Americatalks.com", "thepedogate.com", "Americatalks.com:", "Americatalks.com", "BannedInformation.com", "BannedInformation.com", "BannedInformation.com", "FBnewscycle.com.", "BlingNews.com", "BlingNews.com", "CBINFO24.com", "Cbinfo24.com", "Channel23News.com", "Conservativeangle.com", "Consnation.com", "Conservativepost.com", "Theconservativetreehouse.com", "Daily-vine.com", "empirenews.net", "En-volve.com", "Fbnewscycle.com", "FBNewsCycle.com", "FBNewsCycle.com", "BannedInformation.com", "Fellowshipoftheminds.com", "Gellerreport.com", "Infowars.com", "KAGfeed.com", "Thelibertyraise.com", "Londonwebnews.com", "MMinfo24.com", "MMinfo24.com", "Neonnettle.com", "Newspunch.com", "Newslo/Politicops.com", "politicops.com", "politicops.com", "NYeveningnews.com", "Patriotswalk.us", "Policetask.com", "Politicsfocus.com", "The-postillon.com", "Puppetstringnews.com", "Realnewsrightnow.com", "Rightwingtribune.com", "Americasfreedomfighters.com.", "RWNofficial.com", "Therightists.com", "SpecialNewsUSA.com", "7newspolitical.site", "Stgeorgegazette.com", "Stuppid.com", "Stuppid.com", "Teddystick.com", "Topalertnews.com", "Truthfeednews.com", "Universaleinfo.com", "Trainnews.info", "Ussanews.com", "Viralcords.com", "Viralnewspbs.site", "Viralitythings.us", "WebViners.com", "Webviners.com", "Worldnews-24.press"];

var goods = ["www.scientificamerican.com", "www.nasa.gov", "www.ncbi.nlm.nih.gov", "agupubs.onlinelibrary.wiley.com", "www.apa.org", "www.nature.com", "www.planetforward.org", "smpa.gwu.edu", "sustainability.gwu.edu", "arctic-news.blogspot.com", "www.climatesciencewatch.org", "www.desmogblog.com", "climate.nasa.gov", "climate.nasa.gov", "www.climatelinks.org", "www.climate.gov", "www.accuweather.com", "cleantechnica.com", "www.climatecentral.org", "www.climatechangenews.com", "www.eenews.net", "www.dailyclimate.org", "www.ecowatch.com", "www.environmentalhealthnews.org", "www.greenbiz.com", "grist.org", "www.theguardian.com", "thehill.com", "www.pbs.org", "insideclimatenews.org", "www.livescience.com", "www.motherjones.com", "www.newscientist.com", "www.nytimes.com", "www.npr.org", "phys.org", "www.politico.com", "www.sciencefocus.com", "www.treehugger.com", "www.washingtonpost.com", "www.aspeninstitute.org", "www.c2es.org", "blogs.edf.org", "www.climatecommunication.org", "www.climatedesk.org", "climateforhealth.org", "ecoamerica.org", "www.climateinteractive.org", "www.climaterealityproject.org", "blogs.worldbank.org", "www.greenpeace.org", "blog.ucsusa.org", "ewg.org", "www.ipcc.ch", "www.nrdc.org", "www.brookings.edu", "www.rand.org", "www.sciencenews.org", "www.sej.org", "www.smithsonianmag.com", "www.who.int", "wwf.panda.org", "public.wmo.int", "publichealthonline.gwu.edu", "cdn2.publichealthonline.gwu.edu", "cdn3.publichealthonline.gwu.edu"];
var fullname = document.location.host;
var name = "";
var fullkey = "";

var val = "Medium";
setColor("yellow");
setDescription(fullname + " is neither recommended nor disapproved for environmental issues.");

function fakeCheck(){
  fakes.forEach(fake => {
    name = fullname.replace("www\.", "");
    fullkey = (fake).toLowerCase();
    if(name == fullkey){
      val = "Very Low";
      setColor("red");
      setDescription(name + " purposefully publishes fake information. It is highly DISCOURAGED to research or believe this site.");
    }
  });
  if(name.match(/\./) != null){
    console.log("Check " + val);
  setThermometer(val);
}




}


function setThermometer(value){
  chrome.storage.sync.set({['reliabilty']: value}, function() {
          console.log('Value is set to ' + value);
        });
}


function setDescription(value){
  chrome.storage.sync.set({['description']: value}, function() {
          console.log('Value is set to ' + value);
        });
}

function setColor(value){
  if(value == "red"){
  chrome.storage.sync.set({['color']: '#c63039'}, function() {
          console.log('Value is set to ' + value);
        });
  } else if(value == "yellow") {
  chrome.storage.sync.set({['color']: '#f9d164'}, function() {
          console.log('Value is set to ' + value);
        });
  } else if(value == "green"){
    chrome.storage.sync.set({['color']: '#7cb754'}, function() {
            console.log('Value is set to ' + value);
          });
  }
}


function goodCheck(){
  goods.forEach(good => {
    name = fullname.replace("www\.", "");
    fullkey = (good).toLowerCase();
    fullkey = fullkey.replace("www\.", "");
    if(name == fullkey){
      val = "Very High";
      setColor("green");
      setDescription(name + " is considered an accurate and reliable source of environmental information.");
    }
  });
  if(name.match(/\./) != null){
    console.log("Check " + val);
  setThermometer(val);
}
}

function check(){
  fakeCheck();
  goodCheck();
}



check();
