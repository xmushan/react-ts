import React from 'react'


const Son = props => {
    const { sonRef } = props
    return (
        <div ref={sonRef} >get son html type</div>
    )
}

const Fathr = props => {
    const { sonRef } = props
    return (
        <Son sonRef={sonRef}/>
    )
}

const NewFther = React.forwardRef((props,ref) => <Fathr sonRef={ref} {...props}/>)
export default class CustomRef extends React.Component{
    sonRef = React.createRef(null)
    handleClick = () => {
        console.log(this.sonRef)
    }
    render(){
        return (
            <div>
                <NewFther ref={this.sonRef}/>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}