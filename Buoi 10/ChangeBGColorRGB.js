document.getElementById('clickme').addEventListener('click', all)
document.getElementById('stop').addEventListener('click', clear)
let a
function all () {
    a = setInterval(changeBG,500)
}
function changeBG () {
    document.body.style.backgroundColor= 'rgb('+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')'
    }
function clear (){
        clearInterval(a)
    }
