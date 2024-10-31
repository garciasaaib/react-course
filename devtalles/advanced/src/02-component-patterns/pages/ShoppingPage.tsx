import {
	ProductButtons,
	ProductImage,
	ProductTitle,
	ProductCard,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
	// es importante que la lista de productos y el cart esten en diferentes endpoints
	const { shoppingCart, onProductCountChange } = useShoppingCart();
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "20px",
					flexDirection: "row",
				}}
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}
					>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
					</ProductCard>
				))}
			</div>

			<div className="shopping-cart">
				{Object.values(shoppingCart).map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						style={{ width: "100px" }}
						value={product.count}
						onChange={onProductCountChange}
					>
						<ProductImage />
						<ProductButtons />
					</ProductCard>
				))}
			</div>

			<div>
				<code>{JSON.stringify(shoppingCart, null, 2)}</code>
			</div>
		</div>
	);
};
