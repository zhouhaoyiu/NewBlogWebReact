import React, { Component } from 'react'
import BtnItem from './BtnItem'
import './index.sass'

export default class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btns: [
        { id: '1', name: '博客首页' },
        { id: '2', name: '关于我', },
        { id: '3', name: '小工具', }
      ],
      select: '1'
    }
  }

  changeSelect = (data,names) => {
    this.setState({
      select: data
    })
    console.log(data);
    this.props.changeSelect(names)
  }

  render() {
    const { btns } = this.state
    return (
      <div className="topBar">
        <div className="Author">周浩宇</div>
        <div className="btnContent">
          {btns.map(btn => {
            return <BtnItem key={btn.id} {...btn} select={this.state.select} changeSelect={this.changeSelect}></BtnItem>
          })}
        </div>

      </div>
    )
  }
}
