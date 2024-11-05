/* eslint-disable camelcase */
import { cn } from '@/lib/utils'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { Sawarabi_Mincho } from 'next/font/google'
import React from 'react'

const inter = Sawarabi_Mincho({ subsets: ['latin'], weight: '400' })

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params: { locale } } : LocaleLayoutProps) {
  unstable_setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={cn(
          'min-h-screen relative antialiased',
          inter.className,
        )}
      >

        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
