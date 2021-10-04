import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: block;
  background: transparent;
  border: none;
  font-weight: bold;
  letter-spacing: .2rem;
  text-transform: lowercase;
  margin: 2.4rem 0;
  margin-left: auto;
  padding: .4rem .8rem;
  color: white;
  ::before {
    content: '';
    position: absolute;
    inset: -.8rem -1rem -.4rem;
    height: auto;
    border: 3px solid ${props => props.theme.orange};
    border-radius: 50% 25% 70%;
    background: none;
  }
`;

export default Button;