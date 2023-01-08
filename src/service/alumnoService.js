const alumnos = require("../model/alumnos");

const getAllAlumnos = () => {
  const allAlumnos = alumnos.getAllAlumnos();
  return allAlumnos;
};

const createAlumno = (newAlumno) => {
  const idRandom = Math.floor(Math.random() * 1000) + 1;
  const addAlumno = {
    id: idRandom.toString(),
    ...newAlumno,
  };

  const createAlumno = alumnos.createAlumno(addAlumno);
  return createAlumno;
};

const updateAlumno = (alumnoId, data) => {
  const updateAlumno = alumnos.updateAlumno(alumnoId, data);
  return updateAlumno;
};

const deleteAlumno = (alumnoId) => {
  alumnos.deleteAlumno(alumnoId);
  return;
};

module.exports = { getAllAlumnos, createAlumno, updateAlumno, deleteAlumno };
