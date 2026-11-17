'use client'

import { useState, type FormEvent } from 'react'

// Same endpoint and fields the phplist.com footer form posts to.
const subscribeUrl = 'https://news.hosted.phplist.com/lists/?p=asubscribe&id=2'

export function FooterSubscribe() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    try {
      // The list server does not send CORS headers, so the response is opaque;
      // a resolved request means the subscription was delivered.
      await fetch(subscribeUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>),
      })
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="site-footer-subscribe" onSubmit={handleSubmit}>
      <div className="site-footer-subscribe-row">
        <label className="sr-only" htmlFor="footer-subscribe-email">
          Email address
        </label>
        <input
          autoComplete="email"
          id="footer-subscribe-email"
          name="email"
          placeholder="Email address"
          required
          type="email"
        />
        <input name="htmlemail" type="hidden" value="1" />
        <input name="list[11]" type="hidden" value="signup" />
        <input name="subscribe" type="hidden" value="subscribe" />
        <button disabled={status === 'sending'} type="submit">
          {status === 'sending' ? 'Sending' : 'Subscribe'}
        </button>
      </div>
      <p aria-live="polite" className="site-footer-subscribe-status">
        {status === 'done' &&
          'Thank you for your registration. Please check your email to confirm.'}
        {status === 'error' && 'Sorry, we were unable to process your subscription.'}
      </p>
    </form>
  )
}
