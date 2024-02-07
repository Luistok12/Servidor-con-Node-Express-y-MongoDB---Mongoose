// Importo las 2 funciones que vienen de mongoose (Dependencia agregada)
const {Schema , model} = require("mongoose");

// Armo el esquema del usuario, para que los datos que ingresen sean correctos.

// Esto se usa en el services y sirve para validar los datos del req.body, validara si
// cumplen la condicion de su esquema. De lo contrario, no aceptara al req.body y tirara error.
const usuarioSchema = new Schema({
    id: {
        type: Number,       // Significa que id debe ser un numero.
        required: true,     // Significa que es obligatorio este dato.
        unique: true        // Significa que no se puede repetir esta propiedad.
    },
    name: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    }
}, { strict: true })    // Significa que el objeto debe cumplir estrictamente con este esquema. Sino Error.

// Para dar nombre al modelo y el esquema que debe seguir para validar sus datos, y darle nombre en la DB.
const Usuario = model('Usuario', usuarioSchema, 'Usuario')

// Exporto el modelo
module.exports = Usuario