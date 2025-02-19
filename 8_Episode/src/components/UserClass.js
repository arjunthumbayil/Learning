import React from 'react';

class userClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('ChildConstructor');
  }

  componentDidMount() {
    console.log('Child componentDidMount');
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(name + ' ChildRender');
    return (
      <div className="user-card">
        <h2>CountClass: {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>

        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @John.xyz</h4>
      </div>
    );
  }
}

export default userClass;
