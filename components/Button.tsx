"use client";
import React, { MouseEventHandler } from "react";
import Image from "next/image";
interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ title, containerStyles, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type="submit"
      className="custon-btn"
      onClick={() => {}}
    >
      <span className="flex-1">title</span>
    </button>
  );
};

export default Button;
