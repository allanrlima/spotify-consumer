import React from "react";
import { Button } from "@smooth-ui/core-sc";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const onLogout = () => {
  localStorage.clear();
  window.location = "/";
};

export const Logout = () => (
  <Wrapper>
    <Button onClick={onLogout}>Logout</Button>
  </Wrapper>
);
