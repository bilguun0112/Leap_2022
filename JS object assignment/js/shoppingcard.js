// Ex01 - =JS method

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

console.log(shoppingCart.includes('Meat'));

if (shoppingCart.includes('Meat') == false) {
    shoppingCart.splice(0, 0, 'Meat');
}

if (shoppingCart.includes('Sugar') == false) {
    shoppingCart.splice(5, 0, 'Sugar');
}

if (shoppingCart.includes('Honey') == true) {
    let a = shoppingCart.indexOf('Honey');
    shoppingCart.splice(a, 1);
}


shoppingCart.splice(3, 1, 'Green Tea');


console.log(shoppingCart);