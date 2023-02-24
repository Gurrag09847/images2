import { FaCompass, FaUser, FaPlus, FaSearch } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu">
        <div className="items">
          <div className="item">
            <FaCompass />
          </div>

          <div className="item ">
            <FaSearch />
          </div>

          <div className="item">
            <FaUser />
          </div>

          <div className="item">
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
}
