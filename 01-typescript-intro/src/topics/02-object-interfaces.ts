//arreglo para heroes y cumplir con el tipo de string
// let heroes: string[] = ['Dr. Strange', 'Ironman', 'Thor'];
const skills: string[] = ['Bash', 'Counter', 'Healing'];

//definir y tipar los datos de objetos con interface
interface Character {
    name: string;
    hp: number;
    skills: string[];
    //ES OPCIONAL CON ? PARA QUE NO SEA OBLIGATORIO y es string o undefined
    hometown?: string ;
}


//crear objeto con propiedades
const strider: Character= {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    
}



strider.hometown = 'Rivendell'; //añadir propiedad opcional

console.table(strider);


export {

};