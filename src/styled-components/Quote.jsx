import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const QuoteContainer = styled.div`
  font-size: 2.2rem;
  font-family: 'AvenirMI';
  transition: .2s cubic-bezier(0.65, 0.05, 0.36, 1);
  padding: 1.6rem 0;
  margin: 1.6rem 0;
  border-top: 1px solid ${props => props.theme.orange};
  border-bottom: 1px solid ${props => props.theme.orange};
  p {
    margin: 0;
  }
`;

function Quote({children}) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true
  });
  useEffect(()=> {
    function showQuote() {
      window.onscroll = ()=> {
        if (entry) {
          let objectBottom = entry.target.getBoundingClientRect().bottom;
          let objectTop = entry.target.getBoundingClientRect().top;
          let windowMiddle = window.innerHeight/2;
          let twoOfThree = window.innerHeight - window.innerHeight / 3 * 2;
          let fromView = window.innerHeight - objectTop;
          let bgColor = document.getElementById('bgColor');
          if (inView && fromView > twoOfThree && objectBottom > windowMiddle) {
            bgColor.style.background= '#EC791A';
            entry.target.style.color='#080808';
          } else {
            bgColor.removeAttribute('style');
            entry.target.removeAttribute('style');
          }
        }
      }
    }
    showQuote();
  }, [inView, entry]);

  return (
    <QuoteContainer ref={ref}>
      <p>
        {children}
      </p>
    </QuoteContainer>
  );
}

export default Quote;