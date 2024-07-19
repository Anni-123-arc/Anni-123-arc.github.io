let add =document.getElementById('add');

let quant = document.getElementById('quantity');

let order =document.getElementById('order');

let othum = document.getElementById('orderThum');

let count = document.getElementById('count');
let i=1;

function addItem() {
   add.style.display = "none";
   quant.style.display = "flex";
   order.style.display = "flex";
   orderThum.style.display = "none";
    
}

function plusCount() {
    ++i;
    count.innerText = i;
}

function minusCount() {
    --i;
    if (i >= 0) {
        count.innerText = i;
    } else {
        count.innerText = 0;
    }
}
