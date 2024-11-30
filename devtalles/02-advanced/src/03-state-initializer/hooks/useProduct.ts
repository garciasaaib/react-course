import { useEffect, useRef, useState } from "react"
import { Product } from "../data/products";
import { onChangeArgs } from "./useShoppingCart";
import { InitialValues } from "../components/ProductCard";

interface useProductArgs {
  product: Product;
  onChange?:(args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({onChange, product, value = 0, initialValues} : useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)

  // useref para tener la referencia en memoria, y sobreviva a todos los refresh que hagamos
  // tambien su cambio no genera un nuevo renderizado
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {

    // genera el nuevo valor, no menor a 0
    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    // establece el nuevo valor en el estado
    if(!isMounted.current) return;
    setCounter(newValue)

    // si hay onChange lo ejecuta
    if (onChange) onChange({count: newValue, product});
  }

  const reset = () => {
    if(!isMounted.current) return;
    setCounter(initialValues?.count || 0)
  }
  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset,
  }
}
