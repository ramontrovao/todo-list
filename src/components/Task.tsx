import styles from "./Task.module.scss";
import { FiTrash2 } from "react-icons/fi";

export const Task = () => {
  return (
    <div className={styles.task}>
      <input type="checkbox" name="taskCheck" id={styles.taskCheck} />
      <label htmlFor={styles.taskCheck} className={styles.taskContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel minima
        minus doloribus quidem! Illo dawdwadaw.
      </label>
      <button className={styles.taskButton}>
        <FiTrash2 />
      </button>
    </div>
  );
};
