import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className="error-container container">
      <h1>Oops!!! page not found</h1>
      <h2>Not able to load the content for page requested</h2>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
