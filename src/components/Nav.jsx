import { useNavigate } from "react-router-dom";
import logo from "../images/crm-logo.png";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <div
          title="Add New Ticket"
          className="icon"
          onClick={() => navigate("/ticket")}
        >
          ➕
        </div>
        <div
          title="Go to Dashboard"
          className="icon"
          onClick={() => navigate("/")}
        >
          🔙
        </div>
      </div>
    </nav>
  );
}

export default Nav;
