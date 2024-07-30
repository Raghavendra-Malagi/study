import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Heading = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const onlineStatus = useOnlineStatus();
  console.log(cartItems);
  useEffect(() => {});
  return (
    <div className="heading  h-[100px] flex bg-white justify-between shadow-lg">
      {/* <h1>Heading</h1> */}
      <div className="logo">
        <Link to="/">
          <img
            className=" w-[120px] h-[100%] object-cover"
            src={LOGO_URL}
            alt="Site Logo"
          />
        </Link>
      </div>
      <div className="nav-item">
        <ul className="flex justify-between items-center mt-5 ">
          <li className="px-10 font-bold">
            <span className="text-orange-500">Online Status:</span>{" "}
            {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-10">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="text-2xl  text-green-600 font-bold hover:text-green-400 focus:text-green-700"
            >
              Home
            </Link>
          </li>
          <li className="p-10">
            <Link
              to="/about"
              style={{ textDecoration: "none" }}
              className="text-2xl  text-green-600 font-bold hover:text-green-400 focus:text-green-700"
            >
              About
            </Link>
          </li>

          <li className="p-10">
            <Link
              to="/contact"
              style={{ textDecoration: "none" }}
              className="text-2xl  text-green-600 font-bold hover:text-green-400 focus:text-green-700"
            >
              Contact
            </Link>
          </li>
          <li className="p-10">
            <Link
              to="/grocery"
              style={{ textDecoration: "none" }}
              className="text-2xl text-green-500 font-bold hover:text-green-400 focus:text-green-700"
            >
              Grocery
            </Link>
          </li>
          <li className="p-10">
            <button
              className="text-2xl text-green-500 font-bold"
              onClick={() =>
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className="p-10">
            <Link
              to="/cart"
              style={{ textDecoration: "none" }}
              className="text-3xl  text-green-600 font-bold hover:text-green-400 focus:text-green-700"
            >
              Cart ({cartItems.length})
            </Link>
          </li>
          <li className="p-10 text-2xl text-black font-bold">{loggedInUser}</li>

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
