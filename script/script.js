let basketFood = [];
let basketPrice = [];
let basketAmount = [];
let basketTotalSum = [];

function renderKind(){
    let placeOfDishes = document.getElementById('placeOfDishes');
    placeOfDishes.innerHTML = '';
    for (let i = 0; i < dishes.length; i++) {
    let allDishes = dishes[i];
    placeOfDishes.innerHTML += showKindHTML(i);
       
        for (let j = 0; j < allDishes.dish.length; j++) {       
            placeOfDishes.innerHTML += showDishesHTML(allDishes, j);
        }
    }
}



function renderEmptyShoppingCart() {
    document.getElementById('basket').innerHTML = `
        <h3 class="shopping-cart">Warenkorb</h3>
        <span class="textEmptyShoppingCart"><b>Dein Warenkorb ist noch leer.</span></b>
        `;
}


function renderShoppingCart() {
    document.getElementById('basket').innerHTML = '';
    
    if (basketFood < 1) {
        renderEmptyShoppingCart();
    } else {
        for (let i = 0; i < basketFood.length; i++) {
            let elementFood = basketFood[i];
            let price = basketPrice[i];
            let elementPrice = price.toFixed(2);
            let elementAmount = basketAmount[i];
            let totalSum = elementAmount * elementPrice;
            let sum = totalSum.toFixed(2);

        showShoppingCart(elementFood, elementPrice, elementAmount, sum, i); 
        }
    }
}

function initalize(){
    includeHTML();
    renderKind();
    renderEmptyShoppingCart();
}
