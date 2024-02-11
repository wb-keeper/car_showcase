"use client";
import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import Image from "next/image";
interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
}
const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default Button;
