/*global console*/
console.log("19 == '19'              ", 19 == '19'); // true
console.log("Falsy values");
console.log("false                   ", false); // false
console.log("!!null                  ", !!null); // false
console.log("!!undefined             ", !!undefined); // false
console.log("!!0                     ", !!0); // false
console.log("!!''                    ", !!''); // false
console.log("!!NaN                   ", !!NaN); // false

console.log();
console.log("false == undefined      ", false == undefined); // false
console.log("false == null           ", false == null); // false
console.log("null == undefined       ", null == undefined); // true
console.log("'' == undefined         ", '' == undefined); // false
console.log("false == ''             ", false == ''); // true


console.log();
console.log("0 == ''                 ", 0 == ''); // true
console.log("0 == '0'                ", 0 == '0'); // true
console.log("'' == '0'               ", '' == '0'); // false

(function(someNumber) {
  someNumber = Number(someNumber);
  if (someNumber === 42) {
    console.log("Answer to The Ultimate Question of Life, the Universe, and Everything");
  }
}("42"));