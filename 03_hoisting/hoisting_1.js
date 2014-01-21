/*global console*/
var defineLater = function() {
  a = 2;
  var a;
  console.log(a);
};
defineLater();

console.log(a);
