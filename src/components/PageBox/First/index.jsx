import React, { Component } from 'react'
import './index.sass'
export default class First extends Component {
  render() {
    return (
      <div className="FirstText">
        <div className="QQ">
          <img width='200px' height='200px' alt='QQ' src='QQ.png'></img>
          <p style={{ fontSize: '1.7rem' }}>QQ</p>
        </div>
        <div className="WX">
          <img width='200px' height='200px' alt='WX' src='WX.jpg'></img>
          <p style={{ fontSize: '1.7rem'}}> WX</p>
        </div>
        <p>
          Welcome to my blog
        </p>
        <p>
          I'm Zhouhaoyu | 周浩宇 | Mystic Zhou
        </p>
        <p>
          I study in the Institute of disaster prevention technology
        </p>
        <p>
          I'm interested in Vue react
        </p>
        <p>
          I'm looking for a job in web developer
        </p>
        <p>
          Welcome to use QQ, wechat, email to contact me or visit my GitHub home page<span style={{fontSize:'2rem'}}>(648921469@qq.com OR https://github.com/zhouhaoyiu)</span>
        </p>
      </div>)
  }
}
