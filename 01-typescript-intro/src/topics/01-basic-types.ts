//let para declarar variables cambiantes
//const para declarar variables que no cambian
const name: string = 'John';

let hpPoints: number | string = 100; // | significa que puede ser de un Number o string
hpPoints = 'FULL';

const isAlive: boolean = true;

//añadir llaves dentro para definir un objeto
console.log({
    name, hpPoints, isAlive
});


export{ //esto es para que no haya problemas con las variables que se llaman igual en otros archivos
};