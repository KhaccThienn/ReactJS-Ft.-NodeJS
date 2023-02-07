import React, { useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router-dom";
import AccountServices from "../../../../Services/accountServices";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const [account, setAccount] = useState(initialState);
  const [cookies, setCookie] = useCookies(['token']);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const saveAccount = () => {
    var data = {
      email: account.email,
      password: account.password,
    };

    AccountServices.login(data)
      .then((res) => {
        const token = res.data.token.token;
        setCookie('token', token, { path: '/' });
        setAccount({
          email: res.data.email,
          password: res.data.password,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container p-4">

      <div className="row mt-2">
        <div className="col-lg-6">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control rounded-0"
            placeholder="Email"
            name="email"
            id="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-lg-6">
          <label htmlFor="username">Password</label>
          <input
            type="password"
            className="form-control rounded-0"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button
        type="button"
        name="btn"
        id="btn"
        className="btn mt-3 rounded-0 btn-outline-success btn-block"
        onClick={saveAccount}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
