const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('==================================='.blue);
    console.log(`============tabla de ${ base }=============`.blue);
    console.log('==================================='.blue);

    return new Promise((resolve, rejects) => {

        if (!Number(base) || !Number(limite)) {
            rejects(`El valor ${ base } o el valor ${ limite } no es un numero`)
            return;
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {
            tabla += (`${ base } * ${ i } = ${base * i }\n`);

        }

        resolve(tabla)
    })
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`el valor ${ base } no es un numero`);
            return;
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {

            tabla += (`${ base } * ${ i } = ${base * i }\n`);

        }

        // console.log(tabla);

        const data = new Uint8Array(Buffer.from(tabla));

        fs.writeFile(`01-tablas/tabla-${base}.txt`, data, (err) => {

            if (err) rejects(err);

            else
                resolve(`tabla-${base}.txt`)

            // console.log('El archivo tabla-2.txt ha sido creado');
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}