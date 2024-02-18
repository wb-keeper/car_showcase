"use client";
import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import Image from "next/image";
interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}}`}>{title}</span>
    </button>
  );
};

export default Button;
