/*global console*/
// example taken and sligtly modified
// from http://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/
var add, add5, no8;
add = function(x) {
  return function(y) {
    debugger;
    return x + y;
  };
};
add5 = add(5);
no8 = add5(3);
console.log(no8); // Returns 8