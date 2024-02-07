const {Router} = require('express')
const app = Router()

const productosObjetos = [
    { id: 1, name: "Hola", cantidad: 2 },
    { id: 2, name: "Chau", cantidad: 5 },
    { id: 3, name: "Morena", cantidad: 1 },
    { id: 4, name: "Rambo", cantidad: 1 },
    { id: 5, name: "Wada", cantidad: 5 },
]

// routes
app.get('/productos', (req, res) => {
    res.json(productosObjetos)
})

app.get('/productos/:id', (req, res) => {
    producto = productosObjetos.find(producto => producto.id === parseInt(req.params.id))

    if (producto) res.json(producto)
    else res.send("El producto no se encuentra en la base de datos")
})

app.post('/productos', (req, res) => {
    const payload = { id: productosObjetos.length + 1, ...req.body }
    productosObjetos.push(payload)
    res.json(productosObjetos)
})

app.delete('/productos/:id', (req, res) => {
    const productos = productosObjetos.filter(producto => producto.id !== parseInt(req.params.id))
    res.json(productos)
})

app.put('/productos/:id', (req, res) => {
    const productoEncontrado = productosObjetos.find(producto => producto.id === parseInt(req.params.id))

    // El return termina el manejador de ruta (Osea todo el codigo app.put en este caso)
    if (!productoEncontrado) return res.sendStatus(404).json({ error: "Id no encontrado" })

    const payload = { id: req.params.id, ...req.body }

    // Colocamos en un nuevo array de productos ya que no podemos hacerlo directamente
    const productos = productosObjetos.map(producto => producto.id === parseInt(req.params.id)
        ? producto = payload    // Cambia el valor de un producto
        : producto              // Mantiene el producto
    )
    res.json(productos)
})

module.exports = app