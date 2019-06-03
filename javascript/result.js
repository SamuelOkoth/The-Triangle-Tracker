 function result() {
   var a = parseFloat(document.getElementById('a').value);
  var b = parseFloat(document.getElementById('b').value);
  var c = parseFloat(document.getElementById('c').value);
  if ((a ===NaN) || (b === NaN) || (c === NaN)) {
      alert("Please insert valid numbers");
  }
  else if ((a === 0) || (b === 0) || (c === 0)) {
      alert("Please insert valid numbers");
  }
  else if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
      alert("not a triangle ");
  }
  else if ((a === b) || (b === c) || (a === c)) {
      alert("Awesome ! isosceles triangle");
  }
  else if (a===b===c) {
      alert("Congrats ! equilateral triangle");
  }
  else if ((a !== b) && (c !== a) && (b !== c)) {
      alert("Wonderful ! scalene triangle");
  }
}
