
const { registrar , leer} = require('./operaciones.js')


const [,, comando, nombre, edad, tipo, color, enfermedad] = process.argv;

//Se deberá crear condiciones que evalúen, según el argumento correspondiente, qué función ejecutar:

if (comando == "registrar") {
    registrar(nombre, edad, tipo, color, enfermedad);
}
if (comando == "leer") {
    leer();
}
    