document.getElementById('clickme').addEventListener('click', all)
function all () {
    var a = setInterval(changeBG,500)
    document.getElementById('stop').addEventListener('click', clear)

    function changeBG () {
        document.body.style.backgroundColor= 'rgb('+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')'
                         }

    function clear (){
        clearInterval(a)
                     }
}
