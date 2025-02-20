import React from 'react';

class userClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: { name: 'test', id: '1234' } };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/arjunthumbayil');
    const json = await data.json();

    this.setState({ userInfo: json });

    console.log(json);
  }
  render() {
    const { name, id, html_url, bio } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {bio}</h3>
        <h4>Contact: {html_url}</h4>
      </div>
    );
  }
}

export default userClass;
