import React from "react";
import classes from "./SubscriptionContent.module.scss";
import live from "../../assests/llive-Icon.svg";
import clock from "../../assests/clock-icon.svg";
import time from "../../assests/time-icon.svg";
import scholarship from "../../assests/scholarship-icon.svg";
import courses from "../../assests/courses-icon.svg";
import adfree from "../../assests/ad-free-icon.svg";

const ListItem = function ({ image, text, number, className = "" }) {
  return (
    <li className={classes.item}>
      <img src={image} alt={text} />
      <div
        className={
          className == ""
            ? `${classes["item__content"]}`
            : `${classes["item__content"]} ${classes["item__reverse"]}`
        }
      >
        <span className={classes["item__content--highlight"]}>{number}</span>
        <span>{text}</span>
      </div>
    </li>
  );
};

function SubscriptionContent() {
  return (
    <section className={classes["subscription-content"]}>
      <h1>
        Access curated courses worth
        <span className={classes["price"]}> &#8377; 18,500 </span>at just{" "}
        <span className={`${classes["price"]} ${classes["price--highlight"]}`}>
          &#8377; 99{" "}
        </span>
        per year
      </h1>
      <ul className={classes["list"]}>
        <ListItem image={courses} text="job relevant courses" number="100+ " />
        <ListItem image={time} text="Hours of content" number="20,000+ " />
        <ListItem image={live} text="Webinar access" number="Exclusive " />
        <ListItem
          image={scholarship}
          text="Scholarship worth"
          number="₹94,500 "
          className="reverse"
        />
        <ListItem
          image={adfree}
          text="learning experience"
          number="Add Free "
        />
      </ul>
    </section>
  );
}

export default SubscriptionContent;
