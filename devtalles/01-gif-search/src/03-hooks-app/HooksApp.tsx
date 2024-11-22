import { UseStateCustomHook } from "./components/UseStateCustomHook"
import { UseEffect } from "./components/UseEffect"
import { UseState } from "./components/UseState"
import { UseEffectCustomHook } from "./components/UseEffectCustomHook"
import { MultipleCustomhooks } from "./components/MultipleCustomhooks"

export const HooksApp = () => {
  return (
    <div className="grid :bg-red-500">
      {/* <UseState /> */}
      {/* <UseStateCustomHook /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectCustomHook /> */}
      <MultipleCustomhooks />
    </div>
  )
}
