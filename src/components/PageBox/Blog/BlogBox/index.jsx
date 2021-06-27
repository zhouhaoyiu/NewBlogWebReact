import React, { Component } from 'react'
import axios from 'axios'
import './index.sass'
import { withRouter } from 'react-router-dom'
import { Tag } from 'element-react';

import 'element-theme-default';
class BlogBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: []
    }
  }
  async componentDidMount() {
    let res = await axios.get('http://localhost:8099/blog/getAllBlogs')

    this.setState({
      blog: res.data.blog
    })
  }
  goBlogItem=(id)=>{
    this.props.history.push(`/Blog/item/${id}`)
  }
  render() {
    const { blog } = this.state || []
    return (
      <div className="blogBox">
        {blog.map(blogs => {
          return <div className="blogItem" key={blogs.id}>
            <Tag type="primary" className="blogLeng">共{blogs.content.length}字</Tag>
            <span onClick={()=>this.goBlogItem(blogs.id)} className="blogTitle">{blogs.title}</span>
            <span className="blogCreated">{blogs.created}</span>
            <span className="blogDescription">{blogs.description}</span>
          </div>
        })}
      </div>
    )    
  }
}
export default withRouter(BlogBox) 