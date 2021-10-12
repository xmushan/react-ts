import { useEffect } from 'react'
import createStore from '../myRedux/createStore'

interface ActionProps {
    type: string
    payload: {
        [key: string]: any
    }
}

interface StateProps {
    number: string | number
}

const reducer = (state = { number: 1 }, action: ActionProps): StateProps => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                number: state.number + action.payload.number
            }
        default:
            return state
    }
}

const store = createStore(reducer)
const Demo = () => {
    console.log(store.getState())
    useEffect(() => {
        console.log(store.getState())
    }, [store.getState().number])
    return (
        <div>
            <button
                onClick={() => {
                    console.log(store.getState())
                }}
            >click{store.getState().number}</button>

            <button onClick={() => {
                store.dispatch({
                    type: 'ADD',
                    payload: {
                        number: 1
                    }
                })
            }}>click</button>
        </div>
    )
}

export default Demo