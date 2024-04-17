export const addUser = async (formData, language) => {
    try {
        const apiUrl = process.env.REACT_APP_API_URL_LOCAL; // Obtén la URL base desde la variable de entorno
        const response = await fetch(`${apiUrl}/usuarios/agregar`, { // Utiliza la URL base para construir la solicitud
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