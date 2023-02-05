import React, { createContext, useEffect, useState } from "react";

const DarkContext = (props) => {
  const [isDark, setIsDark] = useState("");
  /*  useEffect(() => {
    let localDark = window.localStorage.getItem("isDark");
    console.log(localDark);
    if (localDark == null || localDark == true) {
      console.log("다크임");
      //   window.localStorage.setItem("localDark", JSON.stringify(true));
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (localDark == false) {
      console.log("라이트임");
      //   window.localStorage.setItem("localDark", JSON.stringify(false));
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []); */
  return (
    <darkStateContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {props.children}
    </darkStateContext.Provider>
  );
};

export const darkStateContext = createContext();
export default DarkContext;
