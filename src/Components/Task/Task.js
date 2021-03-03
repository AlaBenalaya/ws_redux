import React from 'react'
import {useDispatch} from 'react-redux'
import { deliteTask, doneTask } from '../../Rudax/Actions/listeTask'
import './Task.css'
import Edit from '../Edit/Edit'
const Task = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <span className={task.isDone?"done":null}>{task.text}</span>
            <Edit task={task}/>
            <button onClick={()=>dispatch(deliteTask(task.id))}>delieT</button>
            <button onClick ={()=>dispatch(doneTask(task.id))}>
                {task.isDone ? "undone": "done"}
                
                </button>
        </div>
    )
}

export default Task
