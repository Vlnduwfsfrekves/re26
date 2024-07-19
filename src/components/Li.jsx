import { useDispatch } from "react-redux"
import { deleteE } from "../redux/store"
const Li=({item})=>{
    const dispatch=useDispatch()
    return(
        <li>
            {`${item.name} ${item.number}`}
            <button onClick={()=>dispatch(deleteE(item.id))}>Delete</button>
        </li>
    )
}
export default Li