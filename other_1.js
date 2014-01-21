/*global document*/
var elems = document.getElementsByClassName("someClass"), i;

for (i = 0; i < elems.length; i += 1) {
  elems[i].addEventListener("click", function() {
    this.innerHTML = "some text";
  });
}