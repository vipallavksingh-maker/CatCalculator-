const screen = document.getElementById("screen")
function updator(ele){
    screen.innerHTML = screen.innerHTML + ele
}

function calculate(){
    let answer = eval(screen.innerHTML)
    screen.innerHTML = answer
}

function cancel(){
    let exp = screen.innerHTML
    screen.innerHTML = exp.slice(0, exp.length-1)
}