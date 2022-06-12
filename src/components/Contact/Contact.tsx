import React, { useEffect, useState } from "react";
import ContactInput from "./ContactInput";
const secretPass = "12345";
const Contact = () => {
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [dataIsShown, setDataIsShown] = useState<boolean>(false);
  const onChangePasswordInput = (val: string) => {
    setPasswordInput(val);
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
            <ContactInput
              inputValue={passwordInput}
              inputPlaceholder="You have to have a special password to see informations here."
              inputType="password"
              onChangeHandler={onChangePasswordInput}
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
