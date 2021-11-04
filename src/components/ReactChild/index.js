import React from 'react'
const Child = props => {
    return (
        <>
            { React.cloneElement(props.children,{ onClick: () => {console.log('123')} })}
            {/* { props.children } */}
        </>
    )
}

export default Child