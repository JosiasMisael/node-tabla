const fs = require('fs');
const colors = require('colors');


const crearTabla = async (base = 5, listar= false, hasta = 10) => {
        let salida ='';
        let consola ='';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x  ${i} = ${ base * i}\n`;
            consola += `${colors.red(base)} ${colors.yellow('x')}  ${colors.white( i)} = ${ colors.blue(base * i)}\n`;
        }
            
           listar ? console.log(consola): '' 
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
            return `tabla ${base}.txt`
}

module.exports = {crearTabla}
