import React from 'react'

class ThemeColor extends React.Component {
  colorTheme(name) {
    return `color-scheme-${name || this.props.name || 'white'}`;
  }
  componentDidMount() {
    document.body.classList.add(this.colorTheme(nextProps.name));
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.remove(this.colorTheme());
    document.body.classList.add(this.colorTheme(nextProps && nextProps.name));
  }
  componentWillUnmount() {
    document.body.classList.remove(this.colorTheme());
  }
  render() {
    return null;
  }
}

export default ThemeColor;