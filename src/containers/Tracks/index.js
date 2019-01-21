import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import get from "lodash/get";
import axios from "axios";
import { compose } from "recompose";
import { TrackCard } from "../../components/TrackCard";
import styled from "styled-components";
import { Button } from "@smooth-ui/core-sc";
import Recomendations from "../Recomendations/index";

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
    width: 100%;
  }
`;

class Tracks extends Component {
  state = {
    tracks: []
  };

  componentWillMount = async () => {
    const token = localStorage.getItem("token");

    const instance = axios.create({
      baseURL: "https://api.spotify.com",
      timeout: 1000,
      headers: { Authorization: "Bearer " + token }
    });

    try {
      const response = await instance.get("v1/me/top/tracks");
      const { items: tracks } = response.data;
      console.log(tracks);
      this.setState({
        tracks
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { tracks } = this.state;
    console.log(this.props);

    const { favoriteTracksStore } = this.props;

    const {
      favoriteTracks,
      saveFavoriteTrack,
      deleteFavoriteTrack
    } = favoriteTracksStore;

    console.log(this.props);
    return (
      <div>
        <div>Tracks {favoriteTracks}</div>
        <Button>Show my Recomendations</Button>
        <Wrapper>
          {tracks.map(track => {
            const { id, name } = track;
            return (
              <TrackCard
                key={id}
                image={get(track, "album.images[2].url")}
                artistName={get(track, "artists[0].name", "")}
                trackName={name}
                saveFavoriteTrack={() => saveFavoriteTrack(id)}
                deleteFavoriteTrack={() => deleteFavoriteTrack(id)}
                isSelected={favoriteTracks.includes(id)}
              />
            );
          })}
        </Wrapper>
      </div>
    );
  }
}

export default compose(
  inject("favoriteTracksStore"),
  observer
)(Tracks);
