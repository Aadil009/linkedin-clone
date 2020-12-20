import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {};

  return (
    <div className="login">
      <img
        src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c528.png"
        alt=""
      />
      <form className="">
        <input
          value={name}
          onchange={(e) => setName(e.target.value)}
          placeholder="Full name required"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile pic URL Optional"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
