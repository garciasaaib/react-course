import React from 'react';
import { 
  FinalTodo, // componente container del contexto. contiene los estados del todo
  TodoForm, // form funcional que usa el contexto para agregar items a la lista
  TodoList, // componente que lee la lista del contexto y genera el view
  TodoTitle // componente sin estado para hacer title
} from './final-todo';

// componente todo en uno, solo se le manda el nombre de la lista
import { Todo } from './normal-todo';

export const CompoundComponentPage = () => (
  <>
  <h2>Ejemplo sin Compound Component</h2>
    <Todo title="Sin Compound Pattern :o" />
    <hr />

    <h2>Ejemplo con Compound Component</h2>
    <FinalTodo>
      <TodoTitle>
        <h1>Compound Pattern :D</h1>
      </TodoTitle>
      <TodoForm />
      <TodoList />
    </FinalTodo>

    <h2>Otro ejemplo con Compound Component</h2>
    <FinalTodo>
      <FinalTodo.Title>
        <h1>Compound Pattern D:</h1>
      </FinalTodo.Title>
      <FinalTodo.Form />
      <FinalTodo.List />
    </FinalTodo> 
  </>
);
