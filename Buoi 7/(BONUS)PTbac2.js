let a = parseInt(prompt("Nhập số a"))
let b = parseInt(prompt("Nhập số b"))
let c = parseInt(prompt("Nhập số c"))
let d = b*b - 4*a*c
let x1= (-b+ Math.sqrt(d))/(2*a)
let x2= (-b- Math.sqrt(d))/(2*a)
if (a==0){
  if (b==0 && c==0){
    console.log('Phương trình có vô số nghiệm')
  }
  else if (b==0 && c!==0) {
    console.log('Phương trình vô nghiệm')
  }
  else {
    console.log('Nghiệm của phương trình là ' + -c/b)
  }
}
else if (d<0) {
  console.log('Phương trình vô nghiệm')
} else if (d==0) {
  console.log('Nghiệm của phương trình là' + -b/(2*a))
} else {
    console.log('Nghiệm của phương trình là' + x1 + 'và' + x2)
  }
