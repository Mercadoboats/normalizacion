const mensajes={
    autor:{
        id:'goncosentino@gmail.com',
        nombre:'Juan',
        apellido:'Carlos',
        edad:'55',
        alias:'elcarlos',
        avatar:'foto.jpg'
    },
    mensaje:'Hola como andas?'
}

const normalizr = require('normalizr');
const normalizar = normalizr.normalize;
const denormalizar = normalizar.normalize;
const schema = normalizr.schema;
const util = require('util');

const autorSchema = new schema.Entity('autor')
const mensajeSchema = new schema.Entity('mensajes',{
    autor : [autorSchema]
})

const dataNormalizada = normalizar(mensajes,mensajeSchema);
//console.log("--------------------OBJETO ORIGINA--------------------------")
console.log(JSON.stringify(mensajes).length)


//console.log("--------------------OBJETO NORMALIZADO----------------------")
console.log(JSON.stringify(dataNormalizada).length)


function print(objeto)
{
    console.log(util.inspect(objeto,true,12,true))
}
