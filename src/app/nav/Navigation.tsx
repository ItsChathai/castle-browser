
import Icons from "./Icons";


const Navigation = () => {
  return (
    <nav className="left-sidebar">
      <div className="left-sidebar-group">
        <div className="left-sidebar-menu">
          <div className="left-sidebar-menu-items"><div className="left-sidebar-menu-button">{Icons.home} <span>Home</span></div></div>
          <div className="left-sidebar-menu-items"><div className="left-sidebar-menu-button">{Icons.message} <span>Message</span></div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

