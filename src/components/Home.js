import React from "react";
import styled from "styled-components";
import Section from "./Section";
import TeslaInfo from "../teslaInfo.json";

function Home() {
  return (
    <Container>
      {TeslaInfo.map(
        ({ id, title, description, bgImg, leftBtnTxt, rightBtnTxt }) => (
          <Section
            key={id}
            title={title}
            description={description}
            backgroundImg={bgImg}
            leftBtnTxt={leftBtnTxt}
            rightBtnTxt={rightBtnTxt}
          />
        )
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
