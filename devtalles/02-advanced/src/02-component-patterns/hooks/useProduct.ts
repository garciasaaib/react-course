import { useEffect, useRef, useState } from "react"
import { Product } from "../data/products";
import { onChangeArgs } from "./useShoppingCart";

interface useProductArgs {
  product: Product;
  onChange?:(args: onChangeArgs) => void;
  value?: number;
}
export const useProduct = ({onChange, product, value = 0} : useProductArgs) => {
  const [counter, setCounter] = useState(value)

  //
  const isControlled = useRef(!!onChange)

  const increaseBy = (value: number) => {
    if(isControlled.current && onChange) {
      return onChange({count: value, product})
    }
    // genera el nuevo valor, no menor a 0
    const newValue = Math.max(counter + value, 0)

    // establece el nuevo valor en el estado
    setCounter(newValue)

    // si hay onChange lo ejecuta
    if (onChange) onChange({count: newValue, product});
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy,
  }
}
