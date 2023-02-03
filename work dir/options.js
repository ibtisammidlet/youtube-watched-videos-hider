/** set youtubeid **/
var addBtn = document.querySelector('.add');
var inputTitle = document.querySelector('.new-note input');


addBtn.addEventListener('click', check);
function check() {
if (inputTitle.value != "") {
addNote();
}else{
let youtubeid = {
  name: ""
}

// store the objects
browser.storage.local.set({youtubeid})
  .then(youtubeiddeleted, onError);
  function youtubeiddeleted() {
alert("youtube ID deleted");
  };
  function onError(error) {
  console.log(error)
}
};
}

function addNote() {
function setItem() {
  console.log("youtube ID saved");
}

function gotyoutubeid(item) {
  alert("your saved id is: "+`${item.youtubeid.name}`);
}

function onError(error) {
  console.log(error)
}

// define 2 objects

let youtubeid = {
  name: inputTitle.value
}

// store the objects
browser.storage.local.set({youtubeid})
  .then(setItem, onError);

browser.storage.local.get("youtubeid")
  .then(gotyoutubeid, onError);

}








/** set percentage **/
var addBtnpercentage = document.querySelector('.addpercentage');
var inputTitlepercentage = document.querySelector('.new-percentage input');

addBtnpercentage.addEventListener('click', setperc);
function setperc() {
	
function setlogconfperc() {
  console.log("confperc saved");
}
function gotconfperc(item) {
  alert("videos watched equal or more then "+`${item.confperc.value}`+ " will be hidden");
}

function onError(error) {
  console.log(error)
}

// define 2 objects

let confperc = {
  value: inputTitlepercentage.value
}

// store the objects
browser.storage.local.set({confperc})
  .then(setlogconfperc, onError);

browser.storage.local.get("confperc")
  .then(gotconfperc, onError);

}





/** set TOBEHIDDEN **/
var addBtnTOBEHIDDEN = document.querySelector('.replacehidden');

addBtnTOBEHIDDEN.addEventListener('click', check);
function check() {
	
//** channels
if ($('.new-TOBEHIDDEN .channels').is(':checked')) {
let TOBEHIDDENxCHANNELS = {"value": "on"}; 
browser.storage.local.set({TOBEHIDDENxCHANNELS})
.then(TOBEHIDDENxCHANNELSxON, onError);
function TOBEHIDDENxCHANNELSxON() {alert("CHANNELS hidding is on");};
function onError(error) {console.log(error)}
}else{
let TOBEHIDDENxCHANNELS = {"value": "off"}; 
browser.storage.local.set({TOBEHIDDENxCHANNELS})
.then(TOBEHIDDENxCHANNELSxOFF, onError);
function TOBEHIDDENxCHANNELSxOFF() {alert("CHANNELS hidding is off");};
function onError(error) {console.log(error)}
}

//** playlists
if ($('.new-TOBEHIDDEN .playlists').is(':checked')) {
let TOBEHIDDENxPLAYLISTS = {"value": "on"}; 
browser.storage.local.set({TOBEHIDDENxPLAYLISTS})
.then(TOBEHIDDENxPLAYLISTSxON, onError);
function TOBEHIDDENxPLAYLISTSxON() {alert("PLAYLISTS hidding is on");};
function onError(error) {console.log(error)}
}else{
let TOBEHIDDENxPLAYLISTS = {"value": "off"}; 
browser.storage.local.set({TOBEHIDDENxPLAYLISTS})
.then(TOBEHIDDENxPLAYLISTSxOFF, onError);
function TOBEHIDDENxPLAYLISTSxOFF() {alert("PLAYLISTS hidding is off");};
function onError(error) {console.log(error)}
}

//** others
if ($('.new-TOBEHIDDEN .others').is(':checked')) {
let TOBEHIDDENxOTHERS = {"value": "on"}; 
browser.storage.local.set({TOBEHIDDENxOTHERS})
.then(TOBEHIDDENxOTHERSxON, onError);
function TOBEHIDDENxOTHERSxON() {alert("others hidding is on");};
function onError(error) {console.log(error)}
}else{
let TOBEHIDDENxOTHERS = {"value": "off"}; 
browser.storage.local.set({TOBEHIDDENxOTHERS})
.then(TOBEHIDDENxOTHERSxOFF, onError);
function TOBEHIDDENxOTHERSxOFF() {alert("others hidding is off");};
function onError(error) {console.log(error)}
}

}

