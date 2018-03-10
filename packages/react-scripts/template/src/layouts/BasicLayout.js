import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Home, Count } from '../routes';

import styles from './BasicLayout.css';

const BasicLayout = () => (
  <div>
    <ul className={styles.nav}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/count">Count</Link>
      </li>
    </ul>

    <Route exact path="/" component={Home} />
    <Route path="/count" component={Count} />
  </div>
);

export default BasicLayout;
