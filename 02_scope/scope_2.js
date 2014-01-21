/*global console*/
// example taken and sligtly modified
// from http://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/
var siblings = function() {
  var siblings = ["John", "Liza", "Peter"];
  function siblingCount() {
    var siblingsLength = siblings.length;
    return siblingsLength;
  }
  function joinSiblingNames() {
    return "I have " + siblingCount() + " siblings:\n\n" + siblings.join("\n");
  }
  return joinSiblingNames();
};
console.log(siblings()); // Outputs "I have 3 siblings: John Liza Peter"