"use client";
import { FC, SyntheticEvent } from "react";
import classes from "./button.module.css";

type TButton = {
  label: string;
  variant: "default" | "filled" | "transparent";
  color?: "blue" | "red" | "green" | "grape";
  size?: "sm" | "md" | "lg";
};

const Button: FC<TButton> = ({ label, variant, color, size }) => {
  const clickHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
  };

  const classNames = [
    classes.button,
    classes[variant],
    color && variant === "filled" ? classes[color] : null,
    size ? classes[size] : classes.md,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
