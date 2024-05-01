import React from "react";
import Login from "./reactContextComponents/components/Login";
import UserContextProvider from "./reactContextComponents/context/UserContextProvider";
import Profile from "./reactContextComponents/components/Profile";

const ReactContext = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default ReactContext;
