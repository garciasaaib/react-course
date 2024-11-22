import { ChangeEvent, useState } from "react"

export const useEffectCustomHook = <T extends Record<string, string>>(initialForm: T) => {
  const [state, setState] = useState({...initialForm})
  const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = target
    setState({...state, [name]: value})
  }
  const onInputReset = () => {
    setState({...initialForm})
  }
  return {
    state,
    onInputChange,
    onInputReset,
  }
}
