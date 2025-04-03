import {  Request, Response, NextFunction } from 'express';
import AlumnoController from '../controllers/alumno'

const alumnoController = new AlumnoController();

class AlumnoHttpHandler {
    async getTweets(request: Request, response: Response, next: NextFunction) {
        try {
            const alumnos = await alumnoController.getAllAlumnos();
            response.json(alumnos)
        } catch (error) {
            next(error)
        }
    }
}

export default AlumnoHttpHandler;