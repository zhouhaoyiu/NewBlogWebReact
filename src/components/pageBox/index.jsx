import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import First from './First'
// import LittleTools from './LittleTools'
import AboutMe from './AboutMe'
export default class PageBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <div>
        <Route path='/AboutMe' component={AboutMe}></Route>
      </div>
    )
  }
}
