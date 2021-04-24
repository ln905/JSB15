let ab = prompt("Nhập cạnh thứ nhất(AB): ")
let bc = prompt("Nhập cạnh thứ hai(BC): ")
let cd = prompt("Nhập cạnh thứ ba(CD): ")
let da = prompt("Nhập cạnh thứ tư(DA):")
if (ab == bc == cd == da){
        console.log("Đây là hình vuông")
}
  else if (ab == cd && bc == da && ab != bc){
      console.log("Đây là hình chữ nhật")
}
  else{
      console.log("Đây là một tứ giác bình thường")
}