import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, selectValue } from './store/slices/counter'

function App() {
  const counter = useSelector(selectValue)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <div>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>counter is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          +
        </button>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          +2
        </button>
      </div>

    </div>
  )
}

export default App
