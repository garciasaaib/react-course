import {useState} from 'react';

// simple estado booleano y metodos para cambiarlo
export const usePlayer = () => {
  const [isPlaying, setPlaying] = useState(false);

  const tooglePlay = () => setPlaying(!isPlaying);
  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);

  return {
    tooglePlay,
    isPlaying,
    play,
    pause,
  };
};