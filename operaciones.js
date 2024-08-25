/**const fs = require('fs');

const citasJson = () => {
  try {
    return JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  } catch (error) {
    console.error('Error al leer el archivo de citas:', error.message);
    return [];
  }
};

const registrar = (nombre, edad, animal, color, enfermedad) => {
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log('Todos los campos son obligatorios para registrar una cita.');
    return;
  }

  const citas = citasJson();
  citas.push({ nombre, edad, animal, color, enfermedad });

  try {
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log(`Cita registrada para: ${nombre}`);
  } catch (error) {
    console.error('Error al escribir en el archivo de citas:', error.message);
  }
};

const leer = () => {
  const citas = citasJson();
  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    citas.forEach(({ nombre, edad, animal, color, enfermedad }, index) => {
      console.log(`\n ${index + 1}. Cita Registrada
    ------------------------------
    Nombre del animal: ${nombre}
    Edad: ${edad}
    Tipo de animal: ${animal}
    Color del animal: ${color}
    Enfermedad: ${enfermedad}`);
    });
  }
};

module.exports = { registrar, leer }; */

const fs = require('fs');

const citasJson = () => {
  try {
    return JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  } catch (error) {
    console.error('Error al leer el archivo de citas:', error.message);
    return [];
  }
};

const registrar = (nombre, edad, animal, color, enfermedad) => {
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log('Todos los campos son obligatorios para registrar una cita.');
    return;
  }

  console.log(`Registrando los datos de su mascota:
  Nombre: ${nombre}
  Edad: ${edad}
  Tipo de animal: ${animal}
  Color: ${color}
  Enfermedad: ${enfermedad}`);

  const citas = citasJson();
  citas.push({ nombre, edad, animal, color, enfermedad });

  try {
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log(`Cita registrada para: ${nombre}`);
  } catch (error) {
    console.error('Error al escribir en el archivo de citas:', error.message);
  }
};

const leer = () => {
  const citas = citasJson();
  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    citas.forEach(({ nombre, edad, animal, color, enfermedad }, index) => {
      console.log(`\n ${index + 1}. Cita Registrada
    ------------------------------
    Nombre del animal: ${nombre}
    Edad: ${edad}
    Tipo de animal: ${animal}
    Color del animal: ${color}
    Enfermedad: ${enfermedad}`);
    });
  }
};

module.exports = { registrar, leer };

