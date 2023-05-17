import React from "react";
import classes from "./SubscriptionPlan.module.scss";
import FormProgressBar from "./FormProgressBar";
import TextField from "./TextField";

const plans = [
  {
    months: 12,
    totalPrice: 99,
    perMonth: 8,
    status: "expired"
  },
  {
    months: 12,
    totalPrice: 179,
    perMonth: 15,
    status: "active"
  },
  {
    months: 6,
    totalPrice: 149,
    perMonth: 25,
    status: "active"
  },
  {
    months: 3,
    totalPrice: 99,
    perMonth: 33,
    status: "active"
  }
];

function SubscriptionPlan() {
  return (
    <div className={classes["subscriptionPlan"]}>
      <form className={classes.form}>
        <FormProgressBar />
        <h2 className={classes["form__header"]}>
          Select your subscription plan
        </h2>
        <div className={classes["form__input-container"]}>
          {plans.map((plan, i) => (
            <TextField
              totalPrice={plan.totalPrice}
              pricePerMonth={plan.perMonth}
              months={plan.months}
              status={plan.status}
              id={i}
              key={i}
            />
          ))}
        </div>
      </form>
    </div>
  );
}

export default SubscriptionPlan;
