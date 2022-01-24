import React from 'react'

export default class FormItem extends React.Component{
    render(){
        const {onChange,value,keyName,children} = this.props
        return (
            <>
            {
                React.isValidElement(children) && React.Children.only(children) && React.cloneElement(children,{
                    onChange,
                    value,
                    keyName
                })
            }
            </>
        )
    }
}
FormItem.displayName = 'FormItem'