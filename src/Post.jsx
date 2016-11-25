import React from 'react';

class Post extends React.Component {
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