import React from "react";
import PropsDemo2 from "../PropsDemo2";

const PropsDemo = () => {
  const name = "susheel";
  const name2 = "Rishabh";
  const arr = [{ name: "Shivam" }, { name: "Shailja" }];

  return (
    <div className="flex flex-col">
      <p> props demo : {name}</p>

      <PropsDemo2 name={name} name2={name2} arr={arr} />
    </div>
  );
};

export default PropsDemo;
