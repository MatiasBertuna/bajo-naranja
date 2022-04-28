import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .instagram {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 0.8rem;
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
  return (
    <FooterContainer>
      <div className="instagram">
        <a href="https://www.instagram.com/bajonaranja/">
          <img src="/imgs/instagram.svg" alt="" />
        </a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
