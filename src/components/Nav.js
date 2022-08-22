import React from 'react';
import { GiHamburgerMenu as MenuIcon } from 'react-icons/Gi';

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__section-1">
          <ul className="nav__menu">
            {/* <img className="nav__logo" src="./img/logo-1.png" /> */}
            <li className="nav__link">
              <a href="#advantages">Why codingtutor.io ?</a>
            </li>
            <li className="nav__link">
              <a href="#courses">Courses</a>
            </li>
            <li className="nav__link">
              <a href="#testimony">Testimonies</a>
            </li>
            <li className="nav__link">
              <a href="#prices">Prices</a>
            </li>
            <li className="nav__link">
              <a href="#booking">Book a lesson</a>
            </li>
          </ul>
        </div>
        <div className="nav__contact">
          <button className="button--small">
            <a href="#booking">Réserver →</a>
          </button>
        </div>
      </nav>

      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="#advantages">Why codingtutor.io ?</a>
                </li>
                <li>
                  <a href="#courses">Courses</a>
                </li>
                <li>
                  <a href="#testimony">Testimonies</a>
                </li>
                <li>
                  <a href="#prices">Prices</a>
                </li>
                <li>
                  <a href="#booking">Book a lesson</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;