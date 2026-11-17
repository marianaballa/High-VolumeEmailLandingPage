import { FooterSubscribe } from './FooterSubscribe'
import { socialIconPaths } from './socialIcons'

const site = 'https://www.phplist.com'

const contactLinks = ['info@phplist.com', 'sales@phplist.com', 'abuse@phplist.com']

const companyLinks = [
  { label: 'About phpList', href: 'https://www.phplist.org/about', external: true },
  { label: 'Free for Open Source', href: `${site}/freeforopensource` },
  { label: 'Community', href: 'https://discuss.phplist.org/', external: true },
  { label: 'Blog', href: `${site}/blog/`, external: true },
]

const legalLinks = [
  { label: 'Terms & conditions', href: `${site}/terms` },
  { label: 'Anti-spam policy', href: `${site}/spampolicy` },
  { label: 'Privacy policy', href: `${site}/privacy` },
  { label: 'Careers', href: `${site}/careers` },
]

const socialLinks = [
  {
    label: 'phpList on Facebook',
    href: 'https://www.facebook.com/phplist',
    icon: socialIconPaths.facebook,
  },
  {
    label: 'phpList on Mastodon',
    href: 'https://mastodon.social/@phpList',
    icon: socialIconPaths.mastodon,
  },
  { label: 'phpList on Telegram', href: 'https://t.me/phplist', icon: socialIconPaths.telegram },
]

function externalProps(external?: boolean) {
  return external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="shell site-footer-main">
        <div className="site-footer-about">
          <h2>phpList - Open source email marketing</h2>
          <p>
            phpList is an Open Source, UK registered, self-funded and owner-managed company, with 20
            years of history. We are accountable to you: our customers and community, and nobody
            else.
          </p>
          <FooterSubscribe />
        </div>

        <ul className="site-footer-links">
          {companyLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} {...externalProps(link.external)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="site-footer-links">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <ul className="site-footer-links">
          {contactLinks.map((email) => (
            <li key={email}>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="shell site-footer-meta">
        <p className="site-footer-trademark">
          <svg aria-hidden="true" viewBox="0 0 16 16" width="13" height="13">
            <circle cx="8" cy="8" r="8" fill="currentColor" />
            <path d="M8 7v4.5M8 4.5v.5" stroke="#253746" strokeLinecap="round" strokeWidth="1.8" />
          </svg>
          All trademarks are the property of their respective holders.
        </p>
        <ul className="site-footer-social">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a aria-label={link.label} href={link.href} rel="noopener noreferrer" target="_blank">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
                  <path d={link.icon} fill="currentColor" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="site-footer-copyright">
        <div className="shell">
          <p>&copy; phpList Ltd, 2000 - {year}</p>
        </div>
      </div>
    </footer>
  )
}
