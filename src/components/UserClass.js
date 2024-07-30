import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "Constructor Called");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Some Random Location",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "Component Did Mount");
    const data = await fetch("https://api.github.com/users/Raghavendra-Malagi");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // console.log(this.props.name + " Rendered");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card container">
        <img src={avatar_url} alt="" />
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @RaghavendraMalagi</h4>
      </div>
    );
  }
}
export default UserClass;
