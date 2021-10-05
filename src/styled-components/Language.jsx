import { useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  position: relative;
  display: block;
  background: transparent;
  border: none;
  letter-spacing: .2rem;
  text-transform: lowercase;
  margin-top: 1.2rem;
  margin-right: 1.2rem;
  margin-left: auto;
  color: ${props => props.theme.white};
  font-size: 1.4rem;
  opacity: 0;
  transition: cubic-bezier(0.65, 0.05, 0.36, 1) .8s 2.4s;
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