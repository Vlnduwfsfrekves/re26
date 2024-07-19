import { useDispatch } from "react-redux"
import { useRef } from "react"
import { changeFilter} from "../redux/store"
const Filter=()=>{
    const dispatch=useDispatch()
    const filtRef=useRef(null)
    const reloadFilter=()=>{
        dispatch(changeFilter(filtRef.current.value))
    }
    return(
        <label>
        Filter by first letter:
        <br/>
        <input
        type="text"
        name="filterLetter"
        ref={filtRef}
        onChange={reloadFilter}
        />
        </label>
    )
}
export default Filter