/*

Syntax:

array.find(callback(currentValue, index, arr), thisValue)

Tương tự các hàm có sử dụng callback trước

*/

// Ví dụ:

var users = [
    { id: 1, name: 'Binh' },
    { id: 2, name: 'Trang' },
    { id: 3, name: 'Minh' },
];
 
// Tìm user có id là 2
var myId = 2;
var myInfo = users.find(function (user) {
    return user.id == myId;
});
 
console.log(myInfo); // {id: 2, name: "Trang"}
 
// Tìm phần tử đầu tiên trong mảng có giá trị lớn hơn 2
var numbers = [1, 2, 3, 4, 5];
var n = numbers.find(function (item) {
    return item > 10;
});
console.log(n); // undefined