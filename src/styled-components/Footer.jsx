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
        width: 55px;
      }
    }
  }
`;

function Footer() {

  return(
    <FooterContainer>
      <div className='instagram'>
        <a href='https://www.instagram.com/Bajo_Naranja/'><img src='/imgs/instagram.svg' alt='' /></a>
      </div>
    </FooterContainer>
  );
}

export default Footer;