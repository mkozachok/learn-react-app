import React from "react";
import { shallow, render } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginForm } from "../../components/forms/LoginForm/LoginForm";
import { Link } from "react-router-dom";

jest.mock("react-dom", () => ({
  render: jest.fn()
}));

describe("<Root />", () => {
  // it("should match a snapshot", () => {
  //   const wrapper = shallow(<Router><LoginForm /></Router>);
  //   expect(wrapper).toMatchSnapshot();
  // });
  it("should not crash when rendering", () => {
    const wrapper = render(<Router><LoginForm /></Router>);
    expect(wrapper).toMatchSnapshot();
  });
});
