"use strict";
function createElement(tagname, value) {
    var newElem = document.createElement(tagname);
    newElem.textContent = value;
    return newElem;
}
