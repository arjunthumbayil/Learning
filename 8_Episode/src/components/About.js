import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>This is About page!</h1>
      <UserClass name={'Johnny - Class'} location={'Kolkata - Class'} />
      <User name={'Johnny - Functional'} />
    </div>
  );
};

export default About;
