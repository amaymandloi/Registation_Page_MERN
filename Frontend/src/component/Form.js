import { useState, useRef } from "react";
import axios from "axios";
export default function Form() {
  // States for registration
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setaddress] = useState("");
  const [contry, setcontry] = useState("");
  const [gender, setgender] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handlefirstName = (e) => {
    setfirstName(e.target.value);
    setSubmitted(false);
  };

  const handlelastName = (e) => {
    setlastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlephoneNumber = (e) => {
    setphoneNumber(e.target.value);
    setSubmitted(false);
  };

  const handlegender = (e) => {
    setgender(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleAddress = (e) => {
    setaddress(e.target.value);
    setSubmitted(false);
  };
  const handleContry = (e) => {
    setcontry(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fieldsIsValid) {
      if (fields.length >= 1) {
        fieldRef.current.focus();
        return;
      }
      return;
    }
    console.log(fields);
    console.log(firstname, lastname, email, gender);

    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      phoneNumber === "" ||
      address === "" ||
      gender === "" ||
      contry === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);

      axios.post("http://localhost:4000/add", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
        contry: contry,
        gender: gender,
        qualification: JSON.stringify(fields),
      });

      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {firstname} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  const [fields, setFields] = useState([""]);
  const fieldRef = useRef();
  const fieldsIsValid =
    fields.length >= 1 && fields.every((field) => field.trim() !== "");
  function handleChange(i, event) {
    const values = [...fields];
    values[i] = event.target.value;
    setFields(values);
  }
  function handleAdd() {
    const values = [...fields];
    values.push("");
    setFields(values);
  }
  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  function submitHandler(event) {
    event.preventDefault();
    if (!fieldsIsValid) {
      if (fields.length >= 1) {
        fieldRef.current.focus();
        return;
      }
      return;
    }
    console.log(fields);
  }
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">FirstName</label>
        <input
          onChange={handlefirstName}
          className="input"
          value={firstname}
          type="text"
        />
        <label className="label">LastName</label>
        <input
          onChange={handlelastName}
          className="input"
          value={lastname}
          type="text"
        />
        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />
        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />
        <label className="label">PhoneNumber</label>
        <input
          onChange={handlephoneNumber}
          className="input"
          value={phoneNumber}
          type="number"
        />
        <label className="label">Address</label>
        <input
          onChange={handleAddress}
          className="input"
          value={address}
          type="text"
        />
        <label className="label">Country</label>
        <input
          onChange={handleContry}
          className="input"
          value={contry}
          type="text"
        />
        <label className="label">Qualification</label>
        {/* start */}
        <div className="App">
          <form onSubmit={submitHandler}>
            {/* {!fieldsIsValid && <p className="error">Input is required</p>} */}
            {fields.map((field, idx) => {
              return (
                <div key={`${"input"}-${idx}`}>
                  <input
                    type="text"
                    placeholder="Enter text"
                    value={field || ""}
                    ref={fieldRef}
                    onChange={(e) => handleChange(idx, e)}
                  />
                  <button type="button" onClick={() => handleRemove(idx)}>
                    {" "}
                    X{" "}
                  </button>{" "}
                </div>
              );
            })}{" "}
            <button type="button" onClick={() => handleAdd()}>
              +Add Input{" "}
            </button>
          </form>
        </div>
        {/* End */}
        {/* <input type="text" placeholder="Enter text" />
        <button type="button"> X </button>{" "}
        <button type="button">+Add Qualification </button> */}
        <label className="label">Gender</label>
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={handlegender}
        />
        Male
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={handlegender}
        />
        Female
        <input
          type="radio"
          value="Other"
          name="gender"
          onChange={handlegender}
        />
        Other
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
