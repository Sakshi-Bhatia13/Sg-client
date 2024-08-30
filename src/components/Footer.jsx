import "../css/footer.css";

function Footer() {
  const handlelink = (path) => {
    window.location.href = path;
  };

  return (
    <div className="footer">
      <div className="footer-left">
        <div className="logo">
          <div className="main-logo" onClick={() => handlelink("/home")}>
            MAEDRIC
          </div>
          <div className="sub-logo" onClick={() => handlelink("/gemstones")}>
            Gemstones & Jewellery
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <i className="fa fa-map-marker"></i>
            <p><span>Singapore</span></p>
          </div>
          <div className="footer-link">
            <i className="fa fa-phone"></i>
            <p>+65 3343 3698</p>
          </div>
          <div className="footer-link">
            <i className="fa fa-envelope"></i>
            <p>info@maedric.com</p>
          </div>
        </div>
        <p className="footer-company-name">Maedric © 2015</p>
      </div>
      <div className="footer-center">
        <p className="footer-company-about">
          <span>About the company</span>
          MAEDRIC specialises in sourcing precious coloured gemstones. Each and every piece is a unique product of nature. They are to some, regarded as investments one can wear, and others, an expression of beauty and class.
        </p>
        <div className="footer-icons">
          <a href="#" className="footer-icon"><i className="fa fa-facebook"></i></a>
          <a href="#" className="footer-icon"><i className="fa fa-twitter"></i></a>
          <a href="#" className="footer-icon"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-right">
        <h2 className="useful-links">Useful Links</h2>
        <a href="/" className="link-1">Home</a>
        <a href="/education" className="link-1">Blog</a>
        <a href="/checkout" className="link-1">Checkout</a>
        <a href="/" className="link-1">About</a>
        <a href="/contact" className="link-1">Faq</a>
        <a href="/contact" className="link-1">Contact</a>
      </div>
    </div>
  );
}

export default Footer;
