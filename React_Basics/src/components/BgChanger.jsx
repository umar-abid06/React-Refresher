import React, { useState } from "react";

const BgChanger = () => {
  const colors = [
    {
      name: "RED",
      code: "#ef4444",
    },
    {
      name: "Green",
      code: "#3f6212",
    },
    {
      name: "Blue",
      code: "#06b6d4",
    },
  ];
  const [colorCode, setColorCode] = useState(colors[0].code);
  const onChangeColor = (code) => {
    setColorCode(code);
  };
  return (
    <div className={`w-full h-screen bg-[${colorCode}]`}>
      <div className="flex flex-row justify-between w-96">
        {colors.map((item) => (
          <button
            key={item.code}
            onClick={() => onChangeColor(item.code)}
            className={`bg-[${item.code}] mt-10 w-full p-2 border  text-white`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BgChanger;
