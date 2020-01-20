//requerir un paquete 
const fs = require('fs');


  const {crearArchivo} = require('./multiplicar/mult');

 /* Requerir paquetes en node */


// crearArchivo().then( name =>{
//     console.log(name);
    
// })

/*
    pidiendo parametros por consola
    ===============================
 siempre se tiene corriendo en node la varible modules
 que son los modulos que estan corriendo en node 
proccess :  son los procesos que estan corriendo 
actualmente en node
*/

console.log(process.argv);