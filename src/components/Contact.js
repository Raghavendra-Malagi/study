import useOnlineStatus from "../utils/useOnlineStatus";
const Contact = () => {
  const onlineStatus = useOnlineStatus();
  const Heading = <h1 id="Random">Hello world!</h1>;
  // console.log(Heading);
  return (
    <div className="container">
      <h1>Contact Us Page</h1>
      {/* <h2>Online status {onlineStatus ? alert("online") : alert("offline")}</h2> */}
    </div>
  );
};
export default Contact;
