import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

import styles from "./App.module.scss";

function App() {
  return (
    <>
      <header className={styles.topBackground}>
        <img src="./assets/logo.svg" alt="Logo da todo" />
      </header>

      <Main />

      <Footer />
    </>
  );
}

export default App;
