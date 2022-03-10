/*

Syntax:

array.join(seperator)

- Trong đó array là mảng muốn join
- seperator là tham số không bắt buộc, nó là
    giá trị nằm giữa các phần tử mảng sau khi
    join thành string. Mặc định sẽ là dấu ,
*/

// Ví dụ:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join(); // "Banana,Orange,Apple,Mango"

let a = [1,2,3,4,5];
let c = [
  {name: 'Son', age:20},
  {name: 'Thu', age:21}
]

var b = a.join(' ');//1 2 3 4 5
var d = c.join(',')//[object Object],[object Object]
