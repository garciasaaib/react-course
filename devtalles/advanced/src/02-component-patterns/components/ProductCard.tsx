import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";

// interface del prop product
export interface Product {
	id: string;
	title: string;
	img: string;
}


// Context
export interface ProductContextProps {
  counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}
// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



// componente ProductCard
export interface ProductCardProps {
	product: Product;
	children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}
export const ProductCard = ({ product, children, className, style }: ProductCardProps) => {
	const { increaseBy, counter } = useProduct();
	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>{children}</div>
		</Provider>
	);
};
