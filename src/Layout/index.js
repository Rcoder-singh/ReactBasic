import React, { useEffect, useState } from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import classNames from "classnames";

const Layout = ({ component }) => {
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
  // console.log(props.name, "Layout");
  // useEffect(() => {
  // setTimeout(() => {
  // alert("Image changed");
  // if (arr.length !== image) {
  //   setImage(image + 1);
  // } else {
  //   setImage(image);
  // }
  // alert(`Welcome ${name}`);
  // arr.length !== image ? setImage(image + 1) : setImage(image);
  // }, 3000);
  // // alert("Image changed");
  // });
  return (
    <>
      <Header />
      {component}
      <Footer />
    </>
  );
};

export default Layout;
