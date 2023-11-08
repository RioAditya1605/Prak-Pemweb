//Rio Aditya
//121140140
//Kelas RB

function hitung() {
    let inputangka = parseInt(document.getElementById("inputangka").value);
    
    if (inputangka <= 0) {
        alert("Inputkan Angka.");
    }else{
        
    let Ganjil = 0;
    let Genap = 0;
    
    for (let i = 1; i <= inputangka; i++) {
        if (i % 2 === 0) {
            Genap++;
        } else {
            Ganjil++;
        }
    }
    
    let hasil1 = Ganjil;
    document.getElementById("genap").innerHTML = hasil1;
    let hasil2 = Genap;
    document.getElementById("ganjil").innerHTML = hasil2;
    }
};