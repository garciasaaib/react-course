import { CSSProperties, useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "../context/ProductContext";

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}
export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
	const { increaseBy, counter, maxCount } = useContext(ProductContext);

	// useCallback permite evaluar y actualizar valores sin ejecutar re-renders
	// se usa en lugar de una funcion normal cuando se manda como prop a un componente hijo
	const isMaxReached = useCallback(() => 
		!!maxCount && counter === maxCount
	, [counter, maxCount]);

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>
			<button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>
				+
			</button>
		</div>
	);
};