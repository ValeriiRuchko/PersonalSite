// importing Link element from react-router in order to not refresh page everytime
import { Link } from "react-router-dom";

// icons
import plantLogo from "/pagelines.svg";

function Header() {
  return (
    <div className="header_container">
      <div className="header_content">
        <div className="header_logo">
          <Link to="/">
            <img src={plantLogo} />
          </Link>
        </div>
        <div className="header_navlinks">
          <Link to="/">About me</Link>
          <Link to="blog">Blog</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
