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
  state = {
    acessToken: null
  };

  componentWillMount() {
    if (window.location.hash) {
      const accessToken = this.getHashValue("access_token");
      console.log(accessToken);
      if (accessToken) {
        this.props.history.push("tracks");
      }
    }
  }

  getHashValue = key => {
    var matches = window.location.hash.match(new RegExp(key + "=([^&]*)"));
    return matches ? matches[1] : null;
  };

  login = () => {
    const clientId = "f3e5c5b3e44643ad9a67d45be2a42477";
    const redirectUri = "http://localhost:3000/";

    const scopes = ["user-read-email"];

    const url =
      `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}` +
      `&scope=${scopes.join(" ")}&response_type=token`;

    window.location = url;
  };

  render() {
    return (
      <Wrapper>
        <Card>
          <Typography variant="h3">Login in your Spotify</Typography>
          <Input placeholder="Email or Username" />
          <Input placeholder="Password" type="password" />
          <Button onClick={this.login} variant="success">
            Login
          </Button>
        </Card>
      </Wrapper>
    );
  }
}

export default Home;
