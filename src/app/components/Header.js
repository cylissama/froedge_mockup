import SocialLinks from './SocialLinks';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        {/* Logo */}
        <a href="/">
          <img src="/froedgelogo.jpeg" alt="Froedge Logo" className="header-logo" />
        </a>
        {/* Social Links */}
        <SocialLinks />
        {/* Phone Number */}
        <div className="header-phone"> 1-888-868-5891</div>
      </div>
      {/* Navigation */}
      <Navigation />
    </header>
  );
}