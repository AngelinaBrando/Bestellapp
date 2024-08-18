function showDishes(dishes, i, placeOfSingeDishes) {
    return `
    <div id="dishesimg${i}"class="dishesimg"></div>
    <div>
    <h3>${dishes.kind}</h3>
    </div>
        ${placeOfSingeDishes}
    `
}