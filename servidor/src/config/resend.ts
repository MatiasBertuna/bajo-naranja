import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.API_KEY_RESEND);

export async function sendEmail(userEmail?: string, language?: string) {
    try {
        if (userEmail === undefined) {
            console.error('El correo electrónico del usuario es undefined');
            return;
        }

        let emailContent;
        if (language === 'english') {
            emailContent = {
                subject: 'BajoNaranja Ticket',
                text: 'On April 26 of 2024 at 11:00 pm your presence is requested at the party in la concha de la lora. Remember to wear or bring something orange. For the exact address, please following this link: https://maps.app.goo.gl/DPwH73sFn6xUtKmF8.'
            };
        } else {
            emailContent = {
                subject: 'Entrada a BajoNaranja',
                text: 'El día 26 de Abril de 2024 a las 23:00 horas presenciarás en la fiesta de la concha de la lora. Recuerda llevar una prenda o accesorio de color naranja. Para conocer la ubicación haz clic en el siguiente enlace: https://maps.app.goo.gl/DPwH73sFn6xUtKmF8.'
            };
        }

        const { data, error } = await resend.emails.send({
            from: `"BajoNaranja" <${process.env.EMAIL}>`,
            to: [userEmail],
            ...emailContent
        });

        if (error) {
            console.error('Error al enviar correo electrónico:', error);
        } else {
            console.log('Correo electrónico enviado correctamente:', data);
        }
    } catch (error) {
        console.error('Error al enviar correo electrónico:', error);
    }
}

export default resend;