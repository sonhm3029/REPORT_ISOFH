/*

Syntax:

array.findIndex(callback(currentValue, index, arr), thisValue)

các tham số truyền vào giống các hàm find, filter...
    
 */

// Ví dụ:

var users = [
    { id: 1, name: 'Binh' },
    { id: 2, name: 'Trang' },
    { id: 3, name: 'Minh' },
];
 
// Tìm vị trí của user có id là 2
var myId = 2;
var myIndex = users.findIndex(function (user) {
    return user.id == myId;
});
 
console.log(myIndex); // 1
 
// Tìm vị trí của phần tử đầu tiên trong mảng có giá trị lớn hơn 2
var numbers = [1, 2, 3, 4, 5];
var n = numbers.findIndex(function (item) {
    return item > 10;
});
console.log(n); // -1