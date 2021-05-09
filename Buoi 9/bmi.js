function bmi () {
var h = document.getElementById('height').value
var m = document.getElementById('weight').value
let sobmi = m/(h*h)


if (h =="" && m=="") {
    alert ("Please enter your Height and Weight")
}
else if (h=='') {
    alert ("Please enter your Height")
}    
else if (m=='') {
    alert ("Please enter your Weight")
}
else if (h <= 0 || m <= 0) {
    document.getElementById('bmishow').innerHTML= "Your Height or Weigth must be above 0";
}
else {
    document.getElementById('bmishow').innerHTML= "Your BMI is " + sobmi;
}


if (h <= 0 || m <= 0) {
    document.getElementById('statshow').innerHTML= "Can't calcualte BMI";
}
else if (0< sobmi && sobmi < 18.5) {
    document.getElementById('statshow').innerHTML= "Underweight";
}
else if (18.5 <= sobmi && sobmi < 25){
    document.getElementById('statshow').innerHTML= "Normal Weight";
}
else if (25 <= sobmi && sobmi <30) {
    document.getElementById('statshow').innerHTML= "Pre-Obesity";
}
else if (30 <= sobmi && sobmi <35) {
    document.getElementById('statshow').innerHTML= "Obesity Class I";
}
else if (35 <= sobmi && sobmi <40) {
    document.getElementById('statshow').innerHTML= "Obesity Class II";
}
else if (40 <= sobmi) {
    document.getElementById('statshow').innerHTML= "Obesity Class III";
}
else {
    document.getElementById('statshow').innerHTML= "Can't calcualte BMI";
}
}
