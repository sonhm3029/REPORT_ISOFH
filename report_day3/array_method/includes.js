/*

Syntax:

array.includes(element, start)

trong đó
- element là phần tử muốn tìm kiếm
- start là vị trí bắt đầu tìm kiếm phần tử trong mảng
    không bắt buộc, mặc định là 0

*/

// Ví dụ:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango"); // true

var a = [
  {
    name:'Sơn',
    age: 20
  },
  {
    name:'Huyền',
    age: 21
  },
  {
    name:'Sơn',
    age: 22
  }
]

console.log(a.includes({name:'Sơn', age:20}))//false

// Ta cần chú ý khi tìm kiếm với Object vì Object
// là kiểu dữ liệu tham chiếu nên không thể so sánh.