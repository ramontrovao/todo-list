import { Main } from "./components/Main";

import styles from "./App.module.scss";

function App() {
  return (
    <>
      <header className={styles.topBackground}>
        <img src="./assets/logo.svg" alt="Logo da todo" />
      </header>

      <Main />
    </>
  );
}

export default App;
