import React from 'react';
import { connect } from 'react-redux';

import styles from './Count.css';

export const Count = (props) => (
  <div className={styles.container}>
    <p>The count is {props.count}</p>
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
);

const mapState = state => ({
  count: state.count,
});

const mapDispatch = ({ count: { increment, incrementAsync }}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1),
});

export default connect(mapState, mapDispatch)(Count);
