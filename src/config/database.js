// En el archivo database.js

const mongoose = require('mongoose');

async function connect() {
  try {
    // Probar localhost:puerto o del modo que esta en el ejemplo
    await mongoose.connect('mongodb://127.0.0.1:27017/nueva-base', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:');
    process.exit(1); // Salir del proceso con un código de error
  }
}

module.exports = { connect };

// Probar siempre en la extension de mongoDB