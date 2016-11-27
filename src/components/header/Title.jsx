import React from 'react'
import PureComponent from '../PureComponent'
import Badge from '../Badge'
import Wrapper from '../Wrapper'
import _ from 'lodash'
import {connect} from 'react-redux';
import {formatDate} from '../../code/Utils'

const MAIN_TYPE = "main"
const POST_TYPE = "post"
const PAGE_TYPE = "page"

class Title extends PureComponent {
  constructor(props) {
    super(props);
    this.properties({
      title: String,
      subtitle: String,
      tagline: String,
      badges: Array,
      date: Date,
      type: MAIN_TYPE
    });
  }

  get pageTitle() {
    return <h1 className="title">{this.title}</h1>;
  }

  get postTitle() {
    return (
      <Wrapper>
        {this.pageTitle}
        <aside>
          <p>on <strong>{formatDate(this.date)}</strong></p>
        </aside>
      </Wrapper>
    );
  }

  get mainTitle() {
    return(
      <Wrapper>
        <h1 className="brand">{this.title}<small>{this.subtitle}</small></h1>
        <aside>
          <p dangerouslySetInnerHTML={{__html: this.tagline}} />
          <p>
            { this.badges.map(badge =>
              <Badge key={badge.id} badge={badge}/>
            )}
          </p>
        </aside>
      </Wrapper>
    );
  }

  render() {
    if(this.isType(MAIN_TYPE)) {
      return this.mainTitle;
    }
    if(this.isType(POST_TYPE)) {
      return this.postTitle;
    }
    if(this.isType(PAGE_TYPE)) {
      return this.pageTitle;
    }
  }

  isType(type) {
    return this.type === type;
  }
}

function mapStateToProps(state) {
  const settings = state.get('settings')
  return {
    title: settings.get("title"),
    subtitle: settings.get("subtitle"),
    tagline: settings.get("tagline"),
    badges: settings.get("badges"),
    date: state.getIn(['post', 'date']),
    type: state.getIn(['post', 'type'])
  };
}
const ConnectedTitle = connect(mapStateToProps)(Title);
export {Title}
export default ConnectedTitle
