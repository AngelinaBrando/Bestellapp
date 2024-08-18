function render() {
    let placeOfdishes = document.getElementById('placeOfdishes');
    placeOfdishes.innerHTML = '';
    for (let i = 0; i < dishes.length; i++) {
        let titleDishes = dishes[i];

        let placeOfSingeDishes = `<div>`;
        for (let j = 0; j < titleDishes.allDishes.length; j++) {
            placeOfSingeDishes += `<div class="singleDishCard">
            <b>${titleDishes.allDishes[j].name}</b>
            <p>${titleDishes.allDishes[j].ingredients}</p>
            <p class="priceOfDish">${titleDishes.allDishes[j].price} €</p></div>`;
        }
        placeOfSingeDishes += `</div>`;
        placeOfdishes.innerHTML += showDishes(titleDishes, i, placeOfSingeDishes);
    }      
}



function initalize(){
    includeHTML();
    render();
}
