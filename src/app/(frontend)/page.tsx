import Image from 'next/image'
import { InterestForm } from './InterestForm'

const videoEmbedUrl = 'https://www.youtube.com/embed/LmhGAHZRF1Q'

const features = [
  {
    title: 'Dedicated infrastructure',
    description: 'Your own email marketing VPS and IPs, so no other sender hurts your reputation.',
  },
  {
    title: 'IP warm-up management',
    description: 'A gradual ramp plan that builds trust with inboxes before full bulk sending.',
  },
  {
    title: 'Advanced authentication',
    description: 'SPF, DKIM, and DMARC set up so your newsletters land in the inbox, not spam.',
  },
  {
    title: 'Bounce & suppression',
    description: 'Automatic list cleaning that keeps your sender reputation high.',
  },
  {
    title: 'High-speed throughput',
    description: 'Send mass email campaigns to millions of subscribers without throttling.',
  },
  {
    title: 'Regulatory compliance',
    description: 'Email marketing infrastructure aligned with GDPR, CCPA, and CAN-SPAM.',
  },
  {
    title: 'Real-time analytics',
    description: 'Track opens, clicks, and bounces to improve every email campaign.',
  },
]

const reasons = [
  {
    title: 'Shared IPs put your deliverability at risk',
    body: 'On shared email marketing platforms, your campaigns go out from the same IP addresses as hundreds of other senders. If one of them sends spam, mailbox providers like Gmail and Outlook can filter everyone on that IP. With a dedicated IP on your own VPS, your email deliverability depends only on your own sending habits.',
  },
  {
    title: 'IP warm-up protects bulk sending from day one',
    body: 'Mailbox providers distrust new IPs that suddenly send hundreds of thousands of emails. IP warm-up gradually increases your daily volume, so providers learn to recognize you as a legitimate sender. We plan and manage that ramp around your list size, so your bulk email reaches the inbox once you hit full volume.',
  },
  {
    title: 'Authentication keeps newsletters out of spam',
    body: 'SPF, DKIM, and DMARC prove to receiving servers that your newsletters really come from your domain. Gmail and Yahoo now require them from bulk senders, and missing or misconfigured records are one of the most common reasons mass email lands in spam. Our engineers configure and test all three for you.',
  },
]

