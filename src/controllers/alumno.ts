const AlumnoDB = require('../database/alumno');

class AlumnoController {
  async getAllAlumnos() {
    const alumnos = AlumnoDB.getAll();
    for const alumno in alumnos(
        if (alumno[2] >= 90) && (alumno[3] == false){
            alumnos[4] == "te graduaste con honores"
        }
        else if (alumno[2] >= 90) && (alumno[3] == true){
            alumnos[4] == "tenias honores pero tienes aduedo"
        }
        else if (alumno[2] <= 89) && (alumno[2] >= 70){
            alumnos[4] == "pasaste muy apenas"
        }
    )
    return AlumnoDB.getAll();
  }
}

export default AlumnoController;