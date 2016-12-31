import React from 'react'
import PureComponent from '../PureComponent'
import readingTime from 'reading-time'
import {formatDate} from '../../code/Utils'
import ReactMarkdown from "react-markdown";
import { Link } from 'react-router'
import Author from './Author'


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
        <h1 className="article-title"><Link to={post.links.self}>{post_attributes.title}</Link></h1>
        <p className="article-info">
          on <strong>{formatDate(post_attributes['inserted-at'])}</strong> by <strong><Author id={post_attributes['user-id']}/></strong>
          &middot;
          <span className="f-post-tags"><a href="/tags"><i className="fa fa-tag"></i></a>
            { post_attributes['tag-ids'].map( tag_id =>
              <Link className='post-tag' key={tag_id} to={`/tags/${tag_id}`}>{tag_id}, </Link>
            )}
          </span>
          &middot; <strong>{ readingTime(post_attributes.body).text } reading time</strong>
        </p>
        <ReactMarkdown
          source={post.attributes.excerpt}
          skipHtml={true}
          containerTagName="section"
          className="article-summary"
          renderers={{Heading: 'strong'}}
        />
        { this.hasReadMore() &&
          <Link to={post.links.self}><p className="article-read-more">Read more &rarr;</p></Link>
        }

      </article>
    );
  }
}

export default IndexPost;
