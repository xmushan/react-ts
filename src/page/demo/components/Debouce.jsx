
import ReactDOM from 'react-dom';
import React,{ useState, useEffect, useRef, useCallback } from 'react'
import useDebounce from '../../../hooks/useDebounce'
import useSearchParam from '../../../hooks/useSearchParams'

function C(){
    return (
        <div>ccc</div>
    )
}

class Modal extends React.Component{
    static confirm(){
        var div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(React.createElement(C), div);
    }
    render(){
        return(
            <div>12313</div>
        )
    }
}

export default Modal