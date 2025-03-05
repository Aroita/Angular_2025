interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}

export interface Product {
    description: string;
    price: number;

}


const phone: Product = {
    description: 'Samsung Galaxy S21',
    price: 105.0
}

const tablet: Product = {
    description: 'iPad Pro',
    price: 200.0    
}


//desectructurar el objeto options en function
export function taxCalculation(options: TaxCalculationOptions): [number, number] {

    const  { products, tax } = options; //destructuracion de objetos en argumentos de una funcion para obtener los productos y el impuesto

    let total = 0;

    products.forEach( ({price}) => { //esto es un callback que recibe un producto y lo suma al total
        total += price;
    });
    return [total, total * tax]; //retorna una tupla con el total y el total con impuesto
}

const shopingCart = [phone, tablet];
const tax = 0.15;



const [total, taxTotal ] = taxCalculation({ 
    products: shopingCart, 
    tax: tax 
});

console.log('Total:', total);
//console.log('Total with tax:', result[1]);
console.log('tax:', taxTotal);


