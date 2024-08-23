import React from "react";
import Input from "./Input";

function Login({isRegister}) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
     { isRegister &&  <Input type="password" placeholder=" Confirm Password" />}
      <button type="submit" >{isRegister ? "Register" : "Login"}</button>
    </form>
  );
}

export default Login;
