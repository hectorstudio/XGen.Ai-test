import classNames from 'classnames';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

const NavItem = ({ title, url, active, index }: { title: string, url: string, index: number, active?: boolean }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  }

  return (
    <div className={classNames("nav-item", { "active-item": active })} onClick={handleClick}>
      <div className="nav-index">{index}</div>
      <span>{title}</span>
    </div>
  )
}

const Navigation = () => {
  const location = useLocation();

  return <div className="navigation">
    <NavItem index={1} title="Page 1" url="/" active={location.pathname === "/"} />
    <NavItem index={2} title="Page 2" url="/page2" active={location.pathname === "/page2"} />
    <NavItem index={3} title="Page 3" url="/page3" active={location.pathname === "/page3"} />
  </div>;
};

export default Navigation;
