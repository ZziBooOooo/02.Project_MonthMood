import React, { createContext, useEffect, useState } from "react";

const AccountContext = (props) => {
  const [isLogin, setIsLogin] = useState("");
  return (
    <accountStateContext.Provider
      value={{
        isLogin,
        setIsLogin,
      }}
    >
      {props.children}
    </accountStateContext.Provider>
  );
};
export const accountStateContext = createContext();
export default AccountContext;
