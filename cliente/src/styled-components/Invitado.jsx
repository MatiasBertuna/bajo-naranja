import styled from 'styled-components';

const Invitado = styled.div`
    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 2rem;
        margin-top: 2rem;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); /* Cambié el color de la sombra para que resalte en un fondo oscuro */
        background-color: #333; /* Cambié el color de fondo a oscuro */
    }

    th, td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #444; /* Cambié el color del borde */
        color: #eee; /* Cambié el color del texto */
    }

    th {
        background-color: #222; /* Cambié el color de fondo a un tono más oscuro */
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: #444; /* Cambié el color de fondo de las filas pares */
    }

    tr:hover {
        background-color: #555; /* Cambié el color de fondo al pasar el ratón por encima */
    }
`;

export default Invitado;