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
      <div className="grid grid-cols-2 place-items-center border-t-2 border-yellow-700 ">
        <div className="grid place-items-center ">
          <h1 className="text-center text-yellow-700 text-center text-2xl font-[codeFont]">
            Contact me
          </h1>
          <form>
            <input type="email" />
          </form>
        </div>
        <div className="grid place-items-center">
          <h1 className=" text-yellow-700 text-center text-2xl font-[codeFont]">
            Personal Informations
          </h1>

          {!dataIsShown && (
            <input
              value={passwordInput}
              placeholder="You have to have a special password to see informations here."
              type="password"
              onChange={onChangePasswordInput}
            />
          )}
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
