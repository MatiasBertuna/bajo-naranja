import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import userRoutes from './routes/userRoutes'; // Importamos las rutas de usuario
import { conectarMongoDB } from './config/mongoDB'; // Importamos el método conectarMongoDB
import dotenv from 'dotenv';
import { sendEmail } from './config/resend'; // Importamos la función para enviar correos electrónicos

dotenv.config();

class Server {
    public app: Application;
    constructor() {
        this.app = express();

        this.config();
        this.routes();
    }

    async config(): Promise<void> { // Modificamos el método config para que sea asíncrono

        //Configuraciones
        this.app.set('port', process.env.PORT || 3000);

        //Middlewares
        this.app.use(morgan('dev'));

        const allowedOrigins = [
            `http://${process.env.HTTP}`,
            `https://${process.env.HTTP}`,
            'http://localhost:3000',
        ];

        this.app.use(cors({
            origin: function (origin, callback) {
                // Verifica si el origen de la solicitud está en la lista de orígenes permitidos
                if (!origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error('No permitido por CORS'));
                }
            },
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }));


        this.app.use(express.json()); //habilitamos el intercambio de objetos json entre aplicaciones
        this.app.use(express.urlencoded({ extended: false })); //habilitamos para recibir datos a traves de formularios html.

        //Variables globales

        // Conectamos a la base de datos antes de iniciar el servidor
        await conectarMongoDB();

        // Verificar la conexión al sistema de correos de Resend.com
        /*
        try {
            await sendEmail(process.env.TEST_EMAIL);
            console.log('Conexión al sistema de correos de Resend.com establecida correctamente');
        } catch (error) {
            console.error('Error al verificar la conexión con el sistema de correos de Resend.com:', error);
        }
        */
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/usuarios', userRoutes); // Rutas para el manejo de usuarios
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Puerto " + this.app.get('port') + " escuchando");
        });
    }
}

const server = new Server();
server.start(); //Ejecutamos el metodo start en inica el server