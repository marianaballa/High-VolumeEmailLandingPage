import Image from 'next/image'
import { asset } from '@/lib/site'

const site = 'https://www.phplist.com'

const navLinks = [
  { label: 'Home', href: `${site}/` },
  { label: 'Pricing', href: `${site}/pricing` },
]

const blogLinks = [
  { label: 'Blog', href: `${site}/blog` },
  { label: 'Knowledgebase', href: `${site}/knowledgebase` },
]

function NavItems() {
  return (
    <ul className="site-nav-list">
      {navLinks.map((link) => (
        <li key={link.label}>
          <a className="site-nav-link" href={link.href}>
            {link.label}
          </a>
        </li>
      ))}
      <li className="site-nav-dropdown">
        <button aria-haspopup="true" className="site-nav-link site-nav-toggle" type="button">
          Blog
          <svg aria-hidden="true" viewBox="0 0 10 6" width="10" height="6">
            <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
        <div className="site-nav-menu">
          {blogLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </li>
      <li>
        <a className="site-nav-link site-nav-register" href={`${site}/register`}>
          Register
        </a>
      </li>
      <li>
        <a className="site-nav-link" href={`${site}/login`}>
          Login
        </a>
      </li>
    </ul>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <a aria-label="phpList home" className="site-logo" href={`${site}/`}>
          <Image
            alt="phpList logo"
            height={50}
            priority
            src={asset('/phplist-logo.svg')}
            width={160}
            unoptimized
          />
        </a>

        <nav aria-label="Main" className="site-nav-desktop">
          <NavItems />
        </nav>

        <details className="site-nav-mobile">
          <summary aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Main mobile" className="site-nav-mobile-panel">
            <NavItems />
          </nav>
        </details>
      </div>
    </header>
  )
}
