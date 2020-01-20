//requerir un paquete 
const fs = require('fs');


let crearArchivo = ()=>{
      
    return new Promise((resolve, reject)=>{
        
        
for(let j =0 ; j< 12 ; j++){
    let base = j;     
    let data = '';
    for(let i = 0 ;i < 12 ; i ++){
     
        let result = base * i;
       data+=`${ base } * ${ i } = ${ result}\n`;      
          
    
     }
     guardarArchivo(`./tablas/tabla del-${base}.txt`,data,base) ; 
} 
  function guardarArchivo(path , data, base){
    fs.writeFile(path, data, (err) => {
        if (err) {
             reject(err);
        }; 
          resolve(`tabla-base-${base}.txt`);
      });
 }
    });

}

module.exports = {
     crearArchivo
}