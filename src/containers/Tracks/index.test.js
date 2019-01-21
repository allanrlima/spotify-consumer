import React from "react";
import { shallow } from "enzyme";
import { Tracks } from ".";

const props = {
  favoriteTracksStore: {
    favoriteTracks: []
  }
};

describe("Game", () => {
  it("renders correctly", () => {
    shallow(<Tracks {...props} />);
  });
});
