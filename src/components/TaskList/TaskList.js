import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { getTasks,getFilters } from "../../redux/selectors";
export const TaskList = () => {
  const arrayOfT=useSelector(getTasks)||[]
  const filter=useSelector(getFilters)
  let filterA
  if(filter==='active'){
      filterA=arrayOfT.filter(task=>task.completed===false)
  }else if(filter==='completed'){
      filterA=arrayOfT.filter(task=>task.completed===true)
  }else{
      filterA=arrayOfT
  }
  console.log(filterA,filter);
  return (
    <ul className={css.list}>
      {filterA.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
