//Rio Aditya
//121140140
//Kelas RB

let display = document.getElementById('display');
function input(value) {
    display.value += value;
}

function hasil() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function hapus() {
    display.value = '';
}

function kembali() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '+', '-', '*', '/',  '=', 'Enter', 'Backspace', 'Delete',];
    
    if (allowedKeys.includes(key)) {
        if (key === 'Delete') {
            hapus();
        } else if (key === 'Backspace') {
            kembali();
        } else if (key === 'Enter') {
            hasil();
        } else {
            input(key);
        }
    }
});