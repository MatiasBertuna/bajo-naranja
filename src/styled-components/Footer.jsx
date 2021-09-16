import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.4rem;
  .instagram {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 3.2rem;
    a {
      display: contents;
      ${'' /* img {
        width: calc(100% / 10);
        max-width: 25px;
      } */}
      img {
        width: 55px;
      }
    }
  }
`;

function Footer() {

  return(
    <FooterContainer>
      <div className='instagram'>
        <a href='/'><img src='/imgs/instagram.svg' alt='' /></a>
        {/* <a href='/'><img src='/imgs/letters/n1.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/s.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/t.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/a1.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/g.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/r.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/a.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/m.svg' alt='' /></a> */}
      </div>
    </FooterContainer>
  );
}

export default Footer;