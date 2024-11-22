import { Counter } from "./Counter";

// un componente padre
export const HelloWorld = ({ title = "holamundo" }) => {
	return (
		<section>
			<Title title={title} />
			<Counter initialValue={1} />
		</section>
	);
};

// un componente hijo
export const Title = ({ title = "hola soy goku" }: { title?: string }) => (
	<h1
		style={{ background: "teal" }}
		className="custom inline"
		data-testid="test-title"
	>
		{title}
	</h1>
);

/** Notas
 * - <></> es un fragmento de React, es como un div pero no se renderiza en el DOM
 * - Se puede usar React.Fragment o <>
 * - Las variables y funciones estaticas pueden vivir preferentemente fuera del componente
 * - Los styles se agregan como un objeto style al componente se agregan con className o con un objeto
 * - props son un objeto que permiten la comunicacion entre componente padre e hijo
 * - DefaultProps es una propiedad que permite definir valores por defecto a las props, eso las hace opcionales
 * - con proptypes puedes definir el tipo de dato que esperas recibir, pero si tienes ts no necesitas proptypes
 */
