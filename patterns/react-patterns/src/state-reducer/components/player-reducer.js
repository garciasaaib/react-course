import { useState } from 'react';

import { playerReducer, usePlayerReducer,  } from '../hooks/usePlayerReducer';

const LIMIT_TIMES = 5;
const actionTypes = {
  TOOGLE_PLAYING: "TOOGLE_PLAYING",
  PLAY: "PLAY",
  PAUSE: "PAUSE",
};

// componente que usa el reducer
export const PlayerReduccer = () => {
  // estado contador de plays
  const [count, setCount] = useState(0);
  // funcion que limita los clicks en play
  const clickedMoreTimes = () => count >= LIMIT_TIMES;
  // aqui obtenemos el estado y las funciones para editarlo del hook
  // todo lo que se le es mandado como parametro es la declaracion del reducer
  const { tooglePlay, play, pause, isPlaying } = usePlayerReducer({
    //metodo reducer
    reducer(state, action) {
      // que cotiene el metodo de actions
      const stateUpdated = playerReducer(state, action);

      // que de precionar el botonn play y tener el mavimo manda un alert y retorna un nuevo state
      if (action.type === actionTypes.PLAY && clickedMoreTimes()) {
        alert('limit reached');
        return {
          isPlaying: false,
        };
      }

      // pero si no, retorna el reducer
      return stateUpdated;
    },
  });

  const handlePlay = () => {
    setCount(count + 1);
    play();
  };


  return (
    <div className="App">
      <h1>Ejemplo de State Reducer Pattern</h1>
      <p>you clicked {count} times!</p>
      <p>
        Current status: <b>{isPlaying ? 'playing' : 'paused'}</b>
      </p>
      <button disabled={clickedMoreTimes()} onClick={handlePlay}>
        Start
      </button>
      <button onClick={pause}>Pause</button>
      <button onClick={tooglePlay}>Toogle</button>
    </div>
  );
};