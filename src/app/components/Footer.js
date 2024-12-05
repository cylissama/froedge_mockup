export default function Footer() {
    return (
      <footer style={footerStyle}>
        <p>© 2024 MyCompany. All rights reserved.</p>
        <p>Contact us at: info@mycompany.com</p>
      </footer>
    );
  }
  
  const footerStyle = {
    textAlign: 'center',
    padding: '1rem 0',
    backgroundColor: '#f4f4f4',
    marginTop: '2rem',
  };