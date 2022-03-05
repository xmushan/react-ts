import React from 'react'


// class Son extends React.Component {
//     say =() =>{}
//     sonMsg = 'son'
//     componentDidMount(){
//         console.log('123')
//     }
//     render(){
//         return(
//             <div>son</div>
//         )
//     }
// }

// export default class Index extends Son{
//     constructor(props){
//         super(props)
//         console.log(props)
//     }
//     render(){
//         return <div>class</div>
//     }
// }


export default class index extends React.Component{
    state = { number:1 }
    handleClick= () => {
          this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
          console.log(this.state.number)
          this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback2', this.state.number)  })
          console.log(this.state.number)
          this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
          console.log(this.state.number)
    }
    render(){
        return <div>
            { this.state.number }
            <button onClick={ this.handleClick }  >number++</button>
        </div>
    }
} 