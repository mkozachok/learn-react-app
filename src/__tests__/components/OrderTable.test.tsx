import React from "react";
import { render, mount } from "enzyme";
import {
  IOrderItemsTable,
  OrderTable
} from "../../components/tables/OrderTable/OrderTable";

const mockOrderItem = {
  _id: "shirt",
  title: "Shirt",
  price: 10,
  quantity: 1
};
const mockOrderItemUpdated = { ...mockOrderItem, quantity: 2 };

describe("<OrderTable>", () => {
  let props: IOrderItemsTable;
  beforeEach(() => {
    props = {
      order: {
        totalPrice: 10,
        orderItems: [mockOrderItem]
      },
      setOrder: jest.fn()
    };
  });
  it("should match snapshots", () => {
    const wrapper = render(<OrderTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should setOrder on quantity change", () => {
    const wrapper = mount(<OrderTable {...props} />);
    wrapper
      .find(".quantity-input input")
      .at(0)
      .simulate("change", { target: { value: "2" } });
    expect(props.setOrder).toBeCalledWith({
      totalPrice: 10,
      orderItems: [mockOrderItemUpdated]
    });
  });
});
