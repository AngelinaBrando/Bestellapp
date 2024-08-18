function showDishes(dishes, i, placeOfSingeDishes) {
    return `
    <div id="dishesKind">
    ${dishes.image}
    <h3>${dishes.kind}</h3>
    </div>
        ${placeOfSingeDishes}
    `
}