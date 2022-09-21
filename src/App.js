import React from 'react'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import routes from '@/routes'
import loadable from '@loadable/component'
// import 'animate.css'
import '@/assets/scss/base.scss'
import '@/assets/scss/App.scss'
import 'antd/dist/antd.min.css';

// 公共模块
// const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))

// 基础页面
const View404 = loadable(() => import(/* webpackChunkName: '404' */ '@/views/Others/404'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ '@/views/Others/500'))
// const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login'))
console.log(routes);
const App = () => (
  <Router>
    <Routes>
      {routes.map(item => {
        return (
          <Route
            key={item.path}
            path={item.path}
            exact={item.exact}
            element={<item.component />}
          ></Route>
        )
      })}
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      <Route path='/404' element={<View404 />} />
      <Route path='/500' element={<View500 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>
)

export default App
