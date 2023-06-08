import { default as ReactLogo } from "../../public/react-icon.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-title">
        <img src={ReactLogo}></img>
        <span>ReactFacts</span>
      </div>

      <p className="nav-description">React Course - Project 1</p>
    </nav>
  );
}
