// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'#
//     8 add 'Meat' in the beginning of your shopping cart if it has not been already adde!
//     8 add Sugar at the end of you shopping cart if it has not been already adde!
//     8 remove 'Honey' if you are allergic to hone=
//     8 modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
console.log(shoppingCart);


shoppingCart.push('Sugar')
console.log(shoppingCart);

shoppingCart.splice(4,1)
console.log(shoppingCart);



shoppingCart[3] = 'Green Tea';

console.log(shoppingCart);