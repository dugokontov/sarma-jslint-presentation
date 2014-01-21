/*global console*/
var defineAndAssignLater = function() {
  console.log(a);
  var a = 2;
};
defineAndAssignLater();
