interface funcProps {
  inputValue: string;
  inputPlaceholder: string;
  inputType: string;
  onChangeHandler: (val: string) => void;
}

const ContactInput: React.FC<funcProps> = (props) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeHandler(e.target.value);
  };
  return (
    <div>
      <input
        onChange={onInputChange}
        value={props.inputValue}
        placeholder={props.inputPlaceholder}
        type={props.inputType}
        className="focus:outline-0 bg-red-500"
      />
    </div>
  );
};

export default ContactInput;
