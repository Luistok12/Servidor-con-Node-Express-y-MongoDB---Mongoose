// Importo el modelo usuario, ya viene con su esquema porque lo definimos anteriormente
const Usuario = require('../models/usuarioModel')

const usuarioServices = {
    obtenerUsuarios: async () => {
        const usuarios = await Usuario.find()
        console.log("Usuarios obtenidos de la base de datos", usuarios)
        return usuarios
    },


    crearUsuario: async (reqbody) => {
        await Usuario.create(reqbody)
    }
}

module.exports = usuarioServices