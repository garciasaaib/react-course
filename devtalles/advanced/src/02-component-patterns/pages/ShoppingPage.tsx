import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components";
import '../styles/custom-styles.css';

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
				<ProductCard product={product} className="bg-dark">
					<ProductCard.Image className="custom-image"/>
					<ProductCard.Title className="text-white"/>
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard>

        <ProductCard product={product}>
					<ProductImage />
					<ProductTitle title="alo" />
					<ProductButtons />
				</ProductCard>

        <ProductCard product={product} style={{backgroundColor: "#70D1F8"}}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};
