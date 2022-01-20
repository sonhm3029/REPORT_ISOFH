/*
Syntax:

    array.fill(value, start, end)

    - value: bắt buộc là giá trị mà ta muốn các
        phần tử mảng có
    - start: không bắt buộc, là vị trí bắt đầu biến đổi
        mặc định là 0
    - end: không bắt buộc, vị trí kết thúc biến đổi,
        mặc định là duyệt hết mảng

Hàm này làm thay đổi giá trị các phần tử trong mảng
nhưng không làm thay đổi kích thước mảng.
 */

// Ví dụ:

// Điền 2 phần tử cuối cùng thành "Kiwi"
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4); // ["Banana", "Orange", "Kiwi", "Kiwi"]