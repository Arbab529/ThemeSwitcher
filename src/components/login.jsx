import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>{user}</h1>
      <button onClick={() => setUser("Arbab")}>set user</button>
    </>
  );
};

export default Login;
