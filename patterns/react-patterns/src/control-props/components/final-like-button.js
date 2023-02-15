import {useState} from 'react';

/* para convertir a control props debes de identificar su estado y su manejador
estos seria el useState y handleClick
*/
export const FinalLikeButton = ({value, setValue}) => {
  // si los dos props contoladores son recividos, se enciende la flag
  const isControlled = value !== undefined && setValue !== undefined;

  // estdo comienza en 0
  const [likes, setLikes] = useState(0);

  // sin la flag isControlled aumenta en uno
  // con la flag ejecuta el seter controlador
  const handleClick = () => (isControlled ? setValue() : setLikes(likes + 1));

  return (
    <button onClick={handleClick}>
      <span role="img" aria-label="like">
        👍
      </span>
      {isControlled ? value : likes}
    </button>
  );
};