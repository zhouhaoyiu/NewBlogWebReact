import axios from 'axios'
import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown/';
import CodeBlock from '../../../../codeBlock';

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
    let res = await axios({
      method: 'GET',
      url: 'http://localhost:8099/blog/getBlog',
      params: {
        blogId: this.props.match.params.id
      }
    })
    this.setState({
      title: res.data.blog[0].title,
      content: res.data.blog[0].content,
      created:res.data.blog[0].created
    })
    console.log(res.data.blog[0].created);
  }
  render() {
    const { title, content, created } = this.state
    return (
      <div>
        <div>
          <h1><center>{title}</center></h1>          
          <h5><center>{created}</center></h5>
        </div>
        <ReactMarkdown
          className="markdown-body"
          children={content}
          escapeHtml={false}
          renderers={{
            code: CodeBlock,
          }}
        />
      </div>
    )
  }
}
