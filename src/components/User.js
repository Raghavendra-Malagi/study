const User = (props) => {
  return (
    <div className="user-card container">
      <h2>Name: {props.name}</h2>
      <h3>Location: H.B Halli</h3>
      <h4>Contact: @Raghavendra.malagi</h4>
    </div>
  );
};
export default User;
