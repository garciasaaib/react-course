export interface Product {
	id: string;
	title: string;
	img: string;
}

export const product1 = {
	id: "1",
	title: "Coffee Mug - Card",
	img: "./coffee-mug.png",
};

export const product2 = {
	id: "2",
	title: "Coffee Mug - Meme",
	img: "./coffee-mug2.png",
};

export const products: Product[] = [product1, product2];
