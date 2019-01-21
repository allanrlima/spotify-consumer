import React from "react";
import { shallow } from "enzyme";
import { Tracks } from ".";

describe("Game", () => {
  it("renders correctly", () => {
    shallow(<Tracks />);
  });
});
