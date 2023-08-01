import { Close } from "@mui/icons-material";
import { Button, Dialog, TextField } from "@mui/material";
import React, { useState } from "react";

const SignUpCopy = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("SignUp");
  const [errors, setErrors] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData, "Form Submitted");
    const error = {};
    if (!formData.name) {
      error.name = "Name is Required";
    }
    if (!formData.email) {
      error.email = "email is Required";
    }

    if (!formData.phone) {
      error.phone = "phone is Required";
    } else if (formData.phone.length !== 10) {
      error.phone = "Phone Number is Invalid";
    }

    if (!formData.password) {
      error.password = "password is Required";
    }

    if (Object.keys(error).length === 0) {
      alert("Form Submitted");
    }
    setErrors(error);
  };
  const handleLogin = (event) => {
    event.preventDefault();
  };
  const handleChange = (event, id, id2) => {
    console.log(id2);
    // setFormData({
    //   ...formData,
    //   [event.target.id]: event.target.value,
    // });
  };
  console.log(errors, "errors");

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
              id="name"
              color={errors.name ? "error" : "primary"}
              label="Name"
              type="text"
              value={formData.name}
              onChange={(event) => handleChange(event, 10, 20)}
            />
            <p className="text-xs text-red-500">{errors.name}</p>
            <TextField
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="text-xs text-red-500">{errors.email}</p>

            <TextField
              id="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
            />
            <p className="text-xs text-red-500">{errors.phone}</p>

            <TextField
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <p className="text-xs text-red-500">{errors.password}</p>

            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
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

export default SignUpCopy;
