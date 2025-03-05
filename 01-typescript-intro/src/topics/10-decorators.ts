

//un decorador es una funcion que se ejecuta en tiempo de ejecucion y que se puede usar para modificar una clase o un metodo
//un decorador se compone de un @ y el nombre de la funcion que se va a ejecutar        
function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
){
    return class extends constructor {  
        newProperty = "new property";
        hello = "override";
    }
    

}
// añadir a tsconfig.ts la dependencia: "experimentalDecorators": true,
@classDecorator

export class SuperClass {

    public myProperty: string = '123Abc';

    print() {     
        console.log('SuperClass.print()');
    }

}

console.log('SuperClass:', new SuperClass());
console.log(SuperClass)
console.log('---------------------------------------')
//otra forma de hacerlo
const myClass = new SuperClass();
console.log( myClass);