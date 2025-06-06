"use client";
import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="text-accent text-5xl animate-spin">
      <ImSpinner2 />
    </div>
  );
};

export default Spinner;
