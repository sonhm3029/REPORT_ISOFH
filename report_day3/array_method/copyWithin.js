/*Syntax:

Array.copyWithin(target, start, end)

Trong đó

- target: Vị trí bắt đầu ghi đè
- start: Không bắt buộc, vị trí bắt đầu muốn trích,
        mặc định là 0
- end: Không bắt buộc, vị trí kết thúc muốn trích,
        mặc định là độ dài của mảng

Hàm này sẽ làm thay đổi các giá trị trong mảng,
hàm không làm thay đổi kích thước mảng

*/

// Ví dụ:

// Copy toàn bộ mảng và ghi đè từ vị trí thứ 2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2);
console.log(fruits)  // ["Banana", "Orange", "Banana", "Orange"]
 
// Copy các phần tử từ vị trí 2 tới vị trí 4 sau đó ghi đè từ vị trí 0
var samsungPhones = ["galaxy s1", "galaxy s2", "galaxy s3", "galaxy s4", "galaxy s5"];
samsungPhones.copyWithin(0, 2, 4);
console.log(samsungPhones); // ["galaxy s3", "galaxy s4", "galaxy s3", "galaxy s4", "galaxy s5"]
