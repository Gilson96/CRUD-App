import React, { useContext } from 'react'
import { TaskListContext } from '../../Context/TaskListContext'

export const Todo = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext)
    return (
        <li className="list-item">
            <span>{task.title} </span>
            <div>
                <button
                    className="btn-delete task-btn"
                    onClick={() => removeTask(task.id)}
                >
                    <i className="fas fa-times"></i>
                </button>{' '}
                <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}
