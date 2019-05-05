// ==UserScript==
// @name        youtube watched videos hider
// @author      ibtisam midlet
// @namespace   youtube-watched-videos-hider-userscript-bystorebitid@gmail.com
// @icon        https://github.com/ibtisammidlet/youtube-watched-videos-hider/raw/master/screenshot.png
// @include     *.youtube.com/*
// @description like the name
// @version     1.0
// @updateURL   https://github.com/ibtisammidlet/youtube-watched-videos-hider/raw/master/youtube-watched-videos-hider.meta.js
// @downloadURL https://github.com/ibtisammidlet/youtube-watched-videos-hider/raw/master/youtube-watched-videos-hider.user.js
// @supportURL  https://rebrand.ly/wanna-me
// @date        2019-05-05
// @homepage
// @license     do what the fuck you want to do public license >>http://www.wtfpl.net/about/
// @require     https://code.jquery.com/jquery-3.4.0.min.js
// @grant       GM_addStyle
// ==/UserScript==



if (window.location.href.indexOf('www.youtube.com/playlist?list=') != -1) {
$(document).bind('DOMNodeInserted', function(e) {
    var element = e.target;
    setTimeout(function() {
        console.log("script excuted");
        $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().parent().hide();
    }, 0);
});

} else {

if (window.location.href.indexOf('www.youtube.com') != -1) {
$(document).bind('DOMNodeInserted', function(e) {
    var element = e.target;
    setTimeout(function() {
        console.log("else");
        $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().hide();
    }, 0);
});
}
}


if (window.location.href.indexOf('m.youtube.com') != -1) {
$(document).bind('DOMNodeInserted', function(e) {
    var element = e.target;
    setTimeout(function() {
        console.log("yt mobile");
        $('ytm-thumbnail-overlay-resume-playback-renderer .thumbnail-overlay-resume-playback-progress').parent().parent().parent().parent().parent().parent().hide();
    }, 0);
});
}
