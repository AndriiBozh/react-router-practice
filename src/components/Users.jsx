import { Link, useLoaderData } from "react-router-dom";

import "./Users.css";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="users-container">
      <ul className="users-grid-container">
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Company: {user.company.name}</p>
            <p>Email: {user.email}</p>
            <Link to={user.id}> Full profile</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
