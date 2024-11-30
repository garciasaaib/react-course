import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "../context/ProductContext";

export interface ProductImageProps {
	img?: string;
	className?: string;
  style?: CSSProperties;
}
export const ProductImage = ({ img = "", className = "", style }: ProductImageProps) => {
	const { product } = useContext(ProductContext);
	return (
		<img
			src={img || product.img || noImage}
			alt="Product image"
			className={`${styles.productImg} ${className}`}
			style={style}
		/>
	);
};
