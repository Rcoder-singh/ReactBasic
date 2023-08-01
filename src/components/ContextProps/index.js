import React, { createContext } from "react";
import Component1 from "./Component1";

const FirstName = createContext();
const LastName = createContext();

const ContextProps = () => {
  const fname = "Shivam";
  const lname = "Tiwari";

  return (
    <div>
      ContextProps
      <FirstName.Provider value={fname}>
        <LastName.Provider value={lname}>
          <Component1 />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
};
export { FirstName, LastName };
export default ContextProps;
