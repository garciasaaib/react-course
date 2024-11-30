import React, { CSSProperties, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import { Product } from "../data/products";
import { onChangeArgs } from "../hooks/useShoppingCart";
import { Provider } from "../context/ProductContext";
import { ProductCardHandlers } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

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
