import * as React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../../src/components/index';
import { product1 } from '../../src/data/products';

describe('<ProductCard />', () => {
  it('should show the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <h1>ProductCard</h1>}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should show the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>ProductCard</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>Increase</button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    // tomamos el boton y simulamos un click
    (tree as any).children[2].props.onClick();

    tree = wrapper.toJSON();

    // probar que el span sea 1
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
