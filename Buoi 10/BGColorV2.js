document.getElementById("change").addEventListener("click", checkbox)

function checkbox() {
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");
    if (red.checked == true && blue.checked == false && green.checked == false){
        document.body.style.backgroundColor = "red";
    }
    else if(red.checked == false && blue.checked == false && green.checked == true){
        document.body.style.backgroundColor = "green";
    }
    else if(red.checked == false && blue.checked == true && green.checked == false){
        document.body.style.backgroundColor = "blue";
    }
    else if(red.checked == false && blue.checked == false && green.checked == false){
        insertColor();
    }
    else
        document.getElementById("alert").innerHTML="Please Choose or Input one Color"
}

function insertColor(){
    let color = document.getElementById("colorname").value;
    if (color==""){
        document.getElementById("alert").innerHTML="Please Input one Color"
    }
    else
        document.body.style.backgroundColor = color;
}