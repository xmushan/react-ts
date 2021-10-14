import {useState} from 'react'

const SyncCom = () => {
    const [user,setUser] = useState('')
    setTimeout(() => {
        setUser('test')
    },3000)
    return (
        <div>
            { user }
        </div>
    )
}

export default SyncCom