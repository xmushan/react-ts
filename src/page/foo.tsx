import React from 'react'
import Hoc from '../components/Wrap'
import {store} from '../redux/store'
import HOC2 from '../components/Hoc2'
import LogHoc from '../hocComponents/Logger'
// import SyncCom from '../components/SyncCom'
interface ComProps {
    message: string
    handleClick: () => void
}

const Com = HOC2((props: ComProps) => {
    console.log(props,'props')
    return (
        <div>
            <button onClick={()=>{props.handleClick()}}>click</button>
        </div>
    )
})

const Com2 = LogHoc((props: any)=>{
    return(
        <div>123123</div>
    )
})

const SyncCom = React.lazy(() => import('../components/SyncCom'));

const Spinner = () => {
    return (
        <div>loading</div>
    )
}
@Hoc
class Foo extends React.Component{

    render(){
        return (
            <div>
                {/* <Com f='1' c='2' visible/> */}
                {/* <Com2 message='1213'/> */}
                <React.Suspense fallback={<Spinner />}>
                <SyncCom/>
                </React.Suspense>
            </div>
        )
    }
}

console.log(Foo,'>>>>')


export default Foo