'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

export type InterestFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Partial<Record<'name' | 'email' | 'monthlyVolume', string>>
}

export const initialInterestFormState: InterestFormState = {
  status: 'idle',
  message: '',
}

const getText = (formData: FormData, field: string, maxLength: number) => {
  const value = formData.get(field)
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export async function submitInterest(
  _previousState: InterestFormState,
  formData: FormData,
): Promise<InterestFormState> {
  if (getText(formData, 'website', 200)) {
    return { status: 'success', message: 'Thanks — we’ll be in touch shortly.' }
  }

  const name = getText(formData, 'name', 100)
  const email = getText(formData, 'email', 200).toLowerCase()
  const company = getText(formData, 'company', 120)
  const monthlyVolumeRaw = getText(formData, 'monthlyVolume', 30)
  const monthlyVolume = Number(monthlyVolumeRaw)
  const message = getText(formData, 'message', 1200)
  const errors: InterestFormState['errors'] = {}

  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid work email.'
  }
  if (!Number.isInteger(monthlyVolume) || monthlyVolume <= 200000) {
    errors.monthlyVolume = 'Enter a whole number greater than 200,000.'
  }

  if (Object.keys(errors).length) {
    return {
      status: 'error',
      message: 'Check the highlighted fields and try again.',
      errors,
    }
  }

  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'interest-submissions',
      data: {
        name,
        email,
        company: company || undefined,
        monthlyVolume,
        message: message || undefined,
        status: 'new',
      },
      draft: false,
      overrideAccess: false,
    })

    return {
      status: 'success',
      message:
        'While we work on an offer for your Pro Marketer VPS account, register your phpList account and start exploring!',
    }
  } catch {
    return {
      status: 'error',
      message: 'We couldn’t send your request. Please try again in a moment.',
    }
  }
}
