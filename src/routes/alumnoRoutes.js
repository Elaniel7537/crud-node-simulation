const express = require("express");
const router = express.Router();
const alumnoController = require("../controller/alumnoController");

router
  .get("/", alumnoController.getAllAlumnos)
  .post("/", alumnoController.createAlumno)
  .patch("/:alumnoId", alumnoController.updateAlumno)
  .delete("/:alumnoId", alumnoController.deleteAlumno);

module.exports = router;
