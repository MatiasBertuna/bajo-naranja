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
    margin: 1.6rem 0;
    img {
      opacity: 0;
      display: block;
      object-fit: scale-down;
      width: calc(100% / 10);
      transition: .1s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
    .a:nth-child(even) {
      transform: translateY(-10px);
    }
    .o {
      transform: translateY(10px);
    }
    .i {
      transform: translateY(-5px);
    }
    .e {
      transform: translateY(15px);
    }
    .j:nth-child(odd) {
      transform: rotate(-20deg);
    }
    .n:nth-child(1) {
      transform: translateY(-20px);
    }
    .r {
      transform: rotate(-10deg);
    }
  }
  .heroText:nth-child(1) img {
    width: calc(90% / 4);
    max-width: 150px;
  }
  .heroText:nth-child(2) img {
    width: calc(100% / 7);
    max-width: 100px;
  }
  .heroText:nth-child(3) {
    margin-top: 3.2rem;
    img {
      width: calc(80% / 10);
    }
  }
  .showTitle {
    opacity: 1 !important;
  }
`;

function Hero() {
  function showHero(){
    let letters = document.getElementById('hero').getElementsByTagName('img');
    let arrayOfCharacters = ['a', 'b', 'e', 'f', 'i', 'j', 'm', 'n', 'o', 'r', 's', 't'];
    let delayTime= 0;
    for (let i = 0; i < arrayOfCharacters.length; i++) {
      const letter = arrayOfCharacters[i];
      let spanByLetter = document.getElementsByClassName(letter);
      delayTime = delayTime + 0.2;
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

  return (
    <HeroContainer id='hero' onLoad={showHero}>
      <div className='heroText'>
        <img className='b' src='/imgs/letters/b1.svg' alt=''/>
        <img className='a' src='/imgs/letters/a.svg' alt=''/>
        <img className='j' src='/imgs/letters/j.svg' alt=''/>
        <img className='o' src='/imgs/letters/o2.svg' alt=''/>
      </div>
      <div className='heroText'>
        <img className='n' src='/imgs/letters/n1.svg' alt=''/>
        <img className='a' src='/imgs/letters/a2.svg' alt=''/>
        <img className='r' src='/imgs/letters/r.svg' alt=''/>
        <img className='a' src='/imgs/letters/a.svg' alt=''/>
        <img className='n' src='/imgs/letters/n2.svg' alt=''/>
        <img className='j' src='/imgs/letters/j.svg' alt=''/>
        <img className='a' src='/imgs/letters/a.svg' alt=''/>
      </div>
      <div className='heroText'>
        <img className='m' src='/imgs/letters/m.svg' alt=''/>
        <img className='a' src='/imgs/letters/a.svg' alt=''/>
        <img className='n' src='/imgs/letters/n.svg' alt=''/>
        <img className='i' src='/imgs/letters/i.svg' alt=''/>
        <img className='f' src='/imgs/letters/f.svg' alt=''/>
        <img className='i' src='/imgs/letters/i.svg' alt=''/>
        <img className='e' src='/imgs/letters/e.svg' alt=''/>
        <img className='s' src='/imgs/letters/s.svg' alt=''/>
        <img className='t' src='/imgs/letters/t.svg' alt=''/>
        <img className='o' src='/imgs/letters/o.svg' alt=''/>
      </div>
    </HeroContainer>
  );
}

export default Hero;