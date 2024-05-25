const Input = ({ label, inputType, inputName }) => {
  let style = "flex flex-col";
  return (
    <div className={style}>
      <label htmlFor={label} className="opacity-60">
        {label}
      </label>
      <input
        type={inputType}
        id={label}
        name={inputName}
        className="h-[60px] outline outline-1 outline-gray-500 focus:outline-orange-500 rounded-md p-2 focus:opacity-100"
      />
    </div>
  );
};

export default Input;
