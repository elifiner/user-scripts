// ==UserScript==
// @include https://mail.google.com/mail/u/1/#inbox*
// ==/UserScript==

(function () {
    var favicon = 'http://www.iconarchive.com/download/i63337/cornmanthe3rd/plex/Communication-email-2.ico';
    var links = document.getElementsByTagName('link');
    for (i=0; i<links.length; i++) {
        if (links[i].getAttribute('rel') === 'shortcut icon') {
            console.log('setting Initech favicon');
            links[i].setAttribute('href', favicon);
        }
    }
})();