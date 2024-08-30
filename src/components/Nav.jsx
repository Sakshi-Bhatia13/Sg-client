import "../css/nav.css";
import Login from "../Views/Login";
import logo from "../imgs/logo-2.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffSet || document.documentElement.scrollTop;
      const isVisible = scrollPos > currentScrollPos || currentScrollPos < 100;

      setIsVisible(isVisible);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [50000]);
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const HandleLoginButton = () => {
    window.location.href = "/login";
  };

  const HandleCart = () => {
    window.location.href = "/cart";
  };
  const HandleWishList = () => {
    window.location.href = "/wishlist";
  };
  useEffect(() => {
    setShowDropdown(false);
  }, [isVisible]);

  function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
  }
  // function toggleMenu2() {
  //   const navbar = document.querySelector(".navbar2");
  //   navbar.classList.toggle("show");
  // }

  return (
    <div>
      <div className={isVisible ? "navbar2 not-show" : "navbar2"}>
        <div className="menubar">
          <div>
            <img className="logo-2" src={logo} alt="" />
          </div>
          {/* <div className="hamburger-menu" onClick={toggleMenu2}>
          <i className="fa-solid fa-bars"></i>
        </div> */}
        </div>
        <div className="navcontainer2">
          <div
            className={`navelement ${
              location.pathname === "/" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/")}
          >
            {" "}
            Home
          </div>
          <div
            className={`nav-filter-element ${
              location.pathname === "/gemstones" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/gemstones")}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Gemstones
            {showDropdown && (
              <div className="dropdown-content">
                <div className="drop-element">Featured</div>
                <div className="drop-element">Ruby</div>
                <div className="drop-element">Emerald</div>
                <div className="drop-element">Sapphire</div>
                <div className="drop-element">Diamond</div>
              </div>
            )}
          </div>

          <div
            className={`nav-filter-element ${
              location.pathname === "/jewellery" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/jewellery")}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Jewellery
            {showDropdown && (
              <div className="dropdown-content">
                <div className="drop-element">Featured</div>
                <div className="drop-element">Rings</div>
                <div className="drop-element">Necklace</div>
                <div className="drop-element">Pendants</div>
                <div className="drop-element">Bangles</div>
              </div>
            )}
          </div>

          <div
            className={`navelement ${
              location.pathname === "/education" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/education")}
          >
            Education
          </div>
          <div
            className={`navelement ${
              location.pathname === "/services" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/services")}
          >
            Services
          </div>
          <div
            className={`navelement ${
              location.pathname === "/contact" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact Us
          </div>
        </div>
        <div>
          <button className="nav-login-buttons" onClick={HandleLoginButton}>
            <i className="fa-solid fa-user"></i>
          </button>
          <button className="nav-login-buttons">
            <i className="fa-solid fa-heart" onClick={HandleWishList}></i>
          </button>

          <button className="nav-login-buttons">
            <i className="fas fa-shopping-cart" onClick={HandleCart}></i>
          </button>
        </div>
      </div>

      <div className={isVisible ? "navbar" : "navbar not-show"}>
        <div className="nav-login-section">
          <button className="nav-login-buttons" onClick={HandleLoginButton}>
            <i className="fa-solid fa-user"></i>
          </button>
          <button className="nav-login-buttons">
            <i className="fa-solid fa-heart" onClick={HandleWishList}></i>
          </button>
          <button className="nav-login-buttons">
            <i className="fas fa-shopping-cart" onClick={HandleCart}></i>
          </button>
        </div>

        <div className="logo">
          <div className="main-logo"> MAEDRIC </div>
          <div className="sub-logo">Gemstones & Jewellery</div>
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className="navcontainer" id="navbar">
          <div
            className={`navelement ${
              location.pathname === "/" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/")}
          >
            {" "}
            Home
          </div>
          <div
            className={`nav-filter-element ${
              location.pathname === "/gemstones" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/gemstones")}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Gemstones
            <div
              className="dropdown-content"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="drop-element">Featured</div>
              <div className="drop-element">Ruby</div>
              <div className="drop-element">Emerald</div>
              <div className="drop-element">Sapphire</div>
              <div className="drop-element">Diamond</div>
            </div>
          </div>
          <div
            className={`nav-filter-element ${
              location.pathname === "/jewellery" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/jewellery")}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Jewellery
            <div
              className="dropdown-content"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="drop-element">Featured</div>
              <div className="drop-element">Rings</div>
              <div className="drop-element">Necklace</div>
              <div className="drop-element">Pendants</div>
              <div className="drop-element">Bangles</div>
            </div>
          </div>

          <div
            className={`navelement ${
              location.pathname === "/education" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/education")}
          >
            {" "}
            Education
          </div>
          <div
            className={`navelement ${
              location.pathname === "/services" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/services")}
          >
            {" "}
            Services
          </div>
          <div
            className={`navelement ${
              location.pathname === "/contact" ? "nav-active" : ""
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            {" "}
            Contact Us
          </div>
        </div>
      </div>
      <div className="emty2"></div>
    </div>
  );
}

export default Nav;
