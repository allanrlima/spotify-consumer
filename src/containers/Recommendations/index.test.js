import React from "react";
import { shallow } from "enzyme";
import { Recommendations } from ".";

const props = {
  favoriteTracksStore: {
    favoriteTracks: []
  }
};

describe("Recommendations", () => {
  it("renders correctly", () => {
    shallow(<Recommendations {...props} />);
  });
});
