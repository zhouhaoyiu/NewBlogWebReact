import React, { Component } from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'
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
        <Switch>
          <Route path='/Blog/all' component={BlogBox}></Route>          
          <Route path='/Blog/item/:id' component={BlogItem}></Route>
          <Redirect to='/Blog/all'></Redirect>
        </Switch>     
    )
  }
}
