import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components/ProductImage';
import ProductCard from '../../src/components/index';
import { product1 } from '../../src/data/products';

describe('<ProductTitle />', () => {
  it('renders without crashing', () => {
    const wrapper = renderer.create(
    <ProductImage img='https://image.com' />
  );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should show the component with the product name', () => {
    const wrapper = renderer.create(
    <ProductCard product={product1}>
      {() => (
        <ProductImage />)
      }

    </ProductCard>
  );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
