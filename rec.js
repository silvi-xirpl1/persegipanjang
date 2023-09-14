var panjangInput = document.querySelector(".panjang-input-field");
var lebarInput = document.querySelector(".lebar-input-field");
var rectangelButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var luas, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    luas = panjang*lebar;
    alert("Luas persegi adalah:" + luas);
}