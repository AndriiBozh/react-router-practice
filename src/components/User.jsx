import { useLoaderData } from "react-router-dom";

import "./User.css";

const User = () => {
  const user = useLoaderData();

  return (
    <div className="user-container">
      <p>
        <span className="user-details">Name:</span> {user.name}
      </p>
      <p>
        <span className="user-details">Username:</span> {user.username}
      </p>
      <p>
        <span className="user-details">Email:</span> {user.email}
      </p>
      <p>
        <span className="user-details">Address:</span> {user.address.street},{" "}
        {user.address.city}
      </p>
      <p>
        <span className="user-details">Works at:</span> {user.company.name}
      </p>
    </div>
  );
};

export default User;
