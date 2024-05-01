import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const subtractValue = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  console.log("Value Added", counter);
  return (
    <>
      <h1 className=" bg-black">Chai or React Series</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={subtractValue}>Decrease Value</button>
    </>
  );
}

export default Counter;
