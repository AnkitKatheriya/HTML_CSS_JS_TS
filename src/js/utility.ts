function createElement(tagname, value) {
  let newElem = document.createElement(tagname);
  newElem.textContent = value;
  return newElem;
}
