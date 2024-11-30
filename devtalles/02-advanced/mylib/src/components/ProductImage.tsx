import React, { CSSProperties, useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "../context/ProductContext";
import styles from "../styles/styles.module.css";

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
