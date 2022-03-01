import {useState,useEffect,useRef,useCallback} from 'react'
import Modal from './components/Debouce'
function Demo (){
    return (
        <div>
            <button onClick={() => {
                Modal.confirm()
            }}>11</button>
        </div>
    )
}

export default Demo