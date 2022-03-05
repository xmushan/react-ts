import Form from '../page/formpage'
<<<<<<< HEAD:src/routes/index.tsx
import Demo from '../page/demo'
=======
import Home from '../page/home'
>>>>>>> 56c0776 (update):src/routes/index.jsx
const routes = [
    {
        key: 'from',
        path: '/from',
        component: Form,
        exact: true
    },
    {
<<<<<<< HEAD:src/routes/index.tsx
        key: 'demo',
        path: '/demo',
        component: Demo,
=======
        key: 'home',
        path: '/home',
        component: Home,
>>>>>>> 56c0776 (update):src/routes/index.jsx
        exact: true
    },
]

export default routes