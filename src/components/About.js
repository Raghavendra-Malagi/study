import User from "./User";
import UserClass from "./userClass";
import React from "react";
import UserContext from "../utils/UserContext";
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
      <div className="container">
        <h1>About Us Page</h1>
        <UserClass name={"First Child"} />
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>User:{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}
export default About;
