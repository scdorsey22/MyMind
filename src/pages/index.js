import React from "react";
import { Link } from "gatsby";
import LoginPage from "./LoginPage";
import WelcomeLogin from "./WelcomeLogin";
import WelcomePage from "./WelcomePage";

const IndexPage = () => {
  return (
    <div>
      <Link to="/LoginPage">
        <LoginPage />
      </Link>
      <Link to="/WelcomeLogin">
        <WelcomeLogin />
      </Link>
      <Link to="/WelcomePage">
        <WelcomePage />
      </Link>
    </div>
  );
};

export default IndexPage;
