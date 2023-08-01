import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const FormikDemo = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: () => {
      console.log(values, "values");
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5">
        <TextField
          id="name"
          label="Name"
          type="text"
          value={values.name}
          onChange={(event) => handleChange(event)}
        />

        <TextField
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />

        <TextField
          id="phone"
          type="number"
          value={values.phone}
          onChange={handleChange}
        />

        <TextField
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <TextField
          id="confirm_password"
          type="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" color="success">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormikDemo;
