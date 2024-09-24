import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Contact = () => {
  const onlineStatus = useOnlineStatus();
  // const Heading = <h1 id="Random">Hello world!</h1>;
  // console.log(Heading);
  return (
    <div className=" bg-black text-center w-[600px] m-auto p-5 text-white my-5">
      <h1 className="font-bold text-4xl py-3">Contact Us Page</h1>
      {/* <h2>Online status {onlineStatus ? alert("online") : alert("offline")}</h2> */}
      <form action="" className="">
        <div className="my-5">
          <input type="text" placeholder="Email" className="w-[400px] p-3" />
          <input
            type="password"
            placeholder="Password"
            className="w-[400px] p-3"
          />
        </div>

        <div className="my-5">
          <button className="bg-red-600 px-10 py-3">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
