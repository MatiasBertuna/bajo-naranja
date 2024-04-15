import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  margin-top: 5px;
  background-color: #EC791A;
  font-size: 18px;
  font-family: 'AvenirEB';
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
      color: #ffffff;
    background-color: #AD4E00;
  }
`;

export default Button;