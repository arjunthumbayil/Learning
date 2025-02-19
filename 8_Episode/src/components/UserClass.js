import React from 'react';

class userClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, count_2: 1 };
  }
  render() {
    const { name, location } = this.props;
    const { count, count_2 } = this.state;
    return (
      <div className="user-card">
        <h2>CountClass: {count}</h2>
        <h2>CountClass_2: {count_2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @John.xyz</h4>
      </div>
    );
  }
}

export default userClass;
