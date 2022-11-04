import { useState, useEffect, useRef } from "react";
import validate from "../../utils/validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../utils/notify";
import { Outlet, Link } from "react-router-dom";
export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errorrs, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const handler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const focusHandler = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      password: true,
      confirm: true,
      isAccepted: true,
    });
    if (Object.keys(errorrs).length) {
      notify("error", "invalid data !");
    } else {
      notify("success", "you loged in !");
    }
  };
  return (
    <>
      <form className="Sign_in" onSubmit={submitHandler}>
        <h1 className="Topic">Login</h1>
        <div>
          <input
            name="email"
            className="text_Input"
            type="text"
            onChange={handler}
            onFocus={focusHandler}
            placeholder="Email"
          />
          {errorrs.email && touched.email && (
            <span className="error">{errorrs.email}</span>
          )}
        </div>
        <div>
          <input
            name="password"
            className="text_Input"
            type="password"
            onChange={handler}
            onFocus={focusHandler}
            placeholder="Password"
          />
          {errorrs.password && touched.password && (
            <span className="error">{errorrs.password}</span>
          )}
        </div>
        <div className="btns">
          <button className="submit_btn" type="submit">
            Login
          </button>
          <div className="login_btn">
            <Link to={`/sign-up`}>Sign-up</Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}