function showKindHTML(i) {
    return `
        <div id="dishesimg${i}"class="dishesimg"></div>
        <h3>${dishes[i].kind}</h3>
        <div id="placeOfSingleDishes"></div>`;
}


function showDishesHTML(allDishes, j, i) {
    return `
        <div class="singleDishCard">
            <div class="DishCardLeft">
                <b>${allDishes.dish[j].name}</b>
                <p>${allDishes.dish[j].ingredients}</p>
                <p class="priceOfDish">${allDishes.dish[j].price} €</p>
            </div>
            <div class="dishCardRight"><img src="../img/plus.png" class="addbtn" id="addbtn-button${i}${j}" onclick="addToBasket(${j} ${i})"></div>
        </div>`
}


function renderPayButton(){
    let costs = document.getElementById('basket_wrapper');
     return (costs.innerHTML += `<div class="pay-button d-none" id="pay-button" onclick="pay()">Bezahlen </div>`);
} 


function renderAmountPrice(i, j, amount, price) {
    return `
    <div class="amount-price">
        <div class="amount-name">
            <h4 id="amount1${j}${i}">${amount}</h4>
            <h4 class="dishname">${dishes[i].dish[j].name}</h4>
        </div>
        <h4 class="price" id="price${j}${i}">${parseFloat(price).toFixed(2).replace(".",",")}€</h4>
    </div>
    <div class="ingridients">
        <p>${dishes[i].dish[j].ingredients}</p>
    </div>`
}

function renderAddAmount (i, j, amount) {
    return `<div class="add-amount">
                <div class="add-remove">
                    <button class="remove" onclick="removeButton(${j},${i})">-</button>
                    <h4 id="amount2${j}${i}">${amount}</h4>
                    <button class="add" onclick="addButton(${j}${i})">+</button>
                    </div>
            </div>`
}

function renderCosts(){
    let costs = document.getElementById('costs');
    costs.innerHTML += `
    <div class="titlecosts">
        <p>Zwischensumme</p>
        <p>Lieferkosten</p>
        <p class="overallcost">Gesamt</p>
    </div>
    <div class="prices">
        <p id="price"></p>
        <p id="deliver">2,00€</p>
        <p class="overallcost" id="total"></p>
    </div>`
}


