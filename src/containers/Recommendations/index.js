import React from "react";
import get from "lodash/get";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import { TrackCard } from "../../components/TrackCard";
import { Typography, Button } from "@smooth-ui/core-sc";
import { TracksWrapper } from "../../components/TracksWrapper";
import { Header } from "../../components/Header";
import { instance } from "../../services/helpers";
import { Logout } from "../../components/Logout/index";
import { Loading } from "../../components/Loading/index";

export class Recommendations extends React.Component {
  state = {
    tracks: [],
    isLoading: true
  };

  componentWillMount = async () => {
    this.setTopRecommendations();
  };

  setTopRecommendations = async () => {
    const { favoriteTracksStore, history } = this.props;
    const { favoriteTracks } = favoriteTracksStore;

    if (favoriteTracks.length === 0) {
      history.push("tracks");
    }

    try {
      const url = `v1/recommendations?seed_tracks=${favoriteTracks}`;
      const response = await instance.get(url);
      const { tracks } = response.data;
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

    const { saveFavoriteTrack, deleteFavoriteTrack } = favoriteTracksStore;

    return (
      <div>
        <Header>
          <Typography color={"#fff"} variant="h6">
            Recommendations to you
          </Typography>
          <Button variant="success" onClick={() => history.push("tracks")}>
            Back to my favorites Tracks
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
)(Recommendations);
