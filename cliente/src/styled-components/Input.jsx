import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 17px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: none; /* Eliminamos el borde */
  border-radius: 30px;
  background-color: white;
  font-size: 17px;
  font-family: 'AvenirBI';
  color: #101010;

  &:focus,
  &:active {
    font-family: 'AvenirR';
    color: #252525;
    outline: none;
    background-color: #E2E2E2;
  }
`;

export default Input;
