import React from 'react';

class userClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>CountClass: {this.state.count}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @John.xyz</h4>
      </div>
    );
  }
}

export default userClass;
