/*
Syntax:

    array.filter(callback(curentValue, index, arr), thisValue)

    Hàm filter nhận vào callback để thực hiện filter
    và giá trị thisValue
    Trong đó:
    - currentValue: giá trị phần tử mảng hiện tại
    - index: index của phần tử mảng trong mảng
    - arr: mảng đang được sử dụng
    - thisValue: không bắt buộc, nếu truyền vào thì
    sẽ là giá trị this của function, nếu không thì nhận
    giá trị undefined

 */
// Ví dụ:

var tasks = [
    { title: 'Fix bug 1', status: 'done' },
    { title: 'Fix bug 2', status: 'todo' },
    { title: 'Fix bug 3', status: 'done' },
]
 
var doneTasks = tasks.filter(function (task) {
    console.log(this)
    return task.status == 'done';
}, 19);
 
console.log(doneTasks);
/*
Output:

[Number: 19]
[Number: 19]
[Number: 19]
 
[
    { title: 'Fix bug 1', status: 'done' },
    { title: 'Fix bug 3', status: 'done' },
]
*/