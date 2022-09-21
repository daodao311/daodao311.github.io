
// import Home from '@/views/Home'
import loadable from '@loadable/component'

const Home = loadable(() => import(/* webpackChunkName: 'default' */ '@/views/Home'))

const routes = [
  { path: '/', exact: true, name: 'Index', component: Home, auth: [1] },
  { path: '/home', exact: true, name: 'Home', component: Home, auth: [1] },
]

export default routes
