import * as React from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom'
import NotFound  from '../components/notFound'
import Loading from '../components/loading'

const {lazy, Suspense} = React

const Home = lazy(() => import( /* webpackChunkName:"dashboard" */ '../pages/Home'))
const Test = lazy(() => import( /* webpackChunkName:"charts" */ '../pages/Test'))
// const LogApi = lazy(() => import( /* webpackChunkName:"logApi" */ '@pages/logs/api'))
// const LogErrors = lazy(() => import( /* webpackChunkName:"logErrors" */ '@pages/logs/errors'))
// const ArticleList = lazy(() => import( /* webpackChunkName:"articleList" */ '@pages/article/articleList'))
// const ArticleEdit = lazy(() => import( /* webpackChunkName:"articleEdit" */ '@pages/article/articleEdit'))
// const ArticleCreate = lazy(() => import( /* webpackChunkName:"articleCreate" */ '@pages/article/articleCreate'))
// const ArticleTypeList = lazy(() => import( /* webpackChunkName:"articleTypeList" */ '@pages/articleType/articleTypeList'))
// const ArticleTypeEdit = lazy(() => import( /* webpackChunkName:"articleTypeEdit" */ '@pages/articleType/articleTypeEdit'))
// const ArticleTypeCreate = lazy(() => import( /* webpackChunkName:"articleTypeCreate" */ '@pages/articleType/articleTypeCreate'))
// const TagList = lazy(() => import( /* webpackChunkName:"tagList" */ '@pages/tag/tagList'))
// const TagEdit = lazy(() => import( /* webpackChunkName:"tagEdit" */ '@pages/tag/tagEdit'))
// const TagCreate = lazy(() => import( /* webpackChunkName:"tagCreate" */ '@pages/tag/tagCreate'))
// const CommentList = lazy(() => import( /* webpackChunkName:"commentList" */ '@pages/comment/commentList'))
// const CommentEdit = lazy(() => import( /* webpackChunkName:"commentEdit" */ '@pages/comment/commentEdit'))
// const LeaveMsgList = lazy(() => import( /* webpackChunkName:"leaveMsgList" */ '@pages/leaveMsg/leaveMsgList'))
// const LeaveMsgEdit = lazy(() => import( /* webpackChunkName:"leaveMsgEdit" */ '@pages/leaveMsg/leaveMsgEdit'))
// const UserList = lazy(() => import( /* webpackChunkName:"userList" */ '@pages/user/userList'))
// const UserEdit = lazy(() => import( /* webpackChunkName:"userEdit" */ '@pages/user/userEdit'))
// const UserCreate = lazy(() => import( /* webpackChunkName:"userCreate" */ '@pages/user/userCreate'))
// const BallList = lazy(() => import( /* webpackChunkName:"ballList" */ '@pages/lottery/ballList'))
// const BallCreate = lazy(() => import( /* webpackChunkName:"ballCreate" */ '@pages/lottery/ballCreate'))
// const BallEdit = lazy(() => import( /* webpackChunkName:"ballEdit" */ '@pages/lottery/ballEdit'))
// const BallTrend = lazy(() => import( /* webpackChunkName:"ballTrend" */ '@pages/lottery/ballTrend'))
// const BallChart = lazy(() => import( /* webpackChunkName:"ballChart" */ '@pages/lottery/ballChart'))

// const Demo = lazy(() => import( /* webpackChunkName:"demo" */ '@pages/demo/demo'))
// const DemoMobx = lazy(() => import( /* webpackChunkName:"demo" */ '@pages/demo/demoMobx'))


export const routes: RouteProps[] = [
  {
    path: '/index',
    exact: true,
    component: Home
  },
  {
    path: '/list',
    exact: true,
    component: Test
  },
  {
    path: '*',
    component: NotFound
  },
]

const Routes = (authorized: boolean) => <Suspense fallback={<Loading/>}>
  <Switch>
    {
      routes.map(r => {
        const {path, exact, component} = r
        const LazyCom = component
        return <Route key={path + ''} exact={!!exact} path={path} render={(props: any) => (authorized ? <LazyCom {...props}/> : <Redirect to="/login"/>)}/>
      })
    }
  </Switch>
</Suspense>

export default Routes