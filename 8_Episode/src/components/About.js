import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>This is About page!</h1>
      <User name={'Johnny - Functional'} />
      <UserClass name={'Johnny - Class'} location={'Kolkata - Class'} />
    </div>
  );
};

export default About;
