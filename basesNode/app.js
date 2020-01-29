const { crearArchivo } = require('./multiplicar/multiplicar');

let base = '5';

crearArchivo(base)
    .then(archivo => { console.log(`El archivo ${archivo} fue creado exitosamente`) })
    .catch(e => console.log(e));
// let data = '';

// for (let i = 1; i <= 10; i++) {

//     let resultado = base * i;
//     data += `${base} * ${i} = ${resultado}\n`;

// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//     if (err) {

//         throw err;

//     }

//     console.log(`El archivo tabla-${base} ha sido creado con éxito`);

// });