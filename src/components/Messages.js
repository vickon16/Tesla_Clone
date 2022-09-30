/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Flex } from "../variables";

const Messages = () => {
  return (
    <Msg>
      <a href="#">Read Tesla's 2021 Impact Report</a>
    </Msg>
  );
};

export default Messages;

const Msg = styled.div`
  background-color: #fff;
  height: 5vh;
  ${Flex()};

  a {
    text-decoration: underline;
  }
`;
