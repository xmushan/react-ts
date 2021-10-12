const initialState = {
    foo: 'cs',
    num: 0
}

function Reducer(state=initialState,action){
    switch(action.type){
        case 'change': {
            return {
                ...state,
                ...action.params
            }
        }
        case 'add': {
            return {
                ...state,
                num: action.text
            }
        }
        default: 
            return state
    }
}

export default Reducer