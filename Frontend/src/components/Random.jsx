import React, { useState } from "react";

const Random = () => {
  const [pass,setPass] = useState("");
  let randomCode = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "1234567890";
  const chooseAlpha = Math.floor(Math.random() * 26);
  randomCode += String(alphabet[chooseAlpha]);
  for (let i = 0; i < 9; i++) {
    const temp = Math.floor(Math.random() * 10);
    randomCode += number[temp];
  }
  console.log(randomCode);

  async function genearteRandomPass() {
    let password  = "";

    for (let i = 0; i < 3; i++) {
      let res = await fetch("https://random-word-api.herokuapp.com/word");
      const word = await res.json();
      password += word;
    }

    if (password.length > 10) {
      password = password.slice(0, 10);
    }
    password = password.charAt(0).toUpperCase() + password.slice(1);

    const randomnumer = Math.floor(Math.random() * 1000);
    password += randomnumer;

    setPass(password);
  }

  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-[320px] text-center">
        <h2 className="text-white text-xl font-semibold mb-4">
          Password Generator
        </h2>

        <input
          type="text"
          value={pass}
          readOnly
          placeholder="Your password..."
          className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white text-center outline-none"
        />

        <button
          onClick={genearteRandomPass}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
        >
          Generate Password
        </button>
      </div>
    </div>
    
    </div>
  );
};

export default Random;
