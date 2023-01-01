import styles from "./Task.module.scss";
import { FiTrash2 } from "react-icons/fi";

type TaskType = {
  content: string;
  onChangeCheckBtn: (e: any) => void;
  onDeleteTask: () => void;
};

export const Task = ({ content, onChangeCheckBtn, onDeleteTask }: TaskType) => {
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        name="taskCheck"
        id={styles.taskCheck}
        onChange={onChangeCheckBtn}
      />
      <label htmlFor={styles.taskCheck} className={styles.taskContent}>
        {content}
      </label>
      <button className={styles.taskButton} onClick={onDeleteTask}>
        <FiTrash2 />
      </button>
    </div>
  );
};
