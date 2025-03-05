//importamos la interface Product del archivo 06-function-destructuring
import { Product } from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product [] = [
    {
        description: 'Samsung Galaxy S21',
        price: 105.0
    },
    {
        description: 'iPad ',
        price: 200.0
    },
]

//importacion taxCalculation del archivo 06-function-destructuring
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total:', total);

console.log('tax:', taxTotal);






