import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountServices from "../../../../Services/accountServices";

function Register() {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };

  const [account, setAccount] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const saveAccount = () => {
    var data = {
      username: account.username,
      email: account.email,
      password: account.password,
    };

    AccountServices.register(data)
      .then((res) => {
        setAccount({
          username: res.data.username,
          email: res.data.email,
          password: res.data.password,
        });

        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Username"
              name="username"
              id="username"
              onChange={handleInputChange}
            />
          </div>
        </div>

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
    </>
  );
}

export default Register;
