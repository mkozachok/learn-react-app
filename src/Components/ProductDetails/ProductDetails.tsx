import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductByIdStart, removeProductByIdStart } from '../../store/actions/productActions';
import { IProductState } from '../../types/product';
import { RouteComponentProps } from 'react-router';

type TParams = {
  product_id: string,
}

export const ProductDetails = ({ match }: RouteComponentProps<TParams>) => {
  const dispatch = useDispatch();
  const product = useSelector((state: IProductState) => state.productReducer.currentProduct);
  const isLoading = useSelector((state: IProductState) => state.productReducer.isLoading);
  const product_id = match.params.product_id;

  const removeProduct =  (): void => {
    dispatch(removeProductByIdStart(product_id));
  }

  useEffect(() => {
    dispatch(getProductByIdStart(product_id));
  }, [dispatch, product_id]);

  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }

  return product ?
    (
      <div className="product-details">
          <h1>
            { product.title }
          </h1>
          <p>
            <img src={ product.imageURL } alt={ product.alt_image_text } />
          </p>
          <p>
            { product.description }
          </p>
          <div>
            { product.price }
          </div>
          <button onClick={() => removeProduct()} >Remove</button>
      </div>
    ) :
    (
      <div>
        The product wasn't found
      </div>
    )
};
