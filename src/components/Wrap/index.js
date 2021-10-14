import React from 'react'

const Hoc = (Wrapper) => {
   return class Wrap extends React.Component{
        handleClick = () => {
            console.log('click')
        }
        render(){
            
            return (
                <Wrapper 
                    {...this.props}
                    handleClick={this.handleClick}
                />
            )
        }
    }
}

export default Hoc