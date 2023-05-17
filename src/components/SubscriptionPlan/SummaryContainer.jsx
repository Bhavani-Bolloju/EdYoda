import React from "react";
import classes from "./SummaryContainer.module.scss";
import clock from "../../assests/clock-icon.svg";

function SummaryContainer() {
  return (
    <div className={classes["price-summary"]}>
      <div className={classes["price-summary__text-container"]}>
        <span className={classes["price-summary__text"]}>subscription fee</span>
        <span className={classes["price-summary__amount"]}>&#8377;18,500</span>
      </div>
      <div className={classes["offer-alert"]}>
        <div className={classes["offer-alert__header"]}>
          <span className={classes["offer-alert__text"]}>
            Limited time offer
          </span>
          <span className={classes["offer-alert__price"]}>- &#8377;18,401</span>
        </div>
        <div className={classes["offer-alert__body"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span>offer valid till 05th May 2023</span>
        </div>
      </div>
      <div className={classes["price-summary__total"]}>
        <div className={classes["price-summary__total-left"]}>
          <span>Total</span>
          <span>(Incl. of 18% GST)</span>
        </div>
        <span className={classes["price-summary__total-right"]}>
          &#8377;149
        </span>
      </div>
    </div>
  );
}

export default SummaryContainer;
