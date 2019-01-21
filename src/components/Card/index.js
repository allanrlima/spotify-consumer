import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
  padding: 16px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: grid;
  grid-row-gap: 16px;
`;

export const Card = ({ children }) => <Wrapper>{children}</Wrapper>;
