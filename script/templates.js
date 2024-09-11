function showKindHTML(i) {
    return `
        <div id="dishesimg${i}"class="dishesimg"></div>
        <h3>${dishes[i].kind}</h3>
        <div id="placeOfSingleDishes"></div>`;
}


function showDishesHTML(allDishes, j) {
    return `
        <div class="singleDishCard">
            <div class="DishCardLeft">
                <b>${allDishes.dish[j].name}</b>
                <p>${allDishes.dish[j].ingredients}</p>
                <p class="priceOfDish">${allDishes.dish[j].price} €</p>
            </div>
            <div class="dishCardRight"><img src="../img/plus.png" class="addButton"></div>
        </div>`
}

function showShoppingCart(elementFood, elementAmount, elementPrice, sum, i) {
    return document.getElementById('basket').innerHTML += `
    <div>
        <b>${elementFood}</b>
        <div>
            <div>
                <div onclick="removefromCart(${i})><b>-</b></div>
                <span>${elementAmount}</span>
                <div onclick="plusAmountCart(${i})><b>+</b></di>
            </diV>
            <span>${elementPrice} €</span>
            <img onclick="deleteFromCart(${i})" class="trash" src="./img/trash.png">
        </div>
    </div>
        `
        }

