import { Router, Request, Response } from 'express';
import userController from '../controller/userController'; // Importamos el controlador del usuario

class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req: Request, res: Response) => {
            res.send('Base de datos de Usuarios');
        });

        this.router.post('/agregar', userController.addUser); // Ruta para agregar un nuevo usuario
        this.router.get('/listar', userController.list); // Ruta para obtener todos los usuarios
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;