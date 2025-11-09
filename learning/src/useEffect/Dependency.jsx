import { useState, useEffect } from "react";

function Dependency() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+</button>
      <p>Multiple of count by 2: {calculation}</p>
    </>
  );
}

export default Dependency;
