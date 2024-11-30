
/**
 * se usa un reducer cuando tenemos un estado muy elaborado y queremos eventualmente cambiar algunas partes de el
 * un reducer es una logica que permite hacer cambios a nuestro state por medio de acciones definidas e inmovibles
 * es decir definiendo las unicas cosas que se van a poder hacer.
 */
type Todo = {
	id: number;
	todo: string;
	done: boolean;
};

let todos: Todo[] = [
	{
		id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
	},
];

type ActionsType =
| { type: 'add'; payload: Todo }
| { type: 'init' };

function todoReducer(state: Todo[], action: ActionsType) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    default:
      return state;
  }
}

const newTodo: Todo = {
	id: 2,
	todo: "Recolectar la piedra del infinito",
	done: false,
};

todos = todoReducer(todos, { type: "add", payload: newTodo });
console.log(todos)