import { ChangeEvent, Component } from "react";
/**
 * 受控与非受控组件
 *
 */
export default class App01 extends Component {
  state = {
    count: 0,
    message:'我是受控得组件啊'
  };
  render() {
    return (
      <div>
        App这是一个counter{this.state.count}
        <button onClick={() => this.clickBtn()}> + </button>
        <input value={this.state.message} type="text" onChange={e => {this.getValue(e)}}/>
        我是一个受控数据得展示{this.state.message}

      </div>
    );
  }
  getValue(val: ChangeEvent<HTMLInputElement>){
    console.log(val.target.value);
    this.setState({
      message:val.target.value
    })
  }
  clickBtn() {
    let countTemp = this.state.count;
    console.log(countTemp++);

    this.setState({
      count: countTemp + 1,
    });
  }
}
