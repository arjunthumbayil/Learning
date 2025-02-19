import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('ParentConstructor');
  }

  componentDidMount() {
    console.log('Parent componentDidMount');
  }

  render() {
    console.log('ParentRender');
    return (
      <div>
        <h1>This is About Class Component!</h1>
        <UserClass name={'Johnny - Class'} location={'Kolkata - Class'} />
      </div>
    );
  }
}

export default About;
