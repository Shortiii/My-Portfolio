import "./Navbar.css";
import toyinLogo from "../../assets/toyinLogo.png";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpen from "../../assets/menu_open.svg";
import menuClose from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="nav-bar" id="home">
      <img src={toyinLogo} alt="logo" />
      <div onClick={() => openMenu()} className="menu-open">
        <img src={menuOpen} alt="" />
      </div>
      <ul ref={menuRef} className="nav-menu">
        <div onClick={() => closeMenu()} className="menu-close">
          <img src={menuClose} alt="" />
        </div>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
            {menu === "home" ? <hr className="underline" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
            {menu === "about" ? <hr className="underline" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills" skills>
            <p onClick={() => setMenu("skills")}>Skills</p>
            {menu === "skills" ? <hr className="underline" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
            {menu === "projects" ? <hr className="underline" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact Me</p>
            {menu === "contact" ? <hr className="underline" /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect" onClick={() => setMenu("contact")}>
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
