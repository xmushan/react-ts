// 生成一个随机数
const randomString = () => Math.random().toString(36).substring(7).split('').join('.')

// 初始的action的Type类型 确保不会重复
const actionTypes = {
    INIT: `REDUX/INIT${randomString()}`
}
function createStore(reduce,preloadedState,enhancer){
    // 当前数据
    let currentState = preloadedState
    // 接受reducer
    let currentReducer = reduce
    let isDispatching = false


    // 返回当前数据
    const getState = () => {
        if (isDispatching){
            throw new Error('dispatch')
        }
        return currentState
    }

    const dispatch = action => {
        if (isDispatching){
            throw new Error('dispatch')
        }
        try {
            isDispatching = true
            currentState = currentReducer(currentState,action)
        }finally{
            isDispatching = false
        }
    }

    dispatch({
        type: actionTypes.INIT
    })

    return {
        getState,
        dispatch
    }
}

export default createStore