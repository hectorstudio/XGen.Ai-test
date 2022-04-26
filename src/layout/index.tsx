import Sidebar from "./Sidebar";
import "./layout.css";
import Topbar from "./Topbar";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="page-content">
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
