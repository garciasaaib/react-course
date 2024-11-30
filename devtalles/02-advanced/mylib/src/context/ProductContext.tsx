import { createContext } from "react";
import { Product } from "../data/products";

// Context
export interface ProductContextProps {
  counter: number;
	product: Product;
	maxCount?: number;
	increaseBy: (value: number) => void;
}
export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;
