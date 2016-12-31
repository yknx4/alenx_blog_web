import React from 'react'
import PureComponent from '../PureComponent'
import {connect} from 'react-redux';
import ReactMarkdown from "react-markdown";
import Settings from "../../blog_settings.json"
import { List, Map } from 'immutable'
import Spinner from 'react-spinkit'
import _ from 'lodash'


class Post extends PureComponent {
  get post() {
    return this.props.post.toJS();
  }
  render() {
    const post = this.post;
    if (_.isEmpty(post)) return <Spinner spinnerName="wave" />;

    const post_attributes = post.attributes;
    const permalink = post_attributes['legacy-permalink'] || `http:${Settings.baseurl}${post.links.self.substring(1)}`;
    console.log(permalink);
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


function mapStateToProps(state, props) {
  const id = props.params.id;
  const posts = state.getIn(['api', 'posts', 'data'], new List());
  return {
    post: posts.find((v) => {return v.get('id') === id}) || new Map()
  };
}

const ConnectedPost = connect(mapStateToProps)(Post);

export default ConnectedPost
export {Post}