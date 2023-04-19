import { Link } from "react-router-dom";
const Login = () => {
  const SubmitEvent = () => {
    alert("You logged in");
  };
  return (
    <div className="formBody">
      <form className="login" onSubmit={Event}>
        <h2>Welcome</h2>
        <p>Please log in</p>
        <input type="text" placeholder="User Name" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
