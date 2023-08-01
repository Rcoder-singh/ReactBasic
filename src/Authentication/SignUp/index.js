import { Close } from "@mui/icons-material";
import { Button, Dialog, TextField } from "@mui/material";
import React, { useState } from "react";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [nameSet, setNameSet] = useState("");
  const [page, setPage] = useState("SignUp");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    setNameSet(name);
  };
  const handleLogin = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Button onClick={handleOpen}>Sign Up</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ className: "w-full h-5/6" }}
      >
        <div className="relative p-5">
          <Close
            className="!absolute top-1 right-1 text-red-300 hover:text-red-900 cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <span className="flex  gap-5">
          <Button onClick={() => setPage("SignUp")}>Sign Up</Button>{" "}
          <Button onClick={() => setPage("SignIn")}>Sign In</Button>
        </span>
        {page === "SignUp" ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5">
            <TextField
              label="Name"
              placeholder="Enter Your Name"
              // value={name}
              // onChange={(event) => setName(event.target.value)}
            />
            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>

            <p>Form Value</p>
            <p>Name : {nameSet}</p>
          </form>
        ) : (
          <>
            <form onSubmit={handleLogin}>
              <p>SignIn</p>
            </form>
          </>
        )}
      </Dialog>
    </>
  );
};

export default SignUp;
