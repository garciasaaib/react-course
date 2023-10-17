import { useEffect, useState } from "react";

const foodList = ["Hamburguer", "Pizza", "Hot Dog", "Sushi", "Tacos"];

// this async function return an asting[] after 1 second
const fakeApiCall = () =>
	new Promise<string[]>((resolve) => {
		setTimeout(() => {
			resolve(foodList);
		}, 1000);
	});

export const AsyncList = () => {
	const [foodData, setFoodData] = useState<string[]>([]);

  // first render, faceApiCall is called, and setFoodData is settet with the result
  useEffect(() => {
    fakeApiCall().then((data) => {
      setFoodData(data);
    });
  }, []);

  // dom renders a list of <p> with the foodData
  return foodData.map((food) => <p key={food}>{food}</p>);
};
