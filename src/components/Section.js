import React from "react";
import styled from "styled-components";
import { Flex } from "../variables";
import { motion } from "framer-motion";

const Section = ({ title, description, backgroundImg, leftBtnTxt, rightBtnTxt}) => {
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText
        whileInView={{
          y: [130, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 },
        }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <div>
        <ButtonGroup
          whileInView={{
            y: [130, 0],
            opacity: [0, 1],
            transition: { duration: 0.5 },
          }}>
          <LeftButton>{leftBtnTxt}</LeftButton>
          {rightBtnTxt && <RigthButton>{rightBtnTxt}</RigthButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </div>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  background: url(/images/${props=>props.bgImg}) center / cover no-repeat;
  ${Flex("space-between", "column")};
`;

const ItemText = styled(motion.div)`
  padding-top: 18vh;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.5;
  }
`;

const ButtonGroup = styled(motion.div)`
  ${Flex()};
  margin: auto auto 30px;
  gap: 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.8rem;
  transition: all 0.2s ease-in;

  &:hover {
    opacity: 1;
  }
`;

const RigthButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin: 5px auto 20px;
  width: 40px;
  height: 40px;
  animation: animationDown infinite 1.5s;
`;
