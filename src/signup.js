import Header from "./Header";

const signup = () => {
  return (
    <>
      <Header />
      <div className="ssiign">
        <div className="center">
          <h1>Login</h1>
          <form method="post">
            <div className="txt_field">
              <input type="text" required="" />
              <span />
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="password" required="" />
              <span />
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" defaultValue="Login" />
            <div className="signup_link">
              Not a member? <a href="#">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
