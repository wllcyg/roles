import React, { PureComponent } from 'react'
/**
 * mobx 
 * redux
 * 基于hook
*/
export default class App2 extends PureComponent {
    state = {
        msg:'我是张三的数据'
    }
  render() {
    return (
      <div>App2 <Child1 msg = {this.state.msg}/> </div>
    )
  }
}

function Child1(props:unknown) {
    console.log(props);
    
    return(
        <div>
            我是子组件
        </div>
    )
}
