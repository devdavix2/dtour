import React from "react";

const Buttons = (props) => {
  return (
    <div>
      <button
        className={`${
          props.backgroundColor
        } text-black rounded-full px-8 py-2 font font-medium hover:bg-[#8482ff] hover:text-white transition-all`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Buttons;
