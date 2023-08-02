import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { signUpSchema } from "../../Schema";
import { Visibility } from "@mui/icons-material";

const FormikDemo = () => {
  const [visibility, setVisibility] = useState(false);
  const { handleSubmit, handleChange, values, errors, isValid } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: () => {
      console.log(values, "values");
    },
  });
  console.log(errors, "errors", isValid, "isValid");
  // const {
  //   handleSubmit: handleSubmit2,
  //   handleChange: handleChange2,
  //   values: values2,
  // } = useFormik({
  //   initialValues: {
  //     name: "",
  //   },
  //   onSubmit: () => {
  //     console.log(values2, "values");
  //   },
  // });

  const functionPasssword = () => {
    // visibility ? setVisibility(false) : setVisibility(true);
    setVisibility(!visibility);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5">
        <TextField
          id="name"
          label="Name"
          type="text"
          value={values.name}
          onChange={(event) => handleChange(event)}
          helperText={errors.name}
        />

        <TextField
          id="email"
          type="text"
          value={values.email}
          onChange={handleChange}
          FormHelperTextProps={{ className: "!text-red-500" }}
          helperText={errors.email}
        />

        <TextField
          id="phone"
          type="number"
          value={values.phone}
          onChange={handleChange}
          helperText={errors.phone}
        />

        <TextField
          id="password"
          type={visibility ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
          helperText={errors.password}
        />
        <Visibility onClick={functionPasssword} />
        <TextField
          id="confirm_password"
          type="password"
          value={values.confirm_password}
          onChange={handleChange}
          helperText={errors.confirm_password}
        />

        <Button
          disabled={!isValid}
          type="submit"
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </form>

      {/* <form onSubmit={handleSubmit2}>
        <input
          id="name"
          type="text"
          value={values2.name}
          onChange={handleChange2}
        />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default FormikDemo;
