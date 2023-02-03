
function handleInstalled(details) {
/** making the addon in on status **/
function setItem() {console.log("on status");}
function onError(error) {console.log(error)}
// define 1 objects
let SOA = {name: "on"}
// store the objects
browser.storage.local.set({SOA})
  .then(setItem, onError);
	
/** adding empty youtube ID **/
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

/** define The video should only be hidden if a configurable percentage of the video has been watched **/
let confperc = {"value": "1"}
// store the objects
browser.storage.local.set({confperc})
  .then(setItem, onError);
	
	
/** setting preinstalled what will be hiden **/
//** playlists
function playlistsconf() {
function setItem() {console.log("instalation playlist conf done");}
function onError(error) {console.log(error)}
function TOBEHIDDENxPLAYLISTSxFUN(item) {console.log("playlists hidding is "+`${item.TOBEHIDDENxPLAYLISTS.value}`);}

let TOBEHIDDENxPLAYLISTS = {"value": "on"};
browser.storage.local.set({TOBEHIDDENxPLAYLISTS})
  .then(setItem, onError);
browser.storage.local.get("TOBEHIDDENxPLAYLISTS")
  .then(TOBEHIDDENxPLAYLISTSxFUN, onError);
} playlistsconf();

//** channels
function channelsconf() {
function setItem() {console.log("instalation channels conf done");}
function onError(error) {console.log(error)}
function TOBEHIDDENxCHANNELSxFUN(item) {console.log("channels hidding is "+`${item.TOBEHIDDENxCHANNELS.value}`);}

let TOBEHIDDENxCHANNELS = {"value": "on"};
browser.storage.local.set({TOBEHIDDENxCHANNELS})
  .then(setItem, onError);
browser.storage.local.get("TOBEHIDDENxCHANNELS")
  .then(TOBEHIDDENxCHANNELSxFUN, onError);
} channelsconf();

//** others
function othersconf() {
function setItem() {console.log("instalation others conf done");}
function onError(error) {console.log(error)}
function TOBEHIDDENxOTHERSxFUN(item) {console.log("others hidding is "+`${item.TOBEHIDDENxOTHERS.value}`);}

let TOBEHIDDENxOTHERS = {"value": "on"};
browser.storage.local.set({TOBEHIDDENxOTHERS})
  .then(setItem, onError);
browser.storage.local.get("TOBEHIDDENxOTHERS")
  .then(TOBEHIDDENxOTHERSxFUN, onError);
} othersconf();










/* openning setting page
browser.runtime.openOptionsPage()
*/
}

browser.runtime.onInstalled.addListener(handleInstalled);


/** switcher between on/off by addon icon click **/
//** pre defined function to call
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

//** pre-defined swither function 
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

//** call when icon clicked
browser.browserAction.onClicked.addListener(() => {
  var gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
/** end **/













//** setting addon icon on startup
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


