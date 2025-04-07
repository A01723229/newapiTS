
export type Alumno = {
    matricula: string;
    nombre: string;
    calificacion: number;
    adeudo: boolean;
    mensaje?: string; 
};

class AlumnoDB {
    private alumnos: Alumno[] = [
        { matricula: "A0082192", nombre: "Rodrigo Garza", calificacion: 92, adeudo: false },
        { matricula: "A0083171", nombre: "Alberto Fuentes", calificacion: 98, adeudo: true },
        { matricula: "A0085211", nombre: "Alberto Fuentes", calificacion: 70, adeudo: true },
        { matricula: "A0087513", nombre: "Alberto Fuentes", calificacion: 60, adeudo: false },
        { matricula: "A0089827", nombre: "Alberto Fuentes", calificacion: 60, adeudo: true }
    ];

    async GetAll(): Promise<Alumno[]> {
        return this.alumnos;
    }
}

export default new AlumnoDB();
