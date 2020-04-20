import React, { useState, useEffect } from "react";

function Test2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    return () => {
      console.log("count");
    };
  }, [count]);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击
      </button>
    </div>
  );
}

export default Test2;
