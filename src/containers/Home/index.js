import React, { Component } from "react";
import { Typography, Button } from "@smooth-ui/core-sc";
import styled from "styled-components";
import { Card } from "../../components/Card/index";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export class Home extends Component {
  state = {
    acessToken: null
  };

  componentWillMount() {
    if (window.location.hash) {
      const accessToken = this.getHashValue("access_token");
      if (accessToken) {
        localStorage.setItem("spotify-token", accessToken);
        window.location = "/tracks";
      }
    }
  }

  getHashValue = key => {
    var matches = window.location.hash.match(new RegExp(key + "=([^&]*)"));
    return matches ? matches[1] : null;
  };

  login = () => {
    const clientId = "f3e5c5b3e44643ad9a67d45be2a42477";
    const currentUrl = window.location.href;
    const redirectUri = currentUrl;

    const scopes = ["user-read-email", "user-top-read"];

    const url =
      `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}` +
      `&scope=${scopes.join(" ")}&response_type=token`;

    window.location = url;
  };

  render() {
    return (
      <Wrapper>
        <Card>
          <Typography variant="h3">Authentication</Typography>
          <Typography variant="h6">
            Click the button to authorize to get your top tracks on the spotify
          </Typography>
          <Button onClick={this.login} variant="success">
            Login
          </Button>
        </Card>
      </Wrapper>
    );
  }
}

export default Home;
