const http = require('http')
const host ="localhost"
const port = 8081
const fileSystem = require('fs');
const { json } = require('stream/consumers');

const listarTablas = ( base, limite ) => {
    console.log('---------------');
    console.log(`Tabla del ${ base }`);
    console.log('------------');

    for( let i = 1; i <= limite; i++ ) {
        console.log(`${base} * ${i} = ${ base * i }`);
    }
}

const crearTablas = ( base, limite ) => {
    
    return new Promise( (resolve, reject) => {

        if( !Number(base) ) {
            reject('No es un número.')
            return
        }

        let dataFile = '';

        for( let i = 1; i <= limite; i++ ) {
            dataFile += `${base} * ${i} = ${ base * i } \n`;
        }

        fileSystem.writeFile( `tablas/tabla-${base}.txt`, dataFile, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        }) 
    } )
}

module.exports = {
    crearTablas,
    listarTablas
}
function tabla(numero){
    let multipicar=0;
    for(let o=0;o<numero;o=o+1){
        for(let num=0;num<=10;num=num+1){
            multiplicar=o*num;
            console.log(o +" * "+ num+" = "+multiplicar);
        }
    }
}
tabla(500);
const server = http.createServer(function(peticion,respuesta){

    respuesta.writeHead(200,{'content-Type':'application/json'})
    respuesta.write(JSON.stringify(numero));
    respuesta.end();
} )



server.listen(port,host)