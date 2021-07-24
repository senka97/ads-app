import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authService } from "../services/auth-service";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Minimum 8 characters required"),
      confirmPassword: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      phoneNumber: Yup.string().required("Phone number is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setShowErrorMsg(false);
        resetForm();
        await authService.register(values);
        history.push("/login");
      } catch (error) {
        if (error.response.status === 400) {
          setErrorMsg("Username already exists, choose another one");
        } else {
          setErrorMsg(error.code ? error.response.data : error.message);
        }
        setShowErrorMsg(true);
        setTimeout(() => {
          setShowErrorMsg(false);
        }, 5000);
      }
    },
  });

  return (
    <div>
      <Header />
      <div className="pt-5">
        <div
          className="card shadow-lg ms-auto me-auto mt-5"
          style={{
            maxWidth: "30rem",
          }}
        >
          <h1 className="card-title mb-3">Register</h1>
          <form
            onSubmit={formik.handleSubmit}
            style={{ width: "90%", margin: "auto" }}
          >
            <div className="form-group mt-2">
              <label htmlFor="username">Username:</label>
              <input
                className="form-control"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <p style={{ color: "red" }}>{formik.errors.username}</p>
              ) : null}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="password">Password (8 characters minimum):</label>
              <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <p style={{ color: "red" }}>{formik.errors.password}</p>
              ) : null}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="confirmPassword">Confirm password:</label>
              <input
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
              ) : null}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Enter phone number"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <p style={{ color: "red" }}>{formik.errors.phoneNumber}</p>
              ) : null}
            </div>
            <div className="d-flex justify-content-end mt-2 mb-2">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
        {showErrorMsg && (
          <div
            className="card mt-3 ms-auto me-auto"
            style={{
              maxWidth: "40rem",
              backgroundColor: "#ff7e75",
            }}
          >
            <h4>{errorMsg}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
