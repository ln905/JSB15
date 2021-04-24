let x = parseInt(prompt("Nhập số x"))
let y = parseInt(prompt("Nhập số y"))
if (x == 0 || y==0) {
  console.log('Điểm cần tìm nằm trên trục tọa độ')
}
else if (x>0 && y>0) {
  console.log('Điểm cần tìm thuộc góc phần tư thứ nhất')
}
else if (x<0 && y>0) {
  console.log('Điểm cần tìm thuộc góc phần tư thứ hai')
}
else if (x<0 && y<0) {
  console.log('Điểm cần tìm thuộc góc phần tư thứ ba')
}
else {
  console.log('Điểm cần tìm thuộc góc phần tư thứ tư')
}