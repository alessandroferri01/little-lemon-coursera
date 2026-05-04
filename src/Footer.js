import logo from "./logo.svg"

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <div className="navigation-footer">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="contact-footer">
        <p>Contact us:</p>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <div className="social-footer">
        <p>Follow us:</p>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
