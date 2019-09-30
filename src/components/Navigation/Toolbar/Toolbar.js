import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../components/Logo/Logo';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <ul>...</ul>
      </nav>
    </header>
  );
};

export default Toolbar;