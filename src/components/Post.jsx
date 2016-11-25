import React from 'react'
import PureComponent from './PureComponent'

class Post extends PureComponent {
  render() {
    const post = this.props.post;
    return (
      <div className="post">
        <p>{ post.attributes.title }</p>
      </div>
    );
  }
}

export default Post;