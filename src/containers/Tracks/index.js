import React, { Component } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import { TrackCard } from "../../components/TrackCard";
import { Typography, Button, Alert } from "@smooth-ui/core-sc";
import { TracksWrapper } from "../../components/TracksWrapper/index";
import { Header } from "../../components/Header";
import { instance } from "../../services/helpers";
import { Logout } from "../../components/Logout";
import { Warning } from "../../components/Warning";
import { Loading } from "../../components/Loading";

export class Tracks extends Component {
  static propTypes = {
    favoriteTracksStore: PropTypes.objectOf(PropTypes.shape).isRequired
  };

  static defaultProps = {
    favoriteTracksStore: {}
  };

  state = {
    tracks: [],
    isLoading: true
  };

  componentWillMount = () => {
    this.setTopTracks();
  };

  setTopTracks = async () => {
    try {
      const response = await instance.get("v1/me/top/tracks");
      const { items: tracks } = response.data;
      this.setState({
        tracks
      });
    } catch (error) {
      const { history } = this.props;
      history.push("/");
    } finally {
      this.setState({
        isLoading: false
      });
    }
  };

  render() {
    const { tracks, isLoading } = this.state;

    const { favoriteTracksStore, history } = this.props;

    const {
      favoriteTracks,
      saveFavoriteTrack,
      deleteFavoriteTrack
    } = favoriteTracksStore;

    const favoriteTracksLength = favoriteTracks.length;
    return (
      <div>
        <Header>
          <Typography color={"#fff"} variant="h6">
            Select your 5 favorite tracks, to generate good recommendations
          </Typography>
          <Button
            variant="success"
            onClick={() => history.push("recommendations")}
            disabled={favoriteTracksLength === 0}
          >
            {favoriteTracksLength
              ? "Click here to see recommendations"
              : "Select one track at least, to see recommendations"}
          </Button>
        </Header>
        {favoriteTracksLength === 5 && (
          <Warning text="You already selected 5 tracks!" />
        )}
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
        <Logout />
        {isLoading && <Loading />}
      </div>
    );
  }
}

export default compose(
  inject("favoriteTracksStore"),
  observer
)(Tracks);
