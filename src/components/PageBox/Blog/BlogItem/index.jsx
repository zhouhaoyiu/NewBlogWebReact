import React, { Component } from 'react'

export default class BlogItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Loading',
      content: null,
      created:null
    }
  }
  async componentDidMount() {
    const params = new URLSearchParams({ blogId: this.props.match.params.id })
    const res = await fetch(`http://localhost:8099/blog/getBlog?${params}`)
    const data = await res.json()
    const blog = data.blog?.[0] || {}
    this.setState({
      title: blog.title || '',
      content: blog.content || '',
      created: blog.created || ''
    })
  }
  render() {
    const { title, content, created } = this.state
    return (
      <div>
        <div>
          <h1><center>{title}</center></h1>          
          <h5><center>{created}</center></h5>
        </div>
        <pre className="markdown-body">{content}</pre>
      </div>
    )
  }
}
