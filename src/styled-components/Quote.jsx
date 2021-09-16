import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const QuoteContainer = styled.span`
  margin: 0;
  transition: .8s cubic-bezier(0.65, 0.05, 0.36, 1);
  position: relative;
  width: fit-content;
  text-align: center;
  display: inline;
  span {
    position: relative;
    display: inline-flex;
    padding-right: .6rem;
    :before, :after {
      transition: .4s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
  }
  span:after {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/imgs/strokes/stroke2.svg');
    background-repeat: repeat-x;
    background-position: center;
    opacity: 0;
    @keyframes shake-little{2%{transform:translate(1px, 0px) rotate(.5deg)}4%{transform:translate(0px, 1px) rotate(.5deg)}6%{transform:translate(1px, 0px) rotate(.5deg)}8%{transform:translate(0px, 0px) rotate(.5deg)}10%{transform:translate(1px, 1px) rotate(.5deg)}12%{transform:translate(0px, 0px) rotate(.5deg)}14%{transform:translate(0px, 0px) rotate(.5deg)}16%{transform:translate(0px, 0px) rotate(.5deg)}18%{transform:translate(0px, 1px) rotate(.5deg)}20%{transform:translate(0px, 0px) rotate(.5deg)}22%{transform:translate(0px, 0px) rotate(.5deg)}24%{transform:translate(1px, 0px) rotate(.5deg)}26%{transform:translate(1px, 1px) rotate(.5deg)}28%{transform:translate(0px, 1px) rotate(.5deg)}30%{transform:translate(1px, 1px) rotate(.5deg)}32%{transform:translate(1px, 1px) rotate(.5deg)}34%{transform:translate(1px, 1px) rotate(.5deg)}36%{transform:translate(1px, 1px) rotate(.5deg)}38%{transform:translate(0px, 0px) rotate(.5deg)}40%{transform:translate(0px, 1px) rotate(.5deg)}42%{transform:translate(1px, 1px) rotate(.5deg)}44%{transform:translate(0px, 0px) rotate(.5deg)}46%{transform:translate(1px, 1px) rotate(.5deg)}48%{transform:translate(1px, 0px) rotate(.5deg)}50%{transform:translate(1px, 0px) rotate(.5deg)}52%{transform:translate(0px, 0px) rotate(.5deg)}54%{transform:translate(0px, 0px) rotate(.5deg)}56%{transform:translate(1px, 1px) rotate(.5deg)}58%{transform:translate(1px, 0px) rotate(.5deg)}60%{transform:translate(0px, 1px) rotate(.5deg)}62%{transform:translate(0px, 0px) rotate(.5deg)}64%{transform:translate(0px, 0px) rotate(.5deg)}66%{transform:translate(0px, 1px) rotate(.5deg)}68%{transform:translate(1px, 0px) rotate(.5deg)}70%{transform:translate(1px, 0px) rotate(.5deg)}72%{transform:translate(1px, 0px) rotate(.5deg)}74%{transform:translate(1px, 0px) rotate(.5deg)}76%{transform:translate(0px, 1px) rotate(.5deg)}78%{transform:translate(0px, 0px) rotate(.5deg)}80%{transform:translate(0px, 0px) rotate(.5deg)}82%{transform:translate(0px, 0px) rotate(.5deg)}84%{transform:translate(1px, 0px) rotate(.5deg)}86%{transform:translate(1px, 0px) rotate(.5deg)}88%{transform:translate(0px, 0px) rotate(.5deg)}90%{transform:translate(0px, 1px) rotate(.5deg)}92%{transform:translate(0px, 0px) rotate(.5deg)}94%{transform:translate(1px, 0px) rotate(.5deg)}96%{transform:translate(1px, 1px) rotate(.5deg)}98%{transform:translate(0px, 1px) rotate(.5deg)}0%,100%{transform:translate(0, 0) rotate(0)}}
    animation: shake-little 2s infinite; 
  }
  .scratch:before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    background: url(/imgs/strokes/stroke1.svg);
    background-position: center;
    opacity: 0;
    bottom: -.2rem;
    height: 5px;
  }
  /* nuevo estilo */
  .strong {
    font-size: 3.2rem;
    font-family: 'AvenirEB';
    line-height: 4rem;
  }
  .orange {
    letter-spacing: 2px;
    font-family: 'AvenirBI';
    color: ${props => props.theme.orange};
  }
  .circle:before {
    content: '';
    position: absolute;
    inset: -.8rem -1rem -.4rem;
    height: auto;
    border: 3px solid ${props => props.theme.orange};
    background: none;
    opacity: 0;
    @keyframes shake-little{2%{transform:translate(1px, 0px) rotate(.5deg)}4%{transform:translate(0px, 1px) rotate(.5deg)}6%{transform:translate(1px, 0px) rotate(.5deg)}8%{transform:translate(0px, 0px) rotate(.5deg)}10%{transform:translate(1px, 1px) rotate(.5deg)}12%{transform:translate(0px, 0px) rotate(.5deg)}14%{transform:translate(0px, 0px) rotate(.5deg)}16%{transform:translate(0px, 0px) rotate(.5deg)}18%{transform:translate(0px, 1px) rotate(.5deg)}20%{transform:translate(0px, 0px) rotate(.5deg)}22%{transform:translate(0px, 0px) rotate(.5deg)}24%{transform:translate(1px, 0px) rotate(.5deg)}26%{transform:translate(1px, 1px) rotate(.5deg)}28%{transform:translate(0px, 1px) rotate(.5deg)}30%{transform:translate(1px, 1px) rotate(.5deg)}32%{transform:translate(1px, 1px) rotate(.5deg)}34%{transform:translate(1px, 1px) rotate(.5deg)}36%{transform:translate(1px, 1px) rotate(.5deg)}38%{transform:translate(0px, 0px) rotate(.5deg)}40%{transform:translate(0px, 1px) rotate(.5deg)}42%{transform:translate(1px, 1px) rotate(.5deg)}44%{transform:translate(0px, 0px) rotate(.5deg)}46%{transform:translate(1px, 1px) rotate(.5deg)}48%{transform:translate(1px, 0px) rotate(.5deg)}50%{transform:translate(1px, 0px) rotate(.5deg)}52%{transform:translate(0px, 0px) rotate(.5deg)}54%{transform:translate(0px, 0px) rotate(.5deg)}56%{transform:translate(1px, 1px) rotate(.5deg)}58%{transform:translate(1px, 0px) rotate(.5deg)}60%{transform:translate(0px, 1px) rotate(.5deg)}62%{transform:translate(0px, 0px) rotate(.5deg)}64%{transform:translate(0px, 0px) rotate(.5deg)}66%{transform:translate(0px, 1px) rotate(.5deg)}68%{transform:translate(1px, 0px) rotate(.5deg)}70%{transform:translate(1px, 0px) rotate(.5deg)}72%{transform:translate(1px, 0px) rotate(.5deg)}74%{transform:translate(1px, 0px) rotate(.5deg)}76%{transform:translate(0px, 1px) rotate(.5deg)}78%{transform:translate(0px, 0px) rotate(.5deg)}80%{transform:translate(0px, 0px) rotate(.5deg)}82%{transform:translate(0px, 0px) rotate(.5deg)}84%{transform:translate(1px, 0px) rotate(.5deg)}86%{transform:translate(1px, 0px) rotate(.5deg)}88%{transform:translate(0px, 0px) rotate(.5deg)}90%{transform:translate(0px, 1px) rotate(.5deg)}92%{transform:translate(0px, 0px) rotate(.5deg)}94%{transform:translate(1px, 0px) rotate(.5deg)}96%{transform:translate(1px, 1px) rotate(.5deg)}98%{transform:translate(0px, 1px) rotate(.5deg)}0%,100%{transform:translate(0, 0) rotate(0)}}
    animation: shake-little 2s infinite; 
  }
  .circle:nth-child(odd):before {
    border-radius: 50% 25% 70%;
  }
  .circle:nth-child(even):before {
    border-radius: 75% 5% 25%;
  }
`;

