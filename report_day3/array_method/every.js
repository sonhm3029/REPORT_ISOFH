/*
Cách sử dụng:

Hàm Array.every() có cú pháp:

Array.every(function(currentValue, index, arr), thisValue)

Hàm sẽ lặp qua lần lượt các phần tử của mảng và
nhận vào callback có các tham số:

- currentValue: giá trị của phần tử hiện tại
- index: không bắt buộc, là vị trí trong mảng của phần
        tử hiện tại.
- arr: Không bắt buộc, là mảng chứa phần tử hiện tại


every() còn nhận vào tham số thisValue: Không bắt buộc, nếu truyền vào
thì nó sẽ là giá trị this của function, nếu không thì
sẽ là undefined
*/


// Ví dụ:

// Kiểm tra mảng numbers có phải toàn số lẻ hay không?
let numbers = [1, 2, 3, 4, 5];
let isOddArray = numbers.every(function (item) {
    return item % 2 != 0;
});
console.log(isOddArray); // false
 
// Kiểm tra numbers có phải mảng giảm dần hay không?
let numbers = [5, 4, 3, 2, 1];
let isDescArray = numbers.every(function (item, index, arr) {
    if (index == 0) {
        return true
    } else {
        return item < arr[index - 1];
    }
});
 
console.log(isDescArray); // true