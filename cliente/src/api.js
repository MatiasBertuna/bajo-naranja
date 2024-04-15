import dotenv from 'dotenv';

dotenv.config();

export const addUser = async (formData, language) => {
    try {
        const response = await fetch( process.env.BACKEND_URL +"/usuarios/agregar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData, language }), // Incluimos el idioma en el formData
        });
        if (!response.ok) {
            throw new Error("No se pudo agregar el usuario");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al agregar usuario:", error);
        throw error;
    }
};