const express = require('express');
const app = express();

// Middleware para procesar formato JSON
app.use(express.json());

// Middleware personalizado para registrar Logs de cada petición
app.use((req, res, next) => {
    const fecha = new Date().toISOString();
    console.log(`[LOG] ${fecha} - Método: ${req.method} - Ruta: ${req.url}`);
    next();
});

// Ruta raíz (/)
app.get('/', (req, res) => {
    res.send('Servidor Comunitario Central Activo');
});

// Ruta de estado (/estado)
app.get('/estado', (req, res) => {
    res.json({
        estado: "Estable",
        uptime: process.uptime(),
        memoria: process.memoryUsage().heapUsed,
        mensaje: "El servidor responde correctamente"
    });
});

// Escucha en el puerto 3000
const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log(`Servidor de producción ejecutándose y escuchando en el puerto ${PUERTO}`);
});