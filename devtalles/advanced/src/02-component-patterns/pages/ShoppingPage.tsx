import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components";

const product = {
	id: "asdfasdfs",
	title: "sdfasdf",
	img: "",
};
export const ShoppingPage = () => {
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
        {/* HOC */}
				{/* <ProductCard product={product}>
					<ProductImage img={product.img} />
					<ProductTitle title={product.title} />
					<ProductButtons increaseBy={increaseBy} counter={counter} />
				</ProductCard> */}

				{/* HOC & Compount Component Pattern*/}
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>

        <ProductCard product={product}>
					<ProductImage />
					<ProductTitle title="alo" />
					<ProductButtons />
				</ProductCard>

			</div>
		</div>
	);
};
