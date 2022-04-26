import Navigation from "../Navigation";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="logo">Platform X</div>
      <Navigation />
    </div>
  );
};

export default Sidebar;
