import { useState } from "react";
import '../../App.css';  

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="headerSection">
      {/* Left Section */}
      <div className="left">
        <h2>Shopping Mall</h2>
      </div>

      {/* Center Section (Navigation Menu) */}
      <div className="center">
        <ul>
          <li onClick={() => toggleMenu("women")}>
            Women
            <ul className={openMenu === "women" ? "submenu open" : "submenu"}>
              <li>Kurthi</li>
              <li>Saree</li>
              <li>Frock</li>
            </ul>
          </li>
          <li onClick={() => toggleMenu("men")}>
            Men
            <ul className={openMenu === "men" ? "submenu open" : "submenu"}>
              <li>Shirt</li>
              <li>Jeans</li>
              <li>T-Shirts</li>
            </ul>
          </li>
          <li onClick={() => toggleMenu("children")}>
            Children
            <ul className={openMenu === "children" ? "submenu open" : "submenu"}>
              <li>Shirts</li>
              <li>Frocks</li>
              <li>Night Wear</li>
              <li>Pants</li>
            </ul>
          </li>
          <li onClick={() => toggleMenu("beauty")}>
            Beauty
            <ul className={openMenu === "beauty" ? "submenu open" : "submenu"}>
              <li>Foundation</li>
              <li>Lipstick</li>
              <li>Lippencil</li>
              <li>EyeShadow</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Search Section */}
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Right Section */}
      <div className="right">
        <div className="signin">Sign in / Sign up</div>
        <div className="cart">Cart</div>
      </div>
    </div>
  );
};

export default Header;

