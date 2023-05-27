import {PureComponent,createContext} from 'react'

/**
 * mobx
 * redux
 * 基于hook
 * props 可以传递任意的数据,数字,字符串,布尔值,对象,函数,jsx等
 * 子组件传递数据使用函数来传递
 * 使用跨组件通信 context
 * children 相当于vue中的默认插槽
 */
interface propType {
    msg:string,
    age:Number
}
// @ts-ignore
const { Provider,Consumer } = createContext()
export default class App2 extends PureComponent {
    state:propType = {
        msg: '1111',
        age:12
    }
    // @ts-ignore
    render() {
        return (
            <Provider value={this.state.age}>
                <div>App2 <Child1 age={this.state.age} msg={this.state.msg}/></div>
            </Provider>
        )
    }
}

function Child1(props:propType) {
    const {msg,age } = props
    return (
        <div>
            {/*// @ts-ignore*/}
            我是子组件 {msg}年龄:{age}
            <div>
                孙组件<Sun1/>
            </div>
        </div>
    )
}
// 孙子组件
function Sun1(){
    return(
        <div>
            这个是孙组件
            <Consumer>
                {/*// @ts-ignore*/}
                {value => <span>{value}</span>}
            </Consumer>
        </div>

    )
}
