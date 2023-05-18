import React from "react";
import classes from "./TextField.module.scss";

const SubsctiptionPrice = function ({ totalPrice, pricePerMonth }) {
  return (
    <div className={classes["subscription__price"]}>
      <div className={classes["total"]}>
        <span className={classes["total__text"]}>Total</span>
        <span className={classes["total__price"]}>&#8377;{totalPrice}</span>
      </div>
      <div className={classes["per-month"]}>
        <span className={classes["per-month__price"]}>
          &#8377;{pricePerMonth}
        </span>
        <span className={classes["per-month__text"]}>/mo</span>
      </div>
    </div>
  );
};

function TextField({
  totalPrice,
  pricePerMonth,
  id,
  months,
  status,
  onSelect,
  selectedPlan
}) {
  let activeClassName = `${classes["form__input-control"]} ${classes[status]}`;

  let checkValue = false;

  if (status == "expired") {
    checkValue = true;
  }

  if (status !== "expired" && selectedPlan == id) {
    checkValue = true;
  }

  if (status !== "expired" && checkValue) {
    activeClassName = `${classes["form__input-control"]} ${classes["active"]}`;
  }

  return (
    <div className={activeClassName}>
      <input type="radio" id={id} onChange={onSelect} checked={checkValue} />
      <div className={classes["check-box"]}></div>
      <label htmlFor={id} className={classes["subscription"]}>
        <div className={classes["subscription__period"]}>
          {months} months subscription
        </div>
        <SubsctiptionPrice
          totalPrice={totalPrice}
          pricePerMonth={pricePerMonth}
        />
      </label>
      {status === "expired" && (
        <div className={`${classes["tag"]} ${classes["tag--expired"]}`}>
          Offer expired
        </div>
      )}
      {totalPrice == "179" && (
        <div className={`${classes["tag"]} ${classes["tag--recommended"]}`}>
          Recommended
        </div>
      )}
    </div>
  );
}

export default TextField;
