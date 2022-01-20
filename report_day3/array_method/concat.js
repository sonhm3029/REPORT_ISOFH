// Syntax
// array1.concat(array2, array3..., arrayX)
// Các mảng sẽ gộp vào theo thứ tự array1, array2,...

// Ví dụ

var iphonePhones = ["iphone 4", "iphone 5", "iphone 6"];
var samsungPhones = ["galaxy s1", "galaxy s2", "galaxy s3", "galaxy s4"];
var nokiaPhones = ["n8", "n81", "n82"];
 
var phones = nokiaPhones.concat(iphonePhones, samsungPhones);
 
// ["n8", "n81", "n82", "iphone 4", "iphone 5", "iphone 6", "galaxy s1", "galaxy s2", "galaxy s3", "galaxy s4"]
