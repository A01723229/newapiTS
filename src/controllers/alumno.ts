
import AlumnoDB, { Alumno } from '../database/alumno';

class AlumnoController {
    async getAllAlumnos(): Promise<Alumno[]> {
        const alumnos = await AlumnoDB.GetAll();

        for (const alumno of alumnos) {
            const { calificacion, adeudo } = alumno;

            if (calificacion >= 90 && !adeudo) {
                alumno.mensaje = "te graduaste con honores";
            } else if (calificacion >= 90 && adeudo) {
                alumno.mensaje = "tenías honores pero tienes adeudo";
            } else if (calificacion >= 70) {
                alumno.mensaje = "pasaste muy apenas";
            } else if (calificacion <= 69 && !adeudo) {
              alumno.mensaje = "reprobaste pero tienes derecho a un examen extra";
            }else {
                alumno.mensaje = "no pasaste";
            }
        }

        return alumnos;
    }
}

export default AlumnoController;
