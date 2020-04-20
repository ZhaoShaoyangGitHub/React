import React, { useState } from "react";

function Test1() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("shaoyang");
  return (
    <div>
      <div>
        年龄: {age}
        <button
          onClick={() => {
            return setAge(age + 1);
          }}
        >
          Click me
        </button>
      </div>
      <div>
        姓名: {name}
        <button
          onClick={() => {
            return setName("zhaoshaoyang");
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default Test1;
