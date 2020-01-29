const argv = require('yargs').algv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear tarea');
        break;
    case 'listar':

        console.log('Listar tareas por hacer');

        break;

    case 'actualizar':

        console.log('Actualizar tarea');

        break;
    default:

        console.log('Este comando no existe');

        break;
}