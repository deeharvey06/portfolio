export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Clifford Harvey</span>
        <span className="footer-built">Built with React &amp; Vite</span>
      </div>
    </footer>
  )
}
