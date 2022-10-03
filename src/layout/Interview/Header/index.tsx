import { Link } from "react-router-dom";
import TimeWatch from "../../../components/Quiz/TimeWatch";
import { Clock } from "../../../data/icons";
import Button from "../../../standard/Button";

const Header = () => {
  return (
    <header className="Header">
      <div className="Interview__header">
        <div className="Header__buttons Header__buttons--left">
          <Link to={"dashboard"}>
            <Button>&nbsp; Go Back &nbsp;</Button>
          </Link>
        </div>
        <div className="Header__buttons Header__buttons--right">
          <Button className="TimeWatch__button">
            <Clock />
            <span className="TimeWatch__time">00:00:00</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
