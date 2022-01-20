const express = require('express');
const app = express();

const response = {
    data: [],
    services: "All services",
    arquitectura: "Microservicios"
};

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get("/api/v2/microservicio2", (req, res) => {
    response.data.push("detalle de transmie", "estudiante", "fecha solicitud", "departamento", "nivel", "tipo de tramite");
    console.log('microservicios');
    return res.send(response);
});

module.exports = app;