const {Router} = require('express')
const app = Router()

//Importo los controladores del usuario
const usuarioControllers = require('../controllers/usuarioControllers')

app.get('/usuarios', usuarioControllers.obtenerUsuarios)
app.post('/usuarios', usuarioControllers.crearUsuario)

// app.delete('/usuarios/:id', usuarioControllers.eliminarUsuarios)
// app.put('/usuarios', usuarioControllers.actualizarUsuarios)

module.exports = app