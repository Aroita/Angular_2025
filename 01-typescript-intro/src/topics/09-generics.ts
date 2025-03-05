

//no usar el tipo de datos any, usar un tipo generico ej: T y despues agregar el tipo entre <> 
export function watsMyType<T> (argumento: T) : T {  //T es un tipo de dato generico
    return argumento;
}

let amIArray = watsMyType<number[]>([1,2,3,4,5]); // la T se especifica aqui como number array
let amIString = watsMyType<string>('Hola Mundo'); //la t se especifica aqui como string
let amINumber = watsMyType<number>(100); //la t se especifica aqui como number

console.log(amIArray.join('-')); //metodo join para unir los elementos del array 
console.log(amIString.split(''));//metodo split para separar los elementos de un string
console.log(amINumber.toFixed()); //metodo toFixed para redondear un numero


//console.log(anIArray.split2(''));//split2 es para que no de error en la consola