const faqs = [
  {
    question: 'What is bulk email sending?',
    answer:
      'Bulk email sending is delivering one email marketing campaign — such as a newsletter or promotion — to a large list of subscribers at once. The Pro Marketer VPS is built for senders of 200,000 to millions of emails per month, on a dedicated server with private IPs so your deliverability depends only on your own sending.',
  },
  {
    question: 'How do I send bulk emails without landing in spam?',
    answer:
      'Send from a dedicated IP that has been properly warmed up, authenticate your domain with SPF, DKIM, and DMARC, and remove bounced and inactive addresses from your list. The Pro Marketer VPS includes all three: a private IP with a managed warm-up plan, authentication configured by our engineers, and automatic bounce and suppression handling.',
  },
  {
    question: 'How many emails can I send per month?',
    answer:
      'The Pro Marketer VPS is built for 200,000 to millions of emails per month. Tell us your target volume and we will size your dedicated server and IPs to match. If your volume grows, you can upgrade to a larger plan.',
  },
  {
    question: 'Do I need a dedicated IP for email marketing?',
    answer:
      'If you send more than about 100,000 emails per month, a dedicated IP is usually the better choice. It means your sender reputation depends only on your own campaigns, not on other senders sharing the same IP. At lower volumes a shared IP can work, because a dedicated IP needs steady sending to keep a good reputation.',
  },
  {
    question: 'Can I send newsletters with the Pro Marketer VPS?',
    answer:
      'Yes. You can create, schedule, and send email newsletters and marketing campaigns with phpList, manage subscriber lists and segments, and track opens, clicks, and bounces from one dashboard.',
  },
  {
    question: 'How quickly can we start sending at high volume?',
    answer: 'Our engineers can set up your Pro Marketer VPS account within 48 hours.',
  },
  {
    question: 'Can the plan grow beyond our initial volume?',
    answer: 'Yes. Start with the capacity you need today, then you can upgrade to a larger plan.',
  },
  {
    question: "Will you delete our account if we don't renew for some time?",
    answer:
      "We keep Pro Marketer VPS accounts active for only 3 months if you don't renew your plan. You can always export all your contacts and statistics before we delete your account.",
  },
  {
    question: "What's the difference between email marketing and transactional email?",
    answer:
      'Email marketing is sent to many subscribers at once, such as newsletters, promotions, and announcements. Transactional email is sent to one person in response to an action, such as a password reset or an order receipt. The Pro Marketer VPS is built for email marketing and bulk sending.',
  },
  {
    question: 'Does this include transactional emails?',
    answer:
      'No. The Pro Marketer VPS is dedicated to email marketing: newsletters, promotional campaigns, and other bulk sends. Transactional emails such as password resets and order receipts are not included.',
  },
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.phplist.com/#organization',
      name: 'phpList',
      legalName: 'phpList Ltd',
      url: 'https://www.phplist.com/',
      logo: `${siteUrl}/phplist-logo.svg`,
      email: 'sales@phplist.com',
      foundingDate: '2000',
      sameAs: [
        'https://www.facebook.com/phplist',
        'https://mastodon.social/@phpList',
        'https://t.me/phplist',
        'https://www.phplist.org/',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: 'High-Volume Email Marketing & Bulk Email Sending on a Dedicated VPS',
      description:
        'Bulk email sending for email marketing and newsletters at 200K to millions of emails per month on a dedicated VPS with clean private IPs.',
      inLanguage: 'en',
      primaryImageOfPage: `${siteUrl}/phplist-dashboard.png`,
      mainEntity: { '@id': `${siteUrl}/#service` },
      publisher: { '@id': 'https://www.phplist.com/#organization' },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: 'Pro Marketer VPS',
      provider: { '@id': 'https://www.phplist.com/#organization' },
      serviceType: 'Bulk email marketing and newsletter sending',
      description:
        'Dedicated VPS with clean private IPs for high-volume email marketing: IP warm-up, SPF/DKIM/DMARC authentication, bounce and suppression handling, and real-time campaign analytics.',
      image: `${siteUrl}/phplist-dashboard.png`,
      areaServed: 'Worldwide',
      audience: {
        '@type': 'BusinessAudience',
        name: 'Businesses sending 200,000+ marketing emails per month',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pro Marketer VPS features',
        itemListElement: features.map((feature) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: feature.title,
            description: feature.description,
          },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title">
              <span className="hero-eyebrow">Your dedicated server. Your clean IPs.</span>
              Bulk email marketing on your own dedicated server.
            </h1>
            <p className="hero-lead">
              Send newsletters and bulk email marketing campaigns of{' '}
              <strong>200,000 to millions of emails per month</strong> from your own dedicated VPS
              with private IPs, so your deliverability depends only on you.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Talk to sales
              </a>
              <a className="text-link" href="#features-title">
                See what’s included <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="dashboard-screenshot">
            <Image
              alt="phpList email marketing dashboard showing newsletter campaign controls and bulk sending results"
              height={1122}
              priority
              sizes="(max-width: 900px) 94vw, 52vw"
              src="/phplist-dashboard.png"
              width={2048}
            />
          </div>
        </div>
      </section>

      <section className="features section" aria-labelledby="features-title">
        <div className="shell">
          <div className="section-heading">
            <h2 id="features-title">
              Your <strong>Pro Marketer VPS</strong> account
            </h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title} tabIndex={0}>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
            <a className="feature-card feature-cta" href="#contact">
              <div>
                <h3>Built around your needs</h3>
                <span>Discuss your setup →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="reasons section" aria-labelledby="reasons-title">
        <div className="shell">
          <div className="reasons-panel">
            <div className="section-heading reasons-heading">
              <h2 className="reasons-title" id="reasons-title">
                Why high-volume senders choose <strong>dedicated email infrastructure</strong>
              </h2>
              <p>
                When you send hundreds of thousands of marketing emails a month, where and how you
                send matters as much as what you send.
              </p>
            </div>
            <div className="reasons-grid">
              {reasons.map((reason, index) => (
                <article className="reason" key={reason.title}>
                  <span aria-hidden="true" className="reason-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{reason.title}</h3>
                  <p>{reason.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <h2 id="contact-title">Get a dedicated email marketing server</h2>
            <p>
              Tell us your monthly sending volume. We’ll build a dedicated VPS for your bulk email
              and newsletter campaigns, set up to your specs.
            </p>
            <div className="contact-points">
              <span>100% private IP reputation</span>
              <span>Maximum send speeds</span>
              <span>Hands-on technical setup</span>
            </div>
          </div>
          <InterestForm />
        </div>
      </section>

      {/* VIDEO SECTION START — remove through VIDEO SECTION END to delete the embed. */}
      <section className="video-section section" aria-labelledby="video-title">
        <div className="shell video-grid">
          <div className="video-copy">
            <h2 id="video-title">Email marketing with phpList</h2>
            <p>
              See how phpList helps you build, send, and measure newsletters and bulk email
              campaigns.
            </p>
          </div>
          <div className="video-frame">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              src={videoEmbedUrl}
              title="How phpList email marketing and newsletter sending work"
            />
          </div>
        </div>
      </section>
      {/* VIDEO SECTION END */}

      <section className="faq section" aria-labelledby="faq-title">
        <div className="shell faq-grid">
          <h2 id="faq-title">Bulk email marketing FAQ</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} name="faq-accordion" open={index === 0}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
