const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

// console.log(argv.base);

switch (comando) {
    case 'listar':

        listarTabla(base, limite)
            .then(dataLista => console.log("Tabla Generada\n", dataLista))
            .catch(e => console.log(e))

        break;

    case 'crear':

        crearArchivo(base, limite)
            .then(archivo => { console.log(`El archivo ${archivo} fue creado exitosamente`) })
            .catch(e => console.log(e));

        break;

    default:
        break;
}