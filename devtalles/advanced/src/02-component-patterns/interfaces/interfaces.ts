import { CSSProperties, ReactElement } from "react";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
	id: string;
	title: string;
	img: string;
}

export interface Props {
	product: Product;
	children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}

// HOC interface
export interface ProductCardHOCProps {
  (Props: Props): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
