import React from 'react'
function LogHoc(WrappedComponent){
    return class extends React.Component{
        componentWillMount(){
            this.start = Date.now();
        }
        componentDidMount(){
            this.end = Date.now();
            console.log(`${WrappedComponent.dispalyName} 渲染时间：${this.end - this.start} ms`);
        }
        componentWillUnmount() {
            console.log(`退出${WrappedComponent.dispalyName}`);
        }
        render(){
            return (
                <WrappedComponent {...this.props}/>
            )
        }
    }
}
export default LogHoc