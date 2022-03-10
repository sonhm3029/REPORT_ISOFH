// Ví dụ

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();
 
for (let pair of f) {
  console.log(pair);
}
 
/*
Output:
 
[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]
*/