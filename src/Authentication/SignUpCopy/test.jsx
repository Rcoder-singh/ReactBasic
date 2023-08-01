import React, { useState } from "react";
const Counter = ({onvaluechange}) => {
  return (
    <>
      <input type="number" className="bg-green-600 text-white" onChange={(e)=>{onvaluechange(e.target.valueAsNumber);}} />
    </>
  );
};
const Output = ({value}) => {
    return(
        <>
            
            <p > I have typed this into the input box :{value}  </p>
        </>
    )
}
const Main = () => {
    const [currentvalue, setCurrentvalue] = useState(0)
    console.log(currentvalue);
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
              <Counter onvaluechange={(value)=>setCurrentvalue(value)}/>
              <Output value={ currentvalue} />
      </div>
    </div>
  );
};

export default Main;
