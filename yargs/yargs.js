const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero de Base'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra resultado'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta donde quieres'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser numero'
        }
        return true
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw 'La letra  tiene que ser numero'
        }
        return true
    })
    .argv

module.exports ={
    argv
}