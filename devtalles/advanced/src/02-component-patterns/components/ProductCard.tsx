import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductContextProps, Props } from "../interfaces/interfaces";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: Props) => {
	const { increaseBy, counter } = useProduct();
	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={styles.productCard}>{children}</div>
		</Provider>
	);
};

