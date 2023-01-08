const alumnoService = require("../service/alumnoService");

const getAllAlumnos = (req, resp) => {
  const alumnos = alumnoService.getAllAlumnos();
  resp.send({ alumnos });
};

const createAlumno = (req, resp) => {
  const { body } = req;

  const newAlumno = {
    name: body.name,
    cedula: body.cedula,
    edad: body.edad,
  };

  const createAlumno = alumnoService.createAlumno(newAlumno);
  resp.send({ message: "Creado Exitosamente.", data: createAlumno });
};

const updateAlumno = (req, resp) => {
  const {
    params: { alumnoId },
    body,
  } = req;

  const updateAlumno = alumnoService.updateAlumno(alumnoId, body);
  resp.send({ message: "Se actualizo con exito.", data: updateAlumno });
};

const deleteAlumno = (req, resp) => {
  const {
    params: { alumnoId },
  } = req;

  alumnoService.deleteAlumno(alumnoId);

  resp.send({ message: "Borrado con exito." });
};

module.exports = { getAllAlumnos, updateAlumno, createAlumno, deleteAlumno };
