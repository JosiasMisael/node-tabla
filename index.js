const {crearTabla} = require('./helpers/multiplicar');
const {argv} = require('./yargs/yargs')
console.clear();

/*
const [, , base='base=3' ]= process.argv
const [ , numero =2 ] = base.split('=');
*/
//console.log(argv);
//console.log(argv1);
//console.log('base yargs', argv.base );

crearTabla(argv.base, argv.listar, argv.hasta).then(tabla=> console.log(tabla.rainbow)).catch(err=>console.log(err));