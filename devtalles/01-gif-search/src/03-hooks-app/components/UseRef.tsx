
// useRef es muy parecido a un useState, pero no genera un rerender

import { useRef } from "react"

// es usado para enfocar los cambios en algun componente
export const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClickFocus = () => {
    // document.querySelector('input')?.select()
    inputRef.current?.select()
  }
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} type="text" placeholder="Ingrese su nombre"/>

      <button onClick={onClickFocus} className="btn">Set Focus</button>
    </div>
  )
}
