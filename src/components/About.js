import User from "./User";
import UserClass from "./userClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor called");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent rendered");
    return (
      <div className="about-container">
        <h1>About Us Page</h1>
        <UserClass name={"First Child"} />
      </div>
    );
  }
}
export default About;
