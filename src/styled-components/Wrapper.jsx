import styled from 'styled-components';

const Wrapper = styled.div`
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  max-width: 1000px;
  margin: auto;
  #textContainer {
    opacity: 0;
    transition: cubic-bezier(0.65, 0.05, 0.36, 1) .8s 2.4s;
    p {
      margin-bottom: 3.2rem;
      line-height: 2.4rem;
      text-align: center;
      /* animations for keywords in Quote components */
      .showText {
        span:before {
          opacity: 1 !important;
        }
      }
      .textOnTop {
        .scratch:after {
          opacity: 1 !important;
        }
        .circle:before {
          opacity: 1 !important;
        }
        .circle:after {
          opacity: 0 !important;
        }
      }
    }
  }
`;

export default Wrapper;