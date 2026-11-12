import Image from 'next/image'
import { InterestForm } from './InterestForm'

const videoEmbedUrl = 'https://www.youtube.com/embed/LmhGAHZRF1Q'

const features = [
  {
    title: 'Dedicated infrastructure',
    description: 'Your own VPS and clean IPs, isolated from shared sender risk.',
  },
  {
    title: 'IP warm-up management',
    description: 'A measured ramp plan designed around your sending profile.',
  },
  {
    title: 'Advanced authentication',
    description: 'SPF, DKIM, and DMARC configured to protect your reputation.',
  },
  {
    title: 'Bounce & suppression',
    description: 'Automated controls that keep unhealthy addresses off your lists.',
  },
  {
    title: 'High-speed throughput',
    description: 'Reliable delivery capacity built for sustained mass sending.',
  },
  {
    title: 'Regulatory compliance',
    description: 'Infrastructure aligned with GDPR, CCPA, and CAN-SPAM.',
  },
  {
    title: 'Real-time analytics',
    description: 'A live dashboard for delivery, engagement, and sender health.',
  },
]

const faqs = [
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
    question: 'Does this include transactional emails?',
    answer: 'No, we offer only email marketing.',
  },
]

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title">
              Your dedicated server.
              <br />
              Your clean IPs.
            </h1>
            <p className="hero-lead">
              High-volume email on infrastructure built around you. From{' '}
              <strong>+200k to millions of emails</strong>, we have the infrastructure.
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
              alt="phpList dashboard showing account details, campaign controls, and recent results"
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

      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <h2 id="contact-title">Ready to scale your send?</h2>
            <p>
              Tell us your target volume. We’ll build a dedicated VPS environment locked to your
              specs.
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
            <p>See how phpList helps you build, send, and understand your email campaigns.</p>
          </div>
          <div className="video-frame">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              src={videoEmbedUrl}
              title="How phpList and email marketing work"
            />
          </div>
        </div>
      </section>
      {/* VIDEO SECTION END */}

      <section className="faq section" aria-labelledby="faq-title">
        <div className="shell faq-grid">
          <h2 id="faq-title">Frequently Asked Questions</h2>
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
