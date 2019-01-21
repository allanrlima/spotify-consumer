import React from "react";
import styled from "styled-components";
import { Card } from "../Card/index";
import { Button } from "@smooth-ui/core-sc";

const Image = styled.img`
  height: 60px;
  justify-self: center;
`;

const ArtistName = styled.div`
  font-weight: 600;
`;

export const TrackCard = ({
  image,
  artistName,
  trackName,
  saveFavoriteTrack,
  deleteFavoriteTrack,
  isSelected
}) => (
  <Card>
    <Image src={image} />
    <ArtistName>{artistName}</ArtistName>
    <div>{trackName}</div>
    {isSelected ? (
      <Button variant="green" onClick={deleteFavoriteTrack}>
        SELECTED
      </Button>
    ) : (
      <Button variant="light" onClick={saveFavoriteTrack}>
        Select as favorite
      </Button>
    )}
  </Card>
);
