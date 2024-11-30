import { UseStateCustomHook } from "./components/UseStateCustomHook"
import { UseEffect } from "./components/UseEffect"
import { UseState } from "./components/UseState"
import { UseEffectCustomHook } from "./components/UseEffectCustomHook"
import { PokemonGrid } from "./components/MultipleCustomHooks/PokemonGrid"
import { UseRef } from './components/UseRef';
import { UseLayoutEffect } from "./components/UseLayoutEffect"
import { Memorize } from "./components/Memos/Memorize"
import { UseMemo } from "./components/Memos/UseMemo"
import { UseCallback } from "./components/Memos/UseCallback"
import { UseCallback2 } from "./components/Memos/UseCallback2"
import { TodoApp } from "./components/Reducer/TodoApp"
// import './components/Reducer/intro-reducer'
export const HooksApp = () => {
  return (
    <div className="grid :bg-red-500">
      {/* <UseState /> */}
      {/* <UseStateCustomHook /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectCustomHook /> */}
      {/* <PokemonGrid /> */}
      {/* <UseRef/> */}
      {/* <UseLayoutEffect /> */}
      {/* <Memorize /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseCallback2 /> */}
      <TodoApp />
    </div>
  )
}
