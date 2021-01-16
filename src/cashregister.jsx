import React, { useEffect, useState } from "react";

const CashRegister = () => {
  const [bill, setBill] = useState();
  const [cash, setCash] = useState();
  const [ret, setReturn] = useState();
  const [result, setResult] = useState({});
  let notes = {
    2000: 0,
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0
  };
  useEffect(() => {
    if (bill === "" || cash === "") {
      setResult("");
    }
  }, [bill, cash]);

  function clickHandler() {
    let diff = cash - bill;
    setReturn(cash - bill);
    let note = Object.keys(notes);
    let quotient;
    console.log(diff);
    for (let i = note.length; i--; ) {
      quotient = Math.floor(diff / note[i]);
      if (quotient >= 1) {
        diff = diff - quotient * note[i];
        notes[note[i]] = quotient;
      }
    }
    setResult(notes);
  }
  return (
    <div>
      <h1>Cash Register Manager</h1>
      <label>
        Bill Amount:
        <input
          placeholder="Enter bill amount"
          onChange={(e) => setBill(e.target.value)}
          type="number"
        />
      </label>
      <br /> <br />
      <label>
        Received Cash:
        <input
          placeholder="Enter received amount"
          onChange={(e) => setCash(e.target.value)}
          type="number"
        />
      </label>
      <br />
      <br />
      <button onClick={clickHandler}>Submit</button>
      <br /> <br />
      {Object.keys(result).length > 0 ? (
        <strong>Total Amount to Return: {ret}</strong>
      ) : (
        ""
      )}
      <ul style={{ listStyle: "none" }}>
        {Object.keys(result).map((res) => {
          // console.log(res, "....", result[res]);
          if (result[res] >= 1) {
            return (
              <li key={res}>
                Return {result[res]} note of {res} Rs.
              </li>
            );
          }
          return "";
        })}
      </ul>
    </div>
  );
};

export default CashRegister;
