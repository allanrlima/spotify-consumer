import React from "react";
import { shallow } from "enzyme";
import Tracks from ".";

describe("Game", () => {
  it("renders correctly", () => {
    shallow(<Tracks />);
  });
  it("should save favorite tracks", () => {
    const wrapper = shallow(<Tracks />);
    const trackId = 27272;
    wrapper.instance().saveFavoriteTrack(trackId);
    expect(wrapper.state().favoriteTracks.has(trackId)).toBeTruthy();
  });
});
