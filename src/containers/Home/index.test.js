import React from "react";
import { shallow } from "enzyme";
import { Home } from ".";

describe("Home", () => {
  it("renders correctly", () => {
    shallow(<Home />);
  });

  it("Should get hash param from url", () => {
    const wrapper = shallow(<Home />);
    window.history.pushState({}, "Test Title", "/test.html#test=test");
    const hashParam = wrapper.instance().getHashValue("test");
    expect(hashParam).toBe("test");
  });
});
