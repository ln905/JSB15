document.getElementById('login').addEventListener('click', sumbit)
function sumbit (){
    var a = document.getElementById('email').value
    var b = document.getElementById('password').value
    if (a =="example@gmail.com" && b=="123"){
    document.body.textContent='Đã đăng nhập'
    }
    else {
        alert("Email hoặc Password không hợp lệ")
    }
}
