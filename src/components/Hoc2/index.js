import React from 'react'
const HOC2 = (WrappedComponent) => {
    return class extends React.Component{
        handleClick = () => {
            console.log('click')
        }
        render(){
            console.log(this.props,'HoCprops')
            const newProps = {
                ...this.props
            }
            if (newProps.visible) {
                return null
            }
            return (
                <WrappedComponent 
                    {...newProps}
                    handleClick={this.handleClick}
                />
            )
        }
    }
}

export default HOC2