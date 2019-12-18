import React from 'react';
import { shallow } from 'enzyme';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails';

describe('<ProductDetails />', () => {
    it('renders div with the main content', () => {
        const wrapper = shallow(<ProductDetails />);
    })
});
