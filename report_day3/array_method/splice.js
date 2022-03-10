// Thay thế 1 phần tử tính từ index 2 bằng các phần tử "Lemon", "Kiwi"
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"];
 
// Do các tham số item1,... itemX là không bắt buộc
// Nên chúng ta có thể sử dụng phương thức này để xóa hàng loạt các phần tử trong mảng, xet ví dụ dưới đây
// Xóa 2 phần tử mảng kể từ index 2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2);
console.log(fruits); // ["Banana", "Orange"]