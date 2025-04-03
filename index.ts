import express from 'express';
import alumnoRoutes from './src/routes/alumnoRoutes'

const app = express();
app.use(express.json());

app.use('/api/alumno', alumnoRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server running'))