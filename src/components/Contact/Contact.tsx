import React, { useEffect, useState } from "react";
const secretPass = "12345";
const Contact = () => {
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [dataIsShown, setDataIsShown] = useState<boolean>(false);
  const onChangePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };
  useEffect(() => {
    if (passwordInput === secretPass) setDataIsShown(true);
  }, [passwordInput]);
  return (
    <div>
      <h1 className="text-yellow-700 text-center text-4xl font-[codeFont]">
        Contact
      </h1>
      <div className="grid grid-cols-2 border-2 border-yellow-700">
        <div>
          <form>
            <input type="email" />
          </form>
        </div>
        <div>
          <h1>Personal Informations</h1>'
          <input
            value={passwordInput}
            type="password"
            onChange={onChangePasswordInput}
          />
          {dataIsShown && (
            <a href="https://drive.google.com/file/d/1AxgMK-n9kZOl3kcQI5yrJxYGWM_1wNDU/view?usp=sharing">
              My resume
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
