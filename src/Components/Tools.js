//
import React, { useState } from "react";

const Tools = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [num1, setNum1] = useState("Num1");
  const [num2, setNum2] = useState("Num2");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState();

  function getCalculation() {
    if (!num1) {
      setError("Num1 Cannot Be Empty");
      setSuccess("");
      setResult("");
      return;
    }
    if (!num2) {
      setError("Num2 Cannot Be Empty");
      setSuccess("");
      setResult("");
      return;
    }

    if (!/^-?\d+(\.\d+)?$/.test(num1) || !/^-?\d+(\.\d+)?$/.test(num2)) {
      setError("Please enter valid input!");
      setSuccess("");
      setResult("");
      return;
    }

    const input1 = parseFloat(num1);
    const input2 = parseFloat(num2);
    performOperation(operator, input1, input2);
  }

  function performOperation(icon, input1, input2) {
    setError("");
    setSuccess("Success!");
    if (icon === "add") {
      setResult(input1 + input2);
    }
    if (icon === "minus") {
      setResult(input1 - input2);
    }
    if (icon === "multiply") {
      setResult(input1 * input2);
    }
    if (icon === "divide") {
      setResult(input1 / input2);
    }
  }

  return (
    <div className="main_div">
      <h2>React Calculator</h2>
      <div className="sub_div">
        {/* Inputs to take value from user */}
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        {/* All buttons with class buttons */}
        <div className="buttons">
          <button
            onClick={() => {
              setOperator("add");
              getCalculation();
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setOperator("minus");
              getCalculation();
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setOperator("multiply");
              getCalculation();
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              setOperator("divide");
              getCalculation();
            }}
          >
            /
          </button>
        </div>
        {/* Erron and Success messages     */}
        <div className="success&error">
          {error && (
            <div>
              <p id="Error_msg">Error!</p>
              <br />
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div>
              <p id="success_msg">Success!</p>
              <br />
              <p>Result - {result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;
