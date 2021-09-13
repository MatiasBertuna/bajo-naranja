import styled from 'styled-components';

const FooterContainer = styled.footer`
  border-top: 1px solid ${props => props.theme.orange};
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: ${props => props.theme.orange};
    font-size: 2rem;
  }
`;

function Footer() {
  return(
    <FooterContainer>
      <a href='/'>instagram</a>
    </FooterContainer>
  );
}

export default Footer;