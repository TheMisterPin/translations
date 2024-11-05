/* eslint-disable no-restricted-imports */

'use client'

import { useLocale, useTranslations } from 'next-intl'
import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import LanguageSelect from '../_components/language-selector'
import FruitCard from '../_components/fruit-card'

export function FruitImage({ fruitKey }: { fruitKey : string }) {
  return (
    <Image
      src={`/images/${fruitKey}.png`}
      alt={fruitKey}
      width="100"
      height="100"
      className="myShadow"
    />
  )
}
export type LanguageImageProps = {
  language: string
  onClick: () => void
}

export function LanguageImage({ language, onClick }: LanguageImageProps) {
  return (
    <Image
      role="button"
      src={`/languages/${language}.png`}
      onClick={onClick}
      alt={language}
      width="100"
      height="100"
      className="myShadow"
    />
  )
}

export default function Home() {
  const locale = useLocale()
  const t = useTranslations('HomePage')
  const i = useTranslations('LanguageSelect')
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const fruitKeys = [
    'apple',
    'cherry',
    'grape',
    'lemon',
    'pineapple',
    'pear',
    'tangerine',
    'zucchini',
  ]
  return (
    <div className={cn('bg-neutral-200 min-h-screen py-8 grid place-items-center grid-cols-4', isClicked && 'relative')}>
      <div className={cn('shadow-lg  w-1/2 rounded-lg p-6 bg-white text-neutral-800 col-span-2 col-start-2', isClicked && 'relative')}>
        <div className="flex gap-x-10 items-center w-full justify-around">
          <h1 className="text-7xl text-center text-balance font-extrabold tracking-wider">
            {t('title')}
          </h1>
          <LanguageImage
            language={locale}
            onClick={handleClick}
          />
        </div>

        {isClicked ? <LanguageSelect selectedLanguage={locale} /> : (
          <p className="text-xl text-center text-balance  ">
            {' '}
            {i('instructions')}
          </p>
        )}

      </div>
      <ul
        className="mt-8 col-span-4 row-start-2 grid grid-cols-2 gap-10 p-5 rounded-lg shadow-xl bg-neutral-100"

      >
        {fruitKeys.map((key) => (

          <FruitCard
            content={t(`objects.${key}`)}
            key={key}
          >
            <FruitImage fruitKey={key} />
          </FruitCard>

        ))}
      </ul>
    </div>
  )
}
