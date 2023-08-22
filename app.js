// app.js
const express = require('express');
const app = express();
const port = 4545;

// Ejemplo de datos para endpoints
const vehiculos = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla' },
  { id: 2, marca: 'Ford', modelo: 'Mustang' }
];

const productos = [
  { id: 1, nombre: 'Producto 1', precio: 10 },
  { id: 2, nombre: 'Producto 2', precio: 20 }
];

// Endpoint para vehiculos
app.get('/api/vehiculos', (req, res) => {
  res.json(vehiculos);
});

// Endpoint para productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
