import { useReducer } from 'react';

// action types - lector de actiions para redirigir el cambio en el state
const actionTypes = {
  TOOGLE_PLAYING: "TOOGLE_PLAYING",
  PLAY: "PLAY",
  PAUSE: "PAUSE",
};

// actions - accion que lee el action y retorna un nuevo state en consecuencia
export const playerReducer = (state, action) => {
  if (action.type === actionTypes.PLAY) {
    return {isPlaying: true}; 
  }
  if (action.type === actionTypes.PAUSE) {
    return {isPlaying: false};
  }
  if (action.type === actionTypes.TOOGLE_PLAYING) {
    return {isPlaying: !state.isPlaying};
  }
  return state;
};

// Custom hook, que recibe un reducer para inicializar de ser el caso.
export const usePlayerReducer = ({reducer= playerReducer}) => {
  // useReducer recibe una funcion para manejar los actions, y el primer valor del estado
  // retorna el estado y la funcion dispatch, por la cual se edita el estado mandandole types
  const [{ isPlaying }, dispatch] = useReducer(playerReducer, { isPlaying: false });


  // funciones que usan el dispatch y el actiontypes para cambiar el estado
  const tooglePlay = () => dispatch({ type: actionTypes.TOOGLE_PLAYING });
  const play = () => dispatch({ type: actionTypes.PLAY });
  const pause = () => dispatch({ type: actionTypes.PAUSE });


  // retornamos los accionadores y el estado como custom hook
  return {
    tooglePlay,
    isPlaying,
    play,
    pause,
  };
};