import { createContext, useEffect, useState } from "react";
import axios from "axios";

import React from "react";

const UserInfoContext = (props) => {
  const [name, setName] = useState(); // 유저 이름
  const [age, setAge] = useState(); // 유저 나이

  const UserInfo = {
    name,
    setName,
    age,
    setAge,
  };

  return (
    <UserInfoContextStore.Provider value={UserInfo}>
      {props.children}
    </UserInfoContextStore.Provider>
  );
};

export const UserInfoContextStore = createContext();
export default UserInfoContext;
