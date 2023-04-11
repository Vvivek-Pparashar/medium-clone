import { useState } from "react";
// import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Link } from "react-router-dom";

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
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div className={`${style["logo"]}`}></div>
          <input type={"text"} placeholder="search" />
        </div>

        <Link to={"/write"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <EditNoteIcon />
            <p>write</p>
          </div>
        </Link>
      </ul>
    </div>
  );
};
