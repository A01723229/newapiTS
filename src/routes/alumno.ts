import express from 'express';
import AlumnoHttpHandler from '../handlers/alumno'

const router  = express.Router();

const alumnoHttpHandler = new AlumnoHttpHandler();

router.get('/', alumnoHttpHandler.getAllAlumnos);

export default router;