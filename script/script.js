let index1 = [];
let index2 = [];
let amount = 1;
let allEmpty = true;

function render(){
    let placeOfDishes = document.getElementById('placeOfDishes');
    placeOfDishes.innerHTML = '';
    for (let i = 0; i < dishes.length; i++) {
    let allDishes = dishes[i];
    placeOfDishes.innerHTML += showKindHTML(i);
       
        for (let j = 0; j < allDishes.dish.length; j++) {       
            placeOfDishes.innerHTML += showDishesHTML(allDishes, j, i);
        }
      renderPayButton();
      makeItEmpty();    
    }
}
  

function addToBasket (i, j) {
   let basket = document.getElementById('basket_wrapper');
   let basketcontainer = document.getElementById('basket-container${j}, ${i}')
   dishes[i].dish[j].amount = 1;
   let price = dishes[i].dish[j].price;
   if (tooMuch())
    if (!basketcontainer) {
        basket.innerHTML += renderBasketInfos(i, j, dishes[i].dish[j].amount, price);
        switchBasketInfo();
    }
    else{
        addAmount(j, i);
    }
    if (allEmpty == true) {
        checkBasketIsEmpty();
    }
    calculatePrice();
    calculateAllPrices();
    }


function makeItEmpty() {
    let empty = document.getElementById('costs');
    empty.innerHTML = '';
}


function renderBasketInfos (i, j, amount, price) {
    dishes[i].dish[j].amount++;
    index1.push(i);
    index2.push(j);
    return `<div id="basket-container${j}${i}" name="basket-container">
                <div class="basket-infos">
                ${renderAmountPrice(i, j, amount, price)}
                ${renderAddAmount(i, j, amount)}
                </div>
            </div>`;    
        
    }


function switchBasketInfo() {
    let basketIsEmpty = document.getElementsByName('basket-container');
    let basket = document.getElementById('basketempty');
    let empty = document.getElementById('costs');
    let basketbottom = document.getElementById('bottom-basket-price');
    let paybutton = document.getElementById('pay-button');
    if (basketIsEmpty.length >= 1){
        basket.classList.add('d-none');
        empty.classList.remove('d-none');
        paybutton.classList.remove('d-none');
    } else{
        basket.classList.toggle('d-none');
        empty.classList.add('d-none');
        basketbottom.innerHTML= "";
        paybutton.classList.add('d-none');
    }
}


function addAmount(j, i) {
    let amounts = document.getElementById('amount1${j}${i}');
    let amounts2 = document.getElementById('amount2${j}${i}');
    if (tooMuch()) {
        amounts.innerHTML++;
        amounts2.innerHTML++;
        amount++;
        calculateAmount(j, i);
        calculatePrice();
        calculateAllPrices();
        tooMuch();
    }
}

function removeAmount(j, i){
    let amounts = document.getElementById('amount1${j}${i}');
    let amounts2 = document.getElementById('amount2${j}${i}');
    let basket = document.getElementById('basket-container${j}}${i}');
        if (checkAmount(amounts.innerHTML)) {
            basket.remove();
        } else {
            amounts.innerHTML --;
            amounts2.innerHTML --;
            calculateAmountDecrese(j, i);
            amount--
        }
        calculatePrice();
        calculateAllPrices();
}

function addButton(j, i) {
    addAmount(j, i)
}


function removeButton(j, i){
    removeAmount(j, i);
    switchBasketInfo()
}


function checkAmount(amount) {
    if (amount <= 1) {
        return true;
    }
}




function checkBasketIsEmpty() {
    if (allEmpty == true) {
        renderCosts();
        allEmpty = false;
    }
}


function pay() {
    for (let i = 0; i < index1.length; i++) {
        let first = index1[i];
        let second = index2[i];
        let meal = document.getElementById('amount1${second}${first}');
        let count = meal.innerHTML;
        for (let j = 0; j < count; j++) {
            removeAmount(second, first);
        }
    }
    index1 = [];
    index2 = [];
    switchBasketInfo();
    succsess();
}

function succsess(){
    let finish = document.getElementById('succsess');
    finish.classList.remove('d-none');
}

function finishDone() {
    let finish = document.getElementById('succsess');
    finish.classList.add('d-none');
}


function tooMuch(){
    if (amount < 25) {
        return true;
    } else {
        alert ("Bestellung zu groß, bitte rufen Sie uns an, um diese Bestellung aufzugeben!")
    return false;
    }
}

function calculateAmount(j, i) {
    let price = document.getElementById(`price${j}${i}`).innerHTML;
    let cost = dishes[i].dish[j].price;
    let res = parseInt(price) + cost;
    document.getElementById(`price${j}${i}`).innerHTML `${parseFloat(res).toFixed(2).replace(".",",")}€`;
    return res;
}


function calculateAmountDecrese(j, i) {
    let price = document.getElementById(`price${j}${i}`).innerHTML;
    let cost = dishes[i].dish[j].price;
    let res = parseInt(price) - cost;
    document.getElementById(`price${j}${i}`).innerHTML `${parseFloat(res).toFixed(2).replace(".",",")}€`;
    return res;   
}


function countPriceElements() {
    let elements = document.querySelectorAll(".price");
    return elements;
}


function calculatePrice() {
    let amount = countPriceElements();
    let sum = 0;
    let renderPrice = document.getElementById('price');
    amount.forEach((element) =>{
        let price = element.innerHTML;
        let res = (sum += parseFloat(price));
        renderPrice.innerHTML = `${parseFloat(res).toFixed(2).replace(".", ",")}€`;
    });
}


function calculateAllPrices() {
    let subtotal = document.getElementById('price').innerHTML;
    let deliver = document.getElementById('deliver').innerHTML;
    let bottombasket = document.getElementById('bottom-basket-price');
    let paybutton = document.getElementById('pay-button');
    let total = document.getElementById('total');
    let newtotal = parseFloat(subtotal) + parseFloat(deliver);
    total.innerHTML = `${parseFloat(newtotal).toFixed(2).replace(".", ",")}€`;
    bottombasket.innerHTML = `${parseFloat(newtotal).toFixed(2).replace(".", ",")}€`;
    paybutton.innerHTML = `Bezahlen (${parseFloat(newtotal).toFixed(2).replace(".", ",")}€)`;
}


function openCloseFullscreen() {
    let basketcontainer = document.getElementById('bottom-basket-container');
    let basketLeftSide = document.getElementById('basket_wrapper');
    let closeButton = document.getElementById('closeButton');

    closeButton.classList.toggle('d-none');
    basketLeftSide.classList.toggle('fullscreen');
    basketcontainer.classList.toggle('d-none');
}


function initalize(){
    includeHTML();
    render();
}
