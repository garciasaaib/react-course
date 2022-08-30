import React, { useState, useEffect } from 'react'
import TaskListItem from './TaskListItem'
import {Task, UrgentTask} from './Tasks'
export default function TasksList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks([
            <Task name='task 1' />,
            <Task name='task 2' />,
            <Task name='task 3' completed={true} />
        ])
    }, [])

    return (
        <ul className='list-group'>
            {tasks?.map((task, i) => (
                <li className="list-group-item-action list-group-item" key={i}>
                    <TaskListItem task={task} />
                </li>
            ))}
        </ul>
    )
}

