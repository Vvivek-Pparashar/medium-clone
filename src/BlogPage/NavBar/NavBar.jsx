import { useState } from "react";
// import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

export const NavBar = () => {
  const [display, setDisplay] = useState(`${style["m"]}`);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= 30) {
      prevScrollpos < currentScrollPos
        ? setDisplay(`${style["m"]} ${style["scrollUp"]}`)
        : setDisplay(`${style["m"]} ${style["scrollDown"]}`);
      prevScrollpos = currentScrollPos;
    }
  };
  return (
    <div className="App">
      <ul className={display}>
        <div className={`${style["logo"]}`}></div>
      </ul>
    </div>
  );
};
