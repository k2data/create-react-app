import dynamicImport from '../../lib/dynamicImport';

const Count = dynamicImport({
  loader: () => import('../../components/Count'),
})

export default Count;
