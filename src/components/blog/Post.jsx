import React from 'react'
import PureComponent from '../PureComponent'
import {connect} from 'react-redux';
import ReactMarkdown from "react-markdown";
import Settings from "../../blog_settings.json"
import Spinner from 'react-spinkit'
import _ from 'lodash'
import StateHelper from '../../code/StateHelper'
import DispatchHelper from '../../code/DispatchHelper'
import {Map} from 'immutable'


class Post extends PureComponent {
  get post() {
    return this.props.post.toJS();
  }
  componentDidMount() {
    this.props.setCurrentId();
  }
  render() {
    const post = this.post;
    if (_.isEmpty(post)) return <div style={{margin: 'auto'}}> <Spinner spinnerName="wave" /> </div>;
    const post_attributes = post.attributes;
    const permalink = post_attributes['legacy-permalink'] || `http:${Settings.baseurl}${post.links.self.substring(1)}`;
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
Post.propTypes = {
  setCurrentId: React.PropTypes.func,
  post: React.PropTypes.object
};
Post.defaultProps = {
  setCurrentId: _.noop,
  post: new Map()
};


function mapStateToProps(state, props) {
  const id = props.params.id;
  const stateHelper = new StateHelper(state);
  return {
    post: stateHelper.getPost(id)
  };
}

function mapDispatchToProps(dispatch, props) {
  const id = props.params.id;
  const dispatchHelper = new DispatchHelper(dispatch);
  return {
    setCurrentId: dispatchHelper.setCurrentId.bind(dispatchHelper, id)
  }
}

const ConnectedPost = connect(mapStateToProps, mapDispatchToProps)(Post);

export default ConnectedPost
export {Post}