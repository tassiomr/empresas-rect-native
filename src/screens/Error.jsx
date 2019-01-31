import React from 'react';


export default class CatchError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return null;
    }

    return null;
  }
}
