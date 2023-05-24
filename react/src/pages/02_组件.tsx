import {PureComponent} from 'react'

/**
 * mobx
 * redux
 * 基于hook
 * props 可以传递任意的数据,数字,字符串,布尔值,对象,函数,jsx等
 */
interface propType {
    msg:string,
    age:Number
}
export default class App2 extends PureComponent {
    state:propType = {
        msg: '1111',
        age:12
    }
    render() {
        return (
            // @ts-ignore
            <div>App2 <Child1 msg={this.state.msg}/></div>
        )
    }
}

function Child1(props:propType) {
    return (
        <div>
            我是子组件 {props.msg}
        </div>
    )
}
