import {useState} from 'react';

import {usePlayer} from '../hooks/usePlayer';

const LIMIT_TIMES = 5;
/**
 * general state for a game, controlled by buttons and hooks
 * @returns Component controlled by custom hook
 */
export const Player = () => {
  //use state solo cuenta las veces que fue puesto play
  const [count, setCount] = useState(0);
  // este hook tiene el estado del juego y los metodos para cambiarlo
  const {tooglePlay, play, pause, isPlaying} = usePlayer();

  // maneja un metodo del hook y adiciona al contador externo
  const handlePlay = () => {
    setCount(count + 1);
    play();
  };

  const clickedMoreTimes = () => count >= LIMIT_TIMES;

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