function Quote({children, circle, strong, orange}) {
  const { ref, inView, entry } = useInView({
    threshold: 1
  });
  const [show, setShow] = useState(false);
  const [text, setText] = useState(false);
  const [topOfScreen, setTopOfScreen] = useState(false);
  useEffect(()=> {
    function splitQuote() {
      if (entry) {
        let paragraph = entry.target;
        if (paragraph) {
          let words = children.split(" ");
          for (let w = 0; w < words.length; w++) {
            const element = words[w];
            let span = document.createElement('span');
            span.innerHTML= `${element} `;
            if (circle || strong || orange) {
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
              // Check for strong words
              if (strong) {
                for (let s = 0; s < strong.length; s++) {
                  const strongWord = strong[s];
                  if (element.includes(strongWord)) {
                    span.classList.add('strong');
                    span.classList.add('scratch');
                  } else {
                    span.classList.add('scratch');
                  }
                }
              }
              if (orange) {
                for (let b = 0; b < orange.length; b++) {
                  const orangeWord = orange[b];
                  if (element.includes(orangeWord)) {
                    span.classList.add('orange');
                    span.classList.add('scratch');
                  } else {
                    span.classList.add('scratch');
                  }
                }
              }
            } else {
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
        let bottom = entry.target.getBoundingClientRect().bottom;
        let windowHeight = window.innerHeight / 4;
        setTopOfScreen(bottom <= windowHeight);
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
  }, [inView, entry, children, circle, text, strong, orange]);

  return (
    <QuoteContainer ref={ref} className={`${show ? 'showText' : null} ${topOfScreen ? 'textOnTop' : null}`} />
  );
}

export default Quote;