document.getElementById('clickme').addEventListener('click', changeBG)
function changeBG () {
    let bgcolor = ['red','green','yellow']
    document.body.style.backgroundColor = bgcolor [Math.floor(Math.random() * 3)]
}