import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul style={navListStyle}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
  padding: 0,
  margin: 0,
};