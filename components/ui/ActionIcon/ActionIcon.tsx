import { FC, ReactNode } from "react";
import classes from "./actionIcon.module.css";

type TActionIcon = {
  variant: "outline" | "transparent";
  size: "sm" | "md" | "lg";
  color?: "blue" | "red";
  style?: object | undefined;
  children: ReactNode;
  onClick?: () => void;
};

const ActionIcon: FC<TActionIcon> = ({
  variant,
  size,
  color,
  style,
  children,
  onClick,
}) => {
  return (
    <div
      className={`
        ${classes.actionIcon}
        ${variant === "outline" && classes.outline}
        ${variant === "transparent" && classes.transparent}
        ${size === "sm" && classes.sm}
        ${size === "md" && classes.md}
        ${size === "lg" && classes.lg}
        ${color === "blue" && classes.colorBlue}
        ${color === "red" && classes.colorRed}
      `}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ActionIcon;
