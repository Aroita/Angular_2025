/*
    ===== Código de TypeScript =====
*/

//declarar una interfaz con las propiedades de un superheroe
interface SuperHero {
    name: string;
    age: number;
    address: Address;  //interfaz de tipo Address abajo
    showAddress: () => string; 
}

//crear y declarar una interfaz para Address y añadiremos a la interfaz SuperHero.
interface Address {
    street: string;
    country: string;
    city: string;
}

//reiniciar el objeto con las propiedades de la interfaz
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    //funcion que regresa un string
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}



//llamar a la funcion showAddress
const datoR = superHeroe.showAddress(); 

//mostrar en consola el objeto superHeroe
console.log( superHeroe ); //mostrar en consola el objeto superHeroe
console.log( datoR ); //mostrar en consola el objeto datoR




export {};