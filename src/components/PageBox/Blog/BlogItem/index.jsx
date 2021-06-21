import axios from 'axios'
import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown/';
import CodeBlock from '../../../../codeBlock';

export default class BlogItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Loading',
      content: null
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
      content: res.data.blog[0].content
    })
    console.log(res.data.blog[0].content);
  }
  render() {
    const { title, content } = this.state
    return (
      <div>
        <div>
          {title}
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
