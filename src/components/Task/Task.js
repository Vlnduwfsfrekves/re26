import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask,chnCompl } from "../../redux/actions";
import { useDispatch } from "react-redux";
export const Task = ({ task }) => {
  const dispatch=useDispatch()
  const delTask=()=>{
      dispatch(deleteTask(task.id))
  }
  const chCompl=()=>{
      dispatch(chnCompl(task.id))
  }
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={chCompl}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={delTask} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
