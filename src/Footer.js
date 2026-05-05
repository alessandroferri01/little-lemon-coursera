import logo from "./logo.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <img src={logo} alt="Logo" />

        <div className="footer-col">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>123 Lemon St, Chicago</p>
          <p>+1 234 567 890</p>
          <p>info@littlelemon.com</p>
        </div>

        <div className="footer-col">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
