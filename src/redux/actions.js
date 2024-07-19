import { nanoid } from "nanoid"
export const addTask=(text)=>{
    return {
    type: 'tasks/addTask',
    payload: {
        id: nanoid(),
        text: text,
        completed: false
    }
}
}
export const deleteTask=(id)=>{
    return{
        type:'delete',
        payload:{
            id:id
        }
    }
}
export const changeStatus=(type)=>{
    return{
        type:type,
        payload:{}
    }
}
export const chnCompl=(id)=>{
    return{
        type:'chnCompl',
        payload:{
            id:id
        }
    }
}