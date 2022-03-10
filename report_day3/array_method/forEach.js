/*

Syntax:

array.forEach(function(currentValue, index, arr), thisValue)

Các tham số như các hàm filter, find, findIndex, every


*/

// Ví dụ:

var users = [
    { id: 1, name: 'Binh' },
    { id: 2, name: 'Trang' },
    { id: 3, name: 'Minh' },
];

var c = [1,2,3,4,5]
 
users.forEach(function (user) {
    console.log(user.name);
    user.name = 'Sơn';
});

c.forEach(function(value) {
  value = 1;
})

console.log(users);
console.log(c);
 
/*
Output:
 
Binh
Trang
Minh

[
  { id: 1, name: 'Sơn' },
  { id: 2, name: 'Sơn' },
  { id: 3, name: 'Sơn' }
]

[ 1, 2, 3, 4, 5 ]
*/

// Có thể thấy sự khác biệt khi ta muốn
// thay đổi giá trị các phần tử mảng
// Trong trường hợp object và phần tử khác object

// Lý do các phần tử mảng là object có thuộc tính
// thay đổi vì Object là kiểu biến dùng tham chiếu