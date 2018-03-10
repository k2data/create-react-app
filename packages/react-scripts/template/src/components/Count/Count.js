import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import styles from './Count.css';

const ButtonGroup = Button.Group;

export const Count = props => (
  <div className={styles.container}>
    <p>The count is {props.count}</p>
    <ButtonGroup>
      <Button onClick={props.increment}>increment</Button>
      <Button onClick={props.incrementAsync}>incrementAsync</Button>
    </ButtonGroup>
  </div>
);

const mapState = state => ({
  count: state.count,
});

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1),
});

export default connect(mapState, mapDispatch)(Count);
