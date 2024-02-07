const express = require('express')
const morgan = require('morgan')    // Dependencia aparte
const cors = require('cors');       // Dependencia aparte
const { connect } = require('./src/config/database')

// Importo rutas
const productosRoutes = require('./src/routes/productosRoutes')
const usuariosRoutes = require('./src/routes/usuariosRoutes')

const app = express()
const PORT = 2606

//Middlewares : Funciones que se ejecutan antes de llegar al servidor
app.use(express.json()) // Importante! sirve para analizar el body de la peticion en formato JSON!
app.use(morgan('dev'))  // Registra detalles sobre las solicitudes, importante para los codigos de estado(200,404,etc)

// Cors: Permite que el servidor pueda ser usado por otro puerto diferente, sin esto no funciona ya que "Todos los datos
// deben provenir de la misma fuente", segun la same-origin policy(SOP)
app.use(cors({
    origin: 'http://localhost:5173',    // Servidor Frontend
}));

connect()
    .then(() => {
        console.log("Conexion a la base de datos correctamente")
        app.use(usuariosRoutes)     // Invoco las rutas que pertenecen a los usuarios

        app.use(productosRoutes)    // Invoco las rutas que pertenecen a los productos
    })
    .catch((error) => {
        console.error("Fallo la conexion a la base de datos", error)
    })

app.listen(PORT)
console.log("Servidor iniciado en el puerto 2606")

// Dejo el connect con promesas