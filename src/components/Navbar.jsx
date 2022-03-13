import "./Navbar.css";
import icon from "../public/icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-icon">
        <img src={icon} alt="" />
      </div>
      <div className="titles">
        <p>Shop</p>
        <p>How it works</p>
        <p>Pay in 4</p>
        <p>The shopping app</p>
        <p>Help</p>
      </div>
      <div className="right-btns">
        <button>Login</button>
        <button>Get the app</button>
      </div>
    </div>
  );
}

export default Navbar;
