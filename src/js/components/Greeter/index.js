import React from 'react';

export default class Greeter extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      name: this.props.initialName
    }
  }

  static defaultProps = {
    initialName: 'Drew'
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <div className="greeter">
        <h2>Hello, {this.state.name}!</h2>
        <p>Change greeting:</p>
        <input type="text" value={this.state.name} name="greeted" onChange={this.handleChange} />
      </div>
    );
  }
}
