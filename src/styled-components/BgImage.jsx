import { useEffect } from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
  transition: .1s cubic-bezier(0.65, 0.05, 0.36, 1);
  img {
    width: 50%;
    max-width: 300px;
    object-fit: scale-down;
    opacity: .6;
  }
`;

function BgImage() {
  function rotate() {
    let images = document.getElementById('bgColor').getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      const element = images[i];
      element.style.transform= "translateX(" + window.scrollY/2 + "px)";
    }
    // image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
  }
  useEffect(()=> {
    window.onscroll = () => {
      // rotate();
    }
  },[]);

  return(
    <ImgContainer id='bgColor'>
      {/* <img src='/imgs/white.jpg'/>
      <img src='/imgs/white.jpg'/>
      <img src='/imgs/white.jpg'/> */}
    </ImgContainer>
  );
}

export default BgImage;