import React, { useContext } from "react";
import { FirstName, LastName } from "../../..";

const Component3 = () => {
  // const name = useContext(FirstName);
  return (
    <div>
      Component3
      {/* <p>First Name in Component 3 :{name}</p> */}
      <FirstName.Consumer>{(fname) => <p>{fname}</p>}</FirstName.Consumer>
      <LastName.Consumer>{(lname) => <p>{lname}</p>}</LastName.Consumer>
    </div>
  );
};

export default Component3;
