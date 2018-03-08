import Loadable from 'react-loadable';
import DefaultLoading from '../components/DefaultLoading'

const defaultOpts = {
  loading: DefaultLoading,
  delay: 300,
  timeout: 10000,
}

export default (opts) => (
  Loadable({
    ...defaultOpts,
    ...opts,
  })
)
