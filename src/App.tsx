import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Welcome To FrontEnd Chapter.
        </p>

        <div>this is just for mohammad reza</div>
      </header>
    </div>
  );
};

export default App;
