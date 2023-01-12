import { Button } from "../button/button2";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 80%;
  padding: 4rem 0rem;
  @media screen and (max-width: 768px) {
    
  }
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 500px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0rem 0rem;
    display: block;
  }
`;

const ColumnLeft = styled.div`
  padding: 1 rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 80%;
      height: 80%;
      object-fit: cover;
    }
  }
`;
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  //width: 90%;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    padding: 2rem 2rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <div>
      <Section>
        <Container>
          <ColumnLeft reverse={reverse}>
            <img src={image} alt="home" />
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            <Button to="/">{buttonLabel}</Button>
          </ColumnRight>
        </Container>
      </Section>
    </div>
  );
};

export default InfoSection;
