import classNames from "classnames";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [image, setImage] = useState(1);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  // useEffect(() => {
  //   setTimeout(() => {
  //     setImage(image + 1);
  //   }, 3000);
  // });

  // useEffect(() => {
  //   alert("Welcome");
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      // alert("Image changed");

      // if (arr.length !== image) {
      //   setImage(image + 1);
      // } else {
      //   setImage(image);
      // }
      arr.length !== image ? setImage(image + 1) : setImage(image);
    }, 3000);
    // // alert("Image changed");
  });
  return (
    <div className="min-h-[90vh] flex flex-col gap-5 justify-center items-center">
      <span>
        <img
          src={`https://source.unsplash.com/random/900x700/?fruit/${image}`}
          alt=""
          className="h-96 transition-all duration-500 hover:scale-102 "
        />
      </span>
      <span className="flex flex-wrap w-[800px] gap-5">
        {arr.map((i) => {
          return (
            <img
              src={`https://source.unsplash.com/random/900x700/?fruit/${i}`}
              alt=""
              className={classNames(
                "h-20 w-20 transition-all duration-400 hover:scale-110",
                i === image && "border-2 border-green-400 p-2"
              )}
              onDoubleClick={() => setImage(i)}
            />
          );
        })}
      </span>
    </div>
  );
};

export default Home;
