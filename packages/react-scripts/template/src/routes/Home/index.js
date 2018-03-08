import dynamicImport from '../../lib/dynamicImport';

const Home = dynamicImport({
  loader: () => import('./Home'),
})

export default Home;
