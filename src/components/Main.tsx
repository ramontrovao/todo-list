import { useState } from "react";
import styles from "./Main.module.scss";
import { Task } from "./Task";
import { BsClipboardCheck } from "react-icons/bs";

interface AllTasks {
  content: string;
  isCompleted: boolean;
  id: number;
}

export const Main = () => {
  const [createdTaskText, setCreatedTaskText] = useState("");
  const [allTasks, setNewTask] = useState(Array<AllTasks>);
  const [allTasksCompleted, setNewTaskCompleted] = useState(Array<string>);
  const [idCount, setIdCount] = useState(0);

  const handleCreateTaskInputChange = (event: any) => {
    setCreatedTaskText(event.target.value);
  };

  const handleCreateTaskInputSubmit = (event: any) => {
    event.preventDefault();
    setIdCount(idCount + 1);

    setNewTask((prev) => [
      ...prev,
      { content: createdTaskText, isCompleted: false, id: idCount },
    ]);

    setCreatedTaskText("");
  };

  const handleCheckTask = (
    { content, isCompleted, id }: AllTasks,
    checkedState: boolean
  ) => {
    if (checkedState === true) {
      setNewTaskCompleted((prev) => [...prev, content]);
    } else {
      const taskToRemove = allTasksCompleted.indexOf(content);
      setNewTaskCompleted((prev) => prev.slice(0, taskToRemove));
    }
  };

  const deleteTask = (id: number, content: string) => {
    const allTasksUpdated = allTasks.filter((task) => task.id !== id);
    setNewTask(allTasksUpdated);

    const taskToRemove = allTasksCompleted.indexOf(content);
    setNewTaskCompleted((prev) => prev.slice(0, taskToRemove));
  };

  return (
    <main className={styles.main}>
      <form
        className={styles.createTaskArea}
        onSubmit={handleCreateTaskInputSubmit}
      >
        <input
          type="text"
          name="createTask"
          id="createTask"
          placeholder="Adicione uma nova Tarefa"
          onChange={handleCreateTaskInputChange}
          value={createdTaskText}
        />
        <button type="submit" disabled={createdTaskText === "" ? true : false}>
          Criar
        </button>
      </form>

      <section className={styles.tasksArea}>
        <div className={styles.tasksInfo}>
          <strong id={styles.tasksCreated}>
            Tarefas criadas{" "}
            <span className={styles.numberTasks}>{allTasks.length}</span>
          </strong>

          <strong id={styles.tasksFinished}>
            Concluídas{" "}
            <span className={styles.numberTasks}>
              {allTasksCompleted.length} de {allTasks.length}
            </span>
          </strong>
        </div>

        <div className={styles.tasks}>
          {allTasks.length !== 0 ? (
            allTasks.map((task) => (
              <Task
                content={task.content}
                onChangeCheckBtn={(e: any) => {
                  handleCheckTask(task, e.target.checked);
                }}
                onDeleteTask={() => {
                  deleteTask(task.id, task.content);
                }}
                key={task.id}
              />
            ))
          ) : (
            <div className={styles.dontHaveTasksArea}>
              <BsClipboardCheck id={styles.clipboardIcon} />

              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
