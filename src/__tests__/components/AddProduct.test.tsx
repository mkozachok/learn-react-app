import React from "react";
import { shallow, render } from "enzyme";
import { AddProduct, IAddProduct } from "../../components/OrderForm/AddProduct/AddProduct";

jest.mock("react-dom", () => ({
  render: jest.fn()
}));

describe("<Root />", () => {
  let props: any;
  beforeEach(() => {
    props = {
      order: {
        orderItems: [
          {
              _id: '2647845M',
              title: "Jacket",
              price: 210,
              quantity: 2,
          },
          {
              _id: '7378956M',
              title: "Shirt",
              price: 120,
              quantity: 1,
          },
          {
              _id: '9367045M',
              title: "Pants",
              price: 215,
              quantity: 3,
          },
      ],
        totalPrice: 200,
      },
      setOrder: jest.fn(),
    }
  })

  // it("should match a snapshot", () => {
  //   const wrapper = shallow(<AddProduct {...props} />);
  //   expect(wrapper).toMatchSnapshot();
  // });
  it("should not crash when rendering", () => {
    const wrapper = render(<AddProduct {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
