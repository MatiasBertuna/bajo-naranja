import styled from 'styled-components';

const FooterContainer = styled.footer`
  ${'' /* border-top: 1px solid ${props => props.theme.orange}; */}
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .instagram {
    display: flex;
    flex-direction: row;
    a {
      display: contents;
      img {
        width: calc(100% / 9);
        max-width: 25px;
      }
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
    </FooterContainer>
  );
}

export default Footer;