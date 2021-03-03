import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import Task from '../Task/Task'


const ListeTask = () => {
    const [status, setstatus] = useState("all")
  const list = useSelector((state )=> state.listReducer.lisTasks)
    return (
        <div>
           <h2>LISTE OF TASKS</h2>
<button onClick={()=>setstatus("all")}>ALL</button>
<button onClick={()=>setstatus("done")}>Done</button>
<button onClick={()=>setstatus("undone")}>Undone</button>
{status=="done"
?list 
.filter((el)=>el.isDone==true)
.map((el)=><Task task={el} key={el.id}/>)
:status=="undone"
?list
.filter((el)=>el.isDone==false)
.map((el)=><Task task={el} key={el.id}/>)          
:list.map((el)=>
           <Task task={el} key={el.id}/>
           )
           
           
           }

        </div>
    )
}

export default ListeTask

