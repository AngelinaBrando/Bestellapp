function showDishes(dishes, i) {
    return `
    <div id="dishesKind">
    <div id="dishesimg${i}"class="dishesimg"></div>
        <div>
            <h3>${dishes.kind}</h3>
        </div>
            <div class="singleDishCard">
                <div class="discriptionDish"><b>${dishes.name}</b>
                    <p>${dishes.ingredients}</p>
                    <p class="priceOfDish">${dishes.price} €</p></div>
                    <div id="addButton"> <img src="../img/plus.png" class="addButton" onclick="addToShoppingCart(${i}})"></div>
                </div>
            </div>
        `
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

