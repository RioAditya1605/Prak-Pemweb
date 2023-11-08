//Rio Aditya
//121140140
//Kelas RB

let display = document.getElementById('display');
function input(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clears() {
    display.value = '';
}

function back() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 
    'Enter', 'Backspace', 'Delete', '0', '+', '-', '*', '/',  '='];
    
    if (allowedKeys.includes(key)) {
        if (key === 'Delete') {
            clear();
        } else if (key === 'Backspace') {
            back();
        } else if (key === 'Enter') {
            calculate();
        } else {
            input(key);
        }
    }
});