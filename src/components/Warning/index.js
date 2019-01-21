import React from "react";
import { Alert } from "@smooth-ui/core-sc";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 700px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Warning = ({ text }) => (
  <Wrapper>
    <Alert variant="warning" maxWidth={900}>
      {text}
    </Alert>
  </Wrapper>
);
