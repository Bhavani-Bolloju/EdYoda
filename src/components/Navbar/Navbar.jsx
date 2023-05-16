import React from "react";
import classes from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={classes["navbar"]}>
      <div className={classes["navbar__logo"]}>edyoda</div>
      <div className={classes["navbar__options"]}>courses</div>
      <div className={classes["navbar__options"]}>programs</div>

      <div className={classes["navbar__search"]}>
        <input type="text" />
        <button className={classes.btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <button className={classes["btn"]}>log in</button>
      <button className={`${classes["btn"]} ${classes["btn--primary"]}`}>
        join now
      </button>
    </nav>
  );
}

export default Navbar;
