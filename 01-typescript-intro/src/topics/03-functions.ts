
// 1. Function Declaration
function addNumbers(a: any, b:number) :number {  //any es cualquier tipo de dato
    return a + b;

}

const addNumberArrow = (c: number, d: number): string => {
    return  ` ${c + d}`; // de esta manera devuleve un string
}

//hacer una funcion de multiplicar
const multiply = (firstNumber: number, secondNumber?: number, base: number =2): number => {
    return firstNumber * base;
}


//2. pasamos el valor de los parametros a la funcion  
//.tostring() para que lo convierta en string
const result: number = addNumbers(1, 2); //.toString() ; // 3
const result2: string = addNumberArrow(1, 2); // 3
const multiplyResult: number = multiply(5); // 4


//3.mostrar el resultado en consola
//añadir llaves dentro para definir un objeto
//pasa el resultado en formato string
//console.log({result, result2});

console.log('----------------');
//console.log(result) //3
console.log({ result, result2, multiplyResult})

console.log('---------------- FIN ----------------');

//1.crear el personaje con interfaces
interface Character {
    name: string;
    hp: number;
    showHp: () => void; //no regresa nada por eso void
}   
//2. pasamos que character es de tipo Character y que recibe un nombre y vida
const healCharacter = (character: Character, amount: number) => {
    //expliacion de la funcion healCharacter hace que el personaje reciba una cantidad de vida + amount
    character.hp += amount;
    console.log(character);
    return character;       
}

//3. declarar el personaje con sus propiedades
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log('Points of life:', this.hp);
        console.log('---------------------------')
        console.log(`Puntos de vida ${this.hp}`); 
    }
}
//esto es para que el personaje strider reciba 20 puntos de vida
healCharacter(strider, 20); 

//4.mostrar los consoles log de showHp de strider
strider.showHp(); //esto es para mostrar los puntos de vida del personaje strider 


export {

}