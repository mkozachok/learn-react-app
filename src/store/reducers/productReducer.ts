import { productActionTypes } from '../actionTypes/productActionTypes';
import { IProductAction, IProductReducer } from '../../types/product';

const initState: IProductReducer = {
  currentProduct: null ,
  isLoading: false,
}

const productReducer = (state = initState, action: IProductAction) => {
  switch(action.type) {
    case productActionTypes.GET_PRODUCT_BY_ID__START:
      return {
        ...state,
        isLoading: true,
      }
    case productActionTypes.GET_PRODUCT_BY_ID__SUCCESS:
      return {
        currentProduct: action.currentProduct,
        isLoading: false,
      }
    case productActionTypes.GET_PRODUCT_BY_ID__FAILURE:
      return {
        currentProduct: null,
        isLoading: false,
      }
    case productActionTypes.REMOVE_PRODUCT_BY_ID__START:
      return {
        ...state,
        isLoading: true,
      }
    case productActionTypes.REMOVE_PRODUCT_BY_ID__SUCCESS:
      return {
        currentProduct: null,
        isLoading: false,
      }
    case productActionTypes.REMOVE_PRODUCT_BY_ID__FAILURE:
      return {
        ...state,
        isLoading: false,
      }
      case productActionTypes.ADD_PRODUCT__START:
        return {
          ...state,
          isLoading: true,
        }
      case productActionTypes.ADD_PRODUCT__SUCCESS:
        return {
          ...state,
          isLoading: false,
        }
      case productActionTypes.ADD_PRODUCT__FAILURE:
        return {
          ...state,
          isLoading: false,
        }
        case productActionTypes.UPDATE_PRODUCT__START:
        return {
          ...state,
          isLoading: true,
        }
      case productActionTypes.UPDATE_PRODUCT__SUCCESS: 
      return {
        ...state,
        isLoading: false,
      }
      case productActionTypes.UPDATE_PRODUCT__FAILURE:
        return {
          ...state,
          isLoading: false,
        }
    default:
      return state;
  }
}

export default productReducer;
