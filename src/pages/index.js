import React from "react";
import { Link } from "gatsby";
import LoginPage from "./LoginPage";
import Welcome from "./Welcome";

const IndexPage = () => {
  return (
    <div>
      <h1>Welcome to My Gatsby App</h1>
      <p>This is the home page.</p>
      <Link to="/login">
        <LoginPage />
      </Link>
    </div>
  );
};

export default IndexPage;
