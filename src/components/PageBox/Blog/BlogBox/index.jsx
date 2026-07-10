import React, { Component } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
class BlogBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: []
    }
  }
  async componentDidMount() {
    const res = await fetch('http://localhost:8099/blog/getAllBlogs')
    const data = await res.json()

    this.setState({
      blog: data.blog || []
    })
  }
  goBlogItem=(id)=>{
    this.props.navigate(`/Blog/item/${id}`)
  }
  render() {
    const { blog } = this.state || []
    return (
      <div className="blogBox">
        {blog.map(blogs => {
          return <div className="blogItem" key={blogs.id}>
            <span className="blogLeng">共{blogs.content.length}字</span>
            <span onClick={()=>this.goBlogItem(blogs.id)} className="blogTitle">{blogs.title}</span>
            <span className="blogCreated">{blogs.created}</span>
            <span className="blogDescription">{blogs.description}</span>
          </div>
        })}
      </div>
    )    
  }
}
export default function BlogBoxWithRouter(props) {
  const navigate = useNavigate()
  return <BlogBox {...props} navigate={navigate} />
}
