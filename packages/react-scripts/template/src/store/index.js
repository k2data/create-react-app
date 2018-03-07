import { init } from '@rematch/core';
import count from './count';

const store = init({
  models: { count },
});

export default store;
