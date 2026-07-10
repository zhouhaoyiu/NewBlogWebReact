import React, { Component } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import BlogItem from './BlogItem'
import BlogBox from './BlogBox'

export default class Blog extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  cons=()=>{
    console.log('cons');
  }
  render() {
    return (      
        <Routes>
          <Route path='all' element={<BlogBox />}></Route>
          <Route path='item/:id' element={<BlogItem />}></Route>
          <Route path='*' element={<Navigate to='/Blog/all' replace />}></Route>
        </Routes>     
    )
  }
}
