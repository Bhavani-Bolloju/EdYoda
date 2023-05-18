import React, { useState } from "react";
import classes from "./SubscriptionPlan.module.scss";
import FormProgressBar from "./FormProgressBar";
import TextField from "./TextField";
import SummaryContainer from "./SummaryContainer";
import payment from "../../assests/Razorpay-Icon.png";
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
    status: ""
  },
  {
    months: 6,
    totalPrice: 149,
    perMonth: 25,
    status: ""
  },
  {
    months: 3,
    totalPrice: 99,
    perMonth: 33,
    status: ""
  }
];

function SubscriptionPlan({ onDiscount }) {
  const [selectedPlan, setSelectedPlan] = useState(0);

  const selectPlanHandler = function (id) {
    setSelectedPlan(id);

    onDiscount(plans[id].totalPrice);
  };

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
              onSelect={selectPlanHandler.bind(null, i)}
              selectedPlan={selectedPlan}
              id={i}
              key={i}
            />
          ))}
        </div>
        <SummaryContainer />

        <div className={classes["buttons-container"]}>
          <button className={`${classes["btn"]} ${classes["btn--outline"]}`}>
            cancel
          </button>
          <button className={`${classes["btn"]} ${classes["btn--fill"]}`}>
            proceed to pay
          </button>
        </div>

        <img
          src={payment}
          alt="razorpay icon"
          className={classes["payment-image"]}
        />
      </form>
    </div>
  );
}

export default SubscriptionPlan;
