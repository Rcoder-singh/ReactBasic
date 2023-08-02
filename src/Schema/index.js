import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("email is required").email("Email is Invalid"),
  phone: Yup.string()
    .required("phone is required")
    .min(10, "Phone Number Should be at least 10 digits"),
  password: Yup.string().required("password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Not Match. ")
    .required("Confirm Password is Required"),
});
