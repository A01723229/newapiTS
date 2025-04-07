
import { Request, Response, NextFunction } from 'express';
import AlumnoController from '../controllers/alumno';

const alumnoController = new AlumnoController();

class AlumnoHttpHandler {
    async getAllAlumnos(req: Request, res: Response, next: NextFunction) {
        try {
            const alumnos = await alumnoController.getAllAlumnos();
            res.json(alumnos);
        } catch (error) {
            next(error);
        }
    }
}

export default AlumnoHttpHandler;
