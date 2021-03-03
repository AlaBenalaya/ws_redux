import {ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK} from '../ActionTypes/listeTask'
const initState={
    lisTasks:[
        {id:Math.random(),text:"TASK1",isDone:false},
        {id:Math.random(),text:"TASK2",isDone:false},

]
}
//fonction
const listReducer=(state=initState,{type,payload})=>{
    switch (type) {
        case ADD_TASK:
            return{...state,lisTasks:[...state.lisTasks,payload]}
        case DELETE_TASK:
            return {...state,lisTasks:state.lisTasks.filter(el=>el.id!=payload)}
            case DONE_TASK:
            return{...state,lisTasks:state.lisTasks.map((el)=>el.id==payload?{...el,isDone:!el.isDone}:el)}
            case EDIT_TASK:
                return{...state,lisTasks:state.lisTasks.map((el)=>(el.id==payload.id?
                    {...el,text:payload.newTask}:el))}
    
        default:
            return state
    }

}
export default listReducer
//reducer
