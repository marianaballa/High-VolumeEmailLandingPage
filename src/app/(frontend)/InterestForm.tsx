'use client'

import { useActionState, useEffect, useRef } from 'react'
import { initialInterestFormState, submitInterest } from './actions'

export function InterestForm() {
  const [state, formAction, pending] = useActionState(submitInterest, initialInterestFormState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') formRef.current?.reset()
  }, [state.status])

  return (
    <form ref={formRef} action={formAction} className="interest-form">
      <div className="field-grid">
        <label className="field">
          <span>Name</span>
          <input
            aria-describedby={state.errors?.name ? 'name-error' : undefined}
            aria-invalid={Boolean(state.errors?.name)}
            autoComplete="name"
            name="name"
            placeholder="Your name"
            required
          />
          {state.errors?.name && <small id="name-error">{state.errors.name}</small>}
        </label>
        <label className="field">
          <span>Work email</span>
          <input
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
            aria-invalid={Boolean(state.errors?.email)}
            autoComplete="email"
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
          {state.errors?.email && <small id="email-error">{state.errors.email}</small>}
        </label>
        <label className="field">
          <span>Company</span>
          <input autoComplete="organization" name="company" placeholder="Company name" />
        </label>
        <label className="field">
          <span>Monthly volume</span>
          <input
            aria-describedby={state.errors?.monthlyVolume ? 'volume-error' : undefined}
            aria-invalid={Boolean(state.errors?.monthlyVolume)}
            inputMode="numeric"
            min={200001}
            name="monthlyVolume"
            placeholder="More than 200,000"
            required
            step={1}
            type="number"
          />
          {state.errors?.monthlyVolume && (
            <small id="volume-error">{state.errors.monthlyVolume}</small>
          )}
        </label>
      </div>
      <label className="field">
        <span>What are you looking to send?</span>
        <textarea
          name="message"
          placeholder="Tell us a little about your goals, timing, or current setup."
          rows={3}
        />
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input autoComplete="off" name="website" tabIndex={-1} />
      </label>
      <div className="form-footer">
        <button className="button button-dark" disabled={pending} type="submit">
          {pending ? 'Sending…' : 'Submit'}
        </button>
        {state.message && (
          <p aria-live="polite" className={`form-status ${state.status}`} role="status">
            {state.message}
          </p>
        )}
      </div>
    </form>
  )
}
