import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { CSSProperties, ReactElement } from "react";
import { Product } from "../data/products";
import { onChangeArgs } from "../hooks/useShoppingCart";
import { Provider } from "../context/ProductContext";
import { ProductCardHandlers } from "../interfaces/interfaces";

// componente ProductCard
export interface InitialValues {
	count: number;
	maxCount: number;
}

export interface ProductCardProps {
	product: Product;
	children: (args: ProductCardHandlers) => ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductCard = ({
	product,
	children,
	className,
	style,
	onChange,
	value,
	initialValues,
}: ProductCardProps) => {
	const { increaseBy, counter, maxCount, isMaxCountReached, reset } =
		useProduct({
			onChange,
			product,
			value,
			initialValues,
		});
	return (
		<Provider value={{ counter, increaseBy, product, maxCount }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					product,
					maxCount,
					count: counter,
					isMaxCountReached,
					reset,
					increaseBy,
				})}
			</div>
		</Provider>
	);
};
