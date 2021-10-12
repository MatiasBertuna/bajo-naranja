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
  .bgOrange {
    background: ${props => props.theme.orange};
    color: ${props => props.theme.black};
  }
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
  }
  .circle:nth-child(odd):before {
    border-radius: 50% 25% 70%;
  }
  .circle:nth-child(even):before {
    border-radius: 75% 5% 25%;
  }
`;

function Quote({children, circle, strong, orange, bgOrange}) {
  
  const { ref, inView, entry } = useInView({
    threshold: 1
  });
  const [show, setShow] = useState(false);
  const [text, setText] = useState(false);
  const [topOfScreen, setTopOfScreen] = useState(false);

  useEffect(()=> {
    function splitQuote() {

      function searchInStyles(word, list, name) {
        if (!list) {
          return;
        }
        for (let i = 0; i < list.length; i++) {
          const specialWord = list[i];
          if (word.innerHTML.includes(specialWord)) {
            word.classList.add(name);
          }
        }
      }

      if (!entry) {
        return;
      }

      let paragraph = entry.target;
      let words = children.split(" ");
      for (let w = 0; w < words.length; w++) {
        let span = document.createElement('span');
        span.innerHTML= `${words[w]} `;
        span.classList.add('scratch');
        searchInStyles(span, circle, 'circle');
        searchInStyles(span, strong, 'strong');
        searchInStyles(span, orange, 'orange');
        searchInStyles(span, bgOrange, 'bgOrange');
        paragraph.appendChild(span);
      }
      setText(true);
    }

    function showQuote() {

      function isOnTopOfScreen(entry) {
        let bottom = entry.target.getBoundingClientRect().bottom;
        let windowHeight = window.innerHeight / 4;
        return bottom <= windowHeight;
      }

      if (!entry) {
        return;
      }
      if (!inView) {
        setShow(false);
      }
      if (inView) {
        setShow(true);
      }
      if (isOnTopOfScreen(entry)) {
        setTopOfScreen(true);
      }
      if (!isOnTopOfScreen(entry)) {
        setTopOfScreen(false);
      }
    }

    document.addEventListener('scroll', showQuote);
    if (!text) {
      splitQuote();
    }

    return ()=>{
      document.removeEventListener('scroll', showQuote);
    }
  }, [inView, entry, children, circle, text, strong, orange, bgOrange]);

  return (
    <QuoteContainer ref={ref} className={`${show ? 'showText' : ''} ${topOfScreen ? 'textOnTop' : ''}`} />
  );
}

export default Quote;