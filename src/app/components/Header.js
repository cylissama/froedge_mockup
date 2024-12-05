import Link from "next/link";

export default function Header() {
  return (
    <header style={headerStyle}>
      {/* Top Row: Logo and Contact */}
      <div style={topRowStyle}>
        <div style={logoStyle}>
          <img
            src="/froedgelogo.jpeg" // Replace with your logo file path
            alt="Froedge Logo"
            style={{ height: "50px" }} // Adjust as needed
          />
        </div>
        <div style={contactStyle}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <img
              src="/facebook.svg" // Replace with Facebook icon file path
              alt="Facebook"
              style={{ height: "24px" }}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <img
              src="/linkedin.svg" // Replace with LinkedIn icon file path
              alt="LinkedIn"
              style={{ height: "24px" }}
            />
          </a>
          <span style={phoneNumberStyle}>1-888-868-5891</span>
        </div>
      </div>

      {/* Bottom Row: Navigation Menu */}
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link href="/">Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/about">About</Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/careers">Careers</Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/products-services">Products / Services</Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Styles
const headerStyle = {
  borderBottom: "1px solid #ddd",
  marginBottom: "20px",
};

const topRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#fff",
};

const logoStyle = {
  flex: 1,
};

const contactStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const iconStyle = {
  display: "inline-block",
};

const phoneNumberStyle = {
  fontSize: "16px",
  fontWeight: "bold",
};

const navStyle = {
  backgroundColor: "#f8f8f8",
  padding: "10px 0",
};

const navListStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  fontSize: "16px",
};