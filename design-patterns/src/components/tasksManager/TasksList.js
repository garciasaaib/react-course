import React, {useState} from 'react'
import Task from './constructorTask'
export default function TasksList() {

    const [tasks] = useState([
        new Task({ name: 'task 1' }),
        new Task({ name: 'task 2' }),
        new Task({ name: 'task 3', completed: true })
    ])
    // console.log(tasks)
    return (
        <ul>
            {tasks.map((task, i) => (
            <li className="card" key={i} >
                <label htmlFor={task.name}>
                    <input type="checkbox" onChange={() => task.complete()} id={task.name} defaultChecked={task.completed}/>
                        {task.name}
                </label>
            </li>
            ))}
        </ul>
    )
}

