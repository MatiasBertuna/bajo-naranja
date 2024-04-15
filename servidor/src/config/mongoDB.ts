import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL: string = process.env.MONGODB_URL || '';

export async function conectarMongoDB(): Promise<void> {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Salir del proceso con código de error
    }
}

export default mongoose; // Exportamos la instancia de mongoose para usarla en otras partes de la aplicación