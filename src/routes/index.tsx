import Form from '../page/formpage'
import Demo from '../page/demo'
const routes = [
    {
        key: 'from',
        path: '/from',
        component: Form,
        exact: true
    },
    {
        key: 'demo',
        path: '/demo',
        component: Demo,
        exact: true
    },
]

export default routes