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
      img {
        width: calc(100% / 10);
        max-width: 25px;
      }
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    opacity: .8;
    span, a {
      text-decoration: none;
      font-size: 1.4rem;
    }
    a {
      color: ${props => props.theme.orange};
    }
  }
`;

function Footer() {
  return(
    <FooterContainer>
      <div className='instagram'>
        <a href='/'><img src='/imgs/letters/i.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/n1.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/s.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/t.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/a1.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/a1.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/r.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/a.svg' alt='' /></a>
        <a href='/'><img src='/imgs/letters/m.svg' alt='' /></a>
      </div>
      <div className='info'>
        <span>&copy; Bajo Naranja {new Date().getFullYear()}</span>
        <span><span>Made by: </span><a href='http://jstromanilz.vercel.app/'>jstromanilz</a></span>
      </div>
    </FooterContainer>
  );
}

export default Footer;