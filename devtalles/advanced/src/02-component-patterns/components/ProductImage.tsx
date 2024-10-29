import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({img=''}) => {
	const {
		product,
	} = useContext(ProductContext);
	return (
		<img
			src={img || product.img || noImage}
			alt="Product image"
			className={styles.productImg}
		/>
	);
};