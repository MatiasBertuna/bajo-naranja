import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const QuoteContainer = styled.div`
  margin-bottom: 1.2rem;
  .quote {
    p {   
      margin: 0;
      transition: .8s cubic-bezier(0.65, 0.05, 0.36, 1);
      position: relative;
      width: fit-content;
      font-family: 'AvenirMI';
      span {
        position: relative;
        display: inline-flex;
        padding-right: .6rem;
        :before, :after {
          transition: .4s cubic-bezier(0.65, 0.05, 0.36, 1);
        }
      }
      .scratch {
        :after {
          content: '';
          position: absolute;
          inset: 0 5%;
          background: url('/imgs/strokes/stroke2.svg');
          background-repeat: repeat-x;
          background-position: center;
        }
        :before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          border-bottom: 2px solid ${props => props.theme.orange};
        }
      }
      .circle {
        :before {
          content: '';
          position: absolute;
          inset: -.8rem -1rem -.4rem;
          border: 2px solid ${props => props.theme.orange};
          border-radius: 50% 25% 70%;
          background: none;
          opacity: 0;
        }
      }
    }
  }
  .showText {
    span:after {
      opacity: 0;
    }
    span:before {
      opacity: 1 !important;
    }
  }
`;

function Quote({children, circle}) {
  const { ref, inView, entry } = useInView({
    threshold: 1
  });
  const [show, setShow] = useState(false);
  const [text, setText] = useState(false);
  useEffect(()=> {
    function splitQuote() {
      if (entry) {
        let paragraph = entry.target;
        if (paragraph) {
          paragraph = paragraph.getElementsByTagName('p')[0];
          let words = children.split(" ");
          for (let w = 0; w < words.length; w++) {
            const element = words[w];
            let span = document.createElement('span');
            span.innerHTML= `${element} `;
            // check for circle words required
            if (circle) {
              for (let c = 0; c < circle.length; c++) {
                const circleWord = circle[c];
                if (element.includes(circleWord)) {
                  span.classList.add('circle');
                } else {
                  span.classList.add('scratch');
                }
              }
            } 
            // default markup
            else {
              span.classList.add('scratch');
            }
            paragraph.appendChild(span);
          }
          setText(true);
        }
      }
    }
    function showQuote() {
      if (entry) {
        if (inView) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    }
    document.addEventListener('scroll', showQuote);
    if (!text) {
      splitQuote();
    }
    return ()=>{
      document.removeEventListener('scroll', showQuote);
    }
  }, [inView, entry, children, circle, text]);

  return (
    <QuoteContainer ref={ref}>
      <div className={`quote`}>
        <p className={show ? 'showText' : null}></p>
      </div>
    </QuoteContainer>
  );
}

export default Quote;