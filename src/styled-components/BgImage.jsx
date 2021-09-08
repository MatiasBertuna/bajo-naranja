import { useEffect } from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
  transition: .1s cubic-bezier(0.65, 0.05, 0.36, 1);
  .view {
    flex: 0 0 100%;
    display: flex;
    img {
      margin: auto;
      width: 70%;
      height: 70%;
      object-fit: contain;
      opacity: .4;
    }
  }
`;

function BgImage() {
  function translate() {
    let images = document.getElementsByClassName('view');
    for (let i = 0; i < images.length; i++) {
      const element = images[i];
      element.style.transform= "translateX(" + window.scrollY/2 + "px)";
    }
  }
  useEffect(()=> {
    window.onscroll = () => {
      // translate();
    }
  },[]);

  return(
    <ImgContainer id='bgColor'>
      <div className='view'>
        <img src='/imgs/bajoNaranja.svg'/>
      </div>
    </ImgContainer>
  );
}

export default BgImage;