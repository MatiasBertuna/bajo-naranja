import { useEffect } from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: AvenirB;
    font-size: 5.2rem;
    display: flex;
    span {
      opacity: 0;
      transition: .1s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
  }
  h1:nth-child(3) {
    margin-top: auto;
  }
  .showTitle {
    opacity: 1;
  }
  @media (min-width: 920px) {
    h1 {
      font-size: 10.2rem;
    }
  }
`;

function Hero() {
  useEffect(()=> {
    window.onload= ()=> {
      let letters = document.getElementById('hero').getElementsByTagName('span');
      let arrayOfCharacters = ['a', 'b', 'e', 'f', 'i', 'j', 'm', 'n', 'o', 'r', 's', 't'];
      let delayTime= 0.5;
      for (let i = 0; i < arrayOfCharacters.length; i++) {
        const letter = arrayOfCharacters[i];
        let spanByLetter = document.getElementsByClassName(letter);
        delayTime = delayTime + 0.3;
        for (let l = 0; l < spanByLetter.length; l++) {
          const element = spanByLetter[l];
          element.style.transitionDelay= `${delayTime}s`;
        }
        
      }
      for (let i = 0; i < letters.length; i++) {
        const element = letters[i];
        element.classList.add('showTitle');
      }
    }
  },[]);

  return (
    <HeroContainer id='hero'>
      <h1>
        <span className='b'>B</span>
        <span className='a'>a</span>
        <span className='j'>j</span>
        <span className='o'>o</span>
      </h1>
      <h1>
        <span className='n'>N</span>
        <span className='a'>a</span>
        <span className='r'>r</span>
        <span className='a'>a</span>
        <span className='n'>n</span>
        <span className='j'>j</span>
        <span className='a'>a</span>
      </h1>
      <h1>
        <span className='m'>M</span>
        <span className='a'>a</span>
        <span className='n'>n</span>
        <span className='i'>i</span>
        <span className='f'>f</span>
        <span className='i'>i</span>
        <span className='e'>e</span>
        <span className='s'>s</span>
        <span className='t'>t</span>
        <span className='o'>o</span>
      </h1>
    </HeroContainer>
  );
}

export default Hero;