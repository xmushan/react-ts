
import React from 'react'
import Test from './components/test'
import Test2 from './components/test2'

import Test3 from './components/test3'
interface AppProps {}
interface AppState {
    [propName: string]: any
}

interface Son {
    ref: React.ReactDOM
}

function Son(props: any){
    return (
        <div>
            <span ref={props.sonRef}>ref元素</span>
        </div>
    )
}

function Father(props : any){
    return (
        <div>
            <Son sonRef={ props.sonRef }/>
        </div>
    )
}

const NewFather = React.forwardRef((props,ref) => <Father {...props} sonRef={ref}/>)

class Index extends React.PureComponent<AppProps,AppState>{
    constructor(props: AppProps){
        super(props)
    }
    state = {
        number: 1,
        obj: {
            num: 0
        }
    }
    componentDidUpdate(props: any,state:any){
        console.log(props,state)
    }

    node: any = null
    handleClick= () => { 
        this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
        console.log(this.state.number,'con')
        this.setState({ number:this.state.number + 2 },()=>{   console.log( 'callback2', this.state.number)  })
        console.log(this.state.number,'con')
        this.setState({ number:this.state.number + 3 },()=>{   console.log( 'callback3', this.state.number)  })
        console.log(this.state.number,'con')
  }
    render(){
        const { obj,number } = this.state
        // console.log( new Test3)
        return (
            <div>
                {number}
                <button onClick={this.handleClick}>onClick</button>
                {/* <NewFather ref={ref => this.node = ref}/> */}
                {/* <Test/> */}
                <Test2/>
                -------
                <Test3 msg='props'/>
            </div>
        )
    }
}

export default Index