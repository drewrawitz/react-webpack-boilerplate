import './header.scss';
import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      count: this.props.initialCount
    }
  }

  static defaultProps = {
    initialCount: 0,
    maxCount: 10
  }

  add = () => {
    const count = this.state.count + 1;

    if (count <= this.props.maxCount) {
      this.setState({ count })
    }
  }

  subtract = () => {
    const count = this.state.count - 1;

    if (count >= this.props.initialCount) {
      this.setState({ count })
    }
  }

  render() {
    return (
      <div className="header">
        <h2 className="header__heading">Count: {this.state.count}</h2>
        <button onClick={this.add} disabled={this.state.count >= this.props.maxCount}>Add</button>
        <button onClick={this.subtract} disabled={this.state.count <= this.props.initialCount}>Subtract</button>
      </div>
    );
  }
}
