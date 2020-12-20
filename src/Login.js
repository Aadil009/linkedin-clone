import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <img
        src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c528.png"
        alt=""
      />
      <form className="">
        <input placeholder="Full name required" type="text" />
        <input type="text" placeholder="Profile pic URL Optional" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
      <p>
        Not a member?
        <span>Register Now</span>
      </p>
    </div>
  );
}

export default Login;
