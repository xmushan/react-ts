import React from 'react'


/**
 * 
 * @param {*} WrapCmponent 
 * @returns 
 * @name 正向代理组件
 * 优点
 * 1. 低耦合零耦合 对于条件渲染，prop属性的增强
 * 2 向队友饭反向继承，可以完全控制业务组件是否渲染
 * 缺点：
 * 1. 一般无法直接获取原始组件的状态，只能通过ref获取组件的是实例
 * 2. 无法直接继承静态属性，需要借助第三方库
 * 3. 本质上产生了一个新的组件，需要配合forwRef来转发ref
 */

const list = [1,2,3,4]
function Hoc(WrapCmponent){
    return function(auth){
        return class extends React.Component{
            render(){
                return (
                    <>
                        高阶组件
                        {
                            list.includes(auth) ? <WrapCmponent/> : <div>没有权限</div>
                        }
                        
                    </>
                )
            }
        }
    }

}


export default Hoc