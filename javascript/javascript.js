var a = parseFloat(document.getElementById('a').value);
var b = parseFloat(document.getElementById('b').value);
var c = parseFloat(document.getElementById('c').value);
if ((a == NaN) || (b == NaN) || (c == NaN)) {
  alert("Please insert valid dimension");
} else if ((a === 0) || (b === 0) || (c === 0)) {
  alert("Please insert valid dimension");
} else if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
  alert("Not a triangle .Try Again!");
} else if ((a === b) || (b === c) || (a === c)) {
  alert("Kudos ! isosceles triangle");
} else if (a === b === c) {
  alert("Kudos ! equilateral triangle");
} else if ((a !== b) && (c !== a) && (b !== c)) {
  alert("Kudos ! scalene triangle");
}
}
