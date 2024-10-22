import { GifItem } from "./";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }: { category: string }) => {
	const { gifs, loading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{loading && <h2>Cargando...</h2>}

			<div className="card-grid">
				{gifs.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
