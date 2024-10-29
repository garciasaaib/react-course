import reactLogo from './assets/react.svg'
import './App.css'
import { Counter } from './components/Counter'
import { ScrollHooks } from './components/ScrollHooks'
import { Usuario } from './components/Usuario'
import { TimerPadre } from './components/TimerPadre'
import { CounterReducer } from './components/CounterReducer'
import { Form } from './components/Form'
import { Todo } from './components/Todo'

import { Counter as CounterBase } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import { CounterEffect } from './bases/CounterEffect'
import { CounterReducerComponent } from './bases/CounterReducerComponent'

function App() {
  return (
    <div className="App">
      <h1>Bases</h1>
      {/* <CounterBase /> */}
      {/* <CounterBy /> */}
      {/* <CounterEffect /> */}
      <CounterReducerComponent />
      {/* <h1>React + TypeScript</h1> */}
      {/* <hr /> */}
      {/* <Counter /> */}
      {/* <Usuario /> */}
      {/* <hr /> */}
      {/* <TimerPadre /> */}
      {/* <ScrollHooks /> */}
      {/* <hr /> */}
      {/* <CounterReducer /> */}
      {/* <hr /> */}
      {/* <Form /> */}
      {/* <Todo /> */}
    </div>
  )
}

export default App
