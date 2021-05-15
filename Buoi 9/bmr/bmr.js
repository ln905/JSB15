function gender () {
var checkboxnam = document.getElementById("nam");
    checkboxnu = document.getElementById("nu");
if (checkboxnam.checked == true && checkboxnu.checked == true){
    document.getElementById('bmrshow').innerHTML = "Please select one gender"
    }
else if (checkboxnam.checked == false && checkboxnu.checked == false){
    document.getElementById('bmrshow').innerHTML = "Please select your gender"
    }
else if (checkboxnam.checked == true && checkboxnu.checked == false){
    bmrnam()
}
else {
    bmrnu ()
}
}

function bmrnam() {
    var h = document.getElementById('height').value
    var m = document.getElementById('weight').value
    var a = document.getElementById('age').value
    var bmr = (9.99*m)+(6.25*h)-(4.92*a)+5
    if (h=="" || m =="" || a==""){
        document.getElementById('bmrshow').innerHTML = "Please enter your information"
    }
    else if (a<19 || a>70) {
        document.getElementById('bmrshow').innerHTML = "Your Age must be from 19 to 70"
    }
    else if (m<=0){
        document.getElementById('bmrshow').innerHTML = "Your Weight is invalid"
    }
    else if (h<=0){
        document.getElementById('bmrshow').innerHTML = "Your Height is invalid"
    }
    else {
        document.getElementById('bmrshow').innerHTML = "Your BMR is " + bmr
    }
    }

function bmrnu () {
    var h = document.getElementById('height').value
    var m = document.getElementById('weight').value
    var a = document.getElementById('age').value
    var bmr = (9.99*m)+(6.25*h)-(4.92*a)-161
    if (h=="" || m =="" || a==""){
        document.getElementById('bmrshow').innerHTML = "Please enter your information"
    }
    else if (a<19 || a>70) {
        document.getElementById('bmrshow').innerHTML = "Your Age must be from 19 to 70"
    }
    else if (m<=0){
        document.getElementById('bmrshow').innerHTML = "Your Weight is invalid"
    }
    else if (h<=0){
        document.getElementById('bmrshow').innerHTML = "Your Height is invalid"
    }
    else {
        document.getElementById('bmrshow').innerHTML = "Your BMR is " + bmr
    }
}