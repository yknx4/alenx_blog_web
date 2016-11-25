// eslint-disable-next-line
import React from 'react'
import PureComponent from './PureComponent'

class ThemeColor extends PureComponent {
  colorScheme(props) {
    props = props || this.props;
    return `color-scheme-${props.name}`;
  }
  componentDidMount() {
    document.body.classList.add(this.colorScheme());
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.remove(this.colorScheme());
    document.body.classList.add(this.colorScheme(nextProps));
  }
  componentWillUnmount() {
    document.body.classList.remove(this.colorScheme());
  }
  render() {
    return null;
  }
}

export default ThemeColor;