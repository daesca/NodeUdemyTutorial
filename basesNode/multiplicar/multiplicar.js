const fs = require('fs'); //File System. Funcionalidad de Node Js

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base) && !Number(limite)) {

            reject("Tanto la base como el limite deben ser numeros");

            return;

        }

        let dataLista = '';

        for (let x = 1; x <= limite; x++) {

            let resultado = base * x;
            dataLista += `${base} * ${x} = ${resultado}\n`;

        }

        resolve(dataLista);

    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`La base ${base} no es un numero`);
            return;

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            let resultado = base * i;
            data += `${base} * ${i} = ${resultado}\n`;

        }

        /*
        
            Permite crear un archivo y recibe los siguientes parametros:
            - la ruta y nombre del archivo que se va a crear
            - los dato que se van a escribir en el archivo
            - una funcion que describe lo que se hará despues de crear el archivo y demas
    
        */
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {

                reject(err);
                return;

            }

            resolve(`tabla-${base}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}