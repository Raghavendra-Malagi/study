import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Heading = () => {
  // let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // const [coutr, setCountr] = useState(0);
  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCountr(coutr + 1);
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    // };
  });
  // console.log("Header Rendered");
  return (
    <div className="heading">
      {/* <h1>Heading</h1> */}
      <div className="logo">
        <Link to="/">
          <img src={LOGO_URL} alt="Site Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅Online" : "🔴Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          {/* <li>
            <button
              className="btnLogin"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
                setCountr(coutr + 1);
              }}
            >
              {btnName}
              {coutr}
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default Heading;
