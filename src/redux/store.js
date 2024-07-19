import { configureStore,createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";
import { nanoid } from "@reduxjs/toolkit";
const initialState={
    contacts:[],
    filter:''
}
const rootReducer=createSlice({
    name:'contacts',
    initialState:initialState,
    reducers:{
        add:{reducer(state,action){state.contacts.push({name:action.payload.name,number:action.payload.number,id:action.payload.id})},prepare(name,number){
            return{
                payload:{
                    id:nanoid(),
                    name:name,
                    number:number
                }
            }
        }},
        deleteE:{reducer(state,action){state.contacts=state.contacts.filter(el=>el.id!==action.payload.id)},prepare(id){
            return{
                payload:{
                    id:id,
                }
            }
        }},
        changeFilter:{reducer(state,action){state.filter=action.payload.filter},prepare(newFilter){
            return{
                payload:{
                    filter:newFilter
                }
            }        
        }}
    }
})
const config={
    key:'root',
    storage,
    whitelist: ['contacts','filter']
}
const persReducer=persistReducer(config,rootReducer.reducer);  
export const {add,deleteE,changeFilter}=rootReducer.actions
export const store=configureStore({reducer:persReducer})
export const pers=persistStore(store)