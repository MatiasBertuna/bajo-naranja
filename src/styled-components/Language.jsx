import { useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
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
  opacity: 0;
  transition: cubic-bezier(0.65, 0.05, 0.36, 1) .8s 2.4s;
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

export default function Language({onClick, children: language}) {

  useEffect(() => {
    (() => {
      return document.getElementById('languageButton').style.opacity=1;
    })();
  }, [language]);

  return (
    <Button id='languageButton' onClick={onClick}>{language === 'english' ? 'español' : 'english'}</Button>
  );
}