import React, { Component } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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
      <Routes>
        <Route path='/First' element={<First />}></Route>
        <Route path='/Blog/*' element={<Blog />}></Route>
        <Route path='/AboutMe' element={<AboutMe />}></Route>
        <Route path='/LittleTools' element={<LittleTools />}></Route>
        <Route path='*' element={<Navigate to='/First' replace />}></Route>
      </Routes>
    )
  }
}
