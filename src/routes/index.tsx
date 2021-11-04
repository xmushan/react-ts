import Login from '../page/home'
import Admin from '../page/admin'
import User from '../page/user'
import Foo from '../page/other/foo'
const routes = [
    {
        key: 'login',
        path: '/login',
        component: Login,
        exact: true
    },
    {
        key: 'admin',
        path: '/admin',
        component: Admin,
        role: 'admin', 
        exact: true
    },
    {
        key: 'user',
        path: '/user',
        component: User,
        exact: true
    },
    {
        key: 'other',
        path: '/foo',
        component: Foo,
        exact: true
    }
]

export default routes