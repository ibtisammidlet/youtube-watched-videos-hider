
function handleInstalled(details) {
	//** making the addon in on status
function setItem() {console.log("on status");}
function onError(error) {console.log(error)}
// define 1 objects
let SOA = {name: "on"}
// store the objects
browser.storage.local.set({SOA})
  .then(setItem, onError);
	
//** adding empty youtube ID
addNote();
function addNote() {
function setItem() {
  console.log("youtube ID saved");
}
function gotyoutubeid(item) {
    console.log("your saved id is: "+`${item.youtubeid.name}`);
}
function onError(error) {
  console.log(error)
}
// define 2 objects
let youtubeid = {
  name: ""
}
// store the objects
browser.storage.local.set({youtubeid})
  .then(setItem, onError);
browser.storage.local.get("youtubeid")
  .then(gotyoutubeid, onError);
}

// define The video should only be hidden if a configurable percentage of the video has been watched
let confperc = {"value": "1"}
// store the objects
browser.storage.local.set({confperc})
  .then(setItem, onError);
	

/* openning setting page
browser.runtime.openOptionsPage()
*/
}

browser.runtime.onInstalled.addListener(handleInstalled);



function addoff() {
function setItem() {console.log("off status");}
function onError(error) {console.log(error)}

// define 1 objects
let SOA = {name: "off"}

// store the objects
browser.storage.local.set({SOA})
  .then(setItem, onError);
}


function addon() {
function setItem() {console.log("on status");}
function onError(error) {console.log(error)}

// define 1 objects
let SOA = {name: "on"}

// store the objects
browser.storage.local.set({SOA})
  .then(setItem, onError);
}


function toggleTitle(title) {
  if (title == "on") {
    browser.browserAction.setTitle({title: "off"});
	browser.browserAction.setIcon({path:{64:'icons/logo-gray.png'}});
	addoff();
  } else {
    browser.browserAction.setTitle({title: "on"});
	browser.browserAction.setIcon({path:{64:'icons/logo.png'}});
	addon();
  }
}

browser.browserAction.onClicked.addListener(() => {
  var gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});





//** you need to check this if working (onstartup)
browser.runtime.onStartup.addListener(() => {
	
	

  

function gotSOA(item) {
	
if (item.SOA.name == "on") {
    browser.browserAction.setTitle({title: "on"});
	browser.browserAction.setIcon({path:{64:'icons/logo.png'}});
}else{
    browser.browserAction.setTitle({title: "off"});
	browser.browserAction.setIcon({path:{64:'icons/logo-gray.png'}});
};

};
//** getting addon status
function onError(error) {console.log(error)}
browser.storage.local.get("SOA")
.then(gotSOA, onError);





});


