function triangleTracker() {
 var side1 = parseInt(document.getElementById('side').value);
 var side2 = parseInt(document.getElementById('side2').value);
 var side3 = parseInt(document.getElementById('side3').value);


 if (side1 === side2 && side2 === side3) {
   alert("Equilateral Triangle");
 if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
   alert("Not a triangle");
 } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
   alert("Scalene Triangle");
 } else if (side1 === side2 || side2 === side3 || side1 === side3) {
   alert("Isosceles triangle");
 } else if((side1+side2)<=side3||(side2+side3)<=side1||(side1+side3)<=side2){
   alert("Not a triangle");
 }else{
   alert("tri!")
 } else if (side1 === side2 && side2 === side3) {
   alert("Equilateral Triangle");
 }
}
