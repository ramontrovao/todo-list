import styles from "./Task.module.scss";
import { FiTrash2 } from "react-icons/fi";

type TaskType = {
  content: string;
  onChangeCheckBtn: (e: any) => void;
  onDeleteTask: () => void;
  id: number;
  isChecked: boolean;
};

export const Task = ({
  content,
  onChangeCheckBtn,
  onDeleteTask,
  id,
  isChecked,
}: TaskType) => {
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        className={styles.taskCheck}
        id={`checkbox${id}`}
        onChange={onChangeCheckBtn}
      />
      <label
        htmlFor={`checkbox${id}`}
        className={styles.taskContent}
        style={
          isChecked
            ? { textDecoration: "line-through", color: "#808080" }
            : { textDecoration: "none" }
        }
      >
        {content}
      </label>
      <button className={styles.taskButton} onClick={onDeleteTask}>
        <FiTrash2 />
      </button>
    </div>
  );
};
