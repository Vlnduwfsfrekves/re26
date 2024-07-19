import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { changeStatus } from "../../redux/actions";
import { useDispatch } from "react-redux";
export const StatusFilter = () => {
  const dispatch=useDispatch()
  const changeSt=(type)=>()=>{
      dispatch(changeStatus(type))
  }
  return (
    <div className={css.wrapper}>
      <Button onClick={changeSt('all')}>All</Button>
      <Button onClick={changeSt('active')}>Active</Button>
      <Button onClick={changeSt('completed')}>Completed</Button>
    </div>
  );
};
