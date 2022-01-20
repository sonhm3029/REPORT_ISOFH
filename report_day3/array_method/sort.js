/*

Mặc định nếu ta sử dụng array.sort() thì các phần tử
mảng sẽ được sắp xếp theo quy tắc sắp xếp các chuỗi


Tức là:

*/
// Ví dụ:

const a = [2,3,200,4,500,6];

a.sort();
console.log(a)//[2,200,3,4,500,6]

/*
Vì vậy để sử dụng array.sort() một cách đúng đắn
thì ta sẽ khai báo phương thức sắp xếp
array.sort(callback)

trong đó callback là hàm định nghĩa phương thức
so sánh các phần tử

*/

// Với ví dụ lúc nãy, để hđ đúng:
/*
Ý nghĩa: các tham số a,b lần lượt là các cặp
phần tử trong mảng. callback trả về >=0 thì
a và b sẽ không đổi chỗ và ngc lại <0 thì a,b
đổi chỗ cho nhau
*/
//Sắp xếp giảm dần
a.sort((a,b) => {
    return b-a;
})

//Sắp xếp tăng dần
a.sort((a,b) => {
    return a-b;
})