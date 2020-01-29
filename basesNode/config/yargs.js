let opts = {

        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }

    }
    /*
        Cada comando que quiera ejecutarse debe definirse con el metodo 'command()' que recibe 3 parametros:
        - Nombre del parametro,
        - Mensaje de ayuda para el usuario
        - Las opciones(parametros que tendrá dicho comando)
    */
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar de la base por el numero definido en el limite', opts)
    .help()
    .argv;


/*
Node proporciona un objeto llamado Module, que, dentro de sus opciones, tiene otro objeto llamado 'exports'
el cual está disponible globalmente y si se quiere exportar una funcionalidad especifica, se debe asignar al 'exports' 
*/

module.exports = { argv }