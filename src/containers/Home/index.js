import React, { Component } from "react";
import { Input, Typography, Button } from "@smooth-ui/core-sc";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  max-width: 400px;
  padding: 16px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: grid;
  grid-row-gap: 16px;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <form>
          <Card>
            <Typography variant="h3">Login in your Spotify</Typography>
            <Input placeholder="Email or Username" />
            <Input placeholder="Password" type="password" />
            <Button variant="success">Login</Button>
          </Card>
        </form>
      </Wrapper>
    );
  }
}

export default Home;
