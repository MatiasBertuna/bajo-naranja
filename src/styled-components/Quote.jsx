import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const QuoteContainer = styled.div`
  font-family: 'AvenirMI';
  margin-bottom: 1.2rem;
  .quote {
    .quoteBg {
      position: fixed;
      inset: 0;
      pointer-events: none;
      display: flex;
      transition: .8s cubic-bezier(0.65, 0.05, 0.36, 1);
      opacity: 0;
      z-index: -1;
      background: url('/noise.png'), radial-gradient(circle, rgba(236,121,26,1) 35%, rgba(236,121,58,1) 65%);
    }
    p {   
      margin: 0;
      font-size: 2rem;
      line-height: 2.8rem;
      transition: .8s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
  }
  .quote__show {
    p {
      color: ${props => props.theme.black};
    }
    .quoteBg {
      opacity: 1;
    }
  }
`;

function Quote({children}) {
  const { ref, inView, entry } = useInView({
    threshold: 1
  });
  const [show, setShow] = useState(false);
  useEffect(()=> {
    function showQuote() {
      if (entry) {
        let objectBottom = entry.target.getBoundingClientRect().bottom;
        let objectTop = entry.target.getBoundingClientRect().top;
        let windowMiddle = window.innerHeight/2;
        let twoOfThree = window.innerHeight - window.innerHeight / 3 * 2;
        let fromView = window.innerHeight - objectTop;
        if (inView && fromView > twoOfThree && objectBottom > windowMiddle) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    }
    document.addEventListener('scroll', showQuote);
    return ()=>{
      document.removeEventListener('scroll', showQuote);
    }
  }, [inView, entry]);

  return (
    <QuoteContainer ref={ref}>
      <div className={`quote ${show && 'quote__show'}`}>
        <div className='quoteBg'></div>
        <p>{children}</p>
      </div>
    </QuoteContainer>
  );
}

export default Quote;