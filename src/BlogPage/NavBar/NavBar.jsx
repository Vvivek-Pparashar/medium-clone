import { useState } from "react";
// import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

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
        <div className={`${style["left-blog-nav"]}`}>
          <img
            className={`${style["logo-blog"]}`}
            src="../../../assests/landingPage/darkLogo.png"
            alt="logo"
          />
          <div className={`${style["input-wrapper"]}`}>
            <input
              className={`${style["blog-nav-input"]}`}
              type={"text"}
              placeholder="search"
            />
            <SearchIcon className={`${style["search-logo"]}`} />
          </div>
        </div>

        <Link to={"/write"} style={{ textDecoration: "none" }}>
          <div className={`${style["right-blog-nav"]}`}>
            <EditNoteIcon className={`${style["write-logo"]}`} />
            <p className={`${style["right-blog-nav-p"]}`}>write</p>
          </div>
        </Link>
      </ul>
    </div>
  );
};
