import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import {add} from '../redux/store'
import {getContacts} from '../redux/selectors'
const Form=()=>{
    const dispatch=useDispatch()
    const name=useRef(null)
    const contacts=useSelector(getContacts)
    const number=useRef(null)
    const addC=()=>{
        if(name.current.value.trim()==='' || number.current.value.trim()===''){
            alert('ти повинен написати щось')
            name.current.focus()
        }else if(contacts.some(contact=>contact.name===name.current.value.trim()) || contacts.some(contact=>contact.number===number.current.value.trim())){
            alert("цей контакт або це ім'я вже існує")
        }else{
            dispatch(add(name.current.value,number.current.value))
        }
    }
    return(
        <div>
        <h3>Name</h3>
        <label>
        <input
        type="text"
        ref={name}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        </label>
        <h3>Number</h3>
        <label>
        <input
        type="tel"
        name="number"
        ref={number}
        pattern="^[0-9]+$"
        title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        </label>
        <br/>
        <label>
        <button onClick={addC}>Add contact</button>
        </label>
        </div>
    )
}
export default Form