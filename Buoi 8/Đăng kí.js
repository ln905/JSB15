
document.getElementById('signup').addEventListener('click', sumbit)
function sumbit (){
    let userinfo = []
    var a = document.getElementById('email').value
    var b = document.getElementById('password').value
    if (a =="" && b==""){
        alert ("Bạn chưa điền email hoặc mật khẩu của mình")
    }
    else if (a ==""){
        alert ("Bạn chưa điền email của mình")
    }
    else if (b==""){
        alert ("Bạn chưa điền mật khẩu của mình")
    }
    else if (a.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        console.log( a)
        console.log( b)
        userinfo.push(a,b);
    }
    else {
        alert("Email không hợp lệ")
    }
}
