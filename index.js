// IMPORTANDO FUNCIONES

const {leer, registrar, vaciar, borrar, modificar} = require('./operaciones.js');

var argumentos = [];
argumentos = process.argv;

const bd_name = './citas.json';
const funcion = argumentos[2];
const datos = argumentos.slice(3);

switch (funcion) {
    case 'leer':
        leer(bd_name);
        break;
    case 'registrar':
        registrar(bd_name, datos);
        break;
    case 'vaciar':
        vaciar(bd_name);
        break;
    case 'borrar':
        borrar(bd_name, datos);
        break;
    case 'modificar':
        modificar(bd_name, datos);
        break;
    default:
        console.log(`WARNING: ${funcion} no es una expresion valida`);
        console.log("utiliza: leer, registrar, vaciar, borrar o modificar");
        console.log("-----------------------");
        break;
}
