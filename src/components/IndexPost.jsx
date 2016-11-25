import React from 'react'
import PureComponent from './PureComponent'
import readingTime from 'reading-time'
import {formatDate} from '../code/Utils'

class Index extends PureComponent {
  render() {
    const post = this.props.post;
    const post_attributes = post.attributes;
    console.log(post_attributes);
    console.log(new Date(post_attributes['inserted-at']));
    return (
      <article>
        <h1 className="article-title"><a href={post.links.self}>{post_attributes.title}</a></h1>
        <p className="article-info">
          on <strong>{formatDate(post_attributes['inserted-at'])}</strong> by <strong>Placeholder Author</strong>
          &middot;
          <span className="f-post-tags"><a href="/tags"><i className="fa fa-tag"></i></a>
            { post_attributes['tag-ids'].map( tag_id =>
              <a key={tag_id} href={`/tags/${tag_id}`}>{tag_id}, </a>
            )}
          </span>
          &middot; <strong>{ readingTime(post_attributes.body).text } reading time</strong>
        </p>
        <p className="article-summary">{ post_attributes.excerpt }</p>
        { post_attributes.excerpt !== post_attributes.body &&
          <a href={post.links.self}><p className="article-read-more">Read more &rarr;</p></a>
        }

      </article>
    );
  }
}

export default Index;