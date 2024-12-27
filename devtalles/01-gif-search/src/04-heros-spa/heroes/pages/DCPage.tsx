import { HeroList } from "../components/HeroList";

export const DCPage = () => {
	 // Aquí se realiza la llamada a la función para obtener los héroes de DC Comics
	return (
		<div>
			<h1>DC Comics</h1>
			<HeroList publisher={"DC Comics"} />
		</div>
	);
}
