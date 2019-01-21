import React, { Component } from "react";
import get from "lodash/get";
import axios from "axios";
import { TrackCard } from "../../components/TrackCard";
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
    width: 100%;
  }
`;

class Tracks extends Component {
  state = {
    tracks: [],
    favoriteTracks: new Set()
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

  saveFavoriteTrack = trackId => {
    const { favoriteTracks } = this.state;
    favoriteTracks.add(trackId);
    this.setState({
      favoriteTracks
    });
  };

  deleteFavoriteTrack = trackId => {
    const { favoriteTracks } = this.state;
    favoriteTracks.delete(trackId);
    this.setState({
      favoriteTracks
    });
  };

  render() {
    const { tracks, favoriteTracks } = this.state;

    return (
      <div>
        <div>tracks</div>
        <Wrapper>
          {tracks.map(track => {
            const { id, name } = track;
            return (
              <TrackCard
                key={id}
                image={get(track, "album.images[2].url")}
                artistName={get(track, "artists[0].name", "")}
                trackName={name}
                saveFavoriteTrack={() => this.saveFavoriteTrack(id)}
                deleteFavoriteTrack={() => this.deleteFavoriteTrack(id)}
                isSelected={favoriteTracks.has(id)}
              />
            );
          })}
        </Wrapper>
      </div>
    );
  }
}

export default Tracks;
