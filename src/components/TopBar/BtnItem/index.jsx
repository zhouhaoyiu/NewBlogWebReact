import React, { Component } from 'react'
import './index.sass'
import { Link   } from 'react-router-dom'


export default class BtnItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleClick = (id, names, path) => {
    console.log(id);
    this.props.changeSelect(id, names)
  }
  render() {
    const name = this.props.name
    const path = this.props.path
    return (
      <Link onClick={() => this.handleClick(this.props.id, this.props.name, path)} to={path} >
      <button style={{ color: this.props.select === this.props.id ? 'pink' : '#999' }} className="topBarBtn">{name}</button>
      </Link>
    )
  }
}
