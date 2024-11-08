import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
const locales = ['en', 'de', 'it', 'es', 'pt', 'sv', 'fr']

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
