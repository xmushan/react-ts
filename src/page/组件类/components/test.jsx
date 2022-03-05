import React from 'react'


const TextComponent = () => {
    return (
        <div>TextComponent</div>
    )
}

export default class Test extends React.Component {
    state = {}
    status = false
    renderElement = () => {
        return (
            <div>
                { /* element 元素类型 */}
                <div>hello,world</div>
                { /* fragment 类型 */}
                <React.Fragment>
                    <div> 👽👽 </div>
                </React.Fragment>
                { /* text 文本类型 */}
                去除这行文字
                { /* 数组节点类型 */}
                {Array(3).fill(1).map(item => <div key={item} >let us learn {item} </div>)}
                { /* 组件类型 */}
                <TextComponent />
                { /* 三元运算 */}
                {this.status ? <TextComponent /> : <div>三元运算</div>}
            </div>
        )
    }
    controlRender = node => {
        console.log(node)
        const { children } = node.props
        console.log(children)

        // 扁平化数组
        const newChildren = React.Children.toArray(children)
        const newChildrenList = []
        React.Children.forEach(newChildren,item => {
            if (React.isValidElement(item)){
                newChildrenList.push(item)
            }
        })
        const newReactElement =  React.cloneElement(node,{
            ref: 'new'
        },...newChildrenList )
        return newReactElement
    }
    render() {
        return (
            <>
                { this.controlRender(this.renderElement()) }
                ---------
                { this.renderElement() }
            </>
        )
        // this.controlRender(this.renderElement())
       return this.controlRender(this.renderElement())
    }
}