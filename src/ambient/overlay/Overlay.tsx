import { useLocation, useNavigate } from "react-router-dom";
import { CornerElement } from "./CornerElement";
import "./Overlay.scss";

export const Overlay = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const linkClickHandler = () => {
    if (location.pathname === "/home") {
      window.location.href = "https://github.com/DawnSheedy/dawn-website";
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="app-overlay-container">
      <CornerElement top left onClick={linkClickHandler}>
        {location.pathname !== "/home"
          ? `GO_HOME`
          : `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`}
      </CornerElement>
      <CornerElement bottom right>🏳️‍⚧️🏳️‍🌈</CornerElement>
    </div>
  );
};
