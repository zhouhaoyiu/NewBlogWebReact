import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs'; //我这边使用的是夜晚模式的css，你也可以在react-syntax-highlighter/dist/esm/styles/hljs里面找你自己喜欢的css，把名字替换就行 eg：
import { Form } from 'antd';
class CodeBlock extends React.PureComponent {
  render() {
    const { value } = this.props;
    return (<SyntaxHighlighter language="" style={tomorrowNightEighties}> {value} </SyntaxHighlighter>);
  }
}
export default Form.create()(CodeBlock);