"use client";
import { FC, SyntheticEvent } from "react";
import classes from "./button.module.css";

type TButton = {
  label: string;
};

const Button: FC<TButton> = ({ label }) => {
  const clickHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log("Button clicked");
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
