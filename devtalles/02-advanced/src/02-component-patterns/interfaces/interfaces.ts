import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductCardProps } from "../components/ProductCard";


// HOC interface
export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
