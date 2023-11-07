import {useEffect} from 'react'
import {detect, fromUrl, fromStorage, fromNavigator} from '@lingui/detect-locale'
import {i18n} from '@lingui/core'

export type Locales = keyof typeof locales

const localStorageKey = 'testing-it-locale'
export const locales = {
    en: 'English',
    de: 'Deutsch',
};
export const defaultLocale: Locales = 'en'

export const dynamicActivate = async (locale: Locales | string) => {
    window.localStorage.setItem(localStorageKey, locale)
    const { messages } = await import(`../locales/${locale}.po`)
    i18n.load(locale, messages)
    i18n.activate(locale)
}

const isLocaleValid = (locale: string | null) => `${locale}` in locales

// returns locale
export const getLocale = (): Locales => {
    const detectedLocale = detect(
        fromUrl('lang'),
        fromStorage(localStorageKey),
        fromNavigator(),
        () => defaultLocale,
    );
    return isLocaleValid(detectedLocale) ? detectedLocale as Locales : defaultLocale
}

export const useTranslation = () => useEffect(() => { dynamicActivate(getLocale()).catch(console.log) }, [])
