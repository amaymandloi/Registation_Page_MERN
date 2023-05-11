import React, { useState, useRef } from "react";
// import "./styles.css";
function App() {
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
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form onSubmit={submitHandler}>
        {!fieldsIsValid && <p className="error">Input is required</p>}
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
        <button className="margin-top" type="submit">
          {" "}
          Submit{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
export default App;
