import React, { useEffect, useState } from 'react';
import Wrapper from '../styled-components/Wrapper'; // Importamos el componente Wrapper desde la carpeta styled-components
import Invitado from '../styled-components/Invitado'; // Importamos el componente InvitadoStyle desde la carpeta styled-components
import Quote from '../styled-components/Quote';
import { listUsers } from '../api'; // Importamos la función listUsers desde el archivo api.js

const Invitados = () => {
    // Define el estado para almacenar la lista de usuarios
    const [users, setUsers] = useState([]);

    // Función para cargar la lista de usuarios al cargar la página
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Llama a la función para obtener la lista de usuarios
                const userList = await listUsers();
                setUsers(userList); // Actualiza el estado con la lista de usuarios obtenida
            } catch (error) {
                console.error('Error al obtener la lista de usuarios:', error);
            }
        };

        fetchUsers(); // Ejecuta la función para cargar la lista de usuarios
    }, []); // Se ejecuta solo una vez al cargar la página

    return (
        <Wrapper>
            <div className="wrapper--max">
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Quote strong={["Listado de Invitados"]}>
                        Listado de Invitados
                    </Quote>
                </h2>
                {/* Utiliza InvitadoStyle para aplicar estilos específicos a la tabla */}
                <Invitado>
                    <table>
                        <thead>
                            <tr>
                                <th>N°</th> {/* Nueva columna para el número */}
                                <th>
                                    <Quote>
                                        Nombre
                                    </Quote>
                                </th>
                                <th>
                                    <Quote>
                                        Email
                                    </Quote>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mapea la lista de usuarios y muestra cada usuario en una fila de la tabla */}
                            {/*users.sort((a, b) => a.name.localeCompare(b.name)).map((user, index) => (*/}
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Invitado>
            </div>
        </Wrapper>
    );
};

export default Invitados;