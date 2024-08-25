
const { registrar, leer } = require('./operaciones');

// Obtener los argumentos de la línea de comandos
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion.toLowerCase() === 'registrar') {
  // Validar que todos los datos necesarios estén presentes
  if (nombre && edad && animal && color && enfermedad) {
    try {
      // Intentar registrar los datos
      registrar(nombre, edad, animal, color, enfermedad);
      console.log('Registro exitoso.');
    } catch (error) {
      // Manejar errores durante el registro
      console.error('Error al registrar:', error.message);
    }
  } else {
    // Mensaje de error si faltan datos
    console.log('Faltan datos para registrar. Asegúrate de proporcionar nombre, edad, animal, color y enfermedad.');
  }
} else if (operacion.toLowerCase() === 'leer') {
  try {
    // Intentar leer los datos
    leer();
  } catch (error) {
    // Manejar errores durante la lectura
    console.error('Error al leer:', error.message);
  }
} else {
  // Mensaje de error si la operación no es válida
  console.log(`No existe la operación "${operacion}". Operaciones existentes: "registrar" y "leer".`);
}
