import styled from 'styled-components';

const CircleContainer = styled.div`
  margin-bottom: 2.4rem;
  margin-top: 2.4rem;
  p {
    border: 2px solid ${props => props.theme.orange};
    border-radius: 50% 25% 70%;
    font-family: 'AvenirMI';
  }
  @media (min-width: 920px) {
    p {
      width: 50%;
      margin: 0 auto;
    }
  }
`;

export default function CircleText({children}) {
  return (
    <CircleContainer>
      <p>{children}</p>
    </CircleContainer>
  );
}