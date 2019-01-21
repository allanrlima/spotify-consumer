import React, { Component } from "react";
import get from "lodash/get";
import axios from "axios";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import { TrackCard } from "../../components/TrackCard";
import { Typography, Button } from "@smooth-ui/core-sc";
import { TracksWrapper } from "../../components/TracksWrapper/index";
import { Header } from "../../components/Header";

class Tracks extends Component {
  state = {
    tracks: []
  };

  componentWillMount = async () => {
    const token = localStorage.getItem("token");

    const instance = axios.create({
      baseURL: "https://api.spotify.com",
      timeout: 10000,
      headers: { Authorization: "Bearer " + token }
    });

    try {
      const response = await instance.get("v1/me/top/tracks");
      const { items: tracks } = response.data;
      this.setState({
        tracks
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { tracks } = this.state;

    const { favoriteTracksStore, history } = this.props;

    const {
      favoriteTracks,
      saveFavoriteTrack,
      deleteFavoriteTrack
    } = favoriteTracksStore;

    return (
      <div>
        <Header>
          <Typography color={"#fff"} variant="h6">
            Select your favorite tracks, to generate good recommendations
          </Typography>
          <Button
            variant="success"
            onClick={() => history.push("recomendations")}
          >
            Click here to see recommendations
          </Button>
        </Header>
        <TracksWrapper>
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
                hasSelectButton
              />
            );
          })}
        </TracksWrapper>
      </div>
    );
  }
}

export default compose(
  inject("favoriteTracksStore"),
  observer
)(Tracks);
