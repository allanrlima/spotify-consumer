import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 64px;
  display: grid;
  background-color: #121212;
  justify-content: space-around;
  grid-template-columns: auto auto;
  align-items: center;
  grid-row-gap: 16px;
  margin-bottom: 32px;
  @media (max-width: 700px) {
    grid-template-columns: auto;
    width: 100%;
    padding: 16px;
    margin-bottom: 16px;
  }
`;

export const Header = ({ children }) => <Wrapper>{children}</Wrapper>;
