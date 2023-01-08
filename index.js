const express = require("express");
const alumnoRoutes = require("./src/routes/alumnoRoutes");

const app = express();

app.use(express.json()); // parsear datos a JSON
app.use("/api/alumno", alumnoRoutes); // exponer rutas

app.listen(3000);
