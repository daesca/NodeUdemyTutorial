let opts = [

    {
        descripcion: {
            alias: 'd'
        }
    },
    {

        descripcion: {

            alias: 'd'

        },
        completado: {
            alias: 'c',
            default: true

        }

    }

];


let argv = require('yargs')
    .command('crear', 'Añade una tarea a la lista', opts[0])
    .command('actualizar', 'Actualiza el estado de una tarea', opts[1])
    .help()
    .argv;

module.exports = { argv }