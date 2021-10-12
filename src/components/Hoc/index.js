import React,{Component} from 'react'

const HOC = (Wrap) =>
 class Wrapper extends Component {

    render() {
        const newProps = {
            name: 'props',
            ...this.props
        }
      return <Wrap {...newProps}/>;
    }
}

class Wrappcomponent extends React.Component{
    render(){
        console.log(this.props,'>>>')
        return (
            <div>普通组件</div>
        )
    }
}

export default HOC(Wrappcomponent)