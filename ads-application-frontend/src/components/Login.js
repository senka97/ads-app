import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authService } from "../services/auth-service";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setShowErrorMsg(false);
        resetForm();
        const response = await authService.login(values);
        localStorage.setItem("token", response.accessToken);
        localStorage.setItem("currentUserUsername", response.username);
        window.location.href = "/";
      } catch (error) {
        if (error.response) {
          console.log("Error: " + JSON.stringify(error.response));
        }
        setErrorMsg(error.response ? error.response.data : error.message);
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
          <h1 className="card-title mb-3">Login</h1>
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
              <label htmlFor="password">Password:</label>
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

export default Login;
