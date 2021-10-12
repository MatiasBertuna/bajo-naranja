import styled from 'styled-components';

const HeroContainer = styled.div`
  padding-top: 2.4rem;
  padding-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .heroText {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2.4rem;
    img {
      opacity: 0;
      display: block;
      object-fit: scale-down;
      width: calc(100% / 10);
      transition: .1s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
  }
  .heroText:nth-child(1) {
    .b {
      transform: scale(2) translate(-25%, 15%) rotate(-15deg);
    }
    .a {
      transform: translateX(-15%);
    }
    .j {
      transform: scale(3) scaleX(-1);
    }
    .o {
      transform: scale(2) translate(30%, 15%) rotate(-115deg);
    }
  }
  .heroText:nth-child(2) {
    .aUno {
      transform: scale(1.5) translateY(15%) scaleY(-1);
    }
    .aDos {
      transform: scale(.8);
    }
    .aTres {
      transform: scale(1.5) translateX(20%) rotate(-125deg);
    }
    .r {
      transform: scale(2);
    }
    .j {
      transform: scale(1.3) translateX(20%) rotate(-95deg);
    }
    .nDos {
      transform: scale(2) translateX(15%) scaleX(-1);
    }
  }
  .heroText:nth-child(3) {
    margin-bottom: 2.4rem;
    .m {
      transform: scale(1.3) translateY(-15%) rotate(15deg);
    }
    .a {
      transform: scale(1.5);
    }
    .n {
      transform: scale(.8) rotate(-80deg);
    }
    .iUno {
      transform: scale(1.2) rotate(20deg);
    }
    .f {
      transform: translateY(30%);
    }
    .iDos {
      transform: scale(2) rotate(-5deg);
    }
    .e {
      transform: rotate(-45deg);
    }
    .t {
      transform: translateY(30%);
    }
  }
  .showTitle {
    opacity: 1 !important;
  }
  @media (min-width: 920px) {
    .heroText:nth-child(1) {
      margin-bottom: 3.2rem;
    }
  }
`;

function Hero() {
  function showHero(){
    let letters = document.getElementById('hero').getElementsByTagName('img');
    let arrayOfCharacters = ['a', 'b', 'e', 'f', 'i', 'j', 'm', 'n', 'o', 'r', 's', 't'];

    function addDelayToLetters(characters) {
      let delayTime= 0;
      for (let i = 0; i < characters.length; i++) {
        let spanByLetter = document.getElementsByClassName(characters[i]);
        delayTime = delayTime + 0.2;
        for (let l = 0; l < spanByLetter.length; l++) {
          spanByLetter[l].style.transitionDelay= `${delayTime}s`;
        }
      }
    }

    addDelayToLetters(arrayOfCharacters);

    for (let i = 0; i < letters.length; i++) {
      const element = letters[i];
      element.classList.add('showTitle');
    }
  }

  return (
    <HeroContainer id='hero' onLoad={showHero}>
      <div className='heroText'>
        <img className='b' src='/imgs/letters/b1.svg' alt=''/>
        <img className='a' src='/imgs/letters/a.svg' alt=''/>
        <img className='j' src='/imgs/letters/j.svg' alt=''/>
        <img className='o' src='/imgs/letters/o2.svg' alt=''/>
      </div>
      <div className='heroText'>
        <img className='n nUno' src='/imgs/letters/n1.svg' alt=''/>
        <img className='a aUno' src='/imgs/letters/a2.svg' alt=''/>
        <img className='r' src='/imgs/letters/r.svg' alt=''/>
        <img className='a aDos' src='/imgs/letters/a.svg' alt=''/>
        <img className='n nDos' src='/imgs/letters/n2.svg' alt=''/>
        <img className='j' src='/imgs/letters/j.svg' alt=''/>
        <img className='a aTres' src='/imgs/letters/a.svg' alt=''/>
      </div>
      <div className='heroText'>
        <img className='m' src='/imgs/letters/m.svg' alt=''/>
        <img className='a' src='/imgs/letters/a.svg' alt=''/>
        <img className='n' src='/imgs/letters/n.svg' alt=''/>
        <img className='i iUno' src='/imgs/letters/i.svg' alt=''/>
        <img className='f' src='/imgs/letters/f.svg' alt=''/>
        <img className='i iDos' src='/imgs/letters/i.svg' alt=''/>
        <img className='e' src='/imgs/letters/e.svg' alt=''/>
        <img className='s' src='/imgs/letters/s.svg' alt=''/>
        <img className='t' src='/imgs/letters/t.svg' alt=''/>
        <img className='o' src='/imgs/letters/o.svg' alt=''/>
      </div>
    </HeroContainer>
  );
}

export default Hero;