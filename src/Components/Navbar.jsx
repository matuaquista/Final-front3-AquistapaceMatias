import styles from "./Navbar.module.css";
import React, { useContext } from "react";
import { GlobalContext } from "./utils/global.context";

const Navbar = () => {
  const { Theme, handleThemeChange } = useContext(GlobalContext);

  return (
    <header className="sticky-top">
      <nav
        // className={`navbar navbar-expand-sm bg-light`}
        className={`navbar navbar-expand-sm`}
        aria-label="Third navbar example"
        style={{ background: Theme.backgroundNavbar }}
      >
        <div className="container">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/">
            DH Aquistapace
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <a
                  className="nav-link"
                  href="/"
                  style={{ color: Theme.colorNavbar }}
                >
                  Home
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <a
                  className="nav-link"
                  href="/contact"
                  style={{ color: Theme.colorNavbar }}
                >
                  Contact
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <a
                  className="nav-link"
                  href="/destacados"
                  style={{ color: Theme.colorNavbar }}
                >
                  Destacados
                </a>
              </li>
              <li className={`nav-item`}>
                <button
                  onClick={handleThemeChange}
                  className={`btn btn-light${styles.btnStyle}`}
                >
                  ☀ 🌙{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
