import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import First from './First'
import Blog from './Blog'
import LittleTools from './LittleTools'
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
      <Switch>
        <Route path='/First' component={First}></Route>
        <Route path='/Blog' component={Blog}></Route>
        <Route path='/AboutMe' component={AboutMe}></Route>
        <Route path='/LittleTools' component={LittleTools}></Route>
        <Redirect to='/First'></Redirect>
      </Switch>
    )
  }
}
