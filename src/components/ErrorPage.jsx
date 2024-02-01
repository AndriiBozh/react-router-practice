import { Link, useRouteError } from "react-router-dom";

import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h3>Sorry!</h3>
      <p>An unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
