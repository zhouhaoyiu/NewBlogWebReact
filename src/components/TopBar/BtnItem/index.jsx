import React, { Component } from 'react'
import './index.sass'

export default class BtnItem extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  handleClick(id,names) {
    console.log(id);
    this.props.changeSelect(id,names)
  }
  render() {
    const name = this.props.name
    return (
      <button onClick={() => this.handleClick(this.props.id,this.props.name)} style={{ color: this.props.select === this.props.id ? 'pink' : '#999' }} className="topBarBtn">{name}</button>
    )
  }
}
