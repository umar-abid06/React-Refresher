import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [numAllowed, setNumAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (specialAllowed) str += "!@#$%^&*-{}[]~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, specialAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, specialAllowed, generatePassword]);

  return (
    <div className="bg-gray-700 w-full h-screen flex justify-center items-center flex-col ">
      <div className="w-auto bg-slate-300 p-6 rounded-md">
        <input
          type="text"
          value={password}
          readOnly
          className="px-2 py-2 font-medium outline-none rounded-md w-96 text-black"
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="p-2 bg-slate-600 text-white rounded-md"
        >
          Copy
        </button>
        <div className="flex text-sm gap-x-2 mt-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className=" text-base font-medium">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              value={numAllowed}
              defaultChecked={false}
              onChange={() => setNumAllowed((prev) => !prev)}
              className=" w-4 h-4"
            />
            <label htmlFor="numberInput" className=" text-base font-medium">
              Numbers{" "}
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              value={specialAllowed}
              defaultChecked={false}
              onChange={() => setSpecialAllowed((prev) => !prev)}
              className=" w-4 h-4"
            />
            <label htmlFor="characterInput" className=" text-base font-medium">
              Characters{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
