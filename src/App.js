import React, { Component } from 'react'
import TopBar from './components/TopBar'
import PageBox from './components/PageBox'
import 'antd/dist/antd.css'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  changeSelect = data => {
    this.setState({
      name: data
    })
  }
  render() {
    return (
      <div style={{width:'100%',height:'100%'}}>
        <TopBar changeSelect={this.changeSelect}></TopBar>
        <div style={{height:'4rem',width:'100%'}}>         
        </div>
        <PageBox></PageBox>
      </div>
    )
  }
}
