export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="CommunityHub home">
        <span className="brand-mark">c.</span>
        <span>Community<span className="brand-light">Hub</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#community">Discover</a>
        <a href="#create-post">Share a story</a>
        <a href="#practice">Practice lab</a>
      </nav>
      <a className="button button-outline button-small" href="#practice">
        Sign in <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
