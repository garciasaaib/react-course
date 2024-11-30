import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';
import ProductCard from '../../src/components/index';
import { product1 } from '../../src/data/products';

describe('<ProductTitle />', () => {
  it('renders without crashing', () => {
    const wrapper = renderer.create(
    <ProductTitle title='Custom Title' className='custom-class' />
  );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should show the component with the product name', () => {
    const wrapper = renderer.create(
    <ProductCard product={product1}>
      {() => (
        <ProductTitle />)
      }

    </ProductCard>
  );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
