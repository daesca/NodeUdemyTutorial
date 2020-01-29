const fs = require('fs');

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`La base ${base} no es un numero`);
            return;

        }

        let data = '';

        for (let i = 1; i <= 10; i++) {

            let resultado = base * i;
            data += `${base} * ${i} = ${resultado}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {

                reject(err);
                return;

            }

            resolve(`tabla-${base}.txt`);

        });

    });
}

module.exports = { crearArchivo }