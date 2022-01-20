/*

Syntax:

array.map(function(currentValue, index, arr), thisValue)

Các tham số truyền vào giống với các hàm filter, every...
*/

// Ví dụ:

var numbers = [2, 4, 6, 8];
 
var doubleNumbers = numbers.map(function(num) {
  return num * 2;
});
 
console.log(numbers)// [2,4,6,8]
console.log(doubleNumbers); //  [4, 8, 12, 16]