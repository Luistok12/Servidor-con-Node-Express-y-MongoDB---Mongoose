const usuarioServices = require('../services/usuarioServices')

const usuarioControllers = {
    obtenerUsuarios: async (req, res) => {
        try{
            const usuario = await usuarioServices.obtenerUsuarios()
            console.log("Paso por el controller")
            res.json(usuario)
        }
        catch(error){
            res.status(500).json({ error: error.message })
        }
    },

    crearUsuario: async (req, res) => {
        try{
            await usuarioServices.crearUsuario(req.body)
            res.send("Usuario creado y agregado a la base de datos")
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = usuarioControllers