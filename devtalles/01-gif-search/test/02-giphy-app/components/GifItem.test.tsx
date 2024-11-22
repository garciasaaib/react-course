import React from "react";
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../../src/02-giphy-app/components/GifItem";

describe("<GifItem />", () => {
	test("Debe crear en snapshoot de GifItem", () => {
		const props = {
			title: "Saitama",
			url: "https://one-punch.com/saitama.jpg",
			id: "1",
		};
		const { container } = render(<GifItem {...props} />);
		expect(container).toMatchSnapshot();
	});

	test("should show the image with url and alt", () => {
		const props = {
			title: "Saitama",
			url: "https://one-punch.com/saitama.jpg",
			id: "1",
		};
		render(<GifItem {...props} />);
		// screen.debug()
    const {src, alt} = screen.getByRole<HTMLImageElement>('img')
    expect(src).toBe(props.url)
    expect(alt).toBe(props.title)
	});

  test("should show the title", () => {
		const props = {
			title: "Saitama",
			url: "https://one-punch.com/saitama.jpg",
			id: "1",
		};
		render(<GifItem {...props} />);
		// screen.debug()
    // const {src, alt} = screen.getByRole<HTMLImageElement>('img')
    // expect(src).toBe(props.url)
    expect(screen.getByText(props.title)).toBeTruthy()
	});
});
