import React from "react";
import { shallow, render } from "enzyme";
import { App } from "./App";

jest.mock("react-dom", () => ({
  render: jest.fn()
}));

describe("<Root />", () => {
  it("should match a snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should not crash when rendering", () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
