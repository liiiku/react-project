import React from 'react'
import {Button, List} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component{
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长是{boss}</h2>
        <Yiying Yiboss="张大秒"></Yiying>
        <Qibinglian Qiboss="孙德胜"></Qibinglian>
      </div>
    )
  }
}

function Qibinglian(props) {
  return <h2>骑兵连连长{props.Qiboss}</h2>
}

class Yiying extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子', '柱子', '小胖']
    }
    // this.addSolder = this.addSolder.bind(this)
    console.log('组件初始化')
  }
  componentWillMount() {
    console.log('组件马上要挂载了')
  }
  componentDidMount() {
    console.log('组件挂载完毕')
  }
  componentWillReceiveProps() {
    console.log('组件要接收父组件的值了')
  }
  shouldComponentUpdate() {
    console.log('判断是不是要更新组件')
    return true
  }
  componentWillUpdate() {
    console.log('马上就要更新组件了')
  }
  componentDidUpdate() {
    console.log('组件更新完毕')
  }
  componentWillUnmount() {
    console.log('组件卸载了')
  }
  // addSolder() {
  //   console.log('hello add solder')
  //   console.log(this)
  //   this.setState({
  //     solders: [...this.state.solders, '新兵蛋子' + Math.random()]
  //   })
  // }
  addSolder = () => {
    console.log('hello add solder')
    console.log(this)
    this.setState({
      solders: [...this.state.solders, '新兵蛋子' + Math.random()]
    })
  }
  render() {
    console.log('组件正在加载')
    return (
      <div>
        <h2>一营营长,{this.props.Yiboss}</h2>
        <Button type="primary" onClick={this.addSolder}>新兵入伍</Button> {/* <button onClick={this.addSolder}>新兵入伍</button> */}
        <List renderHeader={() => '士兵列表'}>
            {this.state.solders.map(v => {
              return (
                <List.Item key={v}>{v}</List.Item>
              )
            })}
        </List>
      </div>
    )
  }
}

export default App
