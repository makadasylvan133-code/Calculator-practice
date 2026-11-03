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
function remember() {
    memory = document.getElementById("memory");
    if(memory.value){
        toscreen(memory.value);
    }
    else if(screen.value != ''){
        memory.value = screen.value;
        screen.value = '';
    }
}
function clearScreen() {
    screen.value = '';
}
function clearMemory() {
    memory.value = '';
}
function switchSign() {
    screen.value = screen.value * -1;
}
function toPercent() {
    screen.value = screen.value / 100;
}