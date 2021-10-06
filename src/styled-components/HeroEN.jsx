import styled from 'styled-components';

const HeroENContainer = styled.div`
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
      width: calc(100% / 11);
      transition: .1s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
  }
  .heroText:nth-child(1) {
    transform: translateX(3.5%);
    .u1 {
      transform: scale(.6);
    }
    .n1 {
      transform: scale(2.3) scaleX(-1);
    }
    .d1 {
      transform: translateY(-10%);
    }
    .e {
      transform: scaleX(-1) translateY(10%);
    }
    .r1 {
      transform: scale(1.5) rotate(-45deg);
    }
    .g {
      transform: rotate(90deg) translate(-20%, -5%);
    }
    .r2 {
      transform: scale(1.5);
    }
    .o {
      transform: scale(1.2) translateY(-35%) translateX(-15%);
    }
    .u2 {
      transform: scale(.9) translateY(15%) translateX(-90%);
    }
    .n2 {
      transform: scale(1.5) rotate(-15deg) translateY(-10%) translateX(-50%);
    }
    .d2 {
      transform: scaleX(-1) translateX(80%);
    }
  }
  .heroText:nth-child(2) {
    .o {
      transform: scale(1.2);
    }
    .r {
      transform: scale(2);
    }
    .a {
      transform: scale(1.3) rotate(180deg) translateY(30%);
    }
    .n {
      transform: scale(2);
    }
    .g {
      transform: rotate(-15deg);
    }
    .e {
      transform: scale(1.3) translateX(15%);
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
      transform: scale(1.2);
    }
    .i {
      transform: scale(1.2) rotate(20deg);
    }
    .f {
      transform: translateY(30%);
    }
    .e {
      transform: scale(1.5) rotate(-15deg);
    }
    .t {
      transform: translateY(30%);
    }
    .o {
      transform: scale(1.8) translateY(15%);
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

export default function HeroEN() {

  function showHero(){
    let letters = document.getElementById('heroEN').getElementsByTagName('img');
    let arrayOfCharacters = ['a', 'd', 'e', 'f', 'g', 'i', 'm', 'n', 'o', 'r', 's', 't', 'u'];
    
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
    <HeroENContainer id='heroEN' onLoad={showHero}>
      <div className='heroText'>
        <img className='u u1' src='/imgs/letters/u.svg' alt=''/>
        <img className='n n1' src='/imgs/letters/n1.svg' alt=''/>
        <img className='d d1' src='/imgs/letters/d.svg' alt=''/>
        <img className='e' src='/imgs/letters/e1.svg' alt=''/>
        <img className='r r1' src='/imgs/letters/r.svg' alt=''/>
        <img className='g' src='/imgs/letters/g.svg' alt=''/>
        <img className='r r2' src='/imgs/letters/r.svg' alt=''/>
        <img className='o' src='/imgs/letters/o2.svg' alt=''/>
        <img className='u u2' src='/imgs/letters/u1.svg' alt=''/>
        <img className='n n2' src='/imgs/letters/n.svg' alt=''/>
        <img className='d d2' src='/imgs/letters/d1.svg' alt=''/>
      </div>
      <div className='heroText'>
        <img className='o' src='/imgs/letters/o1.svg' alt=''/>
        <img className='r' src='/imgs/letters/r.svg' alt=''/>
        <img className='a' src='/imgs/letters/a.svg' alt=''/>
        <img className='n' src='/imgs/letters/n2.svg' alt=''/>
        <img className='g' src='/imgs/letters/g.svg' alt=''/>
        <img className='e' src='/imgs/letters/e2.svg' alt=''/>
      </div>
      <div className='heroText'>
        <img className='m' src='/imgs/letters/m.svg' alt=''/>
        <img className='a' src='/imgs/letters/a1.svg' alt=''/>
        <img className='n' src='/imgs/letters/n1.svg' alt=''/>
        <img className='i' src='/imgs/letters/i.svg' alt=''/>
        <img className='f' src='/imgs/letters/f.svg' alt=''/>
        <img className='e' src='/imgs/letters/e.svg' alt=''/>
        <img className='s' src='/imgs/letters/s.svg' alt=''/>
        <img className='t' src='/imgs/letters/t.svg' alt=''/>
        <img className='o' src='/imgs/letters/o.svg' alt=''/>
      </div>
    </HeroENContainer>
  );
}