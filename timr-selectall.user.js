// ==UserScript==
// @include https://initech.timr.com/timr/recording/recording.html
// ==/UserScript==

(function () {
    // select all text when task name input gets focus
    var el = document.getElementById('projectTimeStatusTask');
    el.addEventListener('click', function() {
        el.select();
    }, false);
})();