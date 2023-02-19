import React from "react";

const PrimaryButton = ({children}) => {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white">
      {children}
    </button>
  );
};

export default PrimaryButton;
