import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(4, 200px [col-start]);
  justify-content: space-between;
  grid-row-gap: 16px;
  @media (max-width: 700px) {
    grid-template-columns: auto;
    justify-content: center;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const TracksWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;
