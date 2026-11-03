function toscreen(buttonvalue) {
    screen=document.getElementById("display");
    screen.value += buttonvalue;
}
function calculate() {
    if(screen.value == "" || screen.value === undefined)  {
screen.value
    }
    else {
        screen.value = eval(screen.value);
    }
}