// (!) El archivo HTML se está haciendo en el framework Bootstrap Studio y será publicado al estar listo. (!) //

// Variables universales:

let cestaBtn1 = document.getElementById("addProduct1");
let cestaBtn2 = document.getElementById("addProduct2");
let cestaBtn3 = document.getElementById("addProduct3");

let qty1 = document.getElementById("displayQty1");
let qty2 = document.getElementById("displayQty2");
let qty3 = document.getElementById("displayQty3");

let prodPrice1 = document.getElementById("precio1");
let prodPrice2 = document.getElementById("precio2");
let prodPrice3 = document.getElementById("precio3");

let productContainer1;
let productContainer2;
let productContainer3;

let checkoutItems = document.getElementById("items");
let subtotalDisp = document.getElementById("subtotal");
let subtotalFlt = parseFloat(subtotalDisp.innerHTML);

// Producto 1:

let increaseBtn1 = document.getElementById("increaseBtn1");
let decreaseBtn1 = document.getElementById("decreaseBtn1");


function increaseQty1(){
    
    if(qty1.value <= 9){
        qty1.value++;
        console.log(qty1.value);
    } else {
        console.log("Máximo de unidades permitidas")
        alert("Máximo de unidades permitidas por producto!")
    }
    
}

function decreaseQty1(){
    
    if(qty1.value != 1){
        qty1.value--;
        console.log(qty1.value);
    } else {
        console.log("Mínimo de unidades permitidas")
        alert("Mínimo de unidades permitidas por producto!")
    }
}

function addProdCard1(){
    let qtyMultiplier1 = parseFloat(qty1.value);
    let priceVal1 = parseFloat(prodPrice1.innerHTML);
    let endPrice = priceVal1*qtyMultiplier1;
    
    if (!clicked){
        productContainer1 = document.createElement("label");
        productContainer1.setAttribute("id", "prodCard1");
        productContainer1.setAttribute("style", "font-size: 20px;font-family: Jost, sans-serif; margin: 50px;padding: 5px;padding-right: 75px;padding-left: 75px;padding-top: 5px;padding-bottom: 5px;width: 750px;")
        document.getElementById('checkout').appendChild(productContainer1);
        prodData1 = productContainer1;
        clicked = true;
    }
    
    prodData1.innerHTML = "1 kg Manzana, cantidad: " + qty1.value + "<br />" + 
    "Precio: $" + endPrice;
    
    subtotalFlt = subtotalFlt + endPrice;
    subtotalDisp.innerHTML = subtotalFlt;
}

increaseBtn1.onclick = increaseQty1;
decreaseBtn1.onclick = decreaseQty1;

var clicked = false;

cestaBtn1.onclick = addProdCard1;

// Producto 2:

let increaseBtn2 = document.getElementById("increaseBtn2");
let decreaseBtn2 = document.getElementById("decreaseBtn2");

function increaseQty2(){

    if(qty2.value <= 9){
        qty2.value++;
        console.log(qty2.value);
    } else {
        console.log("Máximo de unidades permitidas")
        alert("Máximo de unidades permitidas por producto!")
    }
    
}

function decreaseQty2(){

    if(qty2.value != 1){
        qty2.value--;
        console.log(qty2.value);
    } else {
        console.log("Mínimo de unidades permitidas")
        alert("Mínimo de unidades permitidas por producto!")
    }
}

function addProdCard2(){
    let qtyMultiplier2 = parseFloat(qty2.value);
    let priceVal2 = parseFloat(prodPrice2.innerHTML);
    let endPrice2 = priceVal2*qtyMultiplier2;
    
    if (!clicked2){
        productContainer2 = document.createElement("label");
        productContainer2.setAttribute("id", "prodCard2");
        productContainer2.setAttribute("style", "font-size: 20px;font-family: Jost, sans-serif; margin: 50px;padding: 5px;padding-right: 75px;padding-left: 75px;padding-top: 5px;padding-bottom: 5px;width: 750px;")
        document.getElementById('checkout').appendChild(productContainer2);
        prodData2 = productContainer2;
        clicked2 = true;
    }
    
    prodData2.innerHTML = "1 kg Plátano, cantidad: " + qty2.value + "<br />" + 
    "Precio: $" + endPrice2;
    
    subtotalFlt = subtotalFlt + endPrice2;
    subtotalDisp.innerHTML = subtotalFlt;
}

increaseBtn2.onclick = increaseQty2;
decreaseBtn2.onclick = decreaseQty2;

var clicked2 = false;

cestaBtn2.onclick = addProdCard2;

// Producto 3:

let increaseBtn3 = document.getElementById("increaseBtn3");
let decreaseBtn3 = document.getElementById("decreaseBtn3");

function increaseQty3(){

    if(qty3.value <= 9){
        qty3.value++;
        console.log(qty3.value);
    } else {
        console.log("Máximo de unidades permitidas")
        alert("Máximo de unidades permitidas por producto!")
    }
    
}

function decreaseQty3(){

    if(qty3.value != 1){
        qty3.value--;
        console.log(qty3.value);
    } else {
        console.log("Mínimo de unidades permitidas")
        alert("Mínimo de unidades permitidas por producto!")
    }
}

function addProdCard3(){
    let qtyMultiplier3 = parseFloat(qty3.value);
    let priceVal3 = parseFloat(prodPrice3.innerHTML);
    let endPrice3 = priceVal3*qtyMultiplier3;
    
    if (!clicked3){
        productContainer3 = document.createElement("label");
        productContainer3.setAttribute("id", "prodCard3");
        productContainer3.setAttribute("style", "font-size: 20px;font-family: Jost, sans-serif; margin: 50px;padding: 5px;padding-right: 75px;padding-left: 75px;padding-top: 5px;padding-bottom: 5px;width: 750px;")
        document.getElementById('checkout').appendChild(productContainer3);
        prodData3 = productContainer3;
        clicked3 = true;
    }
    
    prodData3.innerHTML = "1 kg Limón, cantidad: " + qty3.value + "<br />" + 
    "Precio: $" + endPrice3;
    
    subtotalFlt = subtotalFlt + endPrice3;
    subtotalDisp.innerHTML = subtotalFlt;
}

increaseBtn3.onclick = increaseQty3;
decreaseBtn3.onclick = decreaseQty3;

var clicked3 = false;

cestaBtn3.onclick = addProdCard3;