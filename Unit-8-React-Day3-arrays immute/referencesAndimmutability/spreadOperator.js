let itemCart = [{id: 1, name: "Bread"}, {id: 2, name: "Chips"}, {id: 3, name: "Ham Sandwich"}];

//let's write a function to add items to our cart with functional programming
//COPY ELEMENTS TO NEW ARRAY AND AD
console.log(`Before: ${itemCart}`);

function addItemToCart() {
    //spreadoperator ...copies items out of itemCart array creates new array.
    
    let newItemCart = [...itemCart, item];

    return newItemCart;


}
itemCart = addItemToCart({ id: 4, name: "barbecue" });

console.log(`After: ${itemCart}`);