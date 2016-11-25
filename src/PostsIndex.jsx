import React from 'react';

export default React.createClass({
  getPosts: function() {
    return this.props.posts || [];
  },
  render: function() {
    return <div className="index">
      {this.getPosts().map(post =>
        <div className="post" key="{post.id}">
          <p>{ post.title }</p>
        </div>
      )}
    </div>;
  }
});