import React, { useState } from "react";
import App from "./App";
import Header from "./components/AdminDashboard/header";
import Logo from "../src/img/logo.png";
import UserHeader from "./components/userDashboard/header";
function Scrap() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginType, setLoginType] = useState("");
  const [auth, setAuth] = useState("");
  const database = [
    {
      username: "user1",
      password: "pass1",
      type: "admin",
    },
    {
      username: "user2",
      password: "pass2",
      type: "user",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // success
        localStorage.setItem("usertype", userData.type);
        localStorage.setItem("username", userData.username);
        setIsSubmitted(true);
        setLoginType(userData.type);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="formBody">
      <form className="login" onSubmit={handleSubmit}>
        <img src={Logo} alt="no img" className="logo" />
        <h2>Welcome</h2>
        <h2>Aditya Generators</h2>
        <p>Please log in</p>
        <input type="text" placeholder="User Name" required name="uname" />
        {renderErrorMessage("uname")}
        <input type="password" placeholder="Password" name="pass" required />
        {renderErrorMessage("pass")}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

  return (
    <>
      {localStorage.getItem("usertype") == "admin" ? (
        <div>
          <Header />
        </div>
      ) : localStorage.getItem("usertype") == "user" ? (
        <div>
          <UserHeader />
        </div>
      ) : (
        <div className="app">{renderForm}</div>
      )}
    </>
  );
}

export default Scrap;
