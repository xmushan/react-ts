import React from 'react'

export default class Form extends React.Component{
    state = {
        formData: {}
    }
    submit = cb => {
        cb(this.state.formData)
    }
    reset = () => {
        const { formData } = this.state
        Object.keys(formData).forEach(item => formData[item] = '')
        this.setState({
            formData
        })
    }
    setValue = (name,value) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            }
        })
    }
    render(){
        const { children } = this.props
        return (
            <>
            {
                React.Children.map(children,item => {
                    const { name } = item.props
                    if (item.type.displayName != 'FormItem') return null
                    return React.cloneElement(item,{
                        key: name,
                        keyName: name,
                        onChange: this.setValue,
                        value: this.state.formData[name]
                    })
                })
            }
            </>
        )
    }
}