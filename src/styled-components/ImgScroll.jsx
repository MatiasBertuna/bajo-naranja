import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  display: flex;
  overflow: hidden;
  .imgScroll {
    display: block;
    margin: auto;
    width: 70%;
    object-fit: scale-down;
    max-width: 300px;
  }
`;

export default function ImgScroll({source}) {
  const imgRef = useRef(null);
  useEffect(()=> {
    function translate() {
      imgRef.current.style.transform= "rotate(" + window.scrollY/8 + "deg)";
    }
    document.addEventListener('scroll', translate);
    return ()=> {
      document.removeEventListener('scroll', translate);
    }
  },[]);

  return (
    <ImgContainer>
      <img ref={imgRef} className='imgScroll' src={`/imgs/${source}`} alt=''/>
    </ImgContainer>
  );
}