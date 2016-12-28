import React from 'react'
import PureComponent from '../PureComponent'
import {connect} from 'react-redux';
import ReactMarkdown from "react-markdown";
import Settings from "../../blog_settings.json"


class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.property('post', {attributes: {}})
  }
  render() {
    const post = this.post;
    const post_attributes = post.attributes;
    const permalink = post_attributes['legacy-permalink'] || `http:${Settings.baseurl}${post.links.self}`;
    // post.attributes.body = "# Header \n## Header 2\n Holi";
    return (
        <article className="article-content">
          <ReactMarkdown source={post.attributes.body} skipHtml={true} />
          <section className="article-social">
            <section className="article-social-info">
              <div className="fb-like pull-right" data-href={permalink} data-layout="button_count" data-action="like" data-show-faces="false" data-share="true">
              </div>
              <div className="pull-left">
                <span className="f-post-tags">
                  <a href="/tags"><i className="fa fa-tag"/></a>
                  { post_attributes['tag-ids'].map( tag_id =>
                    <a className='post-tag' key={tag_id} href={`/tags/${tag_id}`}>
                      {tag_id},
                    </a>
                  )}
                </span>
              </div>
            </section>
            <div className="fb-comments" data-href={permalink} data-width="100%"  data-numposts="5">
            </div>
          </section>
        </article>
    );
  }
}


function mapStateToProps(state) {
  return {
    post: state.get('post')
  };
}

const ConnectedPost = connect(mapStateToProps)(Post);

export default ConnectedPost
export {Post}