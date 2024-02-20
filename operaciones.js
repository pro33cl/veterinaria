// IMPORTANDO fs

const fs = require('fs');

// FUNCION - LEER

const leer = function(archivo, mostrar = true){

   let registros = [];

    try {
        registros = fs.readFileSync(archivo, 'utf8');
    } catch (e) {
        if(e.code == 'ENOENT'){
                registros = `[]`;
        }
    }

    const registros_json = JSON.parse(registros);

    if(mostrar == false){
        return registros_json;
    }
    else{
        console.log(registros_json);
    }  
}

// FUNCION - REGISTRAR

const registrar = function(archivo, datos){

    try {
        
        let registros = [];
        const registro = {
            id: Date.now(),
            nombre: datos[0],
            edad: datos[1],
            tipo: datos[2],
            color: datos[3],
            enfermedad: datos[4]
        };

        registros = leer(archivo, false);
        registros.push(registro);

        fs.writeFileSync(archivo, JSON.stringify(registros));
        
    } catch (e) {
        console.error(e);
    }
}

// FUNCION - VACIAR REGISTROS

const vaciar = function(archivo){

    try {

        let registros = [];
        fs.writeFileSync(archivo, JSON.stringify(registros));
     
    } catch (e) {
        console.error(e);
    }   
}

// FUNCION - BORRAR REGISTRO

const borrar = function(archivo, datos){

    try {
        
        let registros = []; 
        registros = leer(archivo, false);
        let registros_actualizados = registros.filter(element=>element.id != Number(datos[0]));

        fs.writeFileSync(archivo, JSON.stringify(registros_actualizados));

    } catch (e) {
        console.error(e);
    }    
}

// FUNCION - MODIFICAR REGISTRO

const modificar = function(archivo, datos){

    try {

        let registros= [];
        registros = leer(archivo, false);
        registros.forEach((element) => {
            if(element.id == datos[0]){
                element.nombre = datos[1];
                element.edad = datos[2];
                element.tipo = datos[3];
                element.color = datos[4];
                element.enfermedad = datos[5];
            }
        });
        fs.writeFileSync(archivo, JSON.stringify(registros));
        
    } catch (e) {
        console.error(e);
    }   
}

// EXPORTAR FUNCIONES

module.exports = {leer, registrar, vaciar, borrar, modificar};