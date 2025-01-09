import { useState } from "react";

const EMI = () => {
  const [principle, setPrinciple] = useState();
  const [interest, setInterest] = useState();
  const [years, setYears] = useState();
  const [result, setResult] = useState();

  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "principle") {
      setPrinciple(value);
    } else if (name === "interest") {
      setInterest(value);
    } else if (name === "years") {
      setYears(value);
    }
  };

  const handleCalculate = () => {
    // emi = p(r(1+r)^n/(1-r)^n-1);
    let r = interest;
    if (principle && interest && years) {
      r = r / 12 / 100;
      let powerCal = Math.pow(1 + r, years * 12);
      let emi = principle * ((r * powerCal) / (powerCal - 1));
      setResult(Math.round(emi));
    }
  };

  return (
    <>
      <div className="container">
        <h1>EMI Calculator</h1>
        <div>
          <p>Enter Amount : </p>
          <input
            type="text"
            placeholder="Enter Amount"
            onChange={handleInput}
            name="principle"
          />

          <p>Enter Interest : </p>
          <input
            type="text"
            placeholder="Enter Interest"
            onChange={handleInput}
            name="interest"
          />

          <p>Enter Years : </p>
          <input
            type="text"
            placeholder="Enter Years"
            onChange={handleInput}
            name="years"
          />
        </div>
        <button onClick={handleCalculate}>Calculate EMI</button>
        <div className="result">
          <p>Total EMI is : {result}</p>
        </div>
      </div>
    </>
  );
};

export default EMI;
