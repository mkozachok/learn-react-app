import * as actions from '../../store/actions/productActions';
import { IProduct } from '../../types/product';
import { productActionTypes } from '../../store/actionTypes/productActionTypes';

const tempProduct: IProduct = {
  _id: 'product_id',
  title: 'product',
  description: 'description',
  previewImage: 'img',
  price: 22,
}

describe('ACTIONS', () => {
  // GET PRODUCT ACTIONS
  it('getProductByIdStart should create an action with correct type', () => {
    const expectedAction = { 
      type: productActionTypes.GET_PRODUCT_BY_ID__START,
      product_id: 'product_id'
    }
    expect(actions.getProductByIdStart('product_id')).toEqual(expectedAction)
  })

    it('getProductByIdSuccess should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.GET_PRODUCT_BY_ID__SUCCESS,
        product: tempProduct
      }
      expect(actions.getProductByIdSuccess(tempProduct)).toEqual(expectedAction)
    })

    it('getProductByIdFailure should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.GET_PRODUCT_BY_ID__FAILURE,
      }
      expect(actions.getProductByIdFailure()).toEqual(expectedAction)
    })

// ADD PRODUCT ACTIONS
    it('addProductStart should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.ADD_PRODUCT__START,
        product: tempProduct
      }
      expect(actions.addProductStart(tempProduct)).toEqual(expectedAction)
    })

    it('addProductSuccess should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.ADD_PRODUCT__SUCCESS,
      }
      expect(actions.addProductSuccess()).toEqual(expectedAction)
    })

    it('addProductFailure should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.ADD_PRODUCT__FAILURE,
      }
      expect(actions.addProductFailure()).toEqual(expectedAction)
    })

// UPDATE PRODUCT ACTIONS
    it('updateProductStart should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.UPDATE_PRODUCT__START,
        product: tempProduct
      }
      expect(actions.updateProductStart(tempProduct)).toEqual(expectedAction)
    })

    it('updateProductSuccess should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.UPDATE_PRODUCT__SUCCESS,
      }
      expect(actions.updateProductSuccess()).toEqual(expectedAction)
    })

    it('updateProductFailure should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.UPDATE_PRODUCT__FAILURE,
      }
      expect(actions.updateProductFailure()).toEqual(expectedAction)
    })

// REMOVE PRODUCT ACTIONS
    it('removeProductByIdStart should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.REMOVE_PRODUCT_BY_ID__START,
        product_id: 'product_id'
      }
      expect(actions.removeProductByIdStart('product_id')).toEqual(expectedAction)
    })

    it('removeProductByIdSuccess should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.REMOVE_PRODUCT_BY_ID__SUCCESS,
      }
      expect(actions.removeProductByIdSuccess()).toEqual(expectedAction)
    })

    it('removeProductByIdFailure should create an action with correct type', () => {
      const expectedAction = { 
        type: productActionTypes.REMOVE_PRODUCT_BY_ID__FAILURE,
      }
      expect(actions.removeProductByIdFailure()).toEqual(expectedAction)
    })
})