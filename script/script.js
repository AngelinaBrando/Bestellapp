let basketFood = [];
let basketPrice = [];
let basketAmount = [];
let basketTotalSum = [];


function render() {
    let placeOfdishes = document.getElementById('placeOfdishes');
    placeOfdishes.innerHTML = '';
    for (let i = 0; i < dishes.length; i++) {
        let allOfDishes = dishes[i];
        placeOfdishes.innerHTML += showDishes(allOfDishes, i);
    }      
}

function renderEmptyShoppingCart() {
    document.getElementById('basket').innerHTML = /*html*/`
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

function addToShoppingCart(i, index) {
    let key = Object.keys(dishes);

    let foodToCart = dishes[key[index]][i].name;
    let prcieToCart = dishes[key[index]][i].price;

    if (basketFood.includes(foodToCart)) {
        let i = basketFood.indexOf(foodToCart);
        basketAmount[i]++;
    } else {
        basketFood.push(foodToCart);
        basketPrice.push(prcieToCart);
        basketAmount.push(1);
    }
renderShoppingCart();
}



function initalize(){
    includeHTML();
    render()
    renderEmptyShoppingCart();
}
