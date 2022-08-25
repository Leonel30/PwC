import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import swal from "sweetalert";

import "./register.css";

const initialState = {
  name: "",
  date: "",
  address: "",
  phone: "",
};
export const Register = () => {
  const navigate = useNavigate();

  const { addUser, logged } = useContext(UserContext);

  const [user, setUser] = useState(initialState);

  const { name, date, address, phone } = user;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const [errorName, setErrorName] = useState("");
  const [stateName, setStateName] = useState(false);

  const [errorData, setErrorData] = useState("");
  const [stateData, setStateData] = useState(false);

  const [errorAddress, setErrorAddress] = useState("");
  const [stateAddress, setStateAddress] = useState(false);

  const [errorPhone, setErrorPhone] = useState("");
  const [statePhone, setStatePhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validar = () => {
      if (name.trim().length < 1) {
        console.log("los casilla name no pueden estar vacias");
        setErrorName("the input can't be emty");
        setStateName(true);
      } else {
        setStateName(false);
      }
      if (date.trim().length < 1) {
        console.log("los casilla address no pueden estar vacias");
        setErrorData("the input can't be emty");
        setStateData(true);
      } else {
        setStateData(false);
      }
      if (address.trim().length < 1) {
        console.log("los casilla address no pueden estar vacias");
        setErrorAddress("the input can't be emty");
        setStateAddress(true);
      } else {
        setStateAddress(false);
      }
      if (phone.trim().length < 1) {
        console.log("los casilla phone no pueden estar vacias");
        setErrorPhone("the input can't be emty");
        setStatePhone(true);
        return;
      } else {
        setStatePhone(false);
      }

      return true;
    };
    const isValidated = validar();

    console.log(validar());

    if (isValidated) {
      addUser(user);
      setUser(initialState);

      localStorage.setItem("user", JSON.stringify(user));
      swal({
        title: "Welcome",
        text: "User Successfully registered",
        icon: "success",
      });
      setTimeout(() => {
        logged();
        navigate("/table");
      }, 1000);
    }
  };

  return (
    <>
      <div className="container container_register col-4">
        <header>
          {" "}
          <h2>Registration</h2>
        </header>
        <form>
          <label className="form-label">User Name</label>
          <input
            className={
              stateName ? "form-control mb-0 error" : "form-control mb-3"
            }
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          {stateName && <p className="p_error">{errorName}</p>}
          <label className="form-label">Date</label>
          <input
            className={
              stateData ? "form-control mb-0 error" : "form-control mb-3"
            }
            type="date"
            min="1985-01-01"
            required={true}
            placeholder="Date"
            name="date"
            value={date}
            onChange={handleInputChange}
          />
          {stateData && <p className="p_error">{errorData}</p>}
          <label className="form-label">User Address</label>
          <input
            className={
              stateAddress ? "form-control mb-0 error" : "form-control mb-3"
            }
            type="text"
            placeholder="Your Address"
            name="address"
            value={address}
            onChange={handleInputChange}
          />
          {stateAddress && <p className="p_error">{errorAddress}</p>}
          <label className="form-label">User Phone</label>
          <input
            className={
              statePhone ? "form-control mb-0 error" : "form-control mb-3"
            }
            type="number"
            placeholder="Your mobile phone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
          {statePhone && <p className="p_error">{errorPhone}</p>}
          <div className="btn_register">
            <button type="submit" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
