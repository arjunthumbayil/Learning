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

  componentDidUpdate() {
    console.log();
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

/*
 * ------MOUNTING LIFE CYCLE------
 *
 * Constructor (Dummy Data)
 * Render (Dummy Data)
 *        <HTML (with Dummy Data)/>
 * Component Did Mount is called
 *        <API call>
 *        <this.setState> -> State Variable is Updated
 *
 *
 *------UPDATING LIFE CYCLE------
 *
 * Render (API Data)
 *        <HTML (with New API Data)/>
 * Component Did Update is called
 *
 *
 *
 *
 *
 */
