import styled from 'styled-components';

const Wrapper = styled.div`
  padding-left: 2.4rem;
  padding-right: 2.4rem;
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
  @media(min-width: 920px) {
    width: 70%;
    margin: auto;
  }
`;

export default Wrapper;