import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        <li>
          <Link href="/products">Products / Services</Link>
          <ul className="dropdown">
            <li><Link href="/products/machining">Machining</Link></li>
            <li><Link href="/products/supply">Parts & Supply</Link></li>
            <li><Link href="/products/lumber">Lumber Handling</Link></li>
            <li><Link href="/products/service">Service & Repair</Link></li>
          </ul>
        </li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}