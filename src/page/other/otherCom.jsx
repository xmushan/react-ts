import React from 'react'

export default class Form extends React.Component{
    state = {
        formData: {}
    }

    /* 用于提交表单数据 */
    submitForm=(cb)=>{
        cb({ ...this.state.formData })
    } 
    /* 获取重置表单数据 */
    resetForm=()=>{
       const { formData } = this.state
       Object.keys(formData).forEach(item=>{
           this.state.formData[item] = ''
       })
       this.setState({
           formData
       })
    }
    /* 设置表单数据层 */
    setValue=(name,e)=>{
        // console.log(name,value)
        this.setState({
            formData:{
                ...this.state.formData,
                [name]:e.target.value
            }
        })
    }

    render(){
        const { children } = this.props
        const renderChildren = []
        React.Children.forEach(children,child =>{
            if (child.type.displayName == 'formItem') {
                const { name } = child.props
                const Children = React.cloneElement(child,{ 
                    key:name ,                             /* 加入key 提升渲染效果 */
                    handleChange:this.setValue ,           /* 用于改变 value */
                    value:this.state.formData[name] ||  '' /* value 值 */
                })
                renderChildren.push(Children)
            }
        })
        // console.log(renderChildren)
        return renderChildren
        // return <div>12312</div>
    }
}