import productReducer from "../../store/reducers/productReducer";
import { IProductAction } from "../../types/product";
import { tempProduct } from '../../__mocks__/productMock';

const initState = {
  currentProduct: null,
  isLoading: false
};

describe("REDUCER", () => {
  it("Reducer should return the initial state", () => {
    const emptyAction = { type: "", currentProduct: null };
    expect(productReducer(initState, emptyAction)).toEqual(initState);
  });

  it("Reducer should handle GET_PRODUCT_BY_ID__START action", () => {
    const expectedState = {
      ...initState,
      isLoading: true
    };
    const action = { type: "GET_PRODUCT_BY_ID__START", currentProduct: null };
    expect(productReducer(initState, action)).toEqual(expectedState);
  });

  it("Reducer should handle GET_PRODUCT_BY_ID__SUCCESS action", () => {
    const expectedState = {
      currentProduct: tempProduct,
      isLoading: false
    };
    const action: IProductAction  = { type: "GET_PRODUCT_BY_ID__SUCCESS", currentProduct: tempProduct};
    expect(productReducer(initState, action)).toEqual(expectedState);
  });

  it("Reducer should handle GET_PRODUCT_BY_ID__FAILURE action", () => {
    const expectedState = {
      currentProduct: null,
      isLoading: false
    };
    const action: IProductAction  = { type: "GET_PRODUCT_BY_ID__SUCCESS", currentProduct: null};
    expect(productReducer(initState, action)).toEqual(expectedState);
  });

  it("Reducer should handle REMOVE_PRODUCT_BY_ID__START action", () => {
    const expectedState = {
      currentProduct: tempProduct,
      isLoading: true
    };
    const action: IProductAction  = { type: "REMOVE_PRODUCT_BY_ID__START", currentProduct: null};
    expect(productReducer({...initState, currentProduct: tempProduct}, action)).toEqual(expectedState);
  });

  it("Reducer should handle REMOVE_PRODUCT_BY_ID__SUCCESS action", () => {
    const expectedState = {
      currentProduct: null,
      isLoading: false
    };
    const action: IProductAction  = { type: "REMOVE_PRODUCT_BY_ID__SUCCESS", currentProduct: null};
    expect(productReducer({...initState, currentProduct: tempProduct}, action)).toEqual(expectedState);
  });

  it("Reducer should handle REMOVE_PRODUCT_BY_ID__FAILURE action", () => {
    const expectedState = {
      currentProduct: tempProduct,
      isLoading: false
    };
    const action: IProductAction  = { type: "REMOVE_PRODUCT_BY_ID__FAILURE", currentProduct: null};
    expect(productReducer({...initState, currentProduct: tempProduct}, action)).toEqual(expectedState);
  });

  it("Reducer should handle ADD_PRODUCT__START action", () => {
    const expectedState = {
      currentProduct: null,
      isLoading: true
    };
    const action: IProductAction  = { type: "ADD_PRODUCT__START", currentProduct: null};
    expect(productReducer(initState, action)).toEqual(expectedState);
  });

  it("Reducer should handle ADD_PRODUCT__SUCCESS action", () => {
    const expectedState = {
      currentProduct: null,
      isLoading: false
    };
    const action: IProductAction  = { type: "ADD_PRODUCT__SUCCESS", currentProduct: null};
    expect(productReducer(initState, action)).toEqual(expectedState);
  });

  it("Reducer should handle ADD_PRODUCT__FAILURE action", () => {
    const expectedState = {
      currentProduct: null,
      isLoading: false
    };
    const action: IProductAction  = { type: "ADD_PRODUCT__FAILURE", currentProduct: null};
    expect(productReducer(initState, action)).toEqual(expectedState);
  });

  it("Reducer should handle UPDATE_PRODUCT__START action", () => {
    const expectedState = {
      currentProduct: null,
      isLoading: true
    };
    const action: IProductAction  = { type: "UPDATE_PRODUCT__START", currentProduct: null};
    expect(productReducer(initState, action)).toEqual(expectedState);
  });

  it("Reducer should handle UPDATE_PRODUCT__SUCCESS action", () => {
    const expectedState = {
      currentProduct: null,
      isLoading: false
    };
    const action: IProductAction  = { type: "UPDATE_PRODUCT__SUCCESS", currentProduct: null};
    expect(productReducer(initState, action)).toEqual(expectedState);
  });

  it("Reducer should handle UPDATE_PRODUCT__FAILURE action", () => {
    const expectedState = {
      currentProduct: null,
      isLoading: false
    };
    const action: IProductAction  = { type: "UPDATE_PRODUCT__FAILURE", currentProduct: null};
    expect(productReducer(initState, action)).toEqual(expectedState);
  });
});
