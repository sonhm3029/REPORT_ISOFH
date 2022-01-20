/*

Syntax:

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

- total: bắt buộc là giá trị của tham số initialValue
    trong lần chạy đầu tiên, hoặc là giá trị
    trả về của callback này ở phần tử trước
- currentValue: Bắt buộc, là giá trị của phần
    tử hiện tại
- currentIndex: Không bắt buộc, là vị trí của phần tử hiện tại
- arr: Không bắt buộc, là mảng đang xét

- initialValue: Không bắt buộc, là giá trị ban đầu
cho biến total trong callback

*/

// Ví dụ:

// Tính tổng các phần tử trong mảng numbers
var numbers = [1, 2, 3, 4, 5, 6];
 
var sum = numbers.reduce(function (total, number) {
    return total + number;
}, 0);
 
console.log(sum); // 21


// Ứng dụng trong useRecucer hooks và redux

// tự xây dựng hàm reduce

const reducer = (arr, callback, initialValue) => {
    let total = initialValue;
    for(let i = 0; i<arr.length; i++) {
        total = callback(total, arr[i], i, arr);
    }

    return total;
}

const a = [1,2,3,4,5,90];

const b = reducer(a, (total, value)=> {
  return (total + value);
}, 0);

console.log(b);//105
