import React from "react";
import classes from "./SubscriptionPlan.module.scss";

function SubscriptionPlan() {
  return (
    <div className={classes["subscriptionPlan"]}>
      <form className={classes.form}>
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
        <h2></h2>
      </form>
    </div>
  );
}

export default SubscriptionPlan;
