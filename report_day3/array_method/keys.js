// Ví dụ:

let a = [1,2,3,4,5];
let c = [
  {name: 'Son', age:20},
  {name: 'Thu', age:21}
]

var d = c.keys();
var b = a.keys();

console.log(d);//Object [Array Iterator] {}
console.log(b);//Object [Array Iterator] {}

for(let x of d) {
  console.log(typeof x);
  console.log(x);
}

/* Kết quả:
number
0
number
1
*/