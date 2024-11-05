/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-restricted-imports */

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LanguageSelect({ selectedLanguage }:{selectedLanguage : string}) {
  const router = useRouter()
  const t = useTranslations('LanguageSelect')
  const locales = ['en', 'de', 'it', 'es', 'pt', 'sv', 'fr']
  const handleSelect = (value: string) => {
    router.push(`/${value}`)
  }

  return (

    <div className="grid w-full items-center gap-4">
      <Label htmlFor="language">
        {t('title')}
      </Label>
      <Select onValueChange={handleSelect}>
        <SelectTrigger
          id="language"
        >
          <SelectValue placeholder={t(`value.${selectedLanguage}`)} />
        </SelectTrigger>
        <SelectContent
          position="popper"
        >
          {locales.map((locale) => (
            <SelectItem value={locale}>
              {t(`value.${locale}`)}
            </SelectItem>

          ))}

        </SelectContent>
      </Select>
    </div>
  )
}
