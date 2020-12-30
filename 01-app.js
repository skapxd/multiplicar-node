const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./02-multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
        break;

    case 'crear':
        // console.log(argv);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}