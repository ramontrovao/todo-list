import styles from "./Main.module.scss";
import { Task } from "./Task";

export const Main = () => {
  return (
    <main className={styles.main}>
      <form className={styles.createTaskArea}>
        <input
          type="text"
          name="createTask"
          id="createTask"
          placeholder="Adicione uma nova Tarefa"
        />
        <button type="submit">Criar</button>
      </form>

      <section className={styles.tasksArea}>
        <div className={styles.tasksInfo}>
          <strong id={styles.tasksCreated}>
            Tarefas criadas <span className={styles.numberTasks}>12</span>
          </strong>

          <strong id={styles.tasksFinished}>
            Concluídas <span className={styles.numberTasks}>12 de 5</span>
          </strong>
        </div>

        <div className={styles.tasks}>
          <Task />
          <Task />
          <Task />
        </div>
      </section>
    </main>
  );
};
