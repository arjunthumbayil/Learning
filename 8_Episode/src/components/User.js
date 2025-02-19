const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Kolkata</h3>
      <h4>Contact: @John.xyz</h4>
    </div>
  );
};

export default User;
