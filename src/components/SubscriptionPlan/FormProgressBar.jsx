import React from "react";
import classes from "./FormProgressBar.module.scss";

function FormProgressBar() {
  return (
    <div className={classes["form__progress-bar"]}>
      <div className={classes["stage"]}>
        <span className={classes["icon"]}>1</span>
        <span className={classes["text"]}>sign up</span>
      </div>
      <div className={classes["stage"]}>
        <span className={classes["icon"]}>2</span>
        <span className={classes["text"]}>subscribe</span>
      </div>
    </div>
  );
}

export default FormProgressBar;
