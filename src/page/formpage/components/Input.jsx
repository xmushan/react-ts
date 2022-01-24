const Input = props => {
    const {onChange,value,keyName} = props
    return (
        <input onChange={e => {
            onChange(keyName,e.target.value)
        }} value={value || ''}/>
    )
}

export default Input