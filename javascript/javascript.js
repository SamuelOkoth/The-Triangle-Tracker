function triangleTracker() {
 var lengthOfSideA = parseInt(document.getElementById("a").value);
 var lengthOfSideB = parseInt(document.getElementById("b").value);
 var lengthOfSideC = parseInt(document.getElementById("c").value);
 if (isNaN(lengthOfSideA)|| isNaN(lengthOfSideB)|| isNaN(lengthOfSideC)){
   alert("please in put a number")
 }
// else if (lengthOfSideA === 0 || lengthOfSideB === 0 || lengthOfSideC === 0)
//     alert("please put a Number");
//  }
 else if (lengthOfSideA === lengthOfSideB && lengthOfSideB === lengthOfSideC && lengthOfSideC === lengthOfSideA) {
   alert("An Equilateral Triangle");
 }
 else if (lengthOfSideA === lengthOfSideB || lengthOfSideA === lengthOfSideC || lengthOfSideB === lengthOfSideC ) {
   alert("An Isosceles Triangle");
 }
 else if ((lengthOfSideA+lengthOfSideB) <= (lengthOfSideC) || (lengthOfSideA+lengthOfSideC) <= (lengthOfSideB) || (lengthOfSideB+lengthOfSideC)<= (lengthOfSideA)) {
   alert("Not a Triangle");
 }
 else  {
   alert("A Scalene Triangle");
 }
}
