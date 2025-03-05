
//destructuracion de objetos

//1. INTERFAZ DECLARA EL TIPO DE DATO DE UN OBJETO
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

}

interface Details {  //interfaz anidada
    author: string;
    year: number;
}

// 2. MOLDEAR EL OBJETO CON LA INTERFAZ
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
        
}

// 3. DESTRUCTURACION DE OBJETOS
//const { audioVolume, songDuration, song, details } = audioPlayer;
const song = 'New Song';


//destructuracion de objetos ##########################################
const { 
    song:anotherSong, 
    songDuration:duration, 
    details
  } = audioPlayer; 

  
const { author } = details;
  
console.log('Song:', anotherSong);  //Mess
console.log('Duration:', duration);  //36´
console.log('Author:', author);  //Ed Sheeran

console.log('------------------------------');
//mostrar de otra forma de la destructuracion de objetos
console.log('Volumen:', audioPlayer.audioVolume);
console.log('Author:', audioPlayer.details.author);

//destructuracion de arreglos ##########################################
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const trunks = dbz[2] || 'No hay personaje'; //cambiar el numero de array para ver el resultado


console.error('Personaje 3:', trunks);  //No hay personaje
console.log('------------------------------');

//destructuracion de argumentos ##########################################



export{}
