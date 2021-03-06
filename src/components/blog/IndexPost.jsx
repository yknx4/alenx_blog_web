import React from 'react'
import PureComponent from '../PureComponent'
import readingTime from 'reading-time'
import {formatDate} from '../../code/Utils'

class IndexPost extends PureComponent {
  constructor(props) {
    super(props);
    this.property('post', {attributes: {}})
  }
  hasReadMore() {
    return this.post.attributes.excerpt !== this.post.attributes.body;
  }
  render() {
    const post = this.post;
    const post_attributes = post.attributes;
    return (
      <article>
        <h1 className="article-title"><a href={post.links.self}>{post_attributes.title}</a></h1>
        <p className="article-info">
          on <strong>{formatDate(post_attributes['inserted-at'])}</strong> by <strong>Placeholder Author</strong>
          &middot;
          <span className="f-post-tags"><a href="/tags"><i className="fa fa-tag"></i></a>
            { post_attributes['tag-ids'].map( tag_id =>
              <a className='post-tag' key={tag_id} href={`/tags/${tag_id}`}>{tag_id}, </a>
            )}
          </span>
          &middot; <strong>{ readingTime(post_attributes.body).text } reading time</strong>
        </p>
        <p className="article-summary">{ post_attributes.excerpt }</p>
        { this.hasReadMore() &&
          <a href={post.links.self}><p className="article-read-more">Read more &rarr;</p></a>
        }

      </article>
    );
  }
}

export default IndexPost;
