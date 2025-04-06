import { FC, ReactNode } from "react";
import classes from "./tooltip.module.css";

type TTooltip = {
  label: string;
  children: ReactNode;
};

const Tooltip: FC<TTooltip> = ({ label, children }) => {
  return (
    <div className={classes.tooltipBtn}>
      {children}
      <div className={classes.tooltip}>
        <div className={classes.label}>{label}</div>
      </div>
    </div>
  );
};

export default Tooltip;
