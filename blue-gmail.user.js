// ==UserScript==
// @include https://mail.google.com/mail/u/1/#inbox*
// ==/UserScript==

(function () {
    var favicon = 'data:image/icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEY8ISCQZjiBqLCxiq63uYuut7mLrre5i663uYuut7mLrre5i663uYuut7mLrre5i663uYugqaqLbVY3gjo2IiCmbDeczHY7/tvm6P/S3t//3enr/9/r7f/f6+3/3+vt/9/r7f/f6+3/3+vt/97p6//By8z/pK2t/5VhPP+DWzeeq2kzo85zOP/f6+3/3urs/9Pf4f/X4+X/3+vt/9/r7f/f6+3/3+vt/9Xg4v+vubn/o6ys/6OsrP+VYTz/h1Uyp7NkMKPOcjf/3+vt/9/r7f/f6+3/2ubo/9Xg4v/e6uz/3urs/8LNzv+kra3/o6ys/6OsrP+jrKz/lWE8/4lUMqeuZzGkzXI2/9/r7f/f6+3/3+vt/9/r7f/f6+3/1tPK/7WvpP+jrKz/o6ys/6OsrP+jrKz/o6ys/5ZhPP+JVDGnr2YxpctyNf/e6uz/3+vt/9/r7f/e6uz/1bed/890Ov/Ncjf/tJJ3/6Krq/+jrKz/o6ys/6OsrP+WYTz/iVQyp7FlMKbOcDT/3urs/9/r7f/c4d3/0ZRq/89wNP/PdDr/z3U7/9BwNP/BgVX/pqag/6OsrP+jrKz/lmE8/4hUMqe0Yy+mz28z/93q6//Yyrr/z3xG/9BwNP/Qh1b/2tfP/9vZ0f/QiVn/0HA0/8t1Pf+umof/o6ys/5ZhPP+HVTKntWIups9vM//RpYL/z3A1/89wNP/Tp4X/3efo/9/r7f7f6+3+3ujp/tSpiP7PcDX+z3A0/7qJZf+YYTv/h1UyprFlMKXQcDT/0HA0/897RP/YyLj/3+vt/9/r7f/f6+3/3+vt/9/r7f/f6+3/2Mm5/897RP/QcDT/xW00/5FaMqaqazad0HA0/9GSZ//c4Nv/3+vt/9/r7f/f6+3/3+vt/9/r7f/f6+3/3+vt/9/r7f/c4Nz/0ZRp/9BwNP+0azShU0MlJaWGaIq0vr+Otb7AjrW+wI61vsCOtb7AjrW+wI61vsCOtb7AjrW+wI61vsCOtb7AjrS+wI6niGuLWEsqJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAD//wAA//8AAA==';
    var links = document.getElementsByTagName('link');
    for (i=0; i<links.length; i++) {
        if (links[i].getAttribute('rel') === 'shortcut icon') {
            console.log('setting blue gmail favicon');
            links[i].setAttribute('href', favicon);
        }
    }
})();
