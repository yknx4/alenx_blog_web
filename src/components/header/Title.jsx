import React from 'react'
import PureComponent from '../PureComponent'
import Badge from './Badge'
import Wrapper from '../Wrapper'
import {connect} from 'react-redux';
import {formatDate, isMainPage} from '../../code/Utils'
import StateHelper from '../../code/StateHelper'
import { List } from 'immutable'
import ImmutablePropTypes from "react-immutable-proptypes"

const MAIN_TYPE = "main";
const POST_TYPE = "posts";
const PAGE_TYPE = "pages";

class Title extends PureComponent {
  constructor(props) {
    super(props);
    this.properties({
      title: String,
      subtitle: String,
      tagline: String,
      date: Date,
      type: MAIN_TYPE
    });
  }

  get badges() {
    return this.props.badges.toJS();
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
    } else if(this.isType(POST_TYPE)) {
      return this.postTitle;
    } else if(this.isType(PAGE_TYPE)) {
      return this.pageTitle;
    }
  }

  isType(type) {
    return this.type === type;
  }
}

Title.propTypes = {
  badges: ImmutablePropTypes.list
};
Title.defaultProps = {
  badges: new List()
};

function mapStateToProps(state) {
  const settings = state.getIn(['app', 'settings']);
  const stateHelper = new StateHelper(state);
  const post = stateHelper.getCurrentPost();
  return {
    title: isMainPage()? settings.get("title") : post.getIn(['attributes', 'title'], ""),
    subtitle: settings.get("subtitle"),
    tagline: settings.get("tagline"),
    badges: settings.get("badges"),
    date: post.getIn(['attributes', 'inserted-at'], new Date()),
    type: isMainPage()? 'main' : post.get("type", "main")
  };
}
const ConnectedTitle = connect(mapStateToProps)(Title);
export {Title}
export default ConnectedTitle
