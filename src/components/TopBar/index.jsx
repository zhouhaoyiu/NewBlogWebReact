import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BtnItem from './BtnItem'
import './index.sass'
class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btns: [
        { id: '1', name: '博客首页', path: '/Blog' },
        { id: '2', name: '关于我', path: '/AboutMe' },
        { id: '3', name: '小工具', path: '/LittleTools' }
      ],
      select: '0'
    }
  }

  changeSelect = (data, names) => {
    this.setState({
      select: data
    })
    console.log(data);
  }
  gotoFirst=() =>{
    this.setState({
      select:'0'
    })
    this.props.history.push('/First')
  }

  render() {
    const { btns } = this.state
    return (
      <div className="topBar">
        <div onClick={()=>this.gotoFirst()} className="Author">周浩宇</div>
        <div className="btnContent">         
            {btns.map(btn => {
              return <BtnItem key={btn.id} {...btn} select={this.state.select} changeSelect={this.changeSelect}></BtnItem>
            })}
        </div>

      </div>)
  }
}
export default withRouter(TopBar)