import { Button } from "components/Button/Button";
import css from "./TaskForm.module.css";
import { useDispatch,useSelector } from "react-redux";
import {addTask} from '../../redux/actions'
import { getTasks } from "../../redux/selectors";
export const TaskForm = () => {
  const dispatch=useDispatch()
  const tasks=useSelector(getTasks)
  const handleSubmit = (event) => {
    event.preventDefault();
    if(event.currentTarget.elements.text.value.trim()===''){
      alert('ти повинен написати щось')
    }else if(tasks.some(task=>task.text===event.currentTarget.elements.text.value.trim())){
      alert("цей таск вже існує")
    }else{
      dispatch(addTask(event.currentTarget.elements.text.value))
      const form = event.target;
      form.reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
