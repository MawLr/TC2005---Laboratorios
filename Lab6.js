// (!) El archivo HTML se está haciendo en el framework Bootstrap Studio y será publicado al estar listo. (!) //

// Definición del Botón:

let logpanelBtn = document.getElementById("logpanelBtn");

// Definición de la función para desplegar el Form:

function displayLogIn(){
    let logDiv = document.getElementById("loginDiv");
    logDiv.classList.remove("invisible");
    logDiv.classList.add("visible");
}

// Evento a detonar la función:

logpanelBtn.onclick = displayLogIn;

let cestaBtn1 = document.getElementById("addProduct1");
let cestaBtn2 = document.getElementById("addProduct2");
let qty1 = document.getElementById("displayQty1");
let qty2 = document.getElementById("displayQty2");
let checkoutItems = document.getElementById("items");
let prodPrice1 = document.getElementById("precio1");
let prodPrice2 = document.getElementById("precio2");
let subtotal = document.getElementById("subtotal");
let productContainer1;
let productContainer2;

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
    
    prodData1.innerHTML = "T-14 Armata, cantidad: " + qty1.value + "<br />" + 
    "Precio: $" + endPrice;
    
    subtotal.innerHTML = endPrice;
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
    
    prodData2.innerHTML = "T-90 Vintage, cantidad: " + qty2.value + "<br />" + 
    "Precio: $" + endPrice2;
    
    //subtotal.innerHTML = endPrice1;
}

increaseBtn2.onclick = increaseQty2;
decreaseBtn2.onclick = decreaseQty2;

var clicked2 = false;

cestaBtn2.onclick = addProdCard2;