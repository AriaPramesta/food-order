const Button = ({ children, theme }) => {
  let classesTheme = "bg-white";
  let classesOther = "w-full";
  if (theme === "primary") {
    classesTheme =
      "bg-orange-500 h-[60px] rounded-full text-white font-bold text-sm";
  } else if (theme === "secondary") {
    classesTheme =
      "bg-gray-600 h-[54px] font-semibold px-4 rounded-full outline outline-1 outline-white text-white ";
  }

  return <button className={classesTheme + classesOther}>{children}</button>;
};

export default Button;
