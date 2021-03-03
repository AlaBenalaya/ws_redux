import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../../Rudax/Actions/listeTask'
import { Button } from 'react-bootstrap'
import './AddTask.css'
const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const handleAdd=()=>{
        dispatch(addTask({id:Math.random(),text,isDane:false})) 
        setText("") 
    }
    return (
        <div className="espace">
            <input onChange={(e)=>setText(e.target.value)} value={text}/>
            <Button color="primary" onClick={handleAdd}>ADD</Button>
        </div>
    )
}

export default AddTask

