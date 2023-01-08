const BD = require("./db.json");

const getAllAlumnos = () => {
  return BD.alumnos;
};

const createAlumno = (addAlumno) => {
  BD.alumnos.push(addAlumno);
  return addAlumno;
};

const updateAlumno = (alumnoId, data) => {
  const indexUpdateAlumno = BD.alumnos.findIndex(
    (alum) => alum.id === alumnoId.toString()
  );

  const updateAlumno = {
    ...BD.alumnos[indexUpdateAlumno],
    ...data,
  };

  BD.alumnos[indexUpdateAlumno] = updateAlumno;

  return updateAlumno;
};

const deleteAlumno = (alumnoId) => {
  const alumnos = BD.alumnos.filter((alum) => alum.id !== alumnoId.toString());
  BD.alumnos = alumnos;

  return;
};

module.exports = { getAllAlumnos, createAlumno, updateAlumno, deleteAlumno };
