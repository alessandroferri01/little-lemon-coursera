import logo from "./logo.svg";

function Nav() {
  return (
    <nav className="nav">
      <div className="inner">
        <img src={logo} alt="Logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
