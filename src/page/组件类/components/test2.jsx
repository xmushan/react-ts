import { setServers } from 'dns'
import React from 'react'


function Ele(props){
    console.log(props,'props')
    // const flatChildren = React.Children.toArray(props.children)
    // const foo = <div> new Foo </div>
    // flatChildren.push(foo)
    // const newChildren = React.cloneElement(props.children,{a:1},<span>span</span>)
    const newChildren = React.Children.map(props.children,item => React.cloneElement(item,{a:1,b:2},<div>new div</div>))
    console.log(newChildren)
    return (
        <div>
            { newChildren }
        </div>
    )
}

function Son(props){
    console.log(props,'son')
    return (
        <div>
            son
        </div>
    )
}

export default () => {
    const re = React.useRef(null)
    const [count,setCount] = React.useState(0)
    // React.useEffect(() => {
    //     return () => {
    //         // console.log('123123')
    //         console.log(re)
    //     }
    // },[])
    
    const handleClick = () => {
        setCount(1)
        setCount(2)
        setCount(3)
    }
    return (
        <div>
            <Ele msg ='123123'>
                <Son/>
                <div>123123</div>
            </Ele>
            <button onClick={handleClick}>onClick{count }</button>
        </div>
    )
}