import React, { useState } from "react";
import classes from "./Main.module.scss";
import SubscriptionContent from "../SubscriptionContent/SubscriptionContent";
import SubscriptionPlan from "../SubscriptionPlan/SubscriptionPlan";

function Main() {
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(99);

  const discountPriceHandler = function (price) {
    setPriceAfterDiscount(price);
  };

  return (
    <main className={classes.main}>
      <SubscriptionContent finalPrice={priceAfterDiscount} />
      <SubscriptionPlan onDiscount={discountPriceHandler} />
    </main>
  );
}

export default Main;
