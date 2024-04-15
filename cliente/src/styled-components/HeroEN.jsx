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
    img {
      opacity: 0;
      display: block;
      object-fit: scale-down;
      transition: .1s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
  }
  .heroText:nth-child(1) {
    margin-top: 2.4rem;
    img { 
      width: calc(100% / 11);
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
      transform: scale(1.7);
    }
    .g {
      transform: rotate(90deg) translate(-20%, -5%);
    }
    .r2 {
      transform: scale(1.5);
    }
    .o {
      transform: translateY(-10%) translateX(-20%);
    }
    .u2 {
      transform: scale(.8) translateY(30%) translateX(-80%);
    }
    .n2 {
      transform: scale(1.5) rotate(-15deg) translateY(-10%) translateX(-45%);
    }
    .d2 {
      transform: scaleX(-1) translateX(75%);
    }
  }
  .heroText:nth-child(2) {
    img, .two--letters {
      width: calc(100% / 13);
    }
    .two--letters {
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
      }
    }
    .o1 {
      transform: scale(1.5);
    }
    .r {
      transform: scale(2);
    }
    .a1 {
      transform: scale(1.3) rotate(180deg) translateY(15%) translateX(20%);
    }
    .n1 {
      transform: scale(2) translateX(-20%);
    }
    .two--letters {
      transform: translateX(-30%);
      .g {
        transform: scale(1.2) rotate(-15deg);
      }
      .e1 {
        transform: scale(.8);
      }
    }
    .m {
      transform: scale(1.9) translateX(-10%);
    }
    .a2 {
      transform: scale(1.6) translateY(-15%);
    }
    .n2 {
      transform: scale(2.2) translateX(5%);
    }
    .i {
      transform: scale(1.5) rotate(20deg) translateY(10%) translateX(5%);
    }
    .f {
      transform: scale(1.2) translateY(10%) translateX(-20%);
    }
    .e2 {
      transform: scale(1.5) rotate(-15deg) translateX(-15%);
    }
    .two--letters {
      .s {
        transform: scale(1.3) translateY(20%);
      }
      .t {
        transform: scale(1.3) translateY(35%);
      }
    }
    .o2 {
      transform: scale(1.8) translatex(-5%);
    }
  }
  .showTitle {
    opacity: 1 !important;
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

      {window.location.pathname === "/manifiesto" ? (
      <div className='heroText'>
        <img className='o o1' src='/imgs/letters/o1.svg' alt=''/>
        <img className='r' src='/imgs/letters/r.svg' alt=''/>
        <img className='a a1' src='/imgs/letters/a.svg' alt=''/>
        <img className='n n1' src='/imgs/letters/n2.svg' alt=''/>
        <div className='two--letters'>
          <img className='g' src='/imgs/letters/g.svg' alt=''/>
          <img className='e e1' src='/imgs/letters/e2.svg' alt=''/>
        </div>
        <img className='m' src='/imgs/letters/m.svg' alt=''/>
        <img className='a a2' src='/imgs/letters/a1.svg' alt=''/>
        <img className='n n2' src='/imgs/letters/n1.svg' alt=''/>
        <img className='i' src='/imgs/letters/i.svg' alt=''/>
        <img className='f' src='/imgs/letters/f.svg' alt=''/>
        <img className='e e2' src='/imgs/letters/e.svg' alt=''/>
        <div className='two--letters'>
          <img className='s' src='/imgs/letters/s.svg' alt=''/>
          <img className='t' src='/imgs/letters/t.svg' alt=''/>
        </div>
        <img className='o o2' src='/imgs/letters/o.svg' alt=''/>
      </div>
    ) : (
      <div className='heroText'>
        <img className='o o1' src='/imgs/letters/o1.svg' alt=''/>
        <img className='r' src='/imgs/letters/r.svg' alt=''/>
        <img className='a a1' src='/imgs/letters/a.svg' alt=''/>
        <img className='n n1' src='/imgs/letters/n2.svg' alt=''/>
        <div className='two--letters'>
          <img className='g' src='/imgs/letters/g.svg' alt=''/>
          <img className='e e1' src='/imgs/letters/e2.svg' alt=''/>
        </div>
      </div>
    )}
    </HeroENContainer>
  );
}