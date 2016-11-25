import React from 'react'
import PureComponent from './PureComponent'
import _ from 'lodash'

const pageGraphemes = {
  first: "««",
  prev: "«",
  next: "»",
  last: "»»"
};

class Pagination extends PureComponent {
  pagesHasLabel(label) {
    return _.includes(Object.keys(this.pages), label);
  }
  currentPage() {
    return this.props.page || 1;
  }
  get pages() {
    return this.props.pages || [];
  }
  klass(label) {
    if (label === "current") {
      return "active"
    } else if (!this.pagesHasLabel(label)) {
      return "disabled"
    } else {
      return ""
    }
  }
  url(label) {
    if (label === 'current') {
      return window.location.href;
    } else if (this.pagesHasLabel(label)) {
      return this.pages[label];
    } else {
      return null;
    }
  }
  ariaLabel(label) {
    if (label === 'current') return null;
    return _.capitalize(label);
  }
  pageElement(label) {
    if(label === 'current') {
      return this.currentPage()
    } else {
      return <span aria-hidden="true">{pageGraphemes[label]}</span>
    }
  }
  render() {
    const labels = ['first', 'prev', 'current', 'next', 'last'];
    return (
      <ul className="pagination">
        { labels.map(label =>
          <li key={label} className={this.klass(label)}>
            <a aria-label={this.ariaLabel(label)} href={this.url(label)}>{this.pageElement(label)}</a>
          </li>
        )}
      </ul>
    );
  }
}

export default Pagination;
