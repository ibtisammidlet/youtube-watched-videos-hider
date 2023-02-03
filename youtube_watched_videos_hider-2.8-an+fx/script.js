//** the interval for the all script
setInterval(function(){

//** comparing the addons status & doing the work
function gotSOA(item) {
if (item.SOA.name == "off") {
console.log("the addon is in off status");
//** showing hidden videos if there
$("#overlays.ytd-thumbnail #progress").parents("ytd-rich-item-renderer").show(); // generally
$("#overlays.ytd-thumbnail #progress").parents("ytd-playlist-video-renderer").show(); // for playlists
$('#related #overlays.ytd-thumbnail #progress').parents("ytd-rich-item-renderer").show(); //  // watch?v= related
$("#playlist #overlays.ytd-thumbnail #progress").parents("#playlist-items").show(); // watch?v= playlist
$('ytm-thumbnail-overlay-resume-playback-renderer .thumbnail-overlay-resume-playback-progress').parents("ytd-rich-item-renderer").show();

}else{



//** getting logged youtube ID for one time from user setting and set it as var
function gotyoutubeid(item) {
window.loggedprofile = `${item.youtubeid.name}`;
}
function onError(error) {console.log(error)}
browser.storage.local.get("youtubeid")
.then(gotyoutubeid, onError);


if (window.location.href.indexOf('www.youtube.com/playlist?list=') != -1) {

//** getting visited youtube ID
var channellink = $("#text .yt-simple-endpoint").attr("href");
var cutfirst       =  channellink.indexOf("/", channellink.indexOf("/") + 1); 
var channellinkreal = channellink.substring(cutfirst+1,);
var pageprofile = channellinkreal;

//** comparing to do to work
function comparingtodotwrk(item) {

//** comparing
if (pageprofile == window.loggedprofile) {
    console.log("the same user content ovoiding..");
}else{

$( "#overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("#playlist-items").hide();}
})

};

}
function onError(error) {console.log(error)}
browser.storage.local.get("confperc")
.then(comparingtodotwrk, onError);

} else {

if (window.location.href.indexOf('www.youtube.com') != -1) {


//** getting visited youtube ID
var channellink = window.location.href;
var prefixdlblogger  = channellink.lastIndexOf("channel/");
var pageprofile = channellink.substring(prefixdlblogger+8,prefixdlblogger+32);
			
//** comparing to do to work
function comparingtodotwrk(item) {

//** comparing
if (pageprofile == window.loggedprofile) {
    console.log("the same user content ovoiding..");
}else{

function channel(){
if (window.location.href.indexOf('channel/') != -1) {

//** checking perc then hide
$( "#overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("ytd-rich-item-renderer").hide();}
})

}
};

function userpg(){
if (window.location.href.indexOf('/user/') != -1 || window.location.href.indexOf('/c/') != -1) {

//** checking perc then hide
$( "#overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("ytd-rich-item-renderer").hide();}
})

}
};




function results(){
if (window.location.href.indexOf('results?search_query=') != -1) {

//** checking perc then hide
$( "#overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("ytd-rich-item-renderer").hide();}
})

}
};


function subscriptions(){
if (window.location.href.indexOf('www.youtube.com/feed/subscriptions') != -1) {
	
//** checking perc then hide
$( "#overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("ytd-rich-item-renderer").hide();}
})	
}
};

function watch(){
if (window.location.href.indexOf('www.youtube.com/watch?v=') != -1) {


var playlisttxtcntnt = $("#playlist").text();

//* checking if the side playlist length is less then 11 otherwise the same user content will be checked
if (playlisttxtcntnt.length < "15") {
	
//** checking perc then hide
$( "#overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("ytd-rich-item-renderer").hide();}
})	

} else {
//* trying to get the channel visited channel id
var channellink = $(".publisher.style-scope.ytd-playlist-panel-renderer.complex-string .yt-simple-endpoint.style-scope.yt-formatted-string").attr("href");
var cutfirst       =  channellink.indexOf("/", channellink.indexOf("/") + 1); 
var channellinkreal = channellink.substring(cutfirst+1,);
var pageprofile = channellinkreal;

if (pageprofile == window.loggedprofile) {
console.log("the same user content ovoiding..");
//* hiding just the related videos

//** checking perc then hide
$( "#related #overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("ytd-rich-item-renderer").hide();}
})
console.log("hiding just the related videos");

}else{
//* hiding the related + playlist
//** checking perc then hide
$( "#overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("ytd-rich-item-renderer").hide();}
})

//** checking perc then hide
$( "#playlist #overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("#playlist-items").hide(); console.log("reached")}
})

console.log("hiding the related + playlist");
}

}
	
	
}
};



function general(){
if (window.location.href.indexOf('results?search_query=') <= 0 && window.location.href.indexOf('channel/') <= 0 && window.location.href.indexOf('www.youtube.com/feed/subscriptions') <= 0 && window.location.href.indexOf('www.youtube.com/watch?v=') <= 0 && window.location.href.indexOf('www.youtube.com/feed/history') <= 0 && window.location.href.indexOf('www.youtube.com/user/') <= 0 && window.location.href.indexOf('www.youtube.com/c/') <= 0) {

//** checking perc then hide
$( "#overlays.ytd-thumbnail #progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("ytd-rich-item-renderer").hide();}
})

}
};


channel();
userpg();
results();
subscriptions();
watch();
general();


};
}
function onError(error) {
  console.log(error)
}
browser.storage.local.get("confperc")
.then(comparingtodotwrk, onError);


}
};


if (window.location.href.indexOf('m.youtube.com') != -1) {
		

if (window.location.href.indexOf('m.youtube.com/channel/') != -1) {
//** getting visited youtube ID for channels
var channelschannellink = window.location.href;
var channelsprefixdlblogger  = channelschannellink.lastIndexOf("channel/");
var channelspageprofile = channelschannellink.substring(channelsprefixdlblogger+8,channelsprefixdlblogger+32);

};

if (window.location.href.indexOf('m.youtube.com/playlist?list=') != -1) {
//** getting visited youtube ID for playlists
var channellink = $(".playlist-channel-link").attr("href");
var prefixdlblogger  = channellink.lastIndexOf("channel/");
var pageprofile = channellink.substring(prefixdlblogger+8,prefixdlblogger+32);
};
			
//** comparing to do to work
function comparingtodotwrk(item) {

//** comparing
if (pageprofile == window.loggedprofile || channelspageprofile == window.loggedprofile || window.location.href.indexOf('youtube.com/feed/history') > 0 ) {
    console.log("the same user content ovoiding/youtube.com/feed/history..");
}else{

//** checking perc then hide
$( "ytm-thumbnail-overlay-resume-playback-renderer .thumbnail-overlay-resume-playback-progress" ).each(function (index) {
var progressfullvl = $(this).attr('style').replace('width: ','').replace('%;',''); 
if (parseInt(progressfullvl) >= `${item.confperc.value}`) {$(this).parents("ytd-rich-item-renderer").hide();}
})

};

}
function onError(error) {console.log(error)}
browser.storage.local.get("confperc")
.then(comparingtodotwrk, onError);		


};


};


};
//** getting addon status
function onError(error) {console.log(error)}
browser.storage.local.get("SOA")
.then(gotSOA, onError);

}, 1500);