import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductByIdStart } from '../store/actions';

import { RouteComponentProps } from 'react-router';

type TParams = {
  product_id: string,
}

const ProductDetails = function({ match }: RouteComponentProps<TParams>) {
  const dispatch = useDispatch();
  const product = useSelector((state: any) => state.productReducer.currentProduct);
  
  useEffect(() => {
    dispatch(getProductByIdStart(match.params.product_id));
  }, [dispatch, match.params.product_id]);

  return product ?
    (
      <div className="product-details">
          <h1>
            { product.title }
          </h1>
          <p>
            <img src={ product.image } alt={ product.alt_image_text } />
          </p>
          <p>
            { product.description }
          </p>
          <div>
            { product.price }
          </div>
      </div>
    ) :
    (
      <div>
        The product wasn't found
      </div>
    )
};

export default ProductDetails;
