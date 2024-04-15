import { Request, Response } from 'express';
import UserModel from '../models/userModel'; // Importa el modelo de usuario de MongoDB
import { sendEmail } from '../config/resend';

class UserController {

    public async addUser(req: Request, res: Response) {
        const { name, email, language } = req.body;

        // Validar que los campos name y email estén completos
        if (!name || !email) {
            return res.status(400).json({ mensaje: 'El nombre y el correo electrónico son campos obligatorios' });
        }

        // Validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ mensaje: 'El correo electrónico no tiene un formato válido' });
        }

        try {
            // Validar que no haya más de 300 registros en la base de datos
            const userCount = await UserModel.countDocuments();
            if (userCount >= 300) {
                return res.status(429).json({ mensaje: 'Se ha alcanzado el límite de registros de usuarios' });
            }

            const existingUser = await UserModel.findOne({ email });

            if (existingUser) {
                return res.status(409).json({ mensaje: 'El usuario ya está registrado' });
            }

            const result = await UserModel.create({ name, email });

            // Obtener el correo electrónico del usuario registrado
            const userEmail = result.email;

            // Enviar correo electrónico utilizando la herramienta resend.com y el idioma
            await sendEmail(userEmail, language);

            return res.status(201).json({ mensaje: 'Usuario registrado correctamente. Se ha enviado un correo con la entrada.' });

        } catch (error) {
            console.error('Error al agregar usuario:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    public async list(req: Request, res: Response) {
        try {
            const users = await UserModel.find().select('-_id name email').lean();
            return res.status(200).json(users);
            
        } catch (error) {
            console.error('Error al listar usuarios:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}

const userController = new UserController();
export default userController;