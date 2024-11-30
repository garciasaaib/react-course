import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { CSSProperties, ReactElement } from "react";
import { Product } from "../data/products";
import { onChangeArgs } from "../hooks/useShoppingCart";
import { Provider } from "../context/ProductContext";

// componente ProductCard
export interface ProductCardProps {
	product: Product;
	children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}
export const ProductCard = ({ product, children, className, style, onChange, value }: ProductCardProps) => {
	const { increaseBy, counter } = useProduct({onChange, product, value});
	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>{children}</div>
		</Provider>
	);
};
