import React from "react";

const Button = ({ styles, text = "Get Started" }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}
    >
      {text}
    </button>
  );
};

export default Button;
