import { createBrowserRouter, Outlet, useNavigation } from "react-router-dom";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import Users from "./components/Users";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import User from "./components/User";

// by using this <LayoutWithNavbar /> component we render <Navbar /> component on all pages (which are 'children' of <LayoutWithNavbar /> component)
// by doing so, we don't need to export and add <Navbar /> component to all components, where we want the <Navbar /> component

const LayoutWithNavbar = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      {/* instead of "Loading..." text we could use a loading spinner etc */}
      {navigation.state === "loading" ? <h2>Loading...</h2> : <Outlet />}{" "}
      {/* <Outlet /> indicates where child route elements should be rendered*/}
    </>
  );
};

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <LayoutWithNavbar />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/posts",
        children: [
          {
            index: true,
            loader: () => {
              return fetch("http://localhost:3000/posts");
            },
            element: <Posts />,
          },
          {
            path: ":id",
            loader: ({ params }) => {
              return fetch(`http://localhost:3000/posts/${params.id}`);
            },
            element: <Post />,
          },
        ],
      },

      {
        path: "/users",
        children: [
          {
            index: true,
            loader: () => {
              return fetch("http://localhost:3000/users");
            },
            element: <Users />,
          },
          {
            path: ":id",
            loader: ({ params }) => {
              return fetch(`http://localhost:3000/users/${params.id}`);
            },
            element: <User />,
          },
        ],
      },
    ],
  },
]);

export default router;
