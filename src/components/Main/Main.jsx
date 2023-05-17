import React from "react";
import classes from "./Main.module.scss";
import SubscriptionContent from "../SubscriptionContent/SubscriptionContent";
import SubscriptionPlan from "../SubscriptionPlan/SubscriptionPlan";

function Main() {
  return (
    <main className={classes.main}>
      <SubscriptionContent />
      <SubscriptionPlan />
    </main>
  );
}

export default Main;
