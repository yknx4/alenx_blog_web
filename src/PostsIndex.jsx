import React from 'react';
import Post from './Post';

export default React.createClass({
  getPosts: function() {
    return this.props.posts || [];
  },
  render: function() {
    return <div className="index">
      {this.getPosts().map(post =>
        <Post key={post.id} post={post} />
      )}
    </div>;
  }
});