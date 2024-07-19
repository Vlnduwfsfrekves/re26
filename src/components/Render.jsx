import Li from './Li'
import { useSelector } from 'react-redux'
import { getContacts, getFilter } from '../redux/selectors'
const Render=()=>{
    const contacts=useSelector(getContacts)||[]
    const filter=useSelector(getFilter)||''
    const filterA=contacts.filter(contact=>contact.name.toLowerCase().startsWith(filter.toLowerCase()))
    return(
        <ul>
        {filterA.map((item)=>(
            <Li key={item.id} item={item}/>
        ))}
        </ul>
    )
}
export default Render