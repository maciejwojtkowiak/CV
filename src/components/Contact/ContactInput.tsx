import React from "react";

interface funcProps {
  inputValue: string;
  inputPlaceholder: string;
  inputType: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInput: React.FC<funcProps> = (props) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeHandler(e);
  };
  return (
    <div>
      <input
        onChange={onInputChange}
        value={props.inputValue}
        placeholder={props.inputPlaceholder}
        type={props.inputType}
        className="focus:outline-0 bg-white py-4 px-4 rounded-full"
      />
    </div>
  );
};

export default ContactInput;
