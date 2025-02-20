const fs = require("fs");

const ruta_archivo = "./archivos_creados/citas.json"

//Registrar: Agregar una nueva cita de una atención veterinaria
const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const datos_mascota = {
        name: nombre,
        age: edad,
        type: tipo,
        color: color,
        sickness: enfermedad
    };

    let citas = [];

    try {
        const data = fs.readFileSync(ruta_archivo, "utf8");
        citas = JSON.parse(data);
    } catch (error) {
        console.log("No existen citas previas, se creará un nuevo archivo.");
    }

    citas.push(datos_mascota);

    fs.writeFileSync(ruta_archivo, JSON.stringify(citas, null, 2));

}
//Leer: Mostrar por consola todas las citas registradas.
const leer = () =>  {
    try {
        if (!fs.existsSync(ruta_archivo)) {
            console.log("No hay citas registradas.");
            return;
        }

        const data = fs.readFileSync(ruta_archivo, "utf8");
        const citas = JSON.parse(data);

        if (citas.length === 0) {
            console.log("No hay citas registradas.");
            return;
        }

        console.log("Citas registradas:", citas);
    } catch (error) {
        console.error("Error al leer el archivo:", error.message);
    }
};

module.exports = { registrar , leer};

