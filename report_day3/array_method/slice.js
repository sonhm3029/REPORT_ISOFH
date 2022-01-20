/*

Syntax:

array.slice(start, end)

- start: vị trí bắt đầu trích xuất, mặc định là 0,
nếu sử dụng số âm thì sẽ tĩnh từ cuối mảng với 
-1 là phần tử cuối, -2 là phần tử trc phần tử cuối...

- end: vị trí kết thúc trích xuất, mảng trả về sẽ
không bao gồm phần tử ở vị trí này. Nếu không truyền
vào tham số này thì mặc định sẽ là trích xuất đến
hết mảng.

*/

// Ví dụ:

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 
// Mảng citrus được trích từ mảng fruits, trích từ phần tử index 1, tới phần tử index 3
var citrus = fruits.slice(1, 3);
console.log(citrus); // ["Orange", "Lemon"]
 
// Trích từ cuối mảng lên
var myBest = fruits.slice(-3, -1);
console.log(myBest); // ["Lemon", "Apple"]

var test1 = fruits.slice(1);
var test2 = fruits.slice(1,1);
var test3 = fruits.slice(1,2);

console.log(test1);//[ 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(test2);//[]
console.log(test3);//[ 'Orange' ]