import { useState } from 'react'
import { Product } from '../data/products';

// interface del prop product
interface ProductInCart extends Product {
	count: number;
}
export interface onChangeArgs {
	product: Product;
	count: number;
}
export const useShoppingCart = () => {
  // variable container del carrito de compras
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	// cada onClick del card ejecuta esta funcion, que actualiza la lista del carrito
	const onProductCountChange = ({ count, product }: onChangeArgs) => {
		setShoppingCart((oldShoppingCart) => {
			const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0}
			if(Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return {
					...oldShoppingCart,
					[product.id]: productInCart,
				}
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const {[product.id]: _, ...rest} = oldShoppingCart;
			return {
				...rest
			}
		});
	};
  return {
    onProductCountChange,
    shoppingCart,
  }
}
