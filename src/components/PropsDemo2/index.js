import React from "react";
import PropsDemo3 from "../PropsDemo3";

const PropsDemo2 = (props) => {
  return (
    <div>
      PropsDemo2 :{props.name2}
      <div>
        Array :
        {props.arr.map((i) => {
          return <p>{i.name}</p>;
        })}
      </div>
      <PropsDemo3 name={props.name} />
    </div>
  );
};

export default PropsDemo2